import React from "react";
import tw from "tailwind-styled-components";

export function Brand() {
  return (
    <div className="wrapper flex justify-center flex-wrap">
      <Img src="/assets/google.png" alt="" />
      <Img src="/assets/slack.png" alt="" />
      <Img src="/assets/atlassian.png" alt="" />
      <Img src="/assets/dropbox.png" alt="" />
      <Img src="/assets/shopify.png" alt="" />
    </div>
  );
}

const Img = tw.img`
  w-36 m-4 object-none
`;
