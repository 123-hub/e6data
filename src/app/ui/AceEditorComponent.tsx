import React, { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-xcode";
import ToggleSwitch from "../ui/ToggleSwitch"; 

const AceEditorComponent: React.FC = () => {
  const [code, setCode] = useState<string>("");
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="flex flex-col rounded-lg pt-4 md:pt-0 flex-grow">
      <div className="flex flex-col flex-grow rounded-lg overflow-hidden">
        <div className="flex justify-between items-center bg-gray-300 px-2 py-1 rounded-t-lg">
          <p className="font-bold">Code</p>
          <ToggleSwitch isOn={darkMode} handleToggle={toggleDarkMode} />
        </div>
        <div className="flex-grow overflow-auto border-0 border-red-700">
          <AceEditor
            mode="javascript"
            theme={darkMode ? "monokai" : "xcode"}
            value={code}
            onChange={handleCodeChange}
            name="UNIQUE_ID_OF_DIV"
            editorProps={{ $blockScrolling: true }}
            style={{ width: "100%", height: "100%", minHeight: "400px" }} // Adjust height as needed
          />
        </div>
      </div>
    </div>
  );
};

export default AceEditorComponent;
