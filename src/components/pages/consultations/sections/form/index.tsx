"use client";

import React, { useState } from "react";
import { useIntl } from "react-intl";

import Section from "../../../../sections/section";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { InputWithLabel } from "@/components/ui/input-with-label";
import { Button } from "@/components/ui/button";
import { apiRequest } from "@/l18n/request";
import Notification from "@/components/ui/notification";

import styles from "./styles.module.css";

export const Form: React.FC = () => {
  const { formatMessage } = useIntl();

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [details, setDetails] = useState("");

  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendForm = async () => {
    const formData = new FormData();
    formData.append("type", "consultation");
    formData.append("name", name);
    formData.append("contact", contact);
    formData.append("details", details);

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
    // (fileInput as any).value = ""; // eslint-disable-line @typescript-eslint/no-explicit-any
  };

  return (
    <Section
      title={formatMessage({ id: "consultations.form.title" })}
      side="left"
      // size="720"
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

        <InputWithLabel label="Комментарий" id="details" hint="">
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

export default Form;
