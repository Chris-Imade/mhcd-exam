import React, { memo, useEffect, useState } from "react";

const Quest18 = () => {
    const [answer, setAnswer] = useState('');
   

    useEffect(() => {
        if(answer === 'SSCE') {
            let score = localStorage.getItem('score');
            let parsedScore = JSON.parse(score);
            localStorage.setItem('score', parsedScore + 5);
        }
    }, [answer]);

  return (
    <div className="m-6">
      <h2>
      What is the basic qualification required of a Facilitator ?
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
                "Primary 6 Certificate"
              }
            />
            <p className="ml-2 text-sm">
              Primary 6 Certificate
            </p>
          </label>
        </div>
        <div className="mt-5">
          <label className="flex items-start">
            <input onChange={(e) => setAnswer(e.target.value)} type="radio" name="answer" value={"Junior WAEC"} />
            <p className="ml-2 text-sm">Junior WAEC</p>
          </label>
        </div>
        <div className="mt-5">
          <label className="flex items-start">
            <input
              type="radio"
              onChange={(e) => setAnswer(e.target.value)}
              name="answer"
              value={"SSCE"}
            />
            <p className="ml-2 text-sm">SSCE</p>
          </label>
        </div>
        <div className="mt-5">
          <label className="flex items-start">
            <input
            onChange={(e) => setAnswer(e.target.value)}
              type="radio"
              name="answer"
              value={"Masters Degree"}
            />
            <p className="ml-2 text-sm">
              Masters Degree
            </p>
          </label>
        </div>
      </div>
    </div>
  );
};

export default memo(Quest18);
