import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function ContactForm() {
  const [form, setForm] = useState({ from_name: "", from_email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaToken) {
      alert("⚠️ Please verify the reCAPTCHA first!");
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSent(true);
      setForm({ from_name: "", from_email: "", message: "" });
      setCaptchaToken(null);
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full overflow-y-auto bg-[#f9fbff] rounded-md p-8 flex flex-col items-center">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact Me</h2>

      {sent ? (
        <div className="text-green-600 font-medium text-center">
          ✅ Message sent successfully! I’ll get back to you soon.
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white shadow-md border border-gray-200 rounded-lg p-6 space-y-4"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="from_name"
              value={form.from_name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="from_email"
              value={form.from_email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your email address"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your message here..."
            ></textarea>
          </div>

          {/* 🔹 reCAPTCHA */}
          <div className="flex justify-center">
            <ReCAPTCHA
              sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
              onChange={setCaptchaToken}
            />
          </div>

          {/* 🔹 Send Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2.5 text-sm font-semibold text-white rounded-md transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}

      {/* 🔹 Social Links */}
      <div className="mt-6 flex justify-center space-x-6 text-gray-600">
        <a
          href="https://www.linkedin.com/in/shubho-mukherjee-529209193/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-700 transition"
        >
          <FaLinkedin size={20} />
        </a>
        <a
          href="https://x.com/ShubhoMukherje8"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition"
        >
          <FaTwitter size={20} />
        </a>
        <a
          href="https://www.instagram.com/shubho__mukherjee/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="mailto:shubhobrotom@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-500 transition"
        >
          <FaEnvelope size={20} />
        </a>
      </div>

      <p className="mt-3 text-xs text-gray-500">
        or mail me directly at{" "}
        <a
          href="mailto:shubhobrotom@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          shubhobrotom@gmail.com
        </a>
      </p>
    </div>
  );
}
