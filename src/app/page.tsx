"use client";

import ContactForm from "@/components/contact-form";
import Hero from "@/components/hero";
import NavBar from "@/components/nav-bar";
import Services from "@/components/services";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Services />
      <ContactForm />
    </>
  );
}
