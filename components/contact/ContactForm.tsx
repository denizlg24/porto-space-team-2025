"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { sendContact } from "@/app/actions/sendContact";
import { toast } from "sonner";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Loader2Icon } from "lucide-react";

export function ContactForm() {
  const t = useTranslations("common");
  const [isLoading, setLoading] = useState(false);
  const FormSchema = z.object({
    name: z.string().min(2, {
      message: t("contact-name-error"),
    }),
    company: z.string(),
    email: z.string().email({ message: t("contact-email-error") }),
    subject: z.string().nonempty({ message: t("contact-subject-error") }),
    message: z
      .string()
      .min(2, { message: t("contact-message-small-error") })
      .max(500, { message: t("contact-message-long-error") }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setLoading(true);
    const success = await sendContact(data);
    if (success) {
      toast.success(t("contact-success-title"), {
        description: t("contact-success-description"),
      });
    } else {
      toast.error(t("contact-error-title"), {
        description: t("contact-error-description"),
      });
    }
    setLoading(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {t("contact-name")} <span className="text-feup">*</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="Mary Jane" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("contact-company")}</FormLabel>
              <FormControl>
                <Input placeholder="INEGI" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {t("contact-email")} <span className="text-feup">*</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="example@company.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {t("contact-subject")} <span className="text-feup">*</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="Possible partnership" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {t("contact-message")} <span className="text-feup">*</span>
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="..."
                  className="resize-none h-32"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {isLoading ? (
          <Button className="bg-feup hover:cursor-pointer" disabled>
            <Loader2Icon className="animate-spin" />
            {t("send-loading")}
          </Button>
        ) : (
          <Button type="submit" className="bg-feup hover:cursor-pointer">
            {t("contact-send")}
          </Button>
        )}
      </form>
    </Form>
  );
}
