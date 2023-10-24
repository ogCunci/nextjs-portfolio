import React, { Fragment } from "react";
import { SocialIcon } from "react-social-icons";
import EmailForm from "./EmailForm";

const EmailSection = () => {
  return (
    <section
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
      id="contact"
    >
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#adb7be] mb-4 max-w-md">
          {" "}
          I'm currently looking for new opportunities. My inbox is always open,
          whether you have a question or just want to say hi. I'll get back to
          you as soon as possible!{" "}
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
