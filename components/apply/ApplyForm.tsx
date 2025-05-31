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
import { sendApplication } from "@/app/actions/sendApplication";
import { toast } from "sonner";
import { useTranslations } from "next-intl";
import { ChangeEvent, useState } from "react";
import { Loader2Icon } from "lucide-react";

export function ApplyForm() {
  const [isLoading, setLoading] = useState(false);

  const [cv, updateCV] = useState({
    cv: "",
    cv_name: "",
  });

  const [motivation, updateMotivation] = useState({
    motivation: "",
    motivation_name: "",
  });

  const onAddCV = (e: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    const files = e.target.files;
    if (!files || files.length < 1) return;
    const file = files[0];
    reader.onload = (r) => {
      if (!r) return;
      if (!r.target) return;
      if (!r.target.result) return;
      updateCV((prev) => {
        if (!r) return prev;
        if (!r.target) return prev;
        if (!r.target.result) return prev;
        return {
          cv: r.target.result.toString().split(",")[1],
          cv_name: file.name,
        };
      });
    };

    reader.readAsDataURL(files[0]);
  };

  const onAddMotivation = (e: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    const files = e.target.files;
    if (!files || files.length < 1) return;
    const file = files[0];
    reader.onload = (r) => {
      if (!r) return;
      if (!r.target) return;
      if (!r.target.result) return;
      updateMotivation((prev) => {
        if (!r) return prev;
        if (!r.target) return prev;
        if (!r.target.result) return prev;
        return {
          motivation: r.target.result.toString().split(",")[1],
          motivation_name: file.name,
        };
      });
    };

    reader.readAsDataURL(files[0]);
  };

  const t = useTranslations("common");

  const FormSchema = z.object({
    name: z.string().min(2, {
      message: t("contact-name-error"),
    }),
    email: z.string().email({ message: t("contact-email-error") }),
    up_number: z
      .string()
      .regex(/^up\d{4}\d{5}$/, { message: t("contact-up-invalid") }),
    phone_number: z
      .string()
      .regex(/^\+?\d{7,15}$/, { message: t("contact-phone-invalid") }),
    course: z.string().nonempty({ message: t("contact-course-error") }),
    year: z.string().nonempty({ message: t("contact-year-error") }),
    cv: z.string().nonempty({ message: t("contact-cv-error") }),
    motivation: z.string(),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      up_number: "",
      phone_number: "",
      course: "",
      year: "",
      cv: "",
      motivation: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setLoading(true);
    const success = await sendApplication({ ...data, ...cv, ...motivation });
    if (success) {
      toast.success(t("contact-success-title"), {
        description: t("apply-success-description"),
      });
    } else {
      toast.error(t("contact-error-title"), {
        description: t("apply-error-description"),
      });
    }
    setLoading(false);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-4 mt-4"
      >
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
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {t("contact-email")} <span className="text-feup">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="example@company.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone_number"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {t("contact-phone")} <span className="text-feup">*</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="926316228" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="up_number"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {t("contact-up-number")} <span className="text-feup">*</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="up202208453" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="course"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {t("contact-course")} <span className="text-feup">*</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="L.EIC" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="year"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {t("contact-year")} <span className="text-feup">*</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="2nd" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="cv"
          render={() => (
            <FormItem>
              <FormLabel>
                {t("contact-cv")} <span className="text-feup">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  type="file"
                  onChange={(e) => {
                    onAddCV(e);
                    if (!e.target.files) {
                      form.setValue("cv", "");
                      return;
                    }
                    if (e.target.files.length > 0) {
                      form.setValue("cv", e.target.files[0].name);
                    } else {
                      form.setValue("cv", "");
                    }
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="motivation"
          render={() => (
            <FormItem>
              <FormLabel>{t("contact-motivation")}</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  onChange={(e) => {
                    onAddMotivation(e);
                    if (!e.target.files) {
                      form.setValue("motivation", "");
                      return;
                    }
                    if (e.target.files.length > 0) {
                      form.setValue("motivation", e.target.files[0].name);
                    } else {
                      form.setValue("motivation", "");
                    }
                  }}
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
