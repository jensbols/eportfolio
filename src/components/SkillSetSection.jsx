import Skill from "./Skill";

export default function SkillSetSection() {
  return (
    <>
      <div className="max-w-7xl flex mx-auto space-x-16 bg-gray-100 justify-between px-10">
        <Skill skillTitle={"React"} skillText={"Blablablabla"} />
        <Skill skillTitle={"Google ads"} skillText={"Blablablabla"} />
        <Skill skillTitle={"marketing"} skillText={"Testing random text"} />
      </div>
    </>
  )
}