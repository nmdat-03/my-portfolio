// Icons
import html from "../icons/html.svg";
import css from "../icons/css.svg";
import javascript from "../icons/javascript.svg";
import react from "../icons/react.svg";
import tailwindcss from "../icons/tailwindcss.svg";
import nodejs from "../icons/nodejs.svg";
import express from "../icons/express.svg";
import mongodb from "../icons/mongodb.svg";
import figma from "../icons/figma.svg";

/*=========================================*/
import SkillCard from "./SkillCard";

const skillItems = [
    { imgSrc: html, label: "HTML"},
    { imgSrc: css, label: "CSS"},
    { imgSrc: javascript, label: "JavaScript"},
    { imgSrc: react, label: "ReactJS"},
    { imgSrc: tailwindcss, label: "Tailwind CSS"},
    { imgSrc: nodejs, label: "Node.js"},
    { imgSrc: express, label: "Express.js"},
    { imgSrc: mongodb, label: "MongoDB"},
    { imgSrc: figma, label: "Figma"},
];

const Skill = () => {
  return (
    <section id="skills" className="section">
        <div className="container">
            
            <h2 className="headline-2 mb-8 reveal-up">Essential Tools I use</h2>

            <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] reveal-up">
                {skillItems.map(({imgSrc,label}, key) => (
                    <SkillCard key={key} imgSrc={imgSrc} label={label} classes="reveal-up"/>
                ))}
            </div>
        
        </div>
    </section>
  )
}

export default Skill