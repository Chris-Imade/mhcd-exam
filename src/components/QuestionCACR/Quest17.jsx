
import React, { memo, useEffect, useState } from "react";

const Quest17 = () => {
    const [answer, setAnswer] = useState('');
   

    useEffect(() => {
        if(answer === 'All of the above') {
            let score = localStorage.getItem('score-cacr');
            let parsedScore = JSON.parse(score);
            localStorage.setItem('score-cacr', parsedScore + 5);
        }
    }, [answer]);

  return (
    <div className="m-6">
      <h2>
      When building a balance team, what strategies should you consider?
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
                "Choose a leader"
              }
            />
            <p className="ml-2 text-sm">
            Choose a leader
            </p>
          </label>
        </div>
        <div className="mt-5">
          <label className="flex items-start">
            <input onChange={(e) => setAnswer(e.target.value)} type="radio" name="answer" value={"Establish a clear goal"} />
            <p className="ml-2 text-sm">Establish a clear goal</p>
          </label>
        </div>
        <div className="mt-5">
          <label className="flex items-start">
            <input
               onChange={(e) => setAnswer(e.target.value)}
              type="radio"
              name="answer"
              value={"Create open lines of communication"}
            />
            <p className="ml-2 text-sm">Create open lines of communication</p>
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

export default memo(Quest17);
