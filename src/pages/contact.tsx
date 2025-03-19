import React, { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "emailjs-com";
import Image from 'next/image'
import Link from 'next/link'

const contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_hn610xw",
        "template_3trgstw",
        formData,
        "Tg4Q8fYEdoShYsfQw"
      )
      .then(
        (result) => {
          setLoading(false);
          alert("Email envoyé avec succès !");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          alert("Erreur lors de l'envoi de l'email : " + error.text);
        }
      );
  };

  return (
    <div className="w-full min-h-screen bg-main-green py-16 px-4">
      <div className="w-4/5 max-w-4xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-main-yellow text-2xl font-bold">-</span>
            <h2 className="text-white text-2xl font-bold">Contact Me</h2>
          </div>
          <h3 className="text-4xl font-bold text-white mb-4">Get in Touch</h3>
          <p className="text-white/80 max-w-2xl mx-auto">
            Feel free to reach out to me for any questions or opportunities!
          </p>
        </div>

        {/* Formulaire */}
        <form onSubmit={sendEmail} className="max-w-2xl mx-auto flex flex-col items-center">
          <div className="space-y-6 w-full">
            {/* Nom */}
            <div className="relative w-full">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-white/10 border-2 border-white/20 rounded-lg px-6 py-4 text-white placeholder-white/50 focus:outline-none focus:border-main-yellow transition-colors"
              />
            </div>

            {/* Email */}
            <div className="relative w-full">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-white/10 border-2 border-white/20 rounded-lg px-6 py-4 text-white placeholder-white/50 focus:outline-none focus:border-main-yellow transition-colors"
              />
            </div>

            {/* Message */}
            <div className="relative w-full">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full bg-white/10 border-2 border-white/20 rounded-lg px-6 py-4 text-white placeholder-white/50 focus:outline-none focus:border-main-yellow transition-colors resize-none"
              />
            </div>

            {/* Bouton d'envoi */}
            <div className="flex justify-center w-full">
              <button
                type="submit"
                disabled={loading}
                className="relative group overflow-hidden bg-main-yellow text-main-green px-8 py-4 rounded-full font-bold text-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-70 w-2/3"
              >
                <span className="relative z-10">
                  {loading ? "Sending..." : "Send Message"}
                </span>
                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default contact;
