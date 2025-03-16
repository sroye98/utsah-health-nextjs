import { useEffect } from "react";

type CalendlyEmbedProps = {
  url: string;
};

export function CalendlyEmbed({ url }: CalendlyEmbedProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    document.querySelector("head")!.appendChild(script);
  }, []);

  return (
    <div
      className="calendly-inline-widget w-full h-full"
      data-url={url}
      style={{ minHeight: "850px", width: "100%" }}
    ></div>
  );
}
