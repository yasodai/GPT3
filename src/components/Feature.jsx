import React from "react";

export function Feature({ title, text, className }) {
  return (
    <div className={className}>
      <div className=" mb-4">
        <div className="w-9 h-[3px] bg-gradient-bar mb-1" />
        <h1 className="text-white font-extrabold text-sm sm:text-lg min-w-[123px]">
          {title}
        </h1>
      </div>
      <div className="max-w-[390px]">
        <p className=" text-text font-medium text-[13px] sm:text-sm leading-6">
          {text}
        </p>
      </div>
    </div>
  );
}
