import React, { Fragment } from "react";
import { SocialIcon } from "react-social-icons";
import EmailForm from "./EmailForm";

const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#163f99] to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -transalte-1/2"></div>
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#adb7be] mb-4 max-w-md">
          {" "}
          I'm currently looking for new opportunities. Hit me up fam.{" "}
        </p>
        <div className="socials flex flex-row gap-2">
          <SocialIcon url="https://www.linkedin.com/in/daniel-bolyky/" />
          <SocialIcon url="https://github.com/ogCunci" />
        </div>
      </div>
      <div>
        <EmailForm />
      </div>
    </section>
  );
};

export default EmailSection;
