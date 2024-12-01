"use client";

import React, {useState} from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
const projectsData=[{
    id:1,
    title :"Portfolio Website",
    description : "My portfolio website is a showcase of my skills and projects, built using Next.js to deliver a fast and dynamic user experience. It highlights my journey as an enthusiastic programmer, featuring my expertise in C, C++, Python, JavaScript, React, and more. This project reflects my commitment to continuous learning and growth in web development.",
    image:"/images/project/01.png" ,
    tag:["All","Web"],
    gitUrl: "/",
    previewUrl: "/",
},
{
    id:2,
    title :"Counter (count by adding and subtracting from zero)",
    description : "I created a simple counter application using React. It allows users to increment or decrement the count by clicking the 'Add' or 'Subtract' buttons. This project showcases my understanding of React's state management and interactive UI components.",
    image:"/images/project/02.png" ,
    tag:["All","Web"],
    gitUrl: "/",
    previewUrl: "/",
}
]

const ProjectSection = () => {
  const [tag,setTag]=useState("All");
  const handleTagChange=(newTag)=>{
    setTag(newTag);
  };
  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );


  return (
    <><h2 className='text-white text-center text-4xl font-bold mt-4 mb-8 md:mb-12'> My Projects</h2>
    <div className='text-white flex flex-row justify-centter item-center gap-2 py-6'>
      <ProjectTag onClick={handleTagChange} name="All" isSelected={tag==="All"} />
      <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag==="Web"} />
    </div>
    <div> {filteredProjects.map ((project)=> <ProjectCard 
    key= {project.id} 
    title={project.title} 
    description={project.description} 
    imgUrl={project.image}
    gitUrl={project.gitUrl}
    previewUrl={project.previewUrl}
    />
  )} </div></>
  )
}

export default ProjectSection;
