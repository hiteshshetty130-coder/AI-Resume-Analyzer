import React from "react";
import "../result.css"
import ResultHeader from "../components/ResultHeader";
import UploadNavBar from "../components/UploadNavBar";
import ScoreCard from "../components/ScoreCard";
import SkillsGrid from "../components/SkillsGrid";
import AiRecommendations from "../components/AiRecommendations";
import { useLocation } from "react-router-dom";


function Result() {
  const location=useLocation();
    const result=location.state?.result
    console.log(result)
  return (

    <>
    <UploadNavBar/>
    <ResultHeader/>
    <ScoreCard result={result}/>
    <SkillsGrid result={result}/>
    <AiRecommendations/>
    </>
  )
}

export default Result