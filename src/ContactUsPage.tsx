import React, { useState } from 'react';

const ContactUsPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-12">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary-600 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          We’d love to hear from you! Fill out the form below or reach us through the details provided.
        </p>
      </header>

      {/* Contact Form */}
      <section className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-8 md:p-12">
        <h2 className="text-3xl font-bold text-primary-500 mb-6">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Write your message"
              rows={6}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 text-lg font-medium text-white bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 rounded-lg shadow-md hover:shadow-lg hover:from-primary-500 hover:to-primary-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            Submit
          </button>
        </form>
      </section>

      {/* Contact Details */}
      <section className="text-center mt-12">
        <h2 className="text-2xl font-bold text-primary-500 mb-4">Contact Details</h2>
        <p className="text-lg text-gray-700 mb-2">
          <strong>Email:</strong> insanelysupport@gmail.com
        </p>
        <p className="text-lg text-gray-700 mb-2">
          <strong>Phone:</strong> +91 0000000000
        </p>
        <p className="text-lg text-gray-700">
          <strong>Address:</strong> 1234 Indore,452001 
        </p>
      </section>
    </div>
  );
};

export default ContactUsPage;
