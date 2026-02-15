"use client";

import React, { useState } from "react";
import { useIntl } from "react-intl";

import Section from "../../../../../layout/section";

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
          <Input value={contact} onChange={(e) => setContact(e.target.value)} />
        </InputWithLabel>

        <InputWithLabel
          label={formatMessage({ id: "products.request_form.details.label" })}
          id="details"
          hint=""
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

      {isSuccess && (
        <Notification
          message={formatMessage({ id: "products.form_success.title" })}
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
