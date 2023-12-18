import React, { memo, useEffect, useState } from "react";

const QuestSeven = () => {
   

    let score = localStorage.getItem('score');
    let parsedScore = JSON.parse(score);
    localStorage.setItem('score', parsedScore + 2.5);

  return (
    <div className="m-6">
      <h2>
        In a statement describe how social media handles are  enhancing online Facilitators 
      </h2>


      <div className="bg-slate-200 px-2 pt-[1px] pb-2">
        {/* Answers */}
        <textarea type="text" placeholder="Enter Your Answer" className="w-full bg-transparent text-black outline-none" rows={5} />
      </div>
    </div>
  );
};

export default memo(QuestSeven);
