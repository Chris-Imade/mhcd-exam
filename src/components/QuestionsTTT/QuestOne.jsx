import React, { memo, useEffect, useState } from "react";

const QuestOne = () => {
    const [answer, setAnswer] = useState('');
   

    useEffect(() => {
        if(answer === 'Use any WhatsApp app') {
            let score = localStorage.getItem('score');
            let parsedScore = JSON.parse(score);
            localStorage.setItem('score', parsedScore + 5);
        }
    }, [answer]);

  return (
    <div className="m-6">
      <h2>
        Which among the options is not a criteria to participate in this
        training course
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
                "Participant should have an internet compatible phone/laptop with data"
              }
            />
            <p className="ml-2 text-sm">
              Participant should have an internet compatible phone/laptop with
              data
            </p>
          </label>
        </div>
        <div className="mt-5">
          <label className="flex items-start">
            <input onChange={(e) => setAnswer(e.target.value)} type="radio" name="answer" value={"Use any WhatsApp app"} />
            <p className="ml-2 text-sm">Use any WhatsApp app</p>
          </label>
        </div>
        <div className="mt-5">
          <label className="flex items-start">
            <input
               onChange={(e) => setAnswer(e.target.value)}
              type="radio"
              name="answer"
              value={"Have an active email address."}
            />
            <p className="ml-2 text-sm">Have an active email address.</p>
          </label>
        </div>
        <div className="mt-5">
          <label className="flex items-start">
            <input
            onChange={(e) => setAnswer(e.target.value)}
              type="radio"
              name="answer"
              value={"Must be willing to learn and follow instructions."}
            />
            <p className="ml-2 text-sm">
              Must be willing to learn and follow instructions.
            </p>
          </label>
        </div>
      </div>
    </div>
  );
};

export default memo(QuestOne);
