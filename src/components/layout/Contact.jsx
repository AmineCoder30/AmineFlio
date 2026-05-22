import { useRef, useState } from "react";
import PropTypes from "prop-types";
import emailjs from "@emailjs/browser";
import { Title, NotificationCard } from "../ui";

/* ─── tiny icon helpers ─── */
const IconLocation = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);
const IconMail = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);
const IconPhone = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const contactDetails = [
  { icon: <IconLocation />, label: "Address", value: "Meknes, Morocco" },
  { icon: <IconMail />, label: "Email", value: "code30a@gmail.com" },
  { icon: <IconPhone />, label: "Phone", value: "+212 651 167 495" },
];

function Contact() {
  const initialState = { email: "", budget: "", userName: "", message: "" };
  const formRef = useRef();

  const [sending, setIsSending] = useState(false);
  const [formInfo, setFormInfo] = useState(initialState);
  const [notification, setNotification] = useState({
    show: false,
    message: "",
    type: "success",
  });
  const [errors, setErrors] = useState({
    email: "",
    userName: "",
    message: "",
    budget: "",
  });

  const userId = import.meta.env.VITE_APP_ID_USER;
  const templateId = import.meta.env.VITE_APP_ID_TEMPLATE;
  const serviceId = import.meta.env.VITE_APP_ID_SERVICE;

  const validateField = (name, value) => {
    switch (name) {
      case "userName":
        if (!value.trim()) return "Name is required";
        if (value.trim().length < 3)
          return "Name must be at least 3 characters";
        break;
      case "email":
        if (!value.trim()) return "Email is required";
        if (!/\S+@\S+\.\S+/.test(value)) return "Invalid email address";
        break;
      case "budget":
        if (
          value &&
          (isNaN(value) || Number(value) < 200 || Number(value) > 10000)
        )
          return "Budget must be between $200 and $5,000";
        break;
      case "message":
        if (!value.trim()) return "Message is required";
        if (value.trim().length < 10)
          return "Message must be at least 10 characters";
        break;
      default:
        break;
    }
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInfo({ ...formInfo, [name]: value });
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const validateForm = () => {
    const newErrors = {
      userName: validateField("userName", formInfo.userName),
      email: validateField("email", formInfo.email),
      message: validateField("message", formInfo.message),
      budget: validateField("budget", formInfo.budget),
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setNotification({
        show: true,
        message: "Please fix the errors before submitting.",
        type: "error",
      });
      return;
    }
    setIsSending(true);
    emailjs
      .sendForm(serviceId, templateId, formRef.current, userId)
      .then(() => {
        setFormInfo(initialState);
        setErrors({ email: "", userName: "", message: "", budget: "" });
        setNotification({
          show: true,
          message: "Message sent! I'll get back to you soon.",
          type: "success",
        });
      })
      .catch((e) => {
        console.error("Email sending error:", e);
        setNotification({
          show: true,
          message: "Failed to send. Please try again later.",
          type: "error",
        });
      })
      .finally(() => setIsSending(false));
  };

  const hasErrors = Object.values(errors).some(Boolean);

  return (
    <div className="py-16" id="contact">
      <Title partOne="LET'S BUILD" PartTwo="SUCCESS" />

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* ── Contact Form ── */}
        <div className="rounded-2xl p-8 flex flex-col bg-card-bg border border-border">
          {/* Header */}
          <div className="mb-8">
            <span className="inline-block text-xs font-bold tracking-widest uppercase mb-3 px-3 py-1 rounded-full bg-highlight text-primary">
              Contact
            </span>
            <h3 className="text-3xl font-black tracking-tight leading-tight text-text">
              Get in touch
            </h3>
            <p className="mt-2 text-sm text-text-secondary">
              Have a project in mind? Fill out the form and I&apos;ll get back
              to you within 24 hours.
            </p>
          </div>

          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="flex flex-col gap-5 flex-1"
          >
            {/* Name + Email row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field label="Name" error={errors.userName}>
                <input
                  type="text"
                  id="userName"
                  name="userName"
                  placeholder="Your name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={formInfo.userName}
                  className={`w-full px-3.5 py-2.5 rounded-[10px] border ${
                    errors.userName ? "border-[#E84D10]" : "border-border"
                  } bg-input-bg text-sm text-text placeholder:text-text-secondary placeholder:opacity-55 outline-none transition-all duration-200 focus:border-primary focus:shadow-[0_0_0_3px_rgba(249,115,22,0.13)]`}
                />
              </Field>
              <Field label="Email" error={errors.email}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={formInfo.email}
                  className={`w-full px-3.5 py-2.5 rounded-[10px] border ${
                    errors.email ? "border-[#E84D10]" : "border-border"
                  } bg-input-bg text-sm text-text placeholder:text-text-secondary placeholder:opacity-55 outline-none transition-all duration-200 focus:border-primary focus:shadow-[0_0_0_3px_rgba(249,115,22,0.13)]`}
                />
              </Field>
            </div>

            {/* Budget */}
            <Field label="Budget" optional error={errors.budget}>
              <input
                type="number"
                id="budget"
                name="budget"
                placeholder="e.g. $500 – $2,000"
                onChange={handleChange}
                onBlur={handleBlur}
                value={formInfo.budget}
                className={`w-full px-3.5 py-2.5 rounded-[10px] border ${
                  errors.budget ? "border-[#E84D10]" : "border-border"
                } bg-input-bg text-sm text-text placeholder:text-text-secondary placeholder:opacity-55 outline-none transition-all duration-200 focus:border-primary focus:shadow-[0_0_0_3px_rgba(249,115,22,0.13)]`}
              />
            </Field>

            {/* Message */}
            <Field label="Message" error={errors.message} className="flex-1">
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project…"
                onChange={handleChange}
                onBlur={handleBlur}
                value={formInfo.message}
                rows={5}
                className={`w-full px-3.5 py-2.5 rounded-[10px] border ${
                  errors.message ? "border-[#E84D10]" : "border-border"
                } bg-input-bg text-sm text-text placeholder:text-text-secondary placeholder:opacity-55 outline-none transition-all duration-200 focus:border-primary focus:shadow-[0_0_0_3px_rgba(249,115,22,0.13)] resize-none`}
              />
            </Field>

            {/* Submit */}
            <div className="flex justify-end pt-1">
              <button
                type="submit"
                disabled={sending || hasErrors}
                className={`flex items-center gap-2 h-[44px] px-7 rounded-[10px] font-bold text-sm tracking-[0.02em] transition-all duration-200 border-none ${
                  sending || hasErrors
                    ? "bg-surface text-text-secondary cursor-not-allowed"
                    : "bg-primary text-white cursor-pointer hover:bg-primary-hover hover:-translate-y-[1px]"
                }`}
              >
                {sending ? (
                  <>
                    <span className="w-4 h-4 rounded-full border-2 border-border border-t-text-secondary inline-block animate-[spin_0.7s_linear_infinite]" />
                    Sending…
                  </>
                ) : (
                  <>Send message →</>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* ── Right column ── */}
        <div className="flex flex-col gap-6">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden flex-1 border border-border min-h-[260px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.349348447539!2d-5.5547!3d33.5892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76a3a3c3c3c3c%3A0x0!2sMeknes%2C%20Morocco!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, display: "block" }}
              className="min-h-[260px]"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map of Meknes, Morocco"
            />
          </div>

          {/* Contact info card */}
          <div className="rounded-2xl p-6 bg-card-bg border border-border">
            <p className="text-xs font-bold tracking-widest uppercase mb-5 text-text-secondary">
              Contact details
            </p>
            <div className="flex flex-col gap-4">
              {contactDetails.map(({ icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="flex items-center justify-center rounded-xl flex-shrink-0 w-[42px] h-[42px] bg-highlight text-primary">
                    {icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-0.5 text-text-secondary">
                      {label}
                    </p>
                    <p className="text-sm font-semibold text-text">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {notification.show && (
        <NotificationCard
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification({ ...notification, show: false })}
        />
      )}
    </div>
  );
}

/* ── helpers ── */
function Field({ label, error, optional, children, className = "" }) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label className="text-xs font-semibold tracking-wide text-text-secondary">
        {label}
        {optional && (
          <span className="ml-1.5 font-normal opacity-60">(optional)</span>
        )}
      </label>
      {children}
      {error && <p className="text-xs font-medium text-[#E84D10]">{error}</p>}
    </div>
  );
}
Field.propTypes = {
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  optional: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Contact;
