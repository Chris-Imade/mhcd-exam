import React, { memo, useEffect, useState } from "react";

const QuestFive = () => {
    const [answer, setAnswer] = useState('');
   

    useEffect(() => {
        if(answer === 'Really true') {
            let score = localStorage.getItem('score');
            let parsedScore = JSON.parse(score);
            localStorage.setItem('score', parsedScore + 5);
        }
    }, [answer]);

  return (
    <div className="m-6">
      <h2>
      Digital Facilitation is the uses of digital platforms and technologies to enable large groups of people to work together.
      </h2>

      <h5 className="mt-4">Select One(1):</h5>

      <div className="bg-slate-200 px-2 pt-[1px] pb-2">
        {/* Answers */}
        <div className="mt-5">
          <label className="flex items-start">
            <input
              type="radio"
              name="answer"
              value={
                "Really true"
              }
              onChange={(e) => setAnswer(e.target.value)}
            />
            <p className="ml-2 text-sm">
              Really true
            </p>
          </label>
        </div>
        <div className="mt-5">
          <label className="flex items-start">
            <input onChange={(e) => setAnswer(e.target.value)} type="radio" name="answer" value={"Strongly disagree"} />
            <p className="ml-2 text-sm">Strongly disagree</p>
          </label>
        </div>
        <div className="mt-5">
          <label className="flex items-start">
            <input
              type="radio"
              name="answer"
              value={"Could be true"}
              onChange={(e) => setAnswer(e.target.value)}
            />
            <p className="ml-2 text-sm">Could be true</p>
          </label>
        </div>
        <div className="mt-5">
          <label className="flex items-start">
            <input
              type="radio"
              name="answer"
              value={"Non of the above"}
              onChange={(e) => setAnswer(e.target.value)}
            />
            <p className="ml-2 text-sm">
              Non of the above
            </p>
          </label>
        </div>
      </div>
    </div>
  );
};

export default memo(QuestFive);
