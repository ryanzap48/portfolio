import { useEffect, useState } from 'react'
import wallpaper from '../assets/wallpaper.jpg'
import Logo from '../components/Logo'
import MagicProject from '../assets/magic_project.png';
import GitHub from '../assets/GitHub_Logo.png'
import me from '../assets/me.jpg'
import { gsap } from "gsap";
import SplitText from 'gsap/SplitText';
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function Home() {
  const [selected, setSelected] = useState('');
  
  useEffect(() => {
    const split = SplitText.create(".about", { type: "words"});
    gsap.from(split.words, {
      y: 100,
      autoAlpha: 0,
      stagger: 0.005,
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about",
        start: "top 80%",
        toggleActions: "play none none none",
        id: "aboutAnimation",
      },
    });

    return () => {
      split.revert();
    };
  }, []);

  useEffect(() => {
    console.log(selected)
  }, [selected])

  const projects = [
    'Magic Project',
    'Machine Learning',
    'Solving Games',
    'Operating Systems',
    'Drug2Drug Interactions',
    'Fitness Coaching'
  ]

  const machinelearning = {
    'Linear Regression' : 'https://github.com/ryanzap48/Linear-Regression-Model',
    'Soft Margin SVM' : 'https://github.com/ryanzap48/Soft-Margin-SVM',
    'Decision Tree' : 'https://github.com/ryanzap48/Decision-Tree',
  }

  const solvingGames = {
    'Solving Sokoban' : 'https://github.com/ryanzap48/Solving-Sokoban',
    'Solving Breakthrough' : 'https://github.com/ryanzap48/Playing-Breakthrough',
  }

  const operatingSystems = {
    'TCP Chatapp' : 'https://github.com/ryanzap48/tcp_chatapp',
    'Haskell HTTP Server' : 'https://github.com/ryanzap48/haskell_http-server',
    'Python Shell' : 'https://github.com/ryanzap48/basic_python_shell'
  }

  return (
    <>
      <div 
        className='relative h-screen bg-cover bg-center bg-fixed'
        style={{ backgroundImage: `url(${wallpaper})` }}
      >
        <h1 className='absolute top-[50%] left-[40%] -translate-x-1/2 -translate-y-1/2 font-poppins text-white text-8xl font-bold mb-3'>Ryan Zappone</h1>
        <a 
          className='absolute top-[55.5%] left-[31%] -translate-x-1/2 -translate-y-1/2'
          href='https://www.linkedin.com/in/ryan-zappone/' 
          target='_blank'
          rel="noreferrer"
        >
          <Logo/>
        </a>
        <a 
          className='absolute top-[55.5%] left-[39%] -translate-x-1/2 -translate-y-1/2'
          href='https://github.com/ryanzap48/' 
          target='_blank'
          rel="noreferrer"
        >
          <img src={GitHub} alt='github' className='w-28 h-auto'/>
        </a>
      </div>
      <div
        className='h-screen z-0 bg-white relative flex items-center justify-center gap-[7%]'
      >
        <img
          className='w-1/3 h-auto rounded-2xl'
          src={me}
          alt='about me'
        />
        <div className='w-1/3 max-h-screen'>
          <h1 className='text-2xl font-semibold text-gray-700 mb-3 font-poppins'>About Me</h1>
          <p className='about text-gray-600 font-poppins leading-[1.85]'>
            I am a third year BS/MS student pursuing a Bachelors in Computer Science, a Masters in Artificial Intelligence 
            as well as a Minor in Data Science at Worcester Polytechnic Institute. I took my first computer science class 
            my senior year of high school and immediately fell in love. Ever since then my drive for learning has been ever 
            long. The first ever programming language I learning was Java, which later led me to start assisting students in 
            our Java Object Oriented Design class my second year here. I learned Python, Assemble, C, and Rust during my 
            freshman year and immediately got hooked on grinding Project Euler as Leet Code problems. Fast forward a couple 
            years and many projects later, a new field started to catch my eye: Artificial Intelligence. As of late, I have 
            been especially interested in the fields of machine learning, specifically within the scope of optimization in 
            large databases as well as research in responsible uses, namely robustness against adversarial attacks. I as well 
            have a passion for full stack software engineering, with both front and back end development, and have gotten 
            especially advanced at both React and Express frameworks as well as Django and Flask.
          </p>
        </div>
      </div>
      <div className='bg-white w-full h-screen flex flex-col '>
        <div className='flex space-x-10 w-full h-[65%] mx-[20%]'>
          <div className='flex flex-col'>
            {projects.map((project) => (
              <h1 
                key={project}
                className={`hover:underline text-2xl font-poppins hover:cursor-pointer whitespace-nowrap
                ${selected === project ? 'bg-gray-200 opacity-60'  : ''}`}
                onClick={() => setSelected(project)}
              >
                {project}
              </h1>
            ))}
          </div>
          <div className='border-r-2 border-black space-y-2'></div>
          {selected === 'Magic Project' && (
            <div>
              <img
                className='w-3/5 h-auto rounded-2xl'
                src={MagicProject}
                alt='Magic Project'
              />
              <a 
                className=''
                href='https://github.com/ryanzap48/MTG-Database/tree/project' 
                target='_blank'
                rel="noreferrer"
              >
                <img src={GitHub} alt='github2' className='w-28 h-auto'/>
              </a>
            </div>
          )}
          {selected === 'Machine Learning' && (
            <div>
              {Object.entries(machinelearning).map(([project, value]) => (
                <div className='flex items-center space-x-8'>
                  <span 
                    key={project}
                    className='hover:underline text-2xl font-poppins hover:cursor-pointer whitespace-nowrap'
                  >
                    {project}
                  </span>
                  <span>
                    <a 
                    className=''
                    href={value}
                    target='_blank'
                    rel="noreferrer"
                  >
                    <img src={GitHub} alt='github2' className='w-20 h-auto'/>
                  </a>
                  </span>
                </div>
            ))}
            </div>
          )}
          {selected === 'Solving Games' && (
            <div>
              {Object.entries(solvingGames).map(([project, value]) => (
                <div className='flex items-center space-x-8'>
                  <span 
                    key={project}
                    className='hover:underline text-2xl font-poppins hover:cursor-pointer whitespace-nowrap'
                  >
                    {project}
                  </span>
                  <span>
                    <a 
                    className=''
                    href={value}
                    target='_blank'
                    rel="noreferrer"
                  >
                    <img src={GitHub} alt='github2' className='w-20 h-auto'/>
                  </a>
                  </span>
                </div>
            ))}
            </div>
          )}
          {selected === 'Operating Systems' && (
            <div>
              {Object.entries(operatingSystems).map(([project, value]) => (
                <div className='flex items-center space-x-8'>
                  <span 
                    key={project}
                    className='hover:underline text-2xl font-poppins hover:cursor-pointer whitespace-nowrap'
                  >
                    {project}
                  </span>
                  <span>
                  <a 
                    className=''
                    href={value}
                    target='_blank'
                    rel="noreferrer"
                  >
                    <img src={GitHub} alt='github2' className='w-20 h-auto'/>
                  </a>
                  </span>
                </div>
              ))}
            </div>
          )}
          {selected === 'Drug2Drug Interactions' && (
              <div>
              <h1>{selected}</h1>
            </div>
          )}
          {selected === 'Fitness Coaching' && (
              <div className='flex items-center space-x-8'>
                <h1 className='hover:underline text-2xl font-poppins hover:cursor-pointer whitespace-nowrap'>
                  {selected}
                </h1>
                <a 
                  className=''
                  href='https://github.com/ryanzap48/FitnessCoaching'
                  target='_blank'
                  rel="noreferrer"
                >
                  <img src={GitHub} alt='github2' className='w-20 h-auto'/>
                </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
}