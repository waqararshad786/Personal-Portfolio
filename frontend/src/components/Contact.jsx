import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/contact`, {
        name: formData.name,
        email: formData.email,
        message: formData.message
      });
      if (response.data.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        setError('Failed to send message. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setError('Server error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#050810] relative">
      <div className="absolute bottom-0 left-20 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl" />
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-cyan-400 text-xs font-semibold uppercase tracking-wider bg-cyan-400/10 px-3 py-1 rounded-full">Get in Touch</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">Let's Work Together</h2>
        </div>

        <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden border border-white/10 backdrop-blur-sm bg-white/5">
          {/* Left side - contact info (unchanged) */}
          <div className="md:w-2/5 p-8 bg-gradient-to-br from-cyan-500/20 to-purple-600/20">
            <h3 className="text-2xl font-bold text-white mb-3">Contact Information</h3>
            <p className="text-slate-300 text-sm mb-8">Let's connect and bring your ideas to life.</p>
            <div className="space-y-5">
              {[
                { icon: 'fas fa-phone-alt', text: '+92 314 0654083' },
                { icon: 'fas fa-envelope', text: 'waqar00arshad@gmail.com' },
                { icon: 'fas fa-map-marker-alt', text: 'Ghousia Colony, Lahore' },
                { icon: 'fab fa-github', text: 'github.com/waqararshad786', link: 'https://github.com/waqararshad786' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center"><i className={`${item.icon} text-cyan-400`}></i></div>
                  {item.link ? <a href={item.link} target="_blank" rel="noreferrer" className="text-slate-300 text-sm hover:text-cyan-400 transition">{item.text}</a> : <span className="text-slate-300 text-sm">{item.text}</span>}
                </div>
              ))}
            </div>
            <div className="flex gap-4 mt-8">
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/20 transition"><i className="fab fa-twitter"></i></a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/20 transition"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/20 transition"><i className="fab fa-instagram"></i></a>
            </div>
          </div>

          {/* Right side - form */}
          <div className="md:w-3/5 p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 transition"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 transition"
                />
              </div>
              <div>
                <textarea
                  rows="3"
                  placeholder="Your Message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 transition resize-none"
                />
              </div>
              {error && <div className="bg-red-500/20 border border-red-500 text-red-300 p-2 rounded-lg text-xs text-center">{error}</div>}
              {submitted && <div className="bg-emerald-500/20 border border-emerald-500 text-emerald-300 p-2 rounded-lg text-xs text-center">✅ Message sent successfully! I'll get back to you soon.</div>}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold py-3 rounded-xl hover:shadow-lg transition flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? 'Sending...' : 'Send Message'} <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;