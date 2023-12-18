import React, { memo, useEffect, useState } from "react";

const QuestionTwo = () => {
  const [answer, setAnswer] = useState('');
   

    useEffect(() => {
        if(answer === 'Conversations, variation Resources, choice, and connection') {
            let score = localStorage.getItem('score');
            let parsedScore = JSON.parse(score);
            localStorage.setItem('score', parsedScore + 5);
        }
    }, [answer]);


  return (
    <div className="m-6">
      <h2>
      What are some of the international strategies teachers use to facilitate learning
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
                "Conversations, variation Resources, choice, and connection"
              }
            />
            <p className="ml-2 text-sm">
            Conversations, variation Resources, choice, and connection 
            </p>
          </label>
        </div>
        <div className="mt-5">
          <label className="flex items-start">
            <input onChange={(e) => setAnswer(e.target.value)} type="radio" name="answer" value={" Facilitating, providing, encouragement, connection."} />
            <p className="ml-2 text-sm"> Facilitating, providing, encouragement, connection.</p>
          </label>
        </div>
        <div className="mt-5">
          <label className="flex items-start">
            <input
              type="radio"
              name="answer"
              onChange={(e) => setAnswer(e.target.value)}
              value={"Allowing, communicating, variation and providing"}
            />
            <p className="ml-2 text-sm">Allowing, communicating, variation and providing</p>
          </label>
        </div>
        <div className="mt-5">
          <label className="flex items-start">
            <input
              type="radio"
              name="answer"
              onChange={(e) => setAnswer(e.target.value)}
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

export default memo(QuestionTwo);
