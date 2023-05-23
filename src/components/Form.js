import React from 'react';

const Form = () => {
  return (
    <section>
      <div className='mb-20'>
        <h2 className="text-center text-4xl font-bold">CONTACT</h2>
        <p className="text-center ">
        Interested in working together? We should queue up a time to chat. I’ll buy the coffee.
  
        </p>
      </div>

      <form className="lg:w-2/3 md:w-3/4 sm:3/4  bg-white shadow-lg p-8 rounded-lg mx-auto mt-8">
        <div className="mb-10">
          <label htmlFor="name" className="block mb-2 font-bold">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-6 py-5 border border-gray-300 rounded-md focus:outline-none bg-gray-200 "
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-10">
          <label htmlFor="email" className="block mb-2 font-bold">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-6 py-5 border border-gray-300 rounded-md focus:outline-none bg-gray-200 "
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-10">
          <label htmlFor="message" className="block mb-2 font-bold">
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            className="w-full px-6 py-5 border border-gray-300 rounded-md focus:outline-none bg-gray-200 "
            placeholder="Enter your message"
          ></textarea>
        </div>

        <button
          type="submit"
          className="lg:w-1/5 shadow-lg px-5 py-3 text-white text-lg font-bold bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none focus:ring focus:ring-purple-300"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Form;
