import React, { Component } from 'react';
// import ReactGA from 'react-ga4';

export class AboutVivek extends Component {

    constructor() {
        super();
        this.screens = {};
        this.state = {
            screen: () => { },
            active_screen: "about", // by default 'about' screen is active
            navbar: false,
        }
    }

    componentDidMount() {
        this.screens = {
            "about": <About />,
            "education": <Education />,
            "skills": <Skills />,
            "projects": <Projects />,
            "resume": <Resume />,
        }

        let lastVisitedScreen = localStorage.getItem("about-section");
        if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
            lastVisitedScreen = "about";
        }

        // focus last visited screen
        this.changeScreen(document.getElementById(lastVisitedScreen));
    }

    changeScreen = (e) => {
        const screen = e.id || e.target.id;

        // store this state
        localStorage.setItem("about-section", screen);

        // google analytics
        // ReactGA.send({ hitType: "pageview", page: `/${screen}`, title: "Custom Title" });


        this.setState({
            screen: this.screens[screen],
            active_screen: screen
        });
    }

    showNavBar = () => {
        this.setState({ navbar: !this.state.navbar });
    }

    renderNavLinks = () => {
        return (
            <>
                <div id="about" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "about" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="about Sharan's" src="./themes/Yaru/status/about.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">About Me</span>
                </div>
                <div id="education" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "education" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="Sharan's education" src="./themes/Yaru/status/education.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Education</span>
                </div>
                <div id="skills" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "skills" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="Sharan's skills" src="./themes/Yaru/status/skills.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
                </div>
                <div id="projects" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "projects" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="Sharan's projects" src="./themes/Yaru/status/projects.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Projects</span>
                </div>
                <div id="resume" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "resume" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="Sharan's resume" src="./themes/Yaru/status/download.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Resume</span>
                </div>
            </>
        );
    }

    render() {
        return (
            <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
                <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
                    {this.renderNavLinks()}
                </div>
                <div onClick={this.showNavBar} className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1">
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className=" w-3.5 border-t border-white" style={{ marginTop: "2pt", marginBottom: "2pt" }}></div>
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className={(this.state.navbar ? " visible animateShow z-30 " : " invisible ") + " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"}>
                        {this.renderNavLinks()}
                    </div>
                </div>
                <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">
                    {this.state.screen}
                </div>
            </div>
        );
    }
}

export default AboutVivek;

export const displayAboutVivek = () => {
    return <AboutVivek />;
}


function About() {
    return (
        <>
            <div className="w-20 md:w-28 my-4 bg-white rounded-full">
                <img className="w-full" src="./images/logos/bitmoji.png" alt="Sharan Vasoya Logo" />
            </div>
            <div className=" mt-4 md:mt-8 text-lg md:text-2xl text-center px-1">
                <div>My name is <span className="font-bold">Sharan Vasoya</span>,</div>
                <div className="font-normal ml-1">
                    I'm a <span className="text-pink-600 font-bold">Cybersecurity Enthusiast & Red Teamer!</span>
                </div>
            </div>
            <div className=" mt-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
            </div>
            <ul className=" mt-4 leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
                <li className=" list-pc">
                    I'm a <span className=" font-medium">Master’s Student in Cybersecurity (MSCCS)</span> at BAOU, 
                    with a passion for <span className="font-medium">Offensive Security & Ethical Hacking</span>. 
                    Currently exploring Red Teaming, CTFs, and penetration testing!
                </li>
                <li className=" mt-3 list-building">
                    I love working on projects like automated recon tools, exploit testing, and cybersecurity cheatsheets 
                    that help learners and professionals alike.
                </li>
                <li className=" mt-3 list-time">
                    When I’m not breaking into systems (ethically 😉), you’ll find me exploring 
                    new Linux setups, customizing my environment, or diving into books/videos on hacking and 
                    security research.
                </li>
                <li className=" mt-3 list-star">
                    My key interests include <span className=" font-medium">Red Teaming, Malware Analysis, Active Directory Attacks, and Cloud Pentesting</span>.
                </li>
            </ul>
        </>
    )
}

function Education() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Education
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" w-10/12  mt-4 ml-4 px-0 md:px-1">
                <li className="list-disc">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        Dr. Babasaheb Ambedkar Open University (BAOU), Ahmedabad
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2025 – 2027</div>
                    <div className=" text-sm md:text-base">Master of Science in Cyber Security</div>
                </li>
                <li className="list-disc">
                    <div className=" text-lg md:text-xl mt-4 text-left font-bold leading-tight">
                        SDJ International College, Surat
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2022 – 2025</div>
                    <div className=" text-sm md:text-base">Bachelor of Computer Applications</div>
                    <div className=" text-sm text-gray-300 font-bold mt-1">CGPA &nbsp; 7.1/10</div>

                </li>
            </ul>
        </>
    )
}

