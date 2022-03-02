import Skill from "./Skill";
import ProgressBar from "@ramonak/react-progress-bar";

export default function SkillSetSection() {
  return (
    <>
    <div className="max-w-7xl mx-auto px-10 mb-10">
    <h2 className="text-3xl mb-3 font-bold">My Skills</h2>
    <p className="mt-2 mb-1">HTML</p>
    <ProgressBar completed={80} bgColor={"#3b82f6"}/>
    <p className="mt-2 mb-1">CSS</p>
    <ProgressBar completed={65} bgColor={"#3b82f6"}/>
    <p className="mt-2 mb-1">Javascript</p>
    <ProgressBar completed={70} bgColor={"#3b82f6"}/>
    <p className="text-xs mt-5">More coming soon...</p>
    </div>
    </>
  )
}