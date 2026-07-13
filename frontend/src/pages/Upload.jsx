import React from "react";
import UploadNavBar from "../components/UploadNavBar"
import UploadResume from "../components/UploadResume";
import UploadDescription from "../components/UploadDescription";
import UploadRightContent from "../components/UploadRightContent";
import "../upload.css"
function Upload() {
  return (
    <>
      <div className="main-layout">
        <div className="left-col">
          <UploadResume />
          <UploadDescription />
        </div>
        <div className="right-col">
          <UploadRightContent />
        </div>
      </div>
    </>
  )
}

export default Upload