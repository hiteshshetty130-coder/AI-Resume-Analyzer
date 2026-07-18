import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UploadNavBar from "../components/UploadNavBar";
import UploadResume from "../components/UploadResume";
import UploadDescription from "../components/UploadDescription";
import UploadRightContent from "../components/UploadRightContent";
import "../upload.css";
function Upload() {
  const [resumeFile, setResumeFile] = useState(null);
  const [DescriptionText, setDescriptionText] = useState("");
  const navigate = useNavigate();

  const AnalyzeResume = async () => {
    const formData = new FormData();
    formData.append("resume", resumeFile);
    formData.append("description", DescriptionText);
    const response = await fetch("http://127.0.0.1:5000/upload", {
      method: "post",
      body: formData,
    });
    const data = await response.json();
     

    navigate("/result", {
      state: {
        result: data,
      },
    });
  };
  return (
    <>
      <UploadNavBar />
      <div className="main-layout">
        <div className="left-col">
          <UploadResume setResumeFile={setResumeFile} />
          <UploadDescription
            AnalyzeResume={AnalyzeResume}
            setDescriptionText={setDescriptionText}
          />
        </div>
        <div className="right-col">
          <UploadRightContent />
        </div>
      </div>
    </>
  );
}

export default Upload;
