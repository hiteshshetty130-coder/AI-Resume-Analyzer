import React,{useState} from "react";
import UploadNavBar from "../components/UploadNavBar"
import UploadResume from "../components/UploadResume";
import UploadDescription from "../components/UploadDescription";
import UploadRightContent from "../components/UploadRightContent";
import "../upload.css"
function Upload() {
  const [resumeFile,setResumeFile]=useState(null);
  const formData=new FormData();
  formData.append("resume",resumeFile);
  const AnalyzeResume=async()=>{
    const response=await fetch("http://127.0.0.1:5000/upload",{
      method:"post",
      body:formData
    });
    const data=await response.json();
    console.log(data);
  }
  return (
    <>
      <div className="main-layout">
        <div className="left-col">
          <UploadResume setResumeFile={setResumeFile}/>
          <UploadDescription AnalyzeResume={AnalyzeResume}/>
        </div>
        <div className="right-col">
          <UploadRightContent />
        </div>
      </div>
    </>
  )
}

export default Upload