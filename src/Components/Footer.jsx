import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialFacebook } from "react-icons/sl";

export default function Footer() {
  return (
    <footer className="px-3 py-7 bg-[rgb(24,19,19)] opacity-95 text-white flex flex-col gap-5">
      <section className="flex flex-col gap-3">
        <h2 className="text-center text-3xl">cyper</h2>
        <p className="text-center text-sm opacity-80">
          We are a residential interior design firm located in Protlan. Our
          boutique-studio offers more than
        </p>
      </section>
      <section>
        <h3 className="text-lg text-center">Services</h3>
      </section>
      <section>
        <h3 className="text-lg text-center">Assistance to the buyer</h3>
      </section>
      <section className="flex gap-6 justify-center items-center">
        <FaXTwitter className="text-2xl" />
        <SlSocialFacebook className="text-2xl text-white" />
      </section>
    </footer>
  );
}
