import React from "react";

const EmailForm = () => {
  return (
    <form className="flex flex-col">
      <label
        htmlFor="email"
        className="text-white block mb-2 text-sm font-medium"
      >
        Your e-mail
      </label>
      <input
        className="bg-[#18191E] mb-6 border border-[#33353F] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg w-full p-2.5"
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
    </form>
  );
};

export default EmailForm;
