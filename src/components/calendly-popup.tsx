"use client";

import { useEffect, useState } from "react";
import { PopupButton } from "react-calendly";

type CalendlyPopupProps = {
  url: string;
};

const CalendlyPopup = ({ url }: CalendlyPopupProps) => {
  const [element, setElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const el = document.getElementById("mainBody");
    setElement(el);
  }, []);

  return (
    <PopupButton
      url={url}
      rootElement={element!}
      text="Book a Consultation"
      className="mt-6 bg-sky-500 text-white px-6 py-3 rounded-md shadow-md text-lg font-semibold hover:bg-sky-600 transition"
    />
  );
};

export default CalendlyPopup;
