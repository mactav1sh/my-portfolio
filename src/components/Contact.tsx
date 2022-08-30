import React from 'react';

const Contact = () => {
  return (
    <section className="mx-auto max-w-5xl">
      <div className="w-min mx-2">
        {/* HEADLINE */}
        <h2 className="text-2xl lg:text-4xl font-semibold uppercase mb-1">
          Contact
        </h2>
        <div className="h-1 md:h-1.5 w-1/2 bg-gradient-to-r from-red-600 to-orange-500"></div>
      </div>

      {/* Desc */}
      <div className="font-semibold md:text-xl flex flex-col space-y-1 items-center pt-10 pb-16">
        <p className="text-center">
          Interested in working together or have a question?
        </p>
        <p>
          Contact me at{' '}
          <a
            href="mailto:tokhy104@gmail.com"
            className="font-bold text-transparent bg-gradient-to-br from-red-600 to-orange-500 bg-clip-text"
          >
            tokhy104@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
