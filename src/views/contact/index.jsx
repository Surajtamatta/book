import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "@/validation/contactForm";
import { useProfanityChecker, Language } from "glin-profanity";
import { ImSpinner2 } from "react-icons/im";
const Subscribe = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactSchema),
    mode: "onSubmit",
  });


  const { result, checkText } = useProfanityChecker(
    { 
      languages: ['english'],
      customWords:[
          "Ashamed",
          "Bomb",
          "Die",
          "Disgusting",
          "Dumb",
          "Idiot",
          "Kill",
          "Loser",
          "Shame",
          "Slaughter",
          "Stupid",
          "Torture",
      ] 
    }
  );

  const handleTextChange = (e) => {
    const inputText = e.target.value;
    checkText(inputText);
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

const onSubmit = async (data) => {
  if (result?.containsProfanity) {
    alert("Please revise your message to remove inappropriate content.");
    return;
  }

  if (isSubmitting) return; // Prevent multiple submissions
  setIsSubmitting(true); // Disable further submissions

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (response.status === 200) {
      alert("Message sent successfully!");
    } else {
      alert("Failed to send the message. Please try again later.");
    }
  } catch (error) {
    alert("An error occurred. Please try again later.");
    console.error("Error sending message:", error);
  } finally {
    setIsSubmitting(false); // Re-enable the submit button
  }
};


  return (
    <section id="contact" className="w-full sm:min-h-[90vh] bg-[#1f1e2c] p-6">
      <div className="flex flex-col justify-between items-center">
        <h2 className="mb-8 py-6 sm:py-20 text-4xl sm:text-7xl font-thin italic font-metal text-gray-200">
          Get <span className="not-italic font-stix">In Touch.</span>
        </h2>
        <div className="w-full max-w-screen-xl text-white flex flex-col sm:flex-row items-center lg:items-end justify-start gap-6">
          {/* Left Section */}
          <div className="w-full md:w-2/5 h-full relative sm:bottom-8 flex flex-col text-center mb-8 lg:mb-0 space-y-6 sm:space-y-10">
            <p className="text-6xl top-10 font-light italic text-[#d6d5db] font-allinpiska sm:text-9xl">
              Questions?
            </p>
            <p className="text-lg text-gray-300">
              SEND ME A MESSAGE OR CONTACT <br /> MY TEAM FOR BUSINESS INQUIRIES
            </p>
            <div className="space-y-2 sm:space-y-4">
              <p className="font-semibold text-gray-400">LITERARY AGENT:</p>
              <p>Jessica Watterson</p>
              <a
                href="mailto:jessica@dijkstraagency.com"
                className="text-[#d6d5db] underline"
              >
                jessica@dijkstraagency.com
              </a>
            </div>
            <div className="space-y-2 sm:space-y-4">
              <p className="font-semibold text-gray-400">SUBRIGHTS & LICENSING:</p>
              <p>Andrea Cavallaro</p>
              <a
                href="mailto:andrea@dijkstraagency.com"
                className="text-[#d6d5db] underline"
              >
                andrea@dijkstraagency.com
              </a>
            </div>
          </div>

          {/* Right Section (Form) */}
          <div className="w-full md:w-1/2">
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              {/* Full Name Input */}
              <div className="gap-1 w-full flex flex-col">
                <input
                  type="text"
                  placeholder="full name"
                  className={`w-full px-4 py-3 bg-transparent border ${
                    errors.fullName ? "border-red-500" : "border-gray-500"
                  } text-white placeholder-gray-400 focus:outline-none focus:ring-2 ${
                    errors.fullName ? "focus:ring-red-500" : "focus:ring-[#d6d5db]"
                  } rounded-sm`}
                  {...register("fullName")}
                />
                {errors?.fullName && (
                  <p className="text-red-500 text-sm">{errors.fullName?.message}</p>
                )}
              </div>

              {/* Email Input */}
              <div className="w-full flex flex-col gap-1">
                <input
                  type="text"
                  placeholder="email address"
                  className={`w-full px-4 py-3 bg-transparent border ${
                    errors.email ? "border-red-500" : "border-gray-500"
                  } text-white placeholder-gray-400 focus:outline-none focus:ring-2 ${
                    errors.email ? "focus:ring-red-500" : "focus:ring-[#d6d5db]"
                  } rounded-sm`}
                  {...register("email")}
                />
                {errors?.email && (
                  <p className="text-red-500 text-sm">{errors.email?.message}</p>
                )}
              </div>

              {/* Message Input */}
              <div className="w-full flex flex-col gap-1">
                <textarea
                  placeholder="message..."
                  rows="7"
                  className={`w-full px-4 py-3 bg-transparent border ${
                    errors.message ? "border-red-500" : "border-gray-500"
                  } text-white placeholder-gray-400 focus:outline-none focus:ring-2 ${
                    errors.message ? "focus:ring-red-500" : "focus:ring-[#d6d5db]"
                  } rounded-sm`}
                  {...register("message")}
                  onChange={handleTextChange}
                ></textarea>
                {errors?.message && (
                  <p className="text-red-500 text-sm">{errors.message?.message}</p>
                )}
                {result?.containsProfanity && (
                  <p className="text-red-500 text-sm">
                    This message contains inappropriate content. Please revise.
                  </p>
                )}
              </div>

              {/* Submit Button */}
                <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2 w-24 bg-transparent border border-gray-500 text-white font-semibold rounded-sm flex items-center justify-center"
            >
              {isSubmitting ? (
                <ImSpinner2 className="animate-spin text-white text-xl" />
              ) : (
                "SEND"
              )}
            </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
