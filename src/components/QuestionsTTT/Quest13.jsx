import React, { memo, useEffect, useState } from "react";

const Quest13 = () => {
    const [answer, setAnswer] = useState('');
   

    useEffect(() => {
        if(answer === 'Non of the above') {
            let score = localStorage.getItem('score');
            let parsedScore = JSON.parse(score);
            localStorage.setItem('score', parsedScore + 5);
        }
    }, [answer]);

  return (
    <div className="m-6">
      <h2>
      Facebook is the most highly engaging social media handle only in Nigeria
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
                "That's correct"
              }
            />
            <p className="ml-2 text-sm">
              That's correct
            </p>
          </label>
        </div>
        <div className="mt-5">
          <label className="flex items-start">
            <input onChange={(e) => setAnswer(e.target.value)} type="radio" name="answer" value={"Very, very correct"} />
            <p className="ml-2 text-sm">Very, very correct</p>
          </label>
        </div>
        <div className="mt-5">
          <label className="flex items-start">
            <input
              type="radio"
              name="answer"
              onChange={(e) => setAnswer(e.target.value)}
              value={"Correct"}
            />
            <p className="ml-2 text-sm">Correct</p>
          </label>
        </div>
        <div className="mt-5">
          <label className="flex items-start">
            <input
              type="radio"
              name="answer"
              onChange={(e) => setAnswer(e.target.value)}
              value={"Non of the above"}
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

export default memo(Quest13);
