import React, { memo, useEffect, useState } from "react";

const Quest12 = () => {
    const [answer, setAnswer] = useState('');
   

    useEffect(() => {
        if(answer === 'Drop Picture') {
            let score = localStorage.getItem('score');
            let parsedScore = JSON.parse(score);
            localStorage.setItem('score', parsedScore + 5);
        }
    }, [answer]);

  return (
    <div className="m-6">
      <h2>
      What'sapp profile DP means
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
                "Direct Picture"
              }
            />
            <p className="ml-2 text-sm">
              Direct Picture
            </p>
          </label>
        </div>
        <div className="mt-5">
          <label className="flex items-start">
            <input onChange={(e) => setAnswer(e.target.value)} type="radio" name="answer" value={"Deposited Picture"} />
            <p className="ml-2 text-sm">Deposited Picture</p>
          </label>
        </div>
        <div className="mt-5">
          <label className="flex items-start">
            <input
              type="radio"
              name="answer"
              value={"Developed picture"}
              onChange={(e) => setAnswer(e.target.value)}
            />
            <p className="ml-2 text-sm">Developed picture</p>
          </label>
        </div>
        <div className="mt-5">
          <label className="flex items-start">
            <input
              type="radio"
              name="answer"
              value={"Drop Picture"}
              onChange={(e) => setAnswer(e.target.value)}
            />
            <p className="ml-2 text-sm">
              Drop Picture
            </p>
          </label>
        </div>
      </div>
    </div>
  );
};

export default memo(Quest12);
