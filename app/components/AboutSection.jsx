"use client"
import React, {useTransition,useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton'


const TAB_DATA=[{
    title: "Education",
    id:"education",
    content:(
        <ul className='list-disc pl-2'>
            <li>Bachelor  in Computer Science and technology</li>
            <li>Currently learning web development, database management, and software engineering principles.
            </li>
            
        </ul>
    ),
},
{
    title: "Skills",
    id:"skills",
    content:(
        <ul className='list-disc pl-2'>
            <li>Javascript</li>
            <li>React.js</li>
            <li>Next.js</li>
            <li>SQL</li>

        </ul>
    ),
},
{
    title: "Certification",
    id:"certificates",
    content:(
        <ul className='list-disc pl-2'>
            <li>Self-Studied Web Development (HTML, CSS, JavaScript, React.js, Next.js)</li>
            

        </ul>
    ),
},

];
const AboutSection =()=>{
    const [tab, setTab]=useState("education");
    const [isPending,startTransition]=useTransition();
    const handleTabChange=(id)=>{
        startTransition(()=>{
            setTab(id);
        });
    };

  return (
    <section className='text-white'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
    <Image src="/images/about-image.png" width={400} height={400}
    alt="A professional headshot of Anita, a Frontend Developer" 
    />
    <div className='mt-4 md:mt-0 text-left fexl flex-col h-full '>
        <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
        <p className='text-base lg:text-lg  '>
        Hi, I'm Anita!
         I'm a Frontend Developer and Computer Science student 
         passionate about building user-friendly websites and applications. 
         I specialize in JavaScript, React.js, Next.js, and CSS, 
         creating seamless, responsive user experiences.
          My love for technology and problem-solving led me to pursue web development, 
          and I've been growing my skills through personal projects and hands-on learning. 
          I'm excited by the balance of creativity and logic in web development, 
          and I'm always exploring new tools to stay current with trends.
           If you'd like to collaborate or chat about frontend development,
            feel free to reach out—I'm always open to new opportunities!


        </p>
        <div className='flex flex-row mt-8'>
            <TabButton selectTab={()=> handleTabChange("education") } active={tab==="education"}> {" "}Education{" "}</TabButton>
            <TabButton selectTab={()=> handleTabChange("skills") } active={tab==="skills"}> {" "}Skills{" "}</TabButton>
            <TabButton selectTab={()=> handleTabChange("certificates") } active={tab==="certifications"}> {" "}Certificates{" "}</TabButton>
        </div>
        <div className='mt-8'>{TAB_DATA.find((t)=>t.id===tab).content}</div>
    </div>
      </div>
    </section>
  )
}

export default AboutSection
