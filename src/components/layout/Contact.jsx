import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Title from "../ui/Title";
function Contact() {
  const initialState = {
    email: "",
    budget: "",
    userName: "",
    message: "",
  };
  const formRef = useRef();
  const [sending, setIsSending] = useState(false);
  const [formInfo, setFormInfo] = useState(initialState);
  const userId = import.meta.env.VITE_APP_ID_USER;
  const templateId = import.meta.env.VITE_APP_ID_TEMPLATE;
  const serviceId = import.meta.env.VITE_APP_ID_SERVICE;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInfo({ ...formInfo, [name]: value });
  };
  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setIsSending(true);

    emailjs
      .sendForm(serviceId, templateId, formRef.current, userId)
      .then((result) => {
        console.log("Email sent successfully:", result.text);
        setFormInfo(initialState);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      })
      .finally(() => {
        setIsSending(false);
      });
  };
  return (
    <div className="py-20 " id="contact">
      <Title
        partOne="LET'S BUILD

"
        PartTwo="SUCCESS"
      />
      <form
        ref={formRef}
        className="mt-10 w-full space-y-4"
        onSubmit={sendEmail}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-gray-400 text-sm mb-2">
              Name
            </label>
            <input
              type="text"
              name="userName"
              id="name"
              onChange={handleChange}
              value={formInfo.userName}
              placeholder="Your Name"
              className="w-full p-3 border border-gray-200 bg-transparent text-white rounded focus:outline-none  "
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-400 text-sm mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={formInfo.email}
              id="email"
              placeholder="Your@email.com"
              className="w-full p-3 border border-gray-200 bg-transparent text-white rounded focus:outline-none  "
            />
          </div>
        </div>

        {/* Budget Number Input */}
        <div>
          <label htmlFor="budget" className="block text-gray-400 text-sm mb-2">
            Budget (USD)
          </label>
          <input
            type="number"
            id="budget"
            name="budget"
            onChange={handleChange}
            value={formInfo.budget}
            placeholder="Enter your budget"
            min="0"
            step="100"
            className="w-full p-3 border border-gray-200 bg-transparent text-white rounded focus:outline-none"
          />
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-gray-400 text-sm mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            onChange={handleChange}
            value={formInfo.message}
            rows="4"
            className="w-full p-3 border border-gray-200 bg-transparent text-white rounded focus:outline-none  "
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end ">
          {!sending ? (
            <button
              type="submit"
              onClick={sendEmail}
              className=" cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black w-28 h-10 rounded-md border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900"
            >
              Send
            </button>
          ) : (
            <button className=" cursor-not-allowed flex justify-center items-center   bg-gradient-to-r from-gray-800 to-black w-28 h-10 rounded-md border border-gray-600 ">
              <span className="w-6 h-6  rounded-full block border-2 border-gray-700 border-t-white animate-spin "></span>
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default Contact;
