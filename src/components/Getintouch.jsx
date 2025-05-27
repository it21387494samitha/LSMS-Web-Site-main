import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error('Please fix all errors before submitting');
    } else {
      setErrors({});
      toast.success('Message sent successfully!');
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-20 bg-white">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-left">
            <h2 className="text-sm font-semibold text-blue-500 uppercase tracking-wider">CONTACT</h2>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Get In Touch</h2>
        </div>


        <div className="mb-10">
          <iframe
            className="w-full h-64 md:h-96 rounded-md"
            title="SLIIT Malabe Campus Map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9458.485467736842!2d79.976979!3d6.913873!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae256db1a6771c5%3A0x2c63e344ab9a7536!2sSri%20Lanka%20Institute%20of%20Information%20Technology!5e1!3m2!1sen!2slk!4v1748057811569!5m2!1sen!2slk"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-blue-500 p-3 rounded-xl text-blue-600 text-2xl">📍</div>
              <div>
                <h4 className="font-bold text-lg">Location:</h4>
                <p>Malabe, Sri Lanka</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-blue-500 p-3 rounded-xl text-blue-600 text-2xl">📧</div>
              <div>
                <h4 className="font-bold text-lg">Email:</h4>
                <p>lsms@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-blue-500 p-3 rounded-xl text-blue-600 text-2xl">📞</div>
              <div>
                <h4 className="font-bold text-lg">Call:</h4>
                <p>+94 011 123 9876</p>
              </div>
            </div>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`p-3 border w-full rounded-md focus:outline-blue-400 ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`p-3 border w-full rounded-md focus:outline-blue-400 ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
            </div>
            <div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full p-3 border rounded-md focus:outline-blue-400 ${
                  errors.subject ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
            </div>
            <div>
              <textarea
                name="message"
                rows="5"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className={`w-full p-3 border rounded-md focus:outline-blue-400 ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>
            <button
                type="submit"
                className="
                    bg-blue-600
                    text-white
                    px-8
                    py-4
                    font-medium
                    rounded-xl
                    hover:bg-blue-700
                    cursor-pointer
                    transition-all
                    hover:shadow-lg
                    hover:shadow-blue-300
                "
                >
                Send Message
                </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;



