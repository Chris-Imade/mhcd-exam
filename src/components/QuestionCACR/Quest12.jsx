
import React, { memo, useEffect, useState } from "react";

const Quest12 = () => {
    const [answer, setAnswer] = useState('');
   

    useEffect(() => {
        if(answer === 'Social media to connect with customers') {
            let score = localStorage.getItem('score-cacr');
            let parsedScore = JSON.parse(score);
            localStorage.setItem('score-cacr', parsedScore + 5);
        }
    }, [answer]);

  return (
    <div className="m-6">
      <h2>
      The operational CRM is based on customer orientated processes such as in..
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
                "Selling"
              }
            />
            <p className="ml-2 text-sm">
            Selling
            </p>
          </label>
        </div>
        <div className="mt-5">
          <label className="flex items-start">
            <input onChange={(e) => setAnswer(e.target.value)} type="radio" name="answer" value={"Marketing"} />
            <p className="ml-2 text-sm">Marketing</p>
          </label>
        </div>
        <div className="mt-5">
          <label className="flex items-start">
            <input
               onChange={(e) => setAnswer(e.target.value)}
              type="radio"
              name="answer"
              value={"Customer service"}
            />
            <p className="ml-2 text-sm">Customer service</p>
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

export default memo(Quest12);
