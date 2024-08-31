import { EmailTemplate } from "@/components/email";
import { serverFormSchema } from "@/lib/form-validation";
import { resend } from "@/server/resend-client";

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    const parsedData = serverFormSchema.safeParse(formData);

    if (!parsedData.success) {
      return new Response(
        JSON.stringify({ errors: parsedData.error.flatten() }),
        {
          status: 400,
        }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["mahmoud.elsayed.elbadawy@gmail.com"],
      subject: "New Contact Form Submission from Al Dana Nursery",
      react: EmailTemplate(parsedData.data),
    });

    if (error) {
      return Response.json(
        { message: "Something went wrong" },
        { status: 500 }
      );
    }

    return Response.json({ message: "Email sent" }, { status: 200 });
  } catch (error) {
    return Response.json({ message: "Something went wrong" }, { status: 500 });
  }
}
