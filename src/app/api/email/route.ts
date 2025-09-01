import { NextResponse, NextRequest } from "next/server";
import { Resend } from "resend";

// import path from "path";

const KEY = process.env.RESEND_API_KEY;

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const text = searchParams.get("text");

  return NextResponse.json({ data: { text } });
}

type PostData = {
  name: string;
  contact: string;
  source: string;
  count: string;
  time: string;
  details: string;
  hasModel: string
  file: File;
};

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const data: PostData = {
    name: formData.get("name") as string,
    contact: formData.get("contact") as string,
    source: formData.get("source") as string,
    count: formData.get("count") as string,
    time: formData.get("time") as string,
    details: formData.get("details") as string,
    hasModel: formData.get("has_model") as string,
    file: formData.get("file") as File,
  };

  const resend = new Resend(KEY);

  const attachments = [];

  if (data.file) {
    const buffer = Buffer.from(await data.file?.arrayBuffer());
    // const filePath = path.join(
    //   process.cwd(),
    //   "public",
    //   "uploads",
    //   data.file.name
    // );
    attachments.push({
      content: buffer,
      filename: data.file.name,
    });
  }

  const result = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "andreymurashev@gmail.com",
    subject: "selenique: Заявка с сайта",
    attachments,
    html: `<div>
      <ul>
        <li>Имя: ${data.name}</li>
        <li>Контакт: ${data.contact}</li>
        <li>Для чего: ${data.source}</li>
        <li>ИИ Модель: ${data.hasModel}</li>
        <li>Количество: ${data.count}</li>
        <li>Срок: ${data.time}</li>
      </ul>
      <p>${data.details}</p>
      </div>`,
  });

  return NextResponse.json({
    data,
    result,
  });
}
