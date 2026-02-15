"use client";

import React, { useState } from "react";
import { useIntl } from "react-intl";

import Section from "../../../../../layout/section";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { InputWithLabel } from "@/components/ui/input-with-label";
import { Button } from "@/components/ui/button";
import { apiRequest } from "@/l18n/request";
import CheckboxGroup, { OptionType } from "@/components/ui/check-box-group";
import RadioGroup from "@/components/ui/radio";
import Notification from "@/components/ui/notification";

import styles from "./styles.module.css";
import ThankYouScreen from "../thank-you-screen";

const USAGE_SOURCES: OptionType[] = [
  // Ozon, Wildberries, Яндекс.Маркет, Lamoda, Соцсети, Реклама (VK/Яндекс.Директ), Сайт, Другое.
  { labelKey: "products.request_form.source.item.ozon", value: "ozon" },
  {
    labelKey: "products.request_form.source.item.wildberries",
    value: "wildberries",
  },
  {
    labelKey: "products.request_form.source.item.yandex",
    value: "yandex.market",
  },
  { labelKey: "products.request_form.source.item.lamoda", value: "lamoda" },
  {
    labelKey: "products.request_form.source.item.social_networks",
    value: "social_networks",
  },
  { labelKey: "products.request_form.source.item.adv", value: "adv" },
  { labelKey: "products.request_form.source.item.site", value: "site" },
  { labelKey: "products.request_form.source.item.other", value: "other" },
];

const COUNT: OptionType[] = [
  { label: "1–3", value: "1-3" },
  { label: "4–6", value: "4-6" },
  { label: "7–10", value: "7-10" },
  { labelKey: "products.request_form.count.items.idk", value: "?" },
];

const TIME: OptionType[] = [
  { labelKey: "products.request_form.time.items.urgent", value: "urgent" },
  {
    labelKey: "products.request_form.time.items.not_urgent",
    value: "not_urgent",
  },
];

const MODEL: OptionType[] = [
  { labelKey: "products.request_form.has_model.items.yes", value: "yes" },
  { labelKey: "products.request_form.has_model.items.no", value: "no" },
  { labelKey: "products.request_form.has_model.items.idk", value: "?" },
];

export const Form: React.FC<{ type: "ii_photo_common" | "ii_model" }> = ({
  type,
}) => {
  const { formatMessage } = useIntl();

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [source, setSource] = useState<string[]>([]);
  const [count, setCount] = useState(COUNT[0].value);
  const [details, setDetails] = useState("");
  const [time, setTime] = useState(TIME[1].value);
  const [hasModel, setHasModel] = useState(MODEL[1].value);

  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendForm = async () => {
    const formData = new FormData();

    formData.append("type", type);
    formData.append("name", name);
    formData.append("contact", contact);
    formData.append("source", source.join(","));
    formData.append("count", count);
    formData.append("details", details);
    formData.append("time", time);
    formData.append("has_model", hasModel);

    const fileInput = document.getElementById("fileInput"); // Assuming you have an input with id 'fileInput'
    const files = (fileInput as any)?.files || []; // eslint-disable-line @typescript-eslint/no-explicit-any

    if (files.length != 0) {
      const imageFile = files[0]; // Get the first selected file
      formData.append("file", imageFile);

      if (imageFile?.size > 5 * 1024 * 1024) {
        setError("Размер файла не должен превышать 5 МБ");
        return;
      }
    }

    setIsLoading(true);

    await apiRequest<{
      data: {
        id: string;
      };
    }>("/api/email", {
      method: "POST",
      data: formData,
    });

    setIsSuccess(true);
    setIsLoading(false);

    setName("");
    setContact("");
    setDetails("");
    (fileInput as any).value = ""; // eslint-disable-line @typescript-eslint/no-explicit-any
  };

  return (
    <>
      {isSuccess && <ThankYouScreen onClose={() => setIsSuccess(false)} />}
      <Section
        title={formatMessage({ id: "products.request_form.title" })}
        text={formatMessage({ id: "products.request_form.text" })}
        side="left"
        isGray
        id="contact_form"
      >
        <div className={styles.sections}>
          <InputWithLabel
            label={formatMessage({ id: "products.request_form.name.label" })}
            id="name"
          >
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </InputWithLabel>

          <InputWithLabel
            label={formatMessage({ id: "products.request_form.contact.label" })}
            id="contact"
            hint={formatMessage({ id: "products.request_form.contact.hint" })}
          >
            <Input
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </InputWithLabel>

          <InputWithLabel
            label={formatMessage({ id: "products.request_form.file.label" })}
            id="file"
            hint={formatMessage({ id: "products.request_form.file.hint" })}
          >
            <Input type="file" id="fileInput" accept="image/*" />
          </InputWithLabel>

          <InputWithLabel
            label={formatMessage({ id: "products.request_form.source.label" })}
            id="source"
            hint={formatMessage({ id: "products.request_form.source.hint" })}
          >
            <CheckboxGroup
              options={USAGE_SOURCES}
              defaultSelected={source}
              onChange={(value) => setSource(value)}
            />
          </InputWithLabel>

          {type === "ii_photo_common" && (
            <InputWithLabel
              label={formatMessage({
                id: "products.request_form.has_model.label",
              })}
              id="has_model"
              hint=""
            >
              <RadioGroup
                name="has_model"
                options={MODEL}
                defaultValue={hasModel}
                onChange={(value) => setHasModel(value)}
              />
            </InputWithLabel>
          )}

          <InputWithLabel
            label={formatMessage({ id: "products.request_form.count.label" })}
            id="count"
          >
            <RadioGroup
              name="count"
              options={COUNT}
              defaultValue={count}
              onChange={(value) => setCount(value)}
            />
          </InputWithLabel>

          <InputWithLabel
            label={formatMessage({ id: "products.request_form.time.label" })}
            id="time"
            hint={formatMessage({ id: "products.request_form.time.hint" })}
          >
            <RadioGroup
              name="time"
              options={TIME}
              defaultValue={time}
              onChange={(value) => setTime(value)}
            />
          </InputWithLabel>

          <InputWithLabel
            label={formatMessage({ id: "products.request_form.details.label" })}
            id="details"
            hint={
              <div>
                <strong>
                  {formatMessage({ id: "products.request_form.details.hint1" })}
                </strong>

                <ul className={styles.hintList}>
                  <li>
                    {formatMessage({
                      id: "products.request_form.details.hint2",
                    })}
                  </li>
                  <li>
                    {formatMessage({
                      id: "products.request_form.details.hint3",
                    })}
                  </li>
                  <li>
                    {formatMessage({
                      id: "products.request_form.details.hint4",
                    })}
                  </li>
                </ul>
              </div>
            }
          >
            <Textarea
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            />
          </InputWithLabel>

          <div className={styles.buttonBox}>
            <Button
              onClick={sendForm}
              disabled={name === "" || contact === ""}
              loading={isLoading}
            >
              {formatMessage({ id: "products.request_form.send" })}
            </Button>
          </div>
        </div>

        {/* {isSuccess && (
        <Notification
          message="Форма успешно отпралена!"
          duration={3000}
          onClose={() => setIsSuccess(false)}
        />
      )} */}

        {error && (
          <Notification
            message={error}
            type="error"
            duration={3000}
            onClose={() => setError(null)}
          />
        )}
      </Section>
    </>
  );
};

export default Form;
