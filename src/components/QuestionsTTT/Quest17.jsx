import React, { memo, useEffect, useState } from "react";

const Quest16 = () => {
    const [answer, setAnswer] = useState('');
   

    useEffect(() => {
        if(answer === 'True') {
            let score = localStorage.getItem('score');
            let parsedScore = JSON.parse(score);
            localStorage.setItem('score', parsedScore + 5);
        }
    }, [answer]);

  return (
    <div className="m-6">
      <h2>
      The role of the online Facilitator is to deliver courses in accordance with the course design and requirements.
      </h2>


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
            <input onChange={(e) => setAnswer(e.target.value)} type="radio" name="answer" value={"False"} />
            <p className="ml-2 text-sm">False</p>
          </label>
        </div>
      </div>
    </div>
  );
};

export default memo(Quest16);
