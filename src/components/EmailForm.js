"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";

const EmailForm = () => {
  const [doneSubmit, setDoneSubmit] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitHanlder = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const data = {
      email: event.target.email.value,
      subject: event.target.subject.value,
      message: event.target.message.value,
    };

    const response = await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setIsSubmitting(false);
    if (response.ok) {
      setDoneSubmit(true);
    }
  };

  return (
    <form className="flex flex-col" onSubmit={submitHanlder}>
      <label
        htmlFor="email"
        className="text-white block mb-2 text-sm font-medium"
      >
        Your e-mail
      </label>
      <input
        className="bg-[#18191E] mb-6 border border-[#33353F] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg w-full p-2.5"
        name="email"
        type="email"
        id="email"
        required
        placeholder="cunci@gmail.com"
      />
      <label
        htmlFor="subject"
        className="text-white block mb-2 text-sm font-medium"
      >
        Subject
      </label>
      <input
        className="bg-[#18191E] mb-6 border border-[#33353F] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg w-full p-2.5"
        name="subject"
        type="text"
        id="subject"
        required
        placeholder="Just saying hi!"
      />
      <label
        htmlFor="message"
        className="text-white block mb-2 text-sm font-medium"
      >
        Message
      </label>
      <textarea
        name="message"
        className="bg-[#18191E] mb-6 border border-[#33353F] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg w-full p-2.5"
        id="message"
        required
        placeholder="Let's talk about..."
      />
      <button
        type="submit"
        className="bg-[#163f99] hover:bg-slate-800 text-white font-medium py-2.5 px-5 rounded-lg w-full"
      >
        Send
      </button>
      {isSubmitting && (
        <TypeAnimation
          className="mt-2 pl-1 text-sm text-white"
          sequence={["Sending", 500, "Sending...", 1000]}
          wrapper="span"
          omitDeletionAnimation={true}
          preRenderFirstString={true}
          deletionSpeed={0}
          speed={1}
          cursor={false}
          repeat={Infinity}
        />
      )}
      {doneSubmit && (
        <p className="text-green-500 text-sm mt-2 pl-1">
          E-mail sent successfully!
        </p>
      )}
    </form>
  );
};

export default EmailForm;
