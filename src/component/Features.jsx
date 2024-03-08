import React from "react";

const Features = () => {
  return (
    <section id="features">
      {/* Flex Container */}
      <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
        {/* What's Different */}
        <div className="flex flex-col space-y-12 md:w-1/2">
          <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
            What's different about US?
          </h2>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
            Ditch the complexities. In buyers simply post what they need, and
            sellers bid to meet those needs. Effortless, efficient, and tailored
            just for you.
          </p>
        </div>
        <>
          <div className="flex flex-col space-y-8 md:w-1/2">
            {/* Buryer Posting */}
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              {/* Heading */}
              <div className="rounded-l-full bg-buryerColor md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-buryerColor">
                    01
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Buryer Posting
                  </h3>
                </div>
              </div>

              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  Buryer Posting Feature
                </h3>
                <p className="text-darkGrayishBlue">
                  Allow users to post what they are looking for (burying their
                  request). Describe how this feature benefits users in finding
                  specific items or services.
                </p>
              </div>
            </div>

            {/* Seller Bidding */}
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              {/* Heading */}
              <div className="rounded-l-full bg-sellerColor md:bg-transparent">
                <div className="flex items-cnter space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-sellerColor">
                    02
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Seller Bidding
                  </h3>
                </div>
              </div>

              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  Seller Bidding Feature
                </h3>
                <p className="text-darkGrayishBlue">
                  Enable sellers to bid on buryer's requests. Highlight the
                  advantages for sellers in this bidding process and how it
                  creates a dynamic marketplace.
                </p>
              </div>
            </div>

            {/* Additional Feature */}
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              {/* Heading */}
              <div className="rounded-l-full bg-yourColor md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-yourColor">
                    03
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    The Hustle
                  </h3>
                </div>
              </div>

              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  THe Hustle
                </h3>
                <p className="text-darkGrayishBlue">
                  Convey the third feature's significance, emphasizing how it
                  simplifies tasks for users and enhances their overall
                  experience.
                </p>
              </div>
            </div>
          </div>
        </>
      </div>
    </section>
  );
};

export default Features;
