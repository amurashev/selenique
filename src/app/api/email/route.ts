import { NextResponse, NextRequest } from "next/server";
import { Resend } from "resend";

const KEY = "re_NzPtFezP_NeXn8SFPq99d6V6LGzmNHuH3";

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
};

export async function POST(request: NextRequest) {
  const data: PostData = await request.json();

  const resend = new Resend(KEY);

  // const result = await resend.emails.send({
  //   from: "onboarding@resend.dev",
  //   to: "andreymurashev@gmail.com",
  //   subject: "selenique: Заявка с сайта",
  //   html: `<div>
  //     <ul>
  //       <li>Имя: ${data.name}</li>
  //       <li>Контакт: ${data.contact}</li>
  //       <li>Для чего: ${data.source}</li>
  //       <li>Количество: ${data.count}</li>
  //       <li>Срок: ${data.time}</li>
  //     </ul>
  //     <p>${data.details}</p>
  //     </div>`,
  // });

  return NextResponse.json({
    data,
    // result
  });
}
