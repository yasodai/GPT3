import React from "react";
import { clsx } from "./../utils";

export function Article({ imgUrl, date, text, item }) {
  return (
    <div
      className={clsx(
        "flex flex-col  text-white bg-blog font-bold",
        item === 1 && "lg:row-span-2 lg:col-span-2"
      )}
    >
      <img
        src={imgUrl}
        className={clsx(
          "object-center object-cover",
          item === 1 ? "lg:aspect-[2/1.6] aspect-[2/1]" : "aspect-[2/1]"
        )}
      />

      <div className="flex flex-col h-full justify-between py-6 px-5">
        <div className="space-y-2 mb-20">
          <p className="text-sm">{date}</p>
          <h3 className="text-2xl font-extrabold ">{text}</h3>
        </div>

        <p className="text-sm">Read Full Article</p>
      </div>
    </div>
  );
}
