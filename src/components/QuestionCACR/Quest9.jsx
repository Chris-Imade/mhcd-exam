
import React, { memo, useEffect, useState } from "react";

const Quest9 = () => {
    const [answer, setAnswer] = useState('');
   

    useEffect(() => {
        if(answer === 'Disagree') {
            let score = localStorage.getItem('score-cacr');
            let parsedScore = JSON.parse(score);
            localStorage.setItem('score-cacr', parsedScore + 5);
        }
    }, [answer]);

  return (
    <div className="m-6">
      <h2>
      The difference between customer acquisition and retention essentially comes down to prioritization of a new customer vs. an existing customer.
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
                "Agree"
              }
            />
            <p className="ml-2 text-sm">
            Agree
            </p>
          </label>
        </div>
        <div className="mt-5">
          <label className="flex items-start">
            <input onChange={(e) => setAnswer(e.target.value)} type="radio" name="answer" value={"Disagree"} />
            <p className="ml-2 text-sm">Disagree</p>
          </label>
        </div>
        <div className="mt-5">
          <label className="flex items-start">
            <input
               onChange={(e) => setAnswer(e.target.value)}
              type="radio"
              name="answer"
              value={"Strongly Agree"}
            />
            <p className="ml-2 text-sm">Strongly Agree</p>
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
            <p className="ml-2 text-sm">
            Strongly disagree
            </p>
          </label>
        </div>
      </div>
    </div>
  );
};

export default memo(Quest9);
