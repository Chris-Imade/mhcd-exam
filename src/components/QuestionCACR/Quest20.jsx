import React, { memo, useEffect, useState } from "react";
import Award from "../../images/award.png";

const Quest20 = () => {
  const [answer, setAnswer] = useState("");
  const [passed, setPassed] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState(false);

  console.log(data, error);

  const onFinish = async () => {
    let score = localStorage.getItem("score-cacr");
    let parsedScore = JSON.parse(score);
    if (parsedScore > 50) {
      setPassed(true);
    } else {
      setFailed(true);
    }
  };

  const onDone = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://mhcd-exam-portal.onrender.com/exams/ttt",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, email }),
        }
      );

      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }

      const result = await response.json();
      setLoading(false);
      setData(result);
    } catch (error) {
      setError(error.message || "An error occurred.");
      setLoading(false);
    }
  };

  useEffect(() => {
    if (answer === "Strongly disagree") {
      let score = localStorage.getItem("score-cacr");
      let parsedScore = JSON.parse(score);
      localStorage.setItem("score-cacr", parsedScore + 5);
    }
  }, [answer]);

  return (
    <div>
      {!passed ? (
        <div>
          {failed ? (
            <div className="w-full h-[90vh] flex justify-center items-center text-center">
              😢
              <h1 className="text-4xl font-semibold">
                You did not pass the test, Try Again.
              </h1>
            </div>
          ) : (
            <div className="m-6">
              <h2>
                The purchasing funnel concept is used in marketing to guide
                promotional campaigns targeting different companies
              </h2>

              <h5 className="mt-4">Select One(1):</h5>

              <div className="bg-slate-200 px-2 pt-[1px] pb-2">
                {/* Answers */}
                <div className="mt-5">
                  <label className="flex items-start">
                    <input
                      type="radio"
                      name="answer"
                      onChange={(e) => setAnswer(e.target.value)}
                      value={"Absolutely correct"}
                    />
                    <p className="ml-2 text-sm">Absolutely correct</p>
                  </label>
                </div>
                <div className="mt-5">
                  <label className="flex items-start">
                    <input
                      onChange={(e) => setAnswer(e.target.value)}
                      type="radio"
                      name="answer"
                      value={"Strongly disagree"}
                    />
                    <p className="ml-2 text-sm">Strongly disagree</p>
                  </label>
                </div>
              </div>


              <button onClick={onFinish} className="w-full bg-[#EF6330] mt-32 rounded-md text-white font-semibold py-2">Submit</button>
            </div>
          )}
        </div>
      ) : (
        <div class="w-full text-center flex flex-col justify-center items-center mt-5">
          <img width={300} src={Award} alt="award" />
          <h3 className="text-2xl font-semibold">Congratulations 🎉</h3>
          <p class="won">You've passed our test for Training The Trainer</p>

          <div className="w-full flex flex-col justify-center items-center">
            <div className="w-[90vw] mt-4">
              <h4>Enter Your Full Name</h4>
              <input
                onChange={(e) => setUsername(e.target.value)}
                className="outline-none px-3 py-2 bg-slate-200"
                type="text"
                placeholder="Enter You Full Name"
              />
            </div>
            <div className="w-[90vw] mt-4">
              <h4>Enter A Valid Email</h4>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="outline-none px-3 py-2 bg-slate-200"
                type="text"
                placeholder="Your Email"
              />
            </div>
            <button
              onClick={onDone}
              className="bg-purple-500 text-white rounded-md py-2 px-3 mt-3"
            >
              Receive Certificate
            </button>

            <p className="bg-green-200 text-green-500">
              {data && data.message}
            </p>
            <p className="text-red-500 bg-orange-200">{error && error.error}</p>
            <p>{loading ? "Loading..." : ""}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(Quest20);
