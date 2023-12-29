import React, { memo, useEffect, useState } from "react";

const Quest15 = () => {
    const [answer, setAnswer] = useState('');
   

    useEffect(() => {
        if(answer === 'All of the above') {
            let score = localStorage.getItem('score');
            let parsedScore = JSON.parse(score);
            localStorage.setItem('score', parsedScore + 5);
        }
    }, [answer]);

  return (
    <div className="m-6">
      <h2>
      Any what'sapp user you share an invite link with cannot join the classroom.
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
                "This is very true"
              }
            />
            <p className="ml-2 text-sm">
              This is very true
            </p>
          </label>
        </div>
        <div className="mt-5">
          <label className="flex items-start">
            <input onChange={(e) => setAnswer(e.target.value)} type="radio" name="answer" value={"This is really true"} />
            <p className="ml-2 text-sm">This is really true</p>
          </label>
        </div>
        <div className="mt-5">
          <label className="flex items-start">
            <input
              type="radio"
              name="answer"
              value={"Strongly agree"}
              onChange={(e) => setAnswer(e.target.value)}
            />
            <p className="ml-2 text-sm">Strongly agree</p>
          </label>
        </div>
        <div className="mt-5">
          <label className="flex items-start">
            <input
              type="radio"
              name="answer"
              value={"All of the above"}
              onChange={(e) => setAnswer(e.target.value)}
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

export default memo(Quest15);
