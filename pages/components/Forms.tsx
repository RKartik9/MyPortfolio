import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { FiMail, FiUser, FiMessageSquare } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

function ContactForm() {
  const [state, handleSubmit] = useForm("mkgozyna");

  if (state.succeeded) {
    return (
      <div className="text-center p-8 bg-green-50 dark:bg-gray-800 rounded-lg">
        <p className="text-green-500 text-xl font-medium animate-fade-in">
          Thanks for reaching out! I'll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-8 bg-white/80 backdrop-blur-sm rounded-xl shadow-2xl dark:bg-gray-800/90"
    >
      <h2 className="text-3xl font-bold mb-8 text-center text-teal-600 dark:text-cyan-400">
        Let's Connect!
      </h2>

      <div className="space-y-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiUser className="text-gray-400" />
          </div>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="pl-10 w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-all duration-300"
          />
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiMail className="text-gray-400" />
          </div>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="pl-10 w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-all duration-300"
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="mt-2 text-sm text-red-500"
          />
        </div>

        <div className="relative">
          <div className="absolute top-3 left-0 pl-3 flex items-start pointer-events-none">
            <FiMessageSquare className="text-gray-400" />
          </div>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Your Message"
            required
            className="pl-10 w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-all duration-300 resize-none"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            className="mt-2 text-sm text-red-500"
          />
        </div>

        <button
          type="submit"
          disabled={state.submitting}
          className="w-full py-3 px-6 text-white bg-teal-600 rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-4 focus:ring-teal-500 focus:ring-opacity-50 transform hover:scale-[1.02] transition-all duration-300 dark:bg-cyan-500 dark:hover:bg-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {state.submitting ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
