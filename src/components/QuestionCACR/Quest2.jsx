
import React, { memo, useEffect, useState } from "react";

const Quest2 = () => {
    const [answer, setAnswer] = useState('');
   

    useEffect(() => {
        if(answer === 'Customer Relation Management') {
            let score = localStorage.getItem('score-cacr');
            let parsedScore = JSON.parse(score);
            localStorage.setItem('score-cacr', parsedScore + 5);
        }
    }, [answer]);

  return (
    <div className="m-6">
      <h2>
      What do you understand by CRM?
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
                "Customer Retention Management"
              }
            />
            <p className="ml-2 text-sm">
            Customer Retention Management
            </p>
          </label>
        </div>
        <div className="mt-5">
          <label className="flex items-start">
            <input onChange={(e) => setAnswer(e.target.value)} type="radio" name="answer" value={"Customer Relation Manager"} />
            <p className="ml-2 text-sm">Customer Relation Manager</p>
          </label>
        </div>
        <div className="mt-5">
          <label className="flex items-start">
            <input
               onChange={(e) => setAnswer(e.target.value)}
              type="radio"
              name="answer"
              value={"Consumer Retention Management"}
            />
            <p className="ml-2 text-sm">Consumer Retention Management</p>
          </label>
        </div>
        <div className="mt-5">
          <label className="flex items-start">
            <input
            onChange={(e) => setAnswer(e.target.value)}
              type="radio"
              name="answer"
              value={"Customer Relation Management"}
            />
            <p className="ml-2 text-sm">
            Customer Relation Management..
            </p>
          </label>
        </div>
      </div>
    </div>
  );
};

export default memo(Quest2);
