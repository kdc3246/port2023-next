import React from "react";
import Link from "next/link";

import { skillText } from "@/constants";

const Skill = () => {
    return (
      <section id="skill">
        <div className="slkll__inner">
          <h2 className="skill__title">
            challenge <em>나의 도전</em>
          </h2>
          <div className="skill__desc">
            {skillText.map((skill, key) => (
              <div key={key}>
                <span>{key+1}.</span>
                <h3>{skill.title}</h3>
                {Array.isArray(skill.desc) && skill.desc.map((desc, index) => (
                  <div key={index} className="skill__link">
                    <a href={Array.isArray(skill.link) ? skill.link[index] : '#'} target="_blank"><p>{desc}</p></a>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }  

export default Skill;