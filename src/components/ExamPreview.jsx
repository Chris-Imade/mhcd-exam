import React, { useState, useEffect, memo } from 'react';
import { RingLoader } from 'react-spinners';
import { Quest11, Quest12, Quest13, Quest14, Quest15, Quest16, Quest17, Quest18, Quest19, Quest20, QuestEight, QuestFive, QuestFour, QuestNine, QuestOne, QuestSeven, QuestSix, QuestTen, QuestionThree, QuestionTwo } from './Questions';
import LeftArr from "../images/left-arrow.png";
import RightArr from "../images/right-arrow.png";


const ExamPreview = () => {
  const [countdownTime, setCountdownTime] = useState(59);
  const [isNotLoading, setIsNotLoading] = useState(true);
  const [questCount, setQuestCount] = useState(1);
  const [grades, setGrades] = useState(0);

  // localStorage.setItem('questCount', JSON.stringify(questCount));

  // console.log(questCount);

  useEffect(() => {
    let timer;

    if (countdownTime > 0) {
      timer = setInterval(() => {
        setCountdownTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => {
        clearInterval(timer);
        setIsNotLoading(false);
    };
  }, [countdownTime]);

  const minutes = Math.floor(countdownTime / 60);
  const seconds = countdownTime % 60;

  const countdownDisplay = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  // let count = JSON.parse(localStorage.getItem('questCount'));
  // console.log('count: ', count);
  // let progressWidth = count * 5;


  return (
    <div className='w-full h-[87.5vh]'>
      {countdownTime !== 0 ? (
        <div className='flex justify-center items-center w-full h-full'>
            <div className="text-center flex flex-col items-center">
                <RingLoader />
                <h2 className='font-semibold text-4xl mt-4'>{countdownDisplay}</h2>
                <p className='text-sm'>Your exam begins in a minute...</p>
            </div>
        </div>
      ) : (
        <div className='relative w-full h-[87.5vh]'>
            {/* Progress */}
            {/* <div className="w-full h-3">
              <div className={`w-[${Math.min(progressWidth, 100)}%] h-3 bg-[#E85F2F]`}></div>
            </div> */}


            {questCount === 1 && <QuestOne />}
            {questCount === 2 && <QuestionTwo />}
            {questCount === 3 && <QuestionThree />}
            {questCount === 4 && <QuestFour />}
            {questCount === 5 && <QuestFive />}
            {questCount === 6 && <QuestSix />}
            {questCount === 7 && <QuestSeven />}
            {questCount === 8 && <QuestEight />}
            {questCount === 9 && <QuestNine />}
            {questCount === 10 && <QuestTen />}
            {questCount === 11 && <Quest11 />}
            {questCount === 12 && <Quest12 />}
            {questCount === 13 && <Quest13 />}
            {questCount === 14 && <Quest14 />}
            {questCount === 15 && <Quest15 />}
            {questCount === 16 && <Quest16 />}
            {questCount === 17 && <Quest17 />}
            {questCount === 18 && <Quest18 />}
            {questCount === 19 && <Quest19 />}
            {questCount === 20 && <Quest20 />}

            {/* Track questions */}
            <div className='absolute w-14 h-14 rounded-full bg-gray-300 border-[#E85F2F] border-[3px] bottom-5 right-5 flex justify-center items-center'>
                <div className='flex'>
                    <p className='font-semibold text-l'>{questCount}</p>
                    <p className='font-semibold text-l'>/</p>
                    <p className='font-semibold text-l'>20</p>
                </div>
            </div>
            {/* Controls */}
            <div className='absolute bottom-5 left-5 flex justify-between items-center w-28'>
                {/* <button onClick={() => setQuestCount((prevCount) => prevCount >= 2 ? prevCount - 1 : 1)} className='w-12 h-12 flex justify-center items-center bg-slate-300'>
                  <img width={24} src={LeftArr} alt="LeftArr" />
                </button> */}
                <button onClick={() => setQuestCount((prevCount) => prevCount <= 19 ? prevCount + 1 : 20)} className='w-12 h-12 flex justify-center items-center bg-slate-300'>
                  <img width={24} src={RightArr} alt="LeftArr" />
                </button>
            </div>
        </div>
      )}
    </div>
  );
};

export default memo(ExamPreview);
