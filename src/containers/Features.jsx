import React from "react";
import { Feature } from "./../components";

const featuresData = [
  {
    title: "Improving end distrusts instantly",
    text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
  },
  {
    title: "Become the tended active",
    text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
  },
  {
    title: "Message or am nothing",
    text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
  },
  {
    title: "Really boy law county",
    text: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..",
  },
];
export function Features() {
  return (
    <div className="wrapper lg:flex justify-between gap-8" id="features">
      <div className="text-left flex-1">
        <h1 className=" gradient__text text-4xl font-extrabold">
          The Future is Now and You Just Need to Realize It. Step into Future
          Today. & Make it Happen.
        </h1>
        <p className="text-subtext my-8">Request Early Access to Get Started</p>
      </div>

      <div className="flex-[1.5] flex flex-col">
        {featuresData.map(({ text, title }, index) => (
          <Feature
            className="flex justify-between items-center m-1 gap-x-8 "
            key={title + index}
            text={text}
            title={title}
          />
        ))}
      </div>
    </div>
  );
}
