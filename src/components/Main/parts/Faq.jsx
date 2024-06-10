import React from "react";

function Faq() {
  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <div className="max-w-screen-xl mx-auto pt-12 pb-16 sm:pt-16 sm:pb-20 px-4 sm:px-6 lg:pt-20 lg:pb-28 lg:px-8">
          <h2 className="text-3xl leading-9 font-extrabold text-gray-900 text-center">
            Frequently asked questions
          </h2>
          <div className="mt-6 border-t-4 border-gray-100 pt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 md:gap-y-12">
              <dl>
                <dt className="font-medium leading-6 text-gray-900 text-lg mt-4">
                  What is the purpose of this community?
                </dt>
                <dd className="mt-4">
                  <p className="leading-6 text-base text-gray-500">
                    Our community is a vibrant space where tech enthusiasts come
                    together to share knowledge, insights, and experiences,
                    fostering learning and growth for everyone involved.
                  </p>
                </dd>
              </dl>

              <dl>
                <dt className="font-medium leading-6 text-gray-900 text-lg mt-4">
                  What kind of content can I expect from the community?
                </dt>
                <dd className="mt-4">
                  <p className="leading-6 text-base text-gray-500">
                    You can expect a variety of content, including tutorials,
                    articles, webinars, community projects, and discussions on
                    the latest tech trends and innovations.
                  </p>
                </dd>
              </dl>

              <dl>
                <dt className="font-medium leading-6 text-gray-900 text-lg mt-4">
                  How can I contribute to the community?
                </dt>
                <dd className="mt-4">
                  <p className="leading-6 text-base text-gray-500">
                    You can contribute by sharing your knowledge and experiences
                    through posts, participating in discussions, joining
                    projects, and attending or hosting webinars and events.
                  </p>
                </dd>
              </dl>

              <dl>
                <dt className="font-medium leading-6 text-gray-900 text-lg mt-4">
                  Are there any rules or guidelines for community participation?
                </dt>
                <dd className="mt-4">
                  <p className="leading-6 text-base text-gray-500">
                    Yes, we have community guidelines to ensure a respectful and
                    productive environment. These guidelines include being
                    respectful, staying on topic, and no spam or self-promotion.
                  </p>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
