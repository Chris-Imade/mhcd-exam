import React, { memo, useEffect, useState } from "react";

const Quest19 = () => {
    const [answer, setAnswer] = useState('');
   

    useEffect(() => {
        if(answer === 'To support learning') {
            let score = localStorage.getItem('score');
            let parsedScore = JSON.parse(score);
            localStorage.setItem('score', parsedScore + 5);
        }
    }, [answer]);

  return (
    <div className="m-6">
      <h2>
      Why do you want to be a facilitator?
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
                "To support learning"
              }
            />
            <p className="ml-2 text-sm">
              To support learning 
            </p>
          </label>
        </div>
        <div className="mt-5">
          <label className="flex items-start">
            <input onChange={(e) => setAnswer(e.target.value)} type="radio" name="answer" value={"To join the classroom"} />
            <p className="ml-2 text-sm">To join the classroom</p>
          </label>
        </div>
        <div className="mt-5">
          <label className="flex items-start">
            <input
              type="radio"
              name="answer"
              onChange={(e) => setAnswer(e.target.value)}
              value={"To answer questions"}
            />
            <p className="ml-2 text-sm">To answer questions</p>
          </label>
        </div>
        <div className="mt-5">
          <label className="flex items-start">
            <input
              type="radio"
              name="answer"
              onChange={(e) => setAnswer(e.target.value)}
              value={"None of the above"}
            />
            <p className="ml-2 text-sm">
              None of the above
            </p>
          </label>
        </div>
      </div>
    </div>
  );
};

export default memo(Quest19);
