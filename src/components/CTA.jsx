import React from "react";
import tw from "tailwind-styled-components";

export function CTA() {
  return (
    <Container>
      <div className="space-y-4">
        <p className="text-[13px]">Request Early Access to Get Started</p>
        <h3 className="text-xl md:text-2xl font-extrabold">
          Register Today & start exploring the endless possibilities.
        </h3>
      </div>
      <div className="flex justify-center items-center">
        <Button>Get Started</Button>
      </div>
    </Container>
  );
}

const Container = tw.div`
  my-16 mx-8 p-8 sm:m-16

  flex flex-col 
  md:flex-row

  justify-between
  gap-8

  bg-gradient-bar rounded-2xl
`;
const Button = tw.button`
  bg-black text-white font-bold text-lg
  tracking-wide
  rounded-full
  py-2.5 px-6
  whitespace-nowrap
`;
