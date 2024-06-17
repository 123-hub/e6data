import React from "react";

interface BottomButtonsProps {
  MockContainerFunc: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit: () => void;
}

const BottomButtons: React.FC<BottomButtonsProps> = ({ MockContainerFunc, onSubmit }) => {
  return (
    <div className="flex space-x-2">
      <button
        onClick={() => MockContainerFunc(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        Run
      </button>
      <button
        onClick={onSubmit}
        className="px-4 py-2 bg-green-500 text-white rounded-lg"
      >
        Submit
      </button>
    </div>
  );
};

export default BottomButtons;
