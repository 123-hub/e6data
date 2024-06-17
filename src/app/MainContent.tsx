// components/MainContent.tsx

import React, { Suspense, useEffect, useState } from "react";
import clsx from "clsx";
import Question from "./ui/Question";
import BottomButtons from "./ui/BottomButtons";
import SubmissionPrompt from "./ui/SubmissionPrompt";
import AceEditorComponent from "./ui/AceEditorComponent";

const MainContent: React.FC = () => {
  const [mockContainer, setMockContainer] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isLoading,setIsloading] = useState(true);
  const handleSubmission = () => {
    setShowPrompt(true);
  };

  const closePrompt = () => {
    setShowPrompt(false);
  };

  useEffect(()=>{
    setIsloading(true);
   let timerId= setTimeout(()=>{
      setIsloading(false)
    },3000)
      return () => clearTimeout(timerId);
  },[mockContainer]);

  return (
    <div className="h-screen w-full bg-gray-100 flex items-center justify-center">
      <div className="h-full w-full bg-gray-100 p-4 box-border flex flex-col rounded-lg">
        <div className="md:flex flex-grow overflow-auto">
          {/* Question description container */}
          <div className="md:w-1/3 bg-white overflow-auto md:mr-2 rounded-lg">
            <p className="bg-gray-300 pl-2 py-1 font-bold rounded-t-lg">
              Description
            </p>
            <div className="md:overflow-y-auto md:scrollbar-custom rounded-lg">
              <Question />
            </div>
          </div>

          {/* Code editor and mock output container */}
          <div className="flex flex-col md:w-2/3 rounded-lg pt-4 md:pt-0 flex-grow">
            <AceEditorComponent />

            <div
              className={clsx(
                "flex flex-col bg-white transition-all rounded-lg my-1 duration-300 overflow-hidden  ",
                {
                  "h-0": !mockContainer,
                  "h-40 py-2 border-2 border-gray-500": mockContainer, // Adjust height as needed
                }
              )}
            >
              <div className="flex justify-between rounded-lg">
                <p className="px-2 py-1 font-bold rounded-t-lg">Output</p>
                <p
                  onClick={() => setMockContainer(!mockContainer)}
                  className="self-end font-bold p-2 pr-4 cursor-pointer"
                >
                  X
                </p>
              </div>
              <div className="p-4 h-full">
                  {
                    isLoading ? "loading..." : "All test Case passed. Congrats...!!!"
                  }
              </div>
            </div>

            {/* Buttons container */}
            <div className="pl-4 py-1 rounded-lg">
              <BottomButtons
                MockContainerFunc={setMockContainer}
                onSubmit={handleSubmission} // Pass the submission handler to BottomButtons
              />
            </div>
          </div>
        </div>
      </div>

      {/* Prompt component */}
      <SubmissionPrompt isVisible={showPrompt} onClose={closePrompt} />
    </div>
  );
};

export default MainContent;
