
import React, { memo, useEffect, useState } from "react";

const Quest18 = () => {
    const [answer, setAnswer] = useState('');
   

    useEffect(() => {
        if(answer === 'The steps customer passes through on the  path to becoming a loyal customer') {
            let score = localStorage.getItem('score-cacr');
            let parsedScore = JSON.parse(score);
            localStorage.setItem('score-cacr', parsedScore + 5);
        }
    }, [answer]);

  return (
    <div className="m-6">
      <h2>
      Which one of the options below best defined customer Lifecycle?
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
                "The steps customer passes through on the  path to becoming a customer"
              }
            />
            <p className="ml-2 text-sm">
            The steps customer passes through on the  path to becoming a customer
            </p>
          </label>
        </div>
        <div className="mt-5">
          <label className="flex items-start">
            <input onChange={(e) => setAnswer(e.target.value)} type="radio" name="answer" value={"The steps customer passes through to buy products"} />
            <p className="ml-2 text-sm">The steps customer passes through to buy products</p>
          </label>
        </div>
        <div className="mt-5">
          <label className="flex items-start">
            <input
               onChange={(e) => setAnswer(e.target.value)}
              type="radio"
              name="answer"
              value={"The steps customer passes through on the  path to becoming a loyal customer"}
            />
            <p className="ml-2 text-sm">The steps customer passes through on the  path to becoming a loyal customer</p>
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

export default memo(Quest18);
