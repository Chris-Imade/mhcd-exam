import "./App.css";
import { memo, useEffect, useState } from "react";
import Loader from "./components/Loader";
import LogoImage from "./images/mhcd-logo.png";
import { CustomerExamPreview, ExamPreview, ExamsList } from "./components";

const App = () => {
  const [showLoader, setShowLoader] = useState(true);
  const [selectedCourse, setSelectedCourse] = useState("");

  console.log(selectedCourse);

  localStorage.setItem("score", 0);
  localStorage.setItem("score-cacr", 0);

  useEffect(() => {
    const toggleShow = setTimeout(() => {
      setShowLoader(false);
    }, 2000);

    return () => clearTimeout(toggleShow);
  }, []);

  return (
    <div>
      {showLoader && <Loader />}

      <div className="flex items-center m-6 transition-all duration-500 ease-in-out">
        <img width={50} src={LogoImage} alt="LogoImage" />
        <h4 className="ml-3 font-semibold text-2xl">MHCD E-Exams</h4>
      </div>
      <hr />

      {!selectedCourse ? (
        <ExamsList setSelectedCourse={setSelectedCourse} />
      ) : selectedCourse === "Train The Triner" ? (
        <ExamPreview />
      ) : selectedCourse === "Customer Acquisition" ? (
        <CustomerExamPreview />
      ) : (
        <ExamsList setSelectedCourse={setSelectedCourse} />
      )}
    </div>
  );
};

export default memo(App);
