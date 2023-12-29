
import React, { memo, useEffect, useState } from "react";

const Quest10 = () => {
    const [answer, setAnswer] = useState('');
   

    useEffect(() => {
        if(answer === 'Social media to connect with customers') {
            let score = localStorage.getItem('score-cacr');
            let parsedScore = JSON.parse(score);
            localStorage.setItem('score-cacr', parsedScore + 5);
        }
    }, [answer]);

  return (
    <div className="m-6">
      <h2>
      What is Social CRM?
Are those terms used to describe the process of using.....
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
                "Employees to achieve a company's goal."
              }
            />
            <p className="ml-2 text-sm">
            Employees to achieve a company's goal.
            </p>
          </label>
        </div>
        <div className="mt-5">
          <label className="flex items-start">
            <input onChange={(e) => setAnswer(e.target.value)} type="radio" name="answer" value={"Products to attract customers"} />
            <p className="ml-2 text-sm">Products to attract customers</p>
          </label>
        </div>
        <div className="mt-5">
          <label className="flex items-start">
            <input
               onChange={(e) => setAnswer(e.target.value)}
              type="radio"
              name="answer"
              value={"Social media to connect with customers"}
            />
            <p className="ml-2 text-sm">Social media to connect with customers</p>
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

export default memo(Quest10);
