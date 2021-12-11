import React from "react";
import { Article } from "./../components";
import { clsx } from "./../utils";

export function Blog() {
  return (
    <div className="wrapper flex flex-col gap-16">
      <div className="">
        <h1 className="gradient__text text-6xl font-extrabold leading-snug">
          A lot is happening, <br /> We are blogging about it.
        </h1>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-8">
        {[1, 2, 3, 4, 5].map((item, index) => (
          <Article
            item={item}
            key={item + "" + index}
            imgUrl={`/assets/blog0${item}.png`}
            date="Sep 26, 2021"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        ))}
      </div>
    </div>
  );
}
