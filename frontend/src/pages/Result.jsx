import React from "react";
import "../result.css"
import ResultHeader from "../components/ResultHeader";
import UploadNavBar from "../components/UploadNavBar";
import ScoreCard from "../components/ScoreCard";
import SkillsGrid from "../components/SkillsGrid";
import AiRecommendations from "../components/AiRecommendations";


function Result() {
  return (

    <>
    <UploadNavBar/>
    <ResultHeader/>
    <ScoreCard/>
    <SkillsGrid/>
    <AiRecommendations/>
    </>
  )
}

export default Result