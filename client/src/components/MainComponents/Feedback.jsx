import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import app_api from "../../config";

const Feedback = ({ setLoader }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const submitFeedback = () => {
    setLoader(true);
    if (name === "" || email === "" || comment === "") {
      toast.error("Please fill all the fields");
      return;
    }
    app_api
      .post("/feedback", {
        fullName: name,
        email: email,
        comment: comment,
      })
      .then((res) => {
        toast.success("Feedback submitted successfully");
      })
      .catch((err) => {
        toast.error("Error submitting feedback");
      })
      .finally(() => {
        setName("");
        setEmail("");
        setComment("");
        getFeedback();
        setLoader(false);
      });
  };

  const [data, setData] = useState([]);

  const getFeedback = () => {
    setLoader(true);
    app_api
      .get("/feedback")
      .then((res) => {
        toast.success("Feedbacks fetched successfully");
        setData(res.data);
      })
      .catch((err) => {
        toast.error("Error fetching feedback");
      })
      .finally(() => {
        setLoader(false);
      });
  };

  const formatDate = (date) => {
    const d = new Date(date);
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  useEffect(() => {
    getFeedback();
  }, []);

  const getShareableData = (name, email, comment, date) => {
    return `Necleo Feeback\n\n“${comment}”\n\nBy ${name}\n[${email}]\n\n${date}`;
  };

  return (
    <div className="w-full h-full flex-col gap-4 p-5 flex justify-center items-center relative">
      <div className="w-full animate-fade-up animate-delay-[0.5s] text-3xl tracking-wider font-bold">
        Feedback
      </div>
      <div className="flex flex-col lg:flex-row overflow-y-auto lg:overflow-y-hidden w-full h-full items-center justify-center">
        <div className="w-full animate-fade-up animate-delay-[0.75s] px-4 py-4">
          <div className="mx-auto max-w-2xl">
            <div className="p-5 relative z-10 bg-white border rounded-xl">
              <div>
                <div className="mb-4">
                  <label
                    htmlFor="hs-feedback-post-comment-name-1"
                    className="block mb-2 text-sm font-medium"
                  >
                    Full name
                  </label>
                  <input
                    type="text"
                    id="hs-feedback-post-comment-name-1"
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-primary-500 focus:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none border-[1px]"
                    placeholder="Full name"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="hs-feedback-post-comment-email-1"
                    className="block mb-2 text-sm font-medium"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    id="hs-feedback-post-comment-email-1"
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-primary-500 focus:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none border-[1px]"
                    placeholder="Email address"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="hs-feedback-post-comment-textarea-1"
                    className="block mb-2 text-sm font-medium"
                  >
                    Comment
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="hs-feedback-post-comment-textarea-1"
                      name="hs-feedback-post-comment-textarea-1"
                      rows="3"
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-primary-500 focus:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none border-[1px]"
                      placeholder="Leave your comment here..."
                      onChange={(e) => {
                        setComment(e.target.value);
                      }}
                    ></textarea>
                  </div>
                </div>

                <div className="mt-6 grid">
                  <button
                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-primary-500 text-white hover:bg-opacity-90 disabled:opacity-50 disabled:pointer-events-none"
                    onClick={() => {
                      submitFeedback();
                    }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full p-4 h-full overflow-y-auto lg:overflow-y-hidden  rounded-lg bg-white">
          <div className="text-2xl mb-2 font-bold text-secondary-800">
            Recent Feedbacks
          </div>
          <div className="flex flex-col h-full overflow-y-auto w-full gap-2">
            {data &&
              data.map((item, index) => {
                return (
                  <div
                    className="w-full bg-secondary-200 rounded-lg shadow-sm shadow-secondary-500 flex justify-between cursor-pointer transition-all duration-200 flex-col gap-2 p-4 border-b-2 border-gray-200"
                    key={index}
                  >
                    <div className="flex justify-between items-center">
                      <div className="text-lg font-semibold">
                        {item.fullName}
                      </div>
                      <div className="text-xs text-secondary-800">
                        {item.email}
                      </div>
                    </div>
                    <div className="text-sm">{item.comment}</div>
                    <div className="w-full flex text-xs justify-between items-center">
                      <div className="">{formatDate(item.createdAt)}</div>
                      <div
                        className="flex items-center justify-center gap-2 hover:bg-primary-100 p-2 rounded-lg"
                        onClick={() => {
                          navigator.clipboard.writeText(
                            getShareableData(
                              item.fullName,
                              item.email,
                              item.comment,
                              formatDate(item.createdAt)
                            )
                          );
                          toast.success("Copied to clipboard");
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          fill="currentColor"
                          className="bi bi-share"
                          viewBox="0 0 16 16"
                        >
                          <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
                        </svg>
                        <div>Share</div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
