import React, { memo, useEffect, useState } from "react";

const QuestSix = () => {
    const [answer, setAnswer] = useState('');
   

    useEffect(() => {
        if(answer === 'Yes') {
            let score = localStorage.getItem('score');
            let parsedScore = JSON.parse(score);
            localStorage.setItem('score', parsedScore + 5);
        }
    }, [answer]);


  return (
    <div className="m-6">
      <h2>
        Is a teacher really different from a facilitator? 
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
                "Yes"
              }
            />
            <p className="ml-2 text-sm">
              Yes
            </p>
          </label>
        </div>
        <div className="mt-5">
          <label className="flex items-start">
            <input onChange={(e) => setAnswer(e.target.value)} type="radio" name="answer" value={"No"} />
            <p className="ml-2 text-sm">No</p>
          </label>
        </div>
        <div className="mt-5">
          <label className="flex items-start">
            <input
              type="radio"
              name="answer"
              value={"None of the above"}
              onChange={(e) => setAnswer(e.target.value)}
            />
            <p className="ml-2 text-sm">None of the above</p>
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

export default memo(QuestSix);
