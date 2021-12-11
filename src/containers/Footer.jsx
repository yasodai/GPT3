import React from "react";
import { clsx } from "./../utils";

const footerItems = {
  "GPT-3": ["Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved"],
  Links: ["Overons", "Social Media", "Counters", "Contact"],
  Company: ["Terms & Conditions", "Privacy Policy", "Contact"],
  "Get in touch": [
    "Crechterwoord K12 182 DK Alknjkcb",
    "085-132567",
    "info@payme.net",
  ],
};
export function Footer() {
  Object.entries(footerItems).map(([name, items]) => console.log(name, items));

  return (
    <div className="wrapper bg-footer text-white flex flex-col justify-between items-center gap-16">
      <h1 className="gradient__text text-5xl font-extrabold text-center">
        Do you want to step in to the future before others
      </h1>

      <div className="flex justify-center">
        <button className="border border-white p-4 text-lg tracking-wide">
          Request Early Access
        </button>
      </div>

      <div className="w-full grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Object.entries(footerItems).map(([name, items], index) => (
          <div key={index} className="space-y-2 p-8">
            <h6 className={clsx("font-black mb-2", index === 0 && "text-4xl")}>
              {name}
            </h6>
            {items.map((item) => (
              <p key={item} className="text-[13px]">
                {item}
              </p>
            ))}
          </div>
        ))}
      </div>

      <p className="text-sm tracking-normal">
        © 2021 GPT-3. All rights reserved.
      </p>
    </div>
  );
}
