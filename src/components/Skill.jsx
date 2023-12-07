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
                            {/* <Link href={'https://wikidocs.net/5'} target="_blank">01. 파이썬이란?</Link><br />
                            <Link href={'https://wikidocs.net/11'} target="_blank">02. 파이썬 프로그래밍의 기초, 자료형</Link><br />
                            <Link href={'https://wikidocs.net/19'} target="_blank">03. 프로그램의 구조를 쌓는다! 제어문</Link><br />
                            <Link href={'https://wikidocs.net/23'} target="_blank">04. 파이썬의 입출력</Link><br /> */}
                            <p>{skill.desc}01. 파이썬이란?</p>
                        </div>
                    ))} 
                </div>
            </div>
        </section>
    )
}

export default Skill;