"use client";

import React, { useState } from "react";
import { useIntl } from "react-intl";

import Section from "../../../../sections/section";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { InputWithLabel } from "@/components/ui/input-with-label";
import { Button } from "@/components/ui/button";
import { apiRequest } from "@/l18n/request";
import CheckboxGroup from "@/components/ui/check-box-group";
import RadioGroup from "@/components/ui/radio";
import Notification from "@/components/ui/notification";

import styles from "./styles.module.css";

const USAGE_SOURCES = [
  // Ozon, Wildberries, Яндекс.Маркет, Lamoda, Соцсети, Реклама (VK/Яндекс.Директ), Сайт, Другое.
  { label: "Ozon", value: "ozon" },
  { label: "Wildberries", value: "wildberries" },
  { label: "Яндекс.Маркет", value: "yandex.market" },
  { label: "Lamoda", value: "lamoda" },
  { label: "Соцсети", value: "social_networks" },
  { label: "Печатная реклама", value: "adv" },
  { label: "Сайт", value: "site" },
  { label: "Другое", value: "other" },
];

const COUNT = [
  { label: "1–3", value: "1-3" },
  { label: "4–6", value: "4-6" },
  { label: "7–10", value: "7-10" },
  { label: "Пока не знаю — подскажите", value: "?" },
];

const TIME = [
  { label: "Нужно срочно (1-2 дня)*", value: "urgent" },
  { label: "Не срочно (3-5 дней)", value: "not_urgent" },
];

const MODEL = [
  { label: "Да", value: "yes" },
  { label: "Нет", value: "no" },
];

export const Contact: React.FC = () => {
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

    formData.append("type", 'photo_creation'); 
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
    <Section
      title={formatMessage({ id: "products.contact.title" })}
      size="720"
      isGray
      id="contact_form"
    >
      <div className={styles.sections}>
        <InputWithLabel label="Как Вас зовут" id="name">
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </InputWithLabel>

        <InputWithLabel
          label="Как с Вами связаться"
          id="contact"
          hint="Телефон: WhatsApp/Telegram или Email"
        >
          <Input value={contact} onChange={(e) => setContact(e.target.value)} />
        </InputWithLabel>

        <InputWithLabel
          label="Прикрепите фото товара"
          id="file"
          hint="Допустимые форматы: JPG, PNG. Размер не более 5 МБ"
        >
          <Input type="file" id="fileInput" accept="image/*" />
        </InputWithLabel>

        <InputWithLabel
          label="Где будете использовать картинки?"
          id="source"
          hint="Можно выбрать несколько"
        >
          <CheckboxGroup
            options={USAGE_SOURCES}
            defaultSelected={source}
            onChange={(value) => setSource(value)}
          />
        </InputWithLabel>

        <InputWithLabel
          label="Нужна ли демонстрация на ИИ модели?"
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

        <InputWithLabel label="Сколько картинок хотите сейчас?" id="count">
          <RadioGroup
            name="count"
            options={COUNT}
            defaultValue={count}
            onChange={(value) => setCount(value)}
          />
        </InputWithLabel>

        <InputWithLabel
          label="Срок?"
          id="time"
          hint="* Срочный заказ: +30% к стоимости"
        >
          <RadioGroup
            name="time"
            options={TIME}
            defaultValue={time}
            onChange={(value) => setTime(value)}
          />
        </InputWithLabel>

        <InputWithLabel
          label="Детали (по желанию)"
          id="details"
          hint={
            <div>
              <strong>Любые пожелания словами</strong>

              <ul className={styles.hintList}>
                <li>
                  Какой кадр по настроению? (Спокойный дневной,
                  Сумерки/атмосферный, Яркий/рекламный глянец)
                </li>
                <li>
                  На каком фоне/в какой сцене показать товар? (Песок, Камни,
                  Вода, Мрамор, Дерево, Бетон, Чистый белый фон, С участием
                  людей, Другое.)
                </li>
                <li>Важные нюансы</li>
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
            Отправить
          </Button>
        </div>
      </div>

      {isSuccess && (
        <Notification
          message="Форма успешно отпралена!"
          duration={3000}
          onClose={() => setIsSuccess(false)}
        />
      )}

      {error && (
        <Notification
          message={error}
          type="error"
          duration={3000}
          onClose={() => setError(null)}
        />
      )}
    </Section>
  );
};

export default Contact;
