
import React, { memo, useEffect, useState } from "react";

const Quest16 = () => {
    const [answer, setAnswer] = useState('');
   

    useEffect(() => {
        if(answer === 'Makes their life easier and improves their well-being') {
            let score = localStorage.getItem('score-cacr');
            let parsedScore = JSON.parse(score);
            localStorage.setItem('score-cacr', parsedScore + 5);
        }
    }, [answer]);

  return (
    <div className="m-6">
      <h2>
      Why is the customer value important?
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
                "It will improve retention"
              }
            />
            <p className="ml-2 text-sm">
            It will improve retention
            </p>
          </label>
        </div>
        <div className="mt-5">
          <label className="flex items-start">
            <input onChange={(e) => setAnswer(e.target.value)} type="radio" name="answer" value={"To maintain a long term relationship"} />
            <p className="ml-2 text-sm">To maintain a long term relationship</p>
          </label>
        </div>
        <div className="mt-5">
          <label className="flex items-start">
            <input
               onChange={(e) => setAnswer(e.target.value)}
              type="radio"
              name="answer"
              value={"It has a positive impact on the company"}
            />
            <p className="ml-2 text-sm">It has a positive impact on the company</p>
          </label>
        </div>
        <div className="mt-5">
          <label className="flex items-start">
            <input
            onChange={(e) => setAnswer(e.target.value)}
              type="radio"
              name="answer"
              value={"All of the above"}
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

export default memo(Quest16);
