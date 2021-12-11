import React from "react";
import tw from "tailwind-styled-components";

export function Header() {
  return (
    <div
      className="wrapper flex flex-col items-center lg:flex-row gap-8"
      id="home"
    >
      <div className="flex flex-col justify-center gap-6">
        <Title>Let&apos;s Build Something amazing with GPT-3 OpenAI</Title>
        <p className="text-text text-lg">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>

        <div className="h-12 flex rounded overflow-hidden">
          <Input type="email" placeholder="Your Email Address" />
          <Button>Get Started</Button>
        </div>

        <div className="2xl:flex items-center gap-2">
          <img src="/assets/people.png" alt="" />
          <p className="text-white text-xm ">
            1,600 people requested access a visit in last 24 hours
          </p>
        </div>
      </div>

      <div className="max-w-3xl">
        <img src="/assets/ai.png" alt="" />
      </div>
    </div>
  );
}

const Title = tw.h1`
  text-5xl sm:text-6xl 
  font-bold whitespace-pre-wrap 
  gradient__text
`;
const Input = tw.input`
  flex-1 outline-none px-4 py-2 bg-bg text-white
`;
const Button = tw.button`
  text-white bg-red-500 font-semibold
  py-2 px-3
  whitespace-nowrap
`;