function Skills() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Technical Skills
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    I've worked with a wide variety of offensive security tools and programming languages.
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div> My areas of expertise are <strong className="text-ubt-gedit-orange">Red Teaming, Penetration Testing & Offensive Security.</strong></div>
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div>Here are my most frequently used tools & technologies:</div>
                </li>
            </ul>

            <div className="w-full md:w-10/12 flex mt-4">
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Languages & Tools</div>
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Frameworks & Platforms</div>
            </div>

            <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
                <div className="px-2 w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className="m-1" src="https://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=ffffff" alt="python" />
                        <img className="m-1" src="https://img.shields.io/badge/-JavaScript-%23F7DF1C?style=flat&logo=javascript&logoColor=000" alt="javascript" />
                        <img className="m-1" src="https://img.shields.io/badge/-Bash-4EAA25?style=flat&logo=gnubash&logoColor=ffffff" alt="bash" />
                        <img className="m-1" src="https://img.shields.io/badge/-Wireshark-1679A7?style=flat&logo=wireshark&logoColor=ffffff" alt="wireshark" />
                        <img className="m-1" src="https://img.shields.io/badge/-Nmap-00457C?style=flat&logo=security&logoColor=ffffff" alt="nmap" />
                        <img className="m-1" src="https://img.shields.io/badge/-BurpSuite-FF6633?style=flat&logo=burpsuite&logoColor=white" alt="burpsuite" />
                        <img className="m-1" src="https://img.shields.io/badge/-Metasploit-2E8B57?style=flat&logo=security&logoColor=white" alt="metasploit" />
                        <img className="m-1" src="https://img.shields.io/badge/-Hydra-000000?style=flat&logo=security&logoColor=white" alt="hydra" />
                        <img className="m-1" src="https://img.shields.io/badge/-Git-%23F05032?style=flat&logo=git&logoColor=%23ffffff" alt="git" />
                    </div>
                </div>

                <div className="px-2 flex flex-wrap items-start w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className="m-1" src="https://img.shields.io/badge/Linux-FCC624?style=flat&logo=linux&logoColor=000" alt="linux" />
                        <img className="m-1" src="https://img.shields.io/badge/Windows-0078D6?style=flat&logo=windows&logoColor=white" alt="windows" />
                        <img className="m-1" src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=000" alt="react" />
                        <img className="m-1" src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white" alt="nodejs" />
                        <img className="m-1" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white" alt="tailwind" />
                        <img className="m-1" src="https://img.shields.io/badge/GNS3-0081CB?style=flat&logo=gns3&logoColor=white" alt="gns3" />
                        <img className="m-1" src="https://img.shields.io/badge/VirtualBox-183A61?style=flat&logo=virtualbox&logoColor=white" alt="virtualbox" />
                        <img className="m-1" src="https://img.shields.io/badge/Packet Tracer-000000?style=flat&logo=cisco&logoColor=white" alt="packet tracer" />
                    </div>
                </div>
            </div>

            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list mt-4">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <span> And of course,</span> 
                    <img className=" inline ml-1" src="https://img.shields.io/badge/-Linux-0078D6?style=plastic&logo=linux&logoColor=ffffff" alt="linux" /> 
                    <span> is my daily driver!</span>
                </li>
            </ul>
        </>
    )
}

