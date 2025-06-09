import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Title from "../ui/Title";
import { useAnimation } from "../../hooks/useAnimation";

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
  const formContainerRef = useAnimation();
  const mapContainerRef = useAnimation();
  const inputsRef = useAnimation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInfo({ ...formInfo, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
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
    <div className="py-10" id="contact">
      <Title partOne="LET'S BUILD" PartTwo="SUCCESS" />

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div
          ref={formContainerRef}
          className="bg-card-bg border border-border rounded-lg p-6"
        >
          <h3 className="text-2xl font-bold text-text mb-6">Get in Touch</h3>
          <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
            <div ref={inputsRef}>
              {/* Name Field */}
              <div>
                <label
                  htmlFor="userName"
                  className="block text-text-secondary text-sm mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="userName"
                  name="userName"
                  placeholder="Your Name"
                  onChange={handleChange}
                  value={formInfo.userName}
                  className="w-full p-3 border border-border bg-transparent text-text rounded focus:outline-none focus:border-accent"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-text-secondary text-sm mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  onChange={handleChange}
                  value={formInfo.email}
                  className="w-full p-3 border border-border bg-transparent text-text rounded focus:outline-none focus:border-accent"
                  required
                />
              </div>

              {/* Budget Field */}
              <div>
                <label
                  htmlFor="budget"
                  className="block text-text-secondary text-sm mb-2"
                >
                  Budget
                </label>
                <input
                  type="text"
                  id="budget"
                  name="budget"
                  placeholder="Your Budget"
                  onChange={handleChange}
                  value={formInfo.budget}
                  className="w-full p-3 border border-border bg-transparent text-text rounded focus:outline-none focus:border-accent"
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-text-secondary text-sm mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  onChange={handleChange}
                  value={formInfo.message}
                  rows="4"
                  className="w-full p-3 border border-border bg-transparent text-text rounded focus:outline-none focus:border-accent"
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              {!sending ? (
                <button
                  type="submit"
                  onClick={sendEmail}
                  className="cursor-pointer text-white font-semibold bg-gradient-to-r from-accent to-accent-hover w-28 h-10 rounded-md border border-border hover:scale-105 duration-200 hover:border-border hover:from-accent-hover hover:to-accent"
                >
                  Send
                </button>
              ) : (
                <button className="cursor-not-allowed flex justify-center items-center bg-gradient-to-r from-accent to-accent-hover w-28 h-10 rounded-md border border-border">
                  <span className="w-6 h-6 rounded-full block border-2 border-border border-t-text animate-spin"></span>
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Map Section */}
        <div
          ref={mapContainerRef}
          className="bg-card-bg border border-border rounded-lg p-6"
        >
          <h3 className="text-2xl font-bold text-text mb-6">Location</h3>
          <div className="aspect-video w-full overflow-hidden rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.349348447539!2d-5.5547!3d33.5892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76a3a3c3c3c3c%3A0x0!2sMeknes%2C%20Morocco!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-card-hover flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-text font-semibold">Address</h4>
                <p className="text-text-secondary text-sm">Meknes, Morocco</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-card-hover flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-text font-semibold">Email</h4>
                <p className="text-text-secondary text-sm">code30a@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-card-hover flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-text font-semibold">Phone</h4>
                <p className="text-text-secondary text-sm">+212 651167495</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
