import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UploadNavBar from "../components/UploadNavBar";
import UploadResume from "../components/UploadResume";
import UploadDescription from "../components/UploadDescription";
import UploadRightContent from "../components/UploadRightContent";
import "../upload.css";
import { FaFileAlt, FaFilePdf, FaFileWord } from "react-icons/fa";

function Upload() {
  const [resumeFile, setResumeFile] = useState(null);
  const [DescriptionText, setDescriptionText] = useState("");
  const [err, setErr] = useState("");
  const [jdFile, setJDFile] = useState(null);
  
  const navigate = useNavigate();
  const handleClear = () => {
    setResumeFile(null);
    setDescriptionText("");
    setJDFile(null);
  };


  // resume file icon code 
  const filename = resumeFile?.name?.toLowerCase() || "";
  const dfilename = jdFile?.name?.toLowerCase() || "";
  let icon = <FaFilePdf />;
  let bgColor = "#fee2e2";
  let iconclass = "pdf-icon";
  if (filename.endsWith(".txt")) {
    icon = <FaFileAlt />;
    iconclass = "txt-icon";
  } else if (filename.endsWith(".docx")) {
    icon = <FaFileWord />;
    iconclass = "doc-icon";
  }

  // description file icon code
  let jdIcon = <FaFilePdf />;
  let jdIconClass = "pdf-icon";

  if (dfilename.endsWith(".txt")) {
    jdIcon = <FaFileAlt />;
    jdIconClass = "txt-icon";
  } else if (dfilename.endsWith(".doc") || dfilename.endsWith(".docx")) {
    jdIcon = <FaFileWord />;
    jdIconClass = "doc-icon";
  }


  // Resume Analyzing main function with backend validation and API Calling......
  const AnalyzeResume = async () => {
    if (!resumeFile && !DescriptionText.trim()) {
      setErr("Please Upload Resume and your Description text");
      return;
    } else if (!resumeFile) {
      setErr("Please Upload Your Resume");
      return;
    } else if (!DescriptionText.trim() && !jdFile) {
      setErr("Please Paste Your Description Text");
      return;
    } else {
      setErr("");
    }

    const formData = new FormData();
    formData.append("resume", resumeFile);
    formData.append("description", DescriptionText);
    formData.append("jdFile", jdFile);
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

  // returning UI Component
  return (
    <>
      <UploadNavBar />
      <div className="main-layout">
        <div className="left-col">
          <UploadResume
            resumeFile={resumeFile}
            setResumeFile={setResumeFile}
            icon={icon}
            iconclass={iconclass}
            
          />
          <UploadDescription
            AnalyzeResume={AnalyzeResume}
            setDescriptionText={setDescriptionText}
            DescriptionText={DescriptionText}
            handleClear={handleClear}
            err={err}
            jdFile={jdFile}
            setJDFile={setJDFile}
            jdIcon={jdIcon}
            jdIconClass={jdIconClass}
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
