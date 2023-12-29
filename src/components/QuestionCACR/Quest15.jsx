
import React, { memo, useEffect, useState } from "react";

const Quest15 = () => {
    const [answer, setAnswer] = useState('');
   

    useEffect(() => {
        if(answer === 'Makes their life easier and improves their well-being') {
            let score = localStorage.getItem('score-cacr');
            let parsedScore = JSON.parse(score);
            localStorage.setItem('score-cacr', parsedScore + 5);
        }
    }, [answer]);

  return (
    <div className="m-6">
      <h2>
      Customers see value in a company that...
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
                "Are mindful of their company"
              }
            />
            <p className="ml-2 text-sm">
            Are mindful of their company
            </p>
          </label>
        </div>
        <div className="mt-5">
          <label className="flex items-start">
            <input onChange={(e) => setAnswer(e.target.value)} type="radio" name="answer" value={"Are advertising their products regularly"} />
            <p className="ml-2 text-sm">Are advertising their products regularly</p>
          </label>
        </div>
        <div className="mt-5">
          <label className="flex items-start">
            <input
               onChange={(e) => setAnswer(e.target.value)}
              type="radio"
              name="answer"
              value={"Makes their life easier and improves their well-being"}
            />
            <p className="ml-2 text-sm">Makes their life easier and improves their well-being</p>
          </label>
        </div>
        <div className="mt-5">
          <label className="flex items-start">
            <input
            onChange={(e) => setAnswer(e.target.value)}
              type="radio"
              name="answer"
              value={"Produce all the products they need"}
            />
            <p className="ml-2 text-sm">
            Produce all the products they need
            </p>
          </label>
        </div>
      </div>
    </div>
  );
};

export default memo(Quest15);
