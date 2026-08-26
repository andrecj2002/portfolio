"use client";

import React, { useCallback } from "react";
import { Input, Textarea, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";

import { ContactFormProps } from "@/components/contact/types";
import { useContactForm } from "@/hooks/use-contact-form";
import { SuccessMessage } from "@/components/contact/contact-form/success-message";
import { useLocale } from "@/hooks/use-locale";

export const ContactForm: React.FC<ContactFormProps> = ({
  onSubmit,
  isSubmitting,
  isSuccess,
  onReset,
}) => {
  const { t } = useLocale();
  const {
    formData,
    errors,
    isValid,
    handleInputChange,
    handleSubmit,
    resetForm,
    validateField,
  } = useContactForm();

  const handleFormSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      onSubmit(formData); // Pass formData directly to the onSubmit prop
    },
    [formData, onSubmit],
  );

  const handleReset = useCallback(() => {
    resetForm();
    onReset();
  }, [resetForm, onReset]);

  const handleInputBlur = useCallback(
    (field: keyof typeof formData, value: string) => {
      validateField(field, value);
    },
    [validateField],
  );

  if (isSuccess) {
    return (
      <AnimatePresence mode="wait">
        <SuccessMessage onReset={handleReset} />
      </AnimatePresence>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.form
        noValidate
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
        exit={{ opacity: 0, y: -20 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        onSubmit={handleFormSubmit}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            isRequired
            errorMessage={errors.name}
            isInvalid={!!errors.name}
            label={t.contact.name}
            name="name"
            placeholder={t.contact.placeholders.name}
            startContent={<Icon icon="lucide:user" />}
            value={formData.name}
            variant="bordered"
            onBlur={() => handleInputBlur("name", formData.name)}
            onValueChange={(value) => handleInputChange("name", value)}
          />

          <Input
            isRequired
            errorMessage={errors.email}
            isInvalid={!!errors.email}
            label={t.contact.email}
            name="email"
            placeholder={t.contact.placeholders.email}
            startContent={<Icon icon="lucide:mail" />}
            type="email"
            value={formData.email}
            variant="bordered"
            onBlur={() => handleInputBlur("email", formData.email)}
            onValueChange={(value) => handleInputChange("email", value)}
          />
        </div>

        <Input
          isRequired
          errorMessage={errors.subject}
          isInvalid={!!errors.subject}
          label={t.contact.subject}
          name="subject"
          placeholder={t.contact.placeholders.subject}
          startContent={<Icon icon="lucide:briefcase" />}
          value={formData.subject}
          variant="bordered"
          onBlur={() => handleInputBlur("subject", formData.subject)}
          onValueChange={(value) => handleInputChange("subject", value)}
        />

        <Textarea
          isRequired
          errorMessage={errors.message}
          isInvalid={!!errors.message}
          label={t.contact.message}
          maxRows={8}
          minRows={4}
          name="message"
          placeholder={t.contact.placeholders.message}
          value={formData.message}
          variant="bordered"
          onBlur={() => handleInputBlur("message", formData.message)}
          onValueChange={(value) => handleInputChange("message", value)}
        />

        <div className="flex flex-col gap-4">
          <Button
            aria-label={t.contact.sending}
            className="w-full h-14 border border-foreground bg-transparent text-base font-medium text-foreground shadow-none transition-colors hover:bg-white hover:!text-black dark:border-white dark:text-white"
            isDisabled={!isValid || isSubmitting}
            isLoading={isSubmitting}
            size="lg"
            startContent={
              !isSubmitting && (
                <Icon className="flex-shrink-0 text-lg" icon="lucide:send" />
              )
            }
            type="submit"
            variant="bordered"
          >
            {isSubmitting ? t.contact.sending : t.contact.send}
          </Button>

          <Button
            aria-label={t.contact.reset}
            className="w-full h-14 border border-foreground bg-transparent text-base text-foreground transition-colors hover:bg-white hover:!text-black dark:border-white dark:text-white"
            color="default"
            isDisabled={isSubmitting}
            size="lg"
            startContent={
              <Icon
                className="flex-shrink-0 text-lg"
                icon="lucide:refresh-cw"
              />
            }
            variant="bordered"
            onPress={resetForm}
          >
            {t.contact.reset}
          </Button>
        </div>
      </motion.form>
    </AnimatePresence>
  );
};
