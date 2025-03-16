"use client";

import { InlineWidget } from "react-calendly";

type CalendlyEmbedProps = {
  url: string;
};

const CalendlyEmbed = ({ url }: CalendlyEmbedProps) => {
  return (
    <InlineWidget
      url={url}
      styles={{
        height: "1000px",
      }}
    />
  );
};

export default CalendlyEmbed;
