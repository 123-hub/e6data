import React from 'react';

interface ToggleSwitchProps {
  isOn: boolean;
  handleToggle: () => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ isOn, handleToggle }) => {
  return (
    <div className="flex items-center">
      <span className="mr-2 font-semibold">{isOn ? 'Dark Mode' : 'Light Mode'}</span>
      <div
        className={`relative w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer transition-all duration-300 ${
          isOn ? 'bg-blue-600' : 'bg-gray-300'
        }`}
        onClick={handleToggle}
      >
        <div
          className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ${
            isOn ? 'translate-x-6' : ''
          }`}
        ></div>
      </div>
    </div>
  );
};

export default ToggleSwitch;
