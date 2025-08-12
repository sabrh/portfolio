import { useState } from "react";
import emailjs from "@emailjs/browser";
import { SiGmail } from "react-icons/si";

export default function Contact() {
  const [formData, setFormData] = useState({ subject: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { subject, message } = formData;

    if (!subject.trim() || !message.trim()) {
      alert("Please fill in both subject and message.");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_kd0w66p",
        "template_nplky1j",
        {
          subject,
          message,
          to_email: "sabrina.haque442@gmail.com",
        },
        "6wwW_FYiSC6pH5lVu"
      )
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ subject: "", message: "" });
        setLoading(false);
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        alert("Failed to send the message. Please try again.");
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="py-20" data-aos="fade-up">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-primary">Contact Me</h2>
        <p className="mb-6 font-semibold text-[#739cc1] flex items-center justify-center text-center">
          <SiGmail /> <a href="mailto:sabrina.haque442@gmail.com" className="text-[#739cc1] underline"> : sabrina.haque442@gmail.com</a>
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-[#233d50] flex flex-col gap-6 p-10 rounded-lg text-left">
          <label className="font-semibold text-[#739cc1]" htmlFor="subject">Subject *</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Enter subject"
            className="input input-bordered w-full"
            value={formData.subject}
            onChange={handleChange}
            required
          />

          <label className="font-semibold text-[#739cc1]" htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Write your message here..."
            className="textarea textarea-bordered resize-none w-full"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className={`btn btn-primary ${loading ? "loading" : ""}`}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}