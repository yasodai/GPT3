import React from "react";
import { Feature } from "./../components";

export function WhatGPT3() {
  return (
    <div
      className="bg-gradient-gpt3 drop-shadow section__margin flex flex-col p-8"
      id="wgt3"
    >
      <div className="">
        <Feature
          className="sm:flex  justify-between items-start m-1 gap-x-8 "
          title="What is GPT-3"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
        />
      </div>

      <div className="py-12 sm:flex justify-between items-center">
        <h1 className="gradient__text text-2xl sm:text-3xl font-extrabold leading-10 mr-4 max-w-md">
          The possibilities are beyond your imagination
        </h1>
        <p className="text-subtext mt-4">Explore the Library</p>
      </div>

      <div className="sm:flex  flex-wrap">
        <Feature
          className="w-full sm:w-1/2 lg:w-1/3 p-4 "
          title="Chatbots"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
        />
        <Feature
          className="w-full sm:w-1/2 lg:w-1/3 p-4 "
          title="Knowledgebase"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments"
        />
        <Feature
          className="w-full sm:w-1/2 lg:w-1/3 p-4 flex-1"
          title="Education"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments"
        />
      </div>
    </div>
  );
}
