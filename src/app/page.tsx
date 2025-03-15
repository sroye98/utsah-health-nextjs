"use client";

import ContactForm from "@/components/contact-form";
import Hero from "@/components/hero";
import { Testimonial } from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Testimonial />
      <ContactForm />
    </>
  );
}
