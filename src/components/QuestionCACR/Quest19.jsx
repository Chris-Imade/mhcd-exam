import React, { memo, useEffect, useState } from "react";

const Quest19 = () => {
   

  let score = localStorage.getItem('score-cacr');
  let parsedScore = JSON.parse(score);
  localStorage.setItem('score-cacr', parsedScore + 2.5);

  return (
    <div className="m-6">
      <h2>
      States four steps can you follow to manage your customer Lifecycle
      </h2>


      <div className="bg-slate-200 px-2 pt-[1px] pb-2">
        {/* Answers */}
        <textarea type="text" placeholder="Enter Your Answer" className="w-full bg-transparent text-black outline-none" rows={5} />
      </div>
    </div>
  );
};

export default memo(Quest19);
