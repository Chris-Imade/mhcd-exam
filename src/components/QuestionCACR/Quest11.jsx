
import React, { memo, useEffect, useState } from "react";

const Quest11 = () => {
    const [answer, setAnswer] = useState('');
   

    useEffect(() => {
        if(answer === '4') {
            let score = localStorage.getItem('score-cacr');
            let parsedScore = JSON.parse(score);
            localStorage.setItem('score-cacr', parsedScore + 5);
        }
    }, [answer]);

  return (
    <div className="m-6">
      <h2>
      CRM Systems are divided into how many?
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
                "6"
              }
            />
            <p className="ml-2 text-sm">
            6
            </p>
          </label>
        </div>
        <div className="mt-5">
          <label className="flex items-start">
            <input onChange={(e) => setAnswer(e.target.value)} type="radio" name="answer" value={"9"} />
            <p className="ml-2 text-sm">9</p>
          </label>
        </div>
        <div className="mt-5">
          <label className="flex items-start">
            <input
               onChange={(e) => setAnswer(e.target.value)}
              type="radio"
              name="answer"
              value={"14"}
            />
            <p className="ml-2 text-sm">14</p>
          </label>
        </div>
        <div className="mt-5">
          <label className="flex items-start">
            <input
            onChange={(e) => setAnswer(e.target.value)}
              type="radio"
              name="answer"
              value={"4"}
            />
            <p className="ml-2 text-sm">
            4
            </p>
          </label>
        </div>
      </div>
    </div>
  );
};

export default memo(Quest11);