function Projects() {
    const project_list = [
        {
            name: "RedHawk – Automated Recon & Vulnerability Scanner",
            date: "2025",
            link: "https://github.com/Vasoyasharan/RedHawk",
            description: [
                "Automated recon & vulnerability scanner integrating Nmap, Sublist3r, WhatWeb, sqlmap & Shodan API. Includes advanced SQLi testing, WHOIS/IP info, and PDF reporting.",
            ],
            domains: ["python", "nmap", "sqlmap", "shodan", "automation"]
        },
        {
            name: "CyberCheat – Red Team Cheatsheet Website",
            date: "2025",
            link: "https://cyber-cheatsheet.onrender.com/",
            description: [
                "React-based cheatsheet website with animated collapsible sections, categorized notes, and copy-to-clipboard. Covers Linux/Windows PrivEsc, AD, C2, payloads & cloud pentesting.",
            ],
            domains: ["react", "tailwindcss", "javascript"]
        },
        {
            name: "CyberLock – Password Strength Meter",
            date: "2025",
            link: "https://vasoyasharan.github.io/PasswordStrengthMeter/",
            description: [
                "Web app that dynamically evaluates password strength based on entropy, dictionary words, and brute-force resistance.",
            ],
            domains: ["javascript", "security"]
        },
        {
            name: "Hexpert – Cybersecurity Tools Hub",
            date: "2025",
            link: "https://vasoyasharan.github.io/Hexpert/",
            description: [
                "A collection of mini cybersecurity tools built in JavaScript, including encoders/decoders and hash utilities.",
            ],
            domains: ["javascript", "web-security"]
        },
        {
            name: "UbuntuOS Portfolio",
            date: "2021",
            link: "https://github.com/Vasoyasharan/Vasoyasharan.github.io",
            description: [
                "Portfolio website with Ubuntu 20.04 theme, made using Next.js & Tailwind CSS.",
            ],
            domains: ["next.js", "javascript", "tailwindcss"]
        },
        {
            name: "Chrome Extension – Ad Free Spotify",
            date: "2021",
            link: "https://github.com/vivek9patel/ad-free-spotify",
            description: [
                "Chrome extension that auto-mutes/unmutes Spotify tab when ads play.",
            ],
            domains: ["javascript", "chrome-extension"]
        }
    ];

    const tag_colors = {
        "javascript": "yellow-300",
        "python": "green-200",
        "nmap": "blue-700",
        "sqlmap": "yellow-600",
        "shodan": "red-500",
        "automation": "gray-400",
        "react": "blue-400",
        "tailwindcss": "blue-300",
        "next.js": "purple-600",
        "security": "orange-500",
        "web-security": "teal-400",
        "chrome-extension": "yellow-400"
    }


    return (
        <>
            <div className="font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Projects
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>

            {/* Creative Portfolio Card */}
            <div className="my-4 w-5/6 md:w-3/4 p-4 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between text-white">
                <div className="mb-2 md:mb-0 text-center md:text-left">
                    <div className="text-lg font-bold">Explore My Work</div>
                    <div className="text-sm text-gray-200">Check out my GitHub, LinkedIn, or get in touch!</div>
                </div>
                <div className="flex flex-wrap gap-2 justify-center md:justify-end mt-2 md:mt-0">
                    <a href="https://github.com/Vasoyasharan" target="_blank" rel="noreferrer" className="px-3 py-1 bg-white text-purple-600 font-bold rounded hover:bg-purple-50 transition">GitHub</a>
                    <a href="https://www.linkedin.com/in/sharan-root/" target="_blank" rel="noreferrer" className="px-3 py-1 bg-white text-purple-600 font-bold rounded hover:bg-purple-50 transition">LinkedIn</a>
                    <a href="mailto:sharanvasoya@proton.me" className="px-3 py-1 bg-white text-purple-600 font-bold rounded hover:bg-purple-50 transition">Contact</a>
                </div>
            </div>

            {/* Project Cards */}
            {project_list.map((project, index) => {
                const projectName = project.link.split("/").pop();
                return (
                    <a key={index} href={project.link} target="_blank" rel="noreferrer" className="flex w-full flex-col px-4">
                        <div className="w-full py-2 px-3 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 cursor-pointer transition-all duration-200">
                            <div className="flex flex-wrap justify-between items-center">
                                <div className='flex justify-center items-center'>
                                    <div className="text-base md:text-lg mr-2">{project.name}</div>
                                    <iframe
                                        src={`https://ghbtns.com/github-btn.html?user=Vasoyasharan&repo=${projectName}&type=star&count=true`}
                                        frameBorder="0"
                                        scrolling="0"
                                        width="150"
                                        height="20"
                                        title={`${project.name}-star`}
                                    ></iframe>
                                </div>
                                <div className="text-gray-300 font-light text-sm">{project.date}</div>
                            </div>

                            <ul className="tracking-normal leading-tight text-sm font-light ml-4 mt-1">
                                {project.description.map((desc, idx) => (
                                    <li key={idx} className="list-disc mt-1 text-gray-100">{desc}</li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap items-start justify-start text-xs py-2">
                                {project.domains?.map((domain, idx) => (
                                    <span
                                        key={idx}
                                        className="px-1.5 py-0.5 w-max m-1 rounded-full border"
                                        style={{ borderColor: tag_colors[domain], color: tag_colors[domain] }}
                                    >
                                        {domain}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </a>
                )
            })}
        </>
    );
}


function Resume() {
    return (
        <iframe
            className="h-full w-full"
            src="./files/sharanresume.pdf"
            title="Sharan Vasoya Resume"
            frameBorder="0"
        ></iframe>
    );
}