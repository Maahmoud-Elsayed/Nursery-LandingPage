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
import { useMessages, useTranslations } from "next-intl";
import { z } from "zod";
import { FieldErrors, type SubmitHandler, useForm } from "react-hook-form";
import { clientFormSchema } from "@/lib/form-validation";
import { Textarea } from "@/components/ui/textarea";
import LoadingButton from "@/components/ui/loading-button";
import { format } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";

type FormData = z.infer<ReturnType<typeof clientFormSchema>>;
const ContactForm = () => {
  const t = useTranslations("sections.contact.form");
  const tZod = useTranslations("zod");

  const messages = useMessages();
  //@ts-ignore
  const ages = Object.values(messages?.sections?.contact.form.ages || {});
  const branches = Object.values(
    //@ts-ignore
    messages?.sections?.contact.form.branches || {}
  );

  const form = useForm<FormData>({
    defaultValues: {
      email: "",
      userName: "",
      age: "",
      address: "",
      phoneNumber: "",
      date: undefined,
      question: "",
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
    console.log(data);
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          date: format(data.date, "yyyy-MM-dd"),
        }),
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
        className="pb-10 pt-10 mt-10 mb-10 md:mt-16 shadow-black shadow-lg md:pt-16 lg:mt-20 lg:pt-20 px-5 sm:px-10 space-y-10 w-full bg-primary border-4 border-lime rounded-3xl"
      >
        <div className="space-y-6 md:space-y-8">
          <FormField
            control={form.control}
            name="userName"
            render={({ field }) => (
              <FormItem className="w-full !space-y-4">
                <FormLabel className=" !text-semibold text-base !text-white">
                  {t("name")}
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="rounded-full w-full bg-white focus-visible:ring-lime focus-within:ring-offset-lime focus-within:border-lime"
                    disabled={isSubmitting}
                  />
                </FormControl>
                <FormMessage className="text-sm" />
              </FormItem>
            )}
          />
          <div className="flex flex-col xl:flex-row gap-6 md:gap-8 ">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full !space-y-4">
                  <FormLabel className=" !text-semibold text-base !text-white">
                    {t("email")}
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="rounded-full w-full bg-white focus-visible:ring-lime focus-within:ring-offset-lime focus-within:border-lime"
                      disabled={isSubmitting}
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
                  <FormLabel className=" !text-semibold text-base !text-white">
                    {t("phone")}
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="tel"
                      className="rounded-full w-full bg-white focus-visible:ring-lime focus-within:ring-offset-lime focus-within:border-lime"
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormMessage className="text-sm" />
                </FormItem>
              )}
            />
          </div>

          <div className="flex flex-col 2xl:flex-row gap-6 md:gap-8 ">
            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem className="w-full !space-y-4">
                  <FormLabel className=" !text-semibold text-base !text-white">
                    {t("age")}
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    value={field.value}
                  >
                    <FormControl>
                      <SelectTrigger
                        className="w-full text-muted-foreground rounded-full bg-white "
                        disabled={isSubmitting}
                      >
                        <SelectValue
                          className="w-full rounded-full  bg-white"
                          placeholder={t("defAge")}
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {ages.map((age, idx) => (
                        <SelectItem key={idx} value={age as string}>
                          {age as string}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="w-full flex items-center self-start">
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className="flex w-full space-y-4 flex-col">
                    <FormLabel className=" !text-semibold text-base !text-white">
                      {t("date")}
                    </FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl className="w-full  rounded-full bg-white ">
                          <Button
                            variant={"outline"}
                            className={cn(
                              "!w-full ltr:pl-3 rtl:pr-3  rtl:text-left ltr:text-right font-normal flex gap-3 ltr:justify-start rtl:justify-end items-center rtl:flex-row-reverse ",
                              !field.value && "text-muted-foreground"
                            )}
                            disabled={isSubmitting}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>{t("defDate")}</span>
                            )}
                            <CalendarIcon className=" h-4 w-4 " />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem className="w-full !space-y-4">
                <FormLabel className=" !text-semibold text-base !text-white">
                  {t("address")}
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger
                      className="w-full rounded-full bg-white text-muted-foreground "
                      disabled={isSubmitting}
                    >
                      <SelectValue
                        className="w-full rounded-full bg-white "
                        placeholder={t("defBranch")}
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {branches.map((age, idx) => (
                      <SelectItem key={idx} value={age as string}>
                        {age as string}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="question"
            render={({ field }) => (
              <FormItem className="w-full !space-y-4">
                <FormLabel className=" !text-semibold text-base !text-white">
                  {t("question")}
                </FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    className="h-24 bg-white rounded-2xl focus-visible:ring-lime focus-within:ring-offset-lime focus-within:border-lime"
                    disabled={isSubmitting}
                  />
                </FormControl>
                <FormMessage className="text-sm" />
              </FormItem>
            )}
          />
        </div>
        <LoadingButton
          type="submit"
          className="w-full !rounded-full uppercase bg-lime hover:bg-lime text-primary border border-white"
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
