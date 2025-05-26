"use server";
import { Resend } from "resend";

interface applicationObject {
  name: string;
  email: string;
  phone_number: string;
  up_number: string;
  course: string;
  year: string;
  cv: string;
  cv_name: string;
  motivation?: string;
  motivation_name?: string;
}

export async function sendApplication(application: applicationObject) {
  const resend = new Resend(process.env.RESEND_API);

  const { data, error } = await resend.emails.send({
    from: "operacoes@portospaceteam.pt",
    to: "operacoes@portospaceteam.pt",
    subject: "Nova Candidatura Porto Space Team",
    html: `<h1>Nova Candidatura Porto Space Team</h1>
        <h2>Nome: ${application.name}</h2>
        <h2>Email: ${application.email}</h2>
        <h2>Número de Telemóvel: ${application.phone_number}</h2>
        <h2>Número Universidade: ${application.up_number}</h2>
        <h2>Curso: ${application.course}</h2>
        <h2>Ano: ${application.year}</h2>`,
    attachments:
      application.cv && application.motivation
        ? [
            {
              content: application.cv,
              filename: application.cv_name,
            },
            {
              content: application.motivation,
              filename: application.motivation_name,
            },
          ]
        : application.cv
          ? [
              {
                content: application.cv,
                filename: application.cv_name,
              },
            ]
          : application.motivation
            ? [
                {
                  content: application.motivation,
                  filename: application.motivation_name,
                },
              ]
            : [],
  });
  if (error) {
    console.error({ error });
    return 0;
  }
  console.log({ data });
  return 1;
}
