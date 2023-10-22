"use client";
import React, { useState } from "react";

const EmailForm = () => {
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);

  const submitHanlder = async (event) => {
    event.preventDefault();
    const data = {
      email: event.target.email.value,
      subject: event.target.subject.value,
      message: event.target.message.value,
    };
    console.log("----------");
    console.log(data);
    console.log("----------");

    const response = await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      setIsEmailSubmitted(true);
      console.log("Message sent");
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
      {isEmailSubmitted && (
        <p className="text-green-500 text-sm mt-2">E-mail sent successfully!</p>
      )}
    </form>
  );
};

export default EmailForm;
