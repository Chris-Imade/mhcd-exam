import React, { memo, useEffect, useState } from "react";

const QuestTen = () => {
   

  let score = localStorage.getItem('score');
  let parsedScore = JSON.parse(score);
  localStorage.setItem('score', parsedScore + 2.5);

  return (
    <div className="m-6">
      <h2>
      Name 3 most popularly used social media handles
      </h2>


      <div className="bg-slate-200 px-2 pt-[1px] pb-2">
        {/* Answers */}
        <textarea type="text" placeholder="Enter Your Answer" className="w-full bg-transparent text-black outline-none" rows={5} />
      </div>
    </div>
  );
};

export default memo(QuestTen);
