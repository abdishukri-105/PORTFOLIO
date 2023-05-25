import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Form = () => {
  const [formValues, setFormValues] = useState({
    first_name: '',
    last_name: '',
    email: '',
    message: '',
  });

  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = 'service_email';
    const templateId = 'template_6539uxg';
    const userId = 'ectIXcjfg9xRxCqA7';

    emailjs
      .send(serviceId, templateId, formValues, userId)
      .then((response) => {
        console.log('SUCCESS', response.status, response.text);
        setFormValues({
          first_name: '',
          last_name: '',
          email: '',
          message: '',
        });
        setMessage('Thank you for contacting me. I will get back to you as soon as possible.');
      })
      .catch((err) => {
        console.log('FAILED:', err);
        setMessage('Sorry, an error occurred. Please try again later.');
      });
  };

  return (
    <section>
      <div className="mb-20">
        <h2 className="text-center text-4xl font-bold">CONTACT</h2>
        <p className="text-center">
          Interested in working together? We should queue up a time to chat. I'll buy the coffee.
        </p>
      </div>

    

      <form
        onSubmit={handleSubmit}
        className="lg:w-2/3 md:w-3/4 sm:3/4 bg-white shadow-lg p-8 rounded-lg mx-auto mt-8"
      >
        <div className="mb-10">
          <label htmlFor="first_name" className="block mb-2 font-bold">
            First Name
          </label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            className="w-full px-6 py-5 border border-gray-300 rounded-md focus:outline-none bg-gray-200"
            placeholder="Enter your first name"
            value={formValues.first_name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-10">
          <label htmlFor="last_name" className="block mb-2 font-bold">
            Last Name
          </label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            className="w-full px-6 py-5 border border-gray-300 rounded-md focus:outline-none bg-gray-200"
            placeholder="Enter your last name"
            value={formValues.last_name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-10">
          <label htmlFor="email" className="block mb-2 font-bold">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-6 py-5 border border-gray-300 rounded-md focus:outline-none bg-gray-200"
            placeholder="Enter your email"
            value={formValues.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-10">
          <label htmlFor="message" className="block mb-2 font-bold">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="w-full px-6 py-5 border border-gray-300 rounded-md focus:outline-none bg-gray-200"
            placeholder="Enter your message"
            value={formValues.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="lg:w-1/5 shadow-lg px-5 py-3 text-white text-lg font-bold bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none focus:ring focus:ring-purple-300"
        >
          Submit
        </button>

        {message && (
        <p className="p-2 border-purple-200 border mx-4 text-center mt-5 text-purple-600">
          {message}
        </p>
      )}
      
      </form>
    </section>
  );
};

export default Form;
