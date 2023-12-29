import React, { memo, useEffect, useState } from "react";

const QuestionThree = () => {
    const [answer, setAnswer] = useState('');
   

    useEffect(() => {
        if(answer === 'All of the above') {
            let score = localStorage.getItem('score');
            let parsedScore = JSON.parse(score);
            localStorage.setItem('score', parsedScore + 5);
        }
    }, [answer]);

  return (
    <div className="m-6">
      <h2>
      Digital learning is facilitated by technology that gives students some elements of control over what?
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
              value={
                "Time"
              }
            />
            <p className="ml-2 text-sm">
              Time
            </p>
          </label>
        </div>
        <div className="mt-5">
          <label className="flex items-start">
            <input onChange={(e) => setAnswer(e.target.value)} type="radio" name="answer" value={"Place"} />
            <p className="ml-2 text-sm">Place</p>
          </label>
        </div>
        <div className="mt-5">
          <label className="flex items-start">
            <input
              type="radio"
              name="answer"
              value={"Path"}
              onChange={(e) => setAnswer(e.target.value)}
            />
            <p className="ml-2 text-sm">Path</p>
          </label>
        </div>
        <div className="mt-5">
          <label className="flex items-start">
            <input
              type="radio"
              name="answer"
              value={"All of the above"}
              onChange={(e) => setAnswer(e.target.value)}
            />
            <p className="ml-2 text-sm">
              All of the above
            </p>
          </label>
        </div>
      </div>
    </div>
  );
};

export default memo(QuestionThree);
