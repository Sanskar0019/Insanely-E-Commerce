import React from 'react';

const AboutUsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-12">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary-600 mb-4">About Us</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Discover our story, vision, and mission.
        </p>
      </header>

      {/* Content Section */}
      <section className="max-w-5xl bg-white rounded-lg shadow-lg p-8 md:p-12 text-gray-800">
        <h2 className="text-3xl font-bold text-primary-500 mb-6">Our Story</h2>
        <p className="text-lg leading-7 mb-8">
          Established with a passion for delivering quality and style, our brand has been at the forefront of innovation 
          in <span className="font-semibold">fashion, lifestyle, and accessories</span>. We started with a vision to bridge the gap between affordability and premium products, crafting designs that resonate with every individual's unique style.
        </p>

        <h2 className="text-3xl font-bold text-primary-500 mb-6">Our Mission</h2>
        <p className="text-lg leading-7 mb-8">
          To empower individuals by providing them with high-quality, stylish, and sustainable products. We believe in 
          creating solutions that are not just aesthetically pleasing but also environmentally responsible.
        </p>

        <h2 className="text-3xl font-bold text-primary-500 mb-6">Why Choose Us?</h2>
        <ul className="list-disc pl-6 text-lg leading-7 space-y-4 mb-8">
          <li><span className="font-semibold">Quality:</span> We use only the finest materials to ensure durability and style.</li>
          <li><span className="font-semibold">Affordability:</span> Premium products at prices that suit every budget.</li>
          <li><span className="font-semibold">Sustainability:</span> We're committed to reducing our ecological footprint.</li>
          <li><span className="font-semibold">Customer First:</span> Dedicated to providing an unparalleled shopping experience.</li>
        </ul>

        <h2 className="text-3xl font-bold text-primary-500 mb-6">Join Our Journey</h2>
        <p className="text-lg leading-7">
          We are more than just a brand—we're a community. Join us in redefining the way we interact with fashion 
          and lifestyle products. Together, let's create a better, more stylish tomorrow.
        </p>
      </section>

      {/* Footer */}
      <footer className="text-center mt-12">
        <p className="text-gray-600">
          Have questions? Reach out to us at 
          <a href="mailto:support@example.com" className="text-primary-500 underline ml-1">
            insanelysupport@gmail.com
          </a>.
        </p>
      </footer>
    </div>
  );
};

export default AboutUsPage;
