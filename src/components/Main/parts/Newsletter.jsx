import React from "react";

function Newsletter() {
  return (
    <div>
      <section
        id="newsletter"
        className="py-10 -mb-10 md:py-16 lg:py-20 before:w-full before:h-1/2 relative z-0 before:-z-10 before:absolute before:bottom-0 before:left-0 before:bg-gray-50"
      >
        <div className="box-border shadow-sm mx-auto max-w-6xl max-2xl:w-[1200px] max-xl:w-[980px] max-lg:w-full max-md:w-full max-sm:w-full lg::px-8 flex justify-between p-10 md:p-12 lg:p-16 bg-blue-50 rounded-lg flex-col md:flex-row gap-8 lg:gap-10">
          <div className="grow">
            <h2 className="text-2xl md:text-[28px] font-semibold">
              Join the newsletter
            </h2>
            <p className="text-gray-500 text-lg md:text-[20px] mt-2 md:mt-3">
              Get the latest insights and updates straight to your inbox.
            </p>
          </div>
          <form className="grow">
            <div className="flex gap-2 flex-col md:flex-row items-start">
              <div className="space-y-2">
                <input
                  className="flex w-full rounded-md border border-gray-300 bg-white px-[18px] py-[10px] text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Enter your email"
                  id=":newsletter-form"
                  aria-describedby=":R5mjtsja:-form-item-description"
                  aria-invalid="false"
                  name="email"
                  value=""
                />
              </div>
              <button
                className="inline-flex gap-2 lg:gap-3 items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow bg-blue-500 text-white hover:bg-blue-400 px-[18px] py-[10px] text-base"
                type="submit"
              >
                Subscribe
              </button>
            </div>
            <p className="text-sm md:text-base text-gray-500 mt-2">
              Your privacy is important. We'll never share your email.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Newsletter;
