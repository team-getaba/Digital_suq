import { Link } from "react-router-dom";

import illustrationIntro from "../assets/images/illustration-intro.svg";

const Hero = () => {
  return (
    <section id="hero">
      {/* Flex Container */}
      <div className="container flex flex-col-reverse items-center justify-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
        {/* Left Item */}
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
            Bring everyone together to get better products
          </h1>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
            Unleash the power of Buying! Seamlessly connecting consumers and
            buyers, our platform transforms the way materials exchange hands.
            Upload your materials to the bay and let the bidding begin! Uniting
            a diverse community, we bring everyone together to elevate the
            process of buying and selling.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link
              to="/login"
              className="p-3 px-6 pt-2 text-white bg-blue-500 bg-brightRed flex justify-center items-center rounded-full baseline hover:bg-brightRedLight"
            >
              Get Started
            </Link>
          </div>
        </div>
        {/* Image */}
        <div className="md:w-1/2">
          <img
            className="w-full opacity-80 rounded-lg mb-[7em]"
            src="https://www.solutions4ecommerce.com/wp-content/uploads/2018/01/ECommerce_Illustration_.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
