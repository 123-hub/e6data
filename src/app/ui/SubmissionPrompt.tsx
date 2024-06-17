import React from "react";

interface SubmissionPromptProps {
  isVisible: boolean;
  onClose: () => void;
}

const SubmissionPrompt: React.FC<SubmissionPromptProps> = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Overlay to dim the background */}
      <div className="fixed inset-0 bg-black opacity-50"></div>
      
      {/* Prompt */}
      <div className="relative bg-white p-8 rounded-lg shadow-lg z-10 m-4">
        <h2 className="text-2xl font-bold mb-4">Successful Submission</h2>
        <p>Your submission has been successfully processed.</p>
        <button 
          onClick={onClose} 
          className="mt-4 px-4 py-2 bg-blue-500 text-white justify-center rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SubmissionPrompt;
