import React, { memo, useEffect, useState } from "react";

const QuestFour = () => {
    const [answer, setAnswer] = useState('');
   

    useEffect(() => {
        if(answer === 'Not True') {
            let score = localStorage.getItem('score');
            let parsedScore = JSON.parse(score);
            localStorage.setItem('score', parsedScore + 5);
        }
    }, [answer]);

  return (
    <div className="m-6">
      <h2>
      A facilitator do not help in order to achieve specific goal
      </h2>

      <h5 className="mt-4">Select One(1):</h5>

      <div className="bg-slate-200 px-2 pt-[1px] pb-2">
        {/* Answers */}
        <div className="mt-5">
          <label className="flex items-start">
            <input
              type="radio"
              name="answer"
              value={
                "Very True"
              }
              onChange={(e) => setAnswer(e.target.value)}
            />
            <p className="ml-2 text-sm">
              Very True
            </p>
          </label>
        </div>
        <div className="mt-5">
          <label className="flex items-start">
            <input onChange={(e) => setAnswer(e.target.value)} type="radio" name="answer" value={"Not True"} />
            <p className="ml-2 text-sm">Not True</p>
          </label>
        </div>
        <div className="mt-5">
          <label className="flex items-start">
            <input
              type="radio"
              name="answer"
              value={"May be True"}
              onChange={(e) => setAnswer(e.target.value)}
            />
            <p className="ml-2 text-sm">Maybe True</p>
          </label>
        </div>
        <div className="mt-5">
          <label className="flex items-start">
            <input
              type="radio"
              name="answer"
              value={"May Not be True"}
              onChange={(e) => setAnswer(e.target.value)}
            />
            <p className="ml-2 text-sm">
              May Not be True
            </p>
          </label>
        </div>
      </div>
    </div>
  );
};

export default memo(QuestFour);
