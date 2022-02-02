import { Accordin } from "./Accordin";

const FAQ = () => {
  const accordinData = [
    { title: "What is a Bookmark?", content: "This is Bookmark" },
    {
      title: "How can I request a new browser?",
      content: "request a new browser",
    },
    { title: "Is there a mobile app?", content: "This is mobile app" },
    {
      title: "What about other Chromium browsers?",
      content: "This is Chromium browsers",
    },
  ];
  return (
    <>
      <section className="bg-bookmark-white py-20">
        <div className="container">
          {/* { Heading}  */}
          <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
            <h1 className="text-3xl text-center text-bookmark-blue">
              Frequently Asked Questions
            </h1>
            <p className="text-center text-bookmark-grey mt-4">
              Here are some of our FAQs. If you have any other questions you’d
              like answered please feel free to email us.
            </p>
          </div>
          {/* FAQ Items  */}
          <div className="flex flex-col sm:w-3/4 lg:w-5/12 mt-12 mx-auto">
            {accordinData.map(({ title, content }) => (
              <Accordin title={title} content={content} />
            ))}
            <button
              type="button"
              className="mt-12 flex self-center btn btn-purple hover:bg-neutral-200 hover:text-black"
            >
              More Info
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
