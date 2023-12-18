import React, { memo, useEffect, useState } from "react";

const Quest14 = () => {
    const [answer, setAnswer] = useState('');
   

    useEffect(() => {
        if(answer === '265') {
            let score = localStorage.getItem('score');
            let parsedScore = JSON.parse(score);
            localStorage.setItem('score', parsedScore + 5);
        }
    }, [answer]);

  return (
    <div className="m-6">
      <h2>
      What are the maximum numbers of contacts a WhatsApp broadcast list can accommodate? 
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
                "100"
              }
            />
            <p className="ml-2 text-sm">
              100
            </p>
          </label>
        </div>
        <div className="mt-5">
          <label className="flex items-start">
            <input onChange={(e) => setAnswer(e.target.value)} type="radio" name="answer" value={"156"} />
            <p className="ml-2 text-sm">156</p>
          </label>
        </div>
        <div className="mt-5">
          <label className="flex items-start">
            <input
              type="radio"
              onChange={(e) => setAnswer(e.target.value)}
              name="answer"
              value={"265"}
            />
            <p className="ml-2 text-sm">265</p>
          </label>
        </div>
        <div className="mt-5">
          <label className="flex items-start">
            <input
              type="radio"
              onChange={(e) => setAnswer(e.target.value)}
              name="answer"
              value={"1,025"}
            />
            <p className="ml-2 text-sm">
              1,025
            </p>
          </label>
        </div>
      </div>
    </div>
  );
};

export default memo(Quest14);
