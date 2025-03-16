"use client";

import ContactForm from "@/components/contact-form";
import Hero from "@/components/hero";
import NavBar from "@/components/nav-bar";
import Services from "@/components/services";
import { Testimonial } from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Services />
      <Testimonial />
      <ContactForm />
    </>
  );
}
