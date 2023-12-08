"use client";

import React, { useEffect } from "react";
import Skip from "@/components/Skip";
import Intro from "@/components/Intro";
import Skill from "@/components/Skill";
import Port from "@/components/Port";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import smooth from "@/utils/smooth";
import link from "@/utils/link";

export default function Home(){
    useEffect(() => {
        smooth();
        link();
    }, []);

    return (
        <>  
            <Skip />
            <main id="main" role="main">
                <Intro />
                <Skill />
                <Port />
                <Contact />
            </main>
            <Footer />
        </>
    )
}