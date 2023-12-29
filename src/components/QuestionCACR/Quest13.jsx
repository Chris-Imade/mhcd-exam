
import React, { memo, useEffect, useState } from "react";

const Quest13 = () => {
    const [answer, setAnswer] = useState('');
   

    useEffect(() => {
        if(answer === 'True') {
            let score = localStorage.getItem('score-cacr');
            let parsedScore = JSON.parse(score);
            localStorage.setItem('score-cacr', parsedScore + 5);
        }
    }, [answer]);

  return (
    <div className="m-6">
      <h2>
      Customers needs influences customer's  decision-making during the purchasing process
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
                "True"
              }
            />
            <p className="ml-2 text-sm">
            True
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
              value={"False"}
            />
            <p className="ml-2 text-sm">False</p>
          </label>
        </div>
      </div>
    </div>
  );
};

export default memo(Quest13);
