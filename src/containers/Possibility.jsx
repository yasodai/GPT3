import React from "react";

export function Possibility() {
  return (
    <div className="wrapper flex flex-col lg:flex-row gap-8 " id="possibility">
      <div className="flex-1">
        <img src="/assets/possibility.png" />
      </div>

      <div className="flex-1 flex flex-col justify-end gap-4">
        <h4 className="text-cyan-300 text-lg">
          Request Early Access to Get Started
        </h4>
        <h1 className="gradient__text text-4xl font-extrabold leading-normal">
          The possibilities are beyond your imagination
        </h1>
        <p className="text-text leading-7">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <h4 className="text-subtext text-lg">
          Request Early Access to Get Started
        </h4>
      </div>
    </div>
  );
}
