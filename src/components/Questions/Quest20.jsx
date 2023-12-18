import React, { memo, useEffect, useState } from "react";
import Award from "../../images/award.png";

const Quest20 = () => {
  const [answer, setAnswer] = useState('');
  const [passed, setPassed] = useState(false);
   

    useEffect(() => {
        if(answer === 'Strongly agree') {
            let score = localStorage.getItem('score');
            let parsedScore = JSON.parse(score);
            localStorage.setItem('score', parsedScore + 5);
        }
    }, [answer]);

    const onFinish = () => {
      let score = localStorage.getItem('score');
      let parsedScore = JSON.parse(score);

      if(parsedScore > 50) {
        setPassed(true);
      }
    }

  return (
    <div>
      {passed ? (
        <div className="m-6">
          <h2>
          Online digital learning enhances large groups participation without geographical barriers.
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
                    "Strongly disagree "
                  }
                />
                <p className="ml-2 text-sm">
                  Strongly disagree 
                </p>
              </label>
            </div>
            <div className="mt-5">
              <label className="flex items-start">
                <input onChange={(e) => setAnswer(e.target.value)} type="radio" name="answer" value={"Strongly agree"} />
                <p className="ml-2 text-sm">Strongly agree</p>
              </label>
            </div>
            <div className="mt-5">
              <label className="flex items-start">
                <input
                  type="radio"
                  name="answer"
                  onChange={(e) => setAnswer(e.target.value)}
                  value={"None of the above"}
                />
                <p className="ml-2 text-sm">None of the above</p>
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
    
          <button onClick={onFinish} className="w-full bg-[#EF6330] mt-32 rounded-md text-white font-semibold py-2">Submit</button>
        </div>
      ) : (
        <div class="w-full text-center flex flex-col justify-center items-center mt-5">
          <img width={300} src={Award} alt="award" />
          <h3 className="text-2xl font-semibold">Congratulations 🎉</h3>
          <p class="won">You've passed our test for Training The Trainer</p>

         <div className="w-full flex flex-col justify-center items-center">
            <div className="w-[90vw] mt-4">
              <h4>Enter Your Full Name</h4>
              <input className="outline-none px-3 py-2 bg-slate-200"  type="text" placeholder="Enter You Full Name" />
            </div>
            <div className="w-[90vw] mt-4">
              <h4>Enter A Valid Email</h4>
              <input  className="outline-none px-3 py-2 bg-slate-200" type="text" placeholder="Your Email" />
            </div>
            <button className="bg-purple-500 text-white rounded-md py-2 px-3 mt-3">Receive Certificate</button>
         </div>
        </div>
      )}
    </div>
    
  );
};

export default memo(Quest20);
