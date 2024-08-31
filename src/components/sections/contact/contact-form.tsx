"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { z } from "zod";
import { FieldErrors, type SubmitHandler, useForm } from "react-hook-form";
import { clientFormSchema } from "@/lib/form-validation";
import { Textarea } from "@/components/ui/textarea";
import LoadingButton from "@/components/ui/loading-button";

type FormData = z.infer<ReturnType<typeof clientFormSchema>>;
const ContactForm = () => {
  const t = useTranslations("sections.contact.form");
  const tZod = useTranslations("zod");

  const form = useForm<FormData>({
    defaultValues: {
      email: "",
      userName: "",
      age: "",
      address: "",
      phoneNumber: "",
    },
    mode: "onSubmit",
    resolver: zodResolver(clientFormSchema(tZod)),
  });
  const {
    setError,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        if (errorData.errors) {
          Object.keys(errorData.errors.fieldErrors).forEach((key) => {
            const errorMessages = errorData.errors.fieldErrors[key] ?? [];
            setError(key as keyof FieldErrors<FormData>, {
              type: "server",
              message: errorMessages[0],
            });
          });
        }

        toast.error(t("toast.failed"));
      } else {
        toast.success(t("toast.success"));
        reset();
      }
    } catch (error) {
      toast.error(t("toast.failed"));
    }
  };
  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="pb-20 pt-10 mt-10 md:mt-16 md:pt-16 lg:mt-20 lg:pt-20 px-5 sm:px-10 space-y-10 w-full bg-gray-200 rounded-t-3xl"
      >
        <div className="space-y-6 md:space-y-10">
          <div className="flex flex-col md:flex-row gap-6">
            <FormField
              control={form.control}
              name="userName"
              render={({ field }) => (
                <FormItem className="w-full !space-y-4">
                  <FormLabel className=" !text-semibold text-base !text-primary-dark">
                    {t("name")}
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="rounded-full w-full bg-white"
                    />
                  </FormControl>
                  <FormMessage className="text-sm" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem className="w-full !space-y-4">
                  <FormLabel className=" !text-semibold text-base !text-primary-dark">
                    {t("age")}
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="number"
                      min={0}
                      max={100}
                      step={1}
                      className="rounded-full w-full bg-white"
                    />
                  </FormControl>
                  <FormMessage className="text-sm" />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-6 ">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full !space-y-4">
                  <FormLabel className=" !text-semibold text-base !text-primary-dark">
                    {t("email")}
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="rounded-full w-full bg-white"
                    />
                  </FormControl>
                  <FormMessage className="text-sm" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem className="w-full !space-y-4">
                  <FormLabel className=" !text-semibold text-base !text-primary-dark">
                    {t("phone")}
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="tel"
                      className="rounded-full w-full bg-white"
                    />
                  </FormControl>
                  <FormMessage className="text-sm" />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem className="w-full !space-y-4">
                <FormLabel className=" !text-semibold text-base !text-primary-dark">
                  {t("address")}
                </FormLabel>
                <FormControl>
                  <Textarea {...field} className="h-24 bg-white" />
                </FormControl>
                <FormMessage className="text-sm" />
              </FormItem>
            )}
          />
        </div>
        <LoadingButton
          type="submit"
          className="w-full !rounded-full uppercase "
          size="lg"
          disabled={isSubmitting}
          isLoading={isSubmitting}
          loadingText={t("loading")}
        >
          {t("submit")}
        </LoadingButton>
      </form>
    </Form>
  );
};

export default ContactForm;
