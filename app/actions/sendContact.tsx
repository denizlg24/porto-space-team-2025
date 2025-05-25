"use server";
import { Resend } from "resend";
export interface contactObject {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

export async function sendContact(contact: contactObject) {
  const resend = new Resend(process.env.RESEND_API);

  const { data, error } = await resend.emails.send({
    from: "operacoes@portospaceteam.pt",
    to: "operacoes@portospaceteam.pt",
    subject: `Novo Contacto Porto Space Team: ${contact.subject}`,
    html: `<h1>Nova Contacto Porto Space Team</h1>
        <h2>Nome: ${contact.name}</h2>
        <h2>Email: ${contact.email}</h2>
        ${contact.company != "" && `<h2>Empresa: ${contact.company}</h2>`}
        <h2>Mensagem: ${contact.message}</h2>`,
  });
  if (error) {
    console.error({ error });
    return 0;
  }
  console.log({ data });
  return 1;
}
