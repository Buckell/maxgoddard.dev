import React from "react";
import Container from "./Container";
import Footer from "../Footer";
import FlipImage from "../../components/FlipImage";
import PageContainer from "../PageContainer";

export default function AboutPage() {
    return (
        <PageContainer>
            <Container>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <FlipImage/>
                </div>

                <h1>Max Goddard</h1>

                <p>
                    My name is Max, and I am a student at Georgia Tech studying nuclear engineering. Aside from my
                    passion for nuclear power, I also have a love for computer science, design, electronics, and
                    building things.
                </p>

                <p>
                    At Georgia Tech, I am currently working in the Intelligence for Advanced Nuclear (iFAN) Lab,
                    the Radiological Science and Engineering Laboratory (RSEL), and as an instructor or assistant in
                    multiple makerspaces. In the iFAN Lab, we perform cybersecurity research to guard
                    nuclear infrastructure against cyber-attacks. I lead the design and development of a physical
                    reactor coolant loop testbed for research and development into cyber-physical safety and security
                    measures. I am also in a team developing a cybersecurity penetration testing strategy using
                    network digital twins of nuclear power plants (NPPs).
                </p>

                <p>
                    Despite taking on nuclear engineering (which has always been a passion), my background is
                    extensively in computer science and electronics. I started programming around the age of seven,
                    mainly with a block-type language, but a year later, I started learning a little bit of web
                    development (HTML, CSS, JS) and Python. A couple of years later, I started learning
                    object-oriented programming (OOP) using Java. With Java, I made everything from 2D games to
                    various utility applications. After around three years of using Java, I started learning C++. I
                    eventually fell in love with the language and have been using it as my primary language ever since.
                </p>

                <p>
                    One of my biggest passions in the computer science field has been language development. For almost
                    as long as I have been able to program, I wondered how the languages I used worked internally.
                    When I began learning Python, one of the things I remember doing is writing an extremely basic
                    interpreter for a generic language. When I learned Java, I continued to make interpreters. And when
                    I learned C++, I did the same. When I was using C++ to make languages, I was given a suggestion
                    to "just learn data structures." It wasn't a particularly useful suggestion in and of itself, but it
                    spurred my journey toward advanced programming concepts and becoming the programmer I am today.
                    Today, my latest language project, and the language project on which I have been working for the
                    last four or five years, is Rebar. It started as a generic language, but after learning Lua for
                    high-performance game scripting and seeing the various problems of a 30-year-old language
                    originally designed for oil technicians, I wanted to make a better version. A version of Rebar
                    using a fast JIT compiler exists, but a new version built from the ground up is in the works.
                </p>

                <p>
                    I also love electronics and embedded systems. I have been using Arduinos and similar
                    microcontrollers (MCUs) for numerous projects over the last few years. I have completed numerous
                    projects, ranging from remote outlet controllers interfacing with a home control system to
                    theatre lighting controllers.
                </p>

                <Footer/>
            </Container>
        </PageContainer>
    );
}