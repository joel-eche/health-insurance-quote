import React from "react";

import Hero from "./Hero";
import PrimaryDataForm from "./PrimaryDataForm";
import "./../../assets/styles/home.sass";

export default function Home() {
  return (
    <main className="main-home">
      <section className="hero-section">
        <Hero />
      </section>
      <section className="form-section">
        <PrimaryDataForm />
      </section>
    </main>
  );
}
