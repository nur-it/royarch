"use client";

import { Link as LinkIcon, Mail, User } from "lucide-react";
import { useForm } from "react-hook-form";

const formFields = [
  {
    name: "name",
    type: "text",
    placeholder: "Name",
    icon: <User size={18} className="text-gray-500" />,
    validation: { required: "Name is required" },
  },
  {
    name: "email",
    type: "email",
    placeholder: "Email",
    icon: <Mail size={18} className="text-gray-500" />,
    validation: {
      required: "Email is required",
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Invalid email format",
      },
    },
  },
  {
    name: "subject",
    type: "text",
    placeholder: "Subject",
    icon: <LinkIcon size={18} className="text-gray-500" />,
    validation: { required: "Subject is required" },
  },
];

export default function FormLayout() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    reset();
  };

  return (
    <div className="grid min-h-[316px] grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-0">
      {/* Form Section */}
      <div className="border-darker border p-6 md:p-10 lg:col-span-2">
        <h2 className="mb-6 text-lg font-medium text-white">Send message</h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8"
        >
          <div className="flex flex-col justify-between space-y-6 pb-6 lg:pb-0">
            {formFields.map((field) => (
              <div key={field.name} className="relative">
                <div className="flex items-center gap-2">
                  <span className="absolute top-0.5 left-0 pb-3">
                    {field.icon}
                  </span>
                  <div className="after:bg-darker relative flex-1 after:absolute after:bottom-0 after:left-0 after:h-2 after:w-4 after:transition-all after:duration-500 after:ease-in-out after:content-[''] focus-within:after:left-[calc(100%-1rem)] focus-within:after:bg-white">
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      {...register(field.name, field.validation)}
                      autoComplete="off"
                      className="border-darker w-full border-b bg-transparent pb-4 pl-6 text-white/70 placeholder-white/30 transition-all delay-75 duration-700 ease-in-out outline-none focus:border-white"
                    />
                  </div>
                </div>

                {errors[field.name] && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors[field.name]?.message}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Message Field */}
          <div className="flex flex-col justify-between space-y-6">
            <div className="relative">
              <div className="after:bg-darker relative after:absolute after:bottom-2 after:left-0 after:h-2 after:w-4 after:transition-all after:duration-500 after:ease-in-out after:content-[''] focus-within:after:left-[calc(100%-1rem)] focus-within:after:bg-white">
                <textarea
                  placeholder="Message"
                  rows={5}
                  {...register("message", { required: "Message is required" })}
                  className="border-darker w-full border-b bg-transparent pb-4 text-white placeholder-gray-500 transition-all delay-75 duration-700 ease-in-out outline-none focus:border-white"
                ></textarea>
              </div>

              {errors.message && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-darker hover:bg-primary w-full cursor-pointer px-6 py-3 font-semibold text-white uppercase transition-all duration-300 ease-in-out"
            >
              Send
            </button>
          </div>
        </form>
      </div>

      {/* Map Section */}
      <div className="min-h-[300px] lg:min-h-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1982.3973404282964!2d-0.11954352358378325!3d51.5033249718136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b9003c197d%3A0x9ce33cf7f47d2f9!2sLondon%20Eye!5e0!3m2!1sen!2suk!4v1690215123456!5m2!1sen!2suk"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-full w-full"
        ></iframe>
      </div>
    </div>
  );
}
