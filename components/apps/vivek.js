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
            "experience": <Experience />,
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
                <div id="experience" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "experience" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="Sharan's experience" src="./themes/Yaru/status/briefcase.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Experience</span>
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
                    I'm a <span className="text-pink-600 font-bold">IT Infrastructure Specialist & Cybersecurity Enthusiast!</span>
                </div>
            </div>
            <div className=" mt-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
            </div>
            <ul className=" mt-4 leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
                <li className=" list-pc">
                    I am a <span className=" font-medium">BCA graduate</span> and currently pursuing a <span className="font-medium">Master's in Cyber Security (MSCCS)</span>, with a strong passion for <span className="font-medium">IT Infrastructure, Network Security, and Cybersecurity Operations</span>.
                </li>
                <li className=" mt-3 list-building">
                    Currently, I work as an <span className="font-medium">IT Infrastructure Specialist at Suchi Semicon</span>, responsible for managing and maintaining the organization's IT ecosystem — ensuring secure, reliable, and efficient operations across users, systems, and network infrastructure.
                </li>
                <li className=" mt-3 list-time">
                    My day-to-day responsibilities include: Microsoft 365 Administration, Firewall Management & Network Security Monitoring, Windows Server Administration, Endpoint Security, Active Directory & Access Control, Hardware/Software Support, Network Troubleshooting, and IT Asset Management & Security Compliance.
                </li>
                <li className=" mt-3 list-star">
                    I hold the <span className=" font-medium">Fortinet Certified Fundamentals (FCF) in Cybersecurity</span> certification, and continuously work on strengthening skills in threat detection, vulnerability assessment, system hardening, and security best practices.
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

function SkillBar({ label, percent }) {
    return (
        <div className="mb-3">
            <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-300">{label}</span>
                <span style={{ color: '#00e5a0' }}>{percent}%</span>
            </div>
            <div className="w-full rounded-full" style={{ background: '#1e2a3a', height: '5px' }}>
                <div
                    className="rounded-full"
                    style={{ width: `${percent}%`, height: '5px', background: 'linear-gradient(90deg,#00b4d8,#00e5a0)' }}
                />
            </div>
        </div>
    );
}

function SkillTag({ label }) {
    return (
        <span className="px-2 py-1 m-1 rounded text-xs font-mono border"
            style={{ borderColor: '#00e5a0', color: '#00e5a0', background: 'rgba(0,229,160,0.07)' }}>
            {label}
        </span>
    );
}

function SkillCard({ title, icon, children }) {
    return (
        <div className="rounded-lg p-3 mb-3" style={{ background: '#111b27', border: '1px solid #1e3045' }}>
            <div className="flex items-center mb-3">
                <span className="mr-2" style={{ color: '#00e5a0' }}>{icon}</span>
                <span className="font-bold text-sm" style={{ color: '#00e5a0' }}>{title}</span>
            </div>
            {children}
        </div>
    );
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

            <div className="w-full px-2 md:px-4 mt-4 pb-4">
                {/* Row 1 */}
                <div className="flex flex-col md:flex-row gap-3 mb-3">
                    <div className="flex-1">
                        <SkillCard title="Security Tools" icon="🛡">
                            <SkillBar label="Metasploit / Burp Suite" percent={88} />
                            <SkillBar label="Nmap / Enum4linux" percent={90} />
                            <SkillBar label="SQLMap / Hydra" percent={82} />
                            <SkillBar label="Cryptography / Rev Eng" percent={75} />
                        </SkillCard>
                    </div>
                    <div className="flex-1">
                        <SkillCard title="Programming & Dev" icon="</>">
                            <SkillBar label="JavaScript / React.js" percent={88} />
                            <SkillBar label="Python" percent={85} />
                            <SkillBar label="Bash / PowerShell" percent={80} />
                            <SkillBar label="TailwindCSS / Git" percent={92} />
                        </SkillCard>
                    </div>
                    <div className="flex-1">
                        <SkillCard title="Tools & Infrastructure" icon="🖥">
                            <div className="flex flex-wrap">
                                {['Metasploit','Burp Suite','Wireshark','Nmap','Hydra','SQLMap','Kali Linux','Docker','Enum4linux','VirtualBox','Jenkins','AWS (Basic)','Packet Tracer','Nagios/Zabbix','PuTTY/SCP'].map(t => <SkillTag key={t} label={t} />)}
                            </div>
                        </SkillCard>
                    </div>
                </div>

                {/* Row 2 */}
                <div className="flex flex-col md:flex-row gap-3">
                    <div className="flex-1">
                        <SkillCard title="Networking & Protocols" icon="🌐">
                            <SkillBar label="Active Directory" percent={86} />
                            <SkillBar label="DNS / DHCP / VLANs" percent={85} />
                            <SkillBar label="Cisco CLI / Routing" percent={78} />
                            <SkillBar label="SSH / RDP / Subnetting" percent={88} />
                        </SkillCard>
                    </div>
                    <div className="flex-1">
                        <SkillCard title="System Admin & Infra" icon="⚙">
                            <SkillBar label="Windows Server / Ubuntu" percent={85} />
                            <SkillBar label="VMware / Hyper-V" percent={80} />
                            <SkillBar label="Group Policy / Event Viewer" percent={78} />
                        </SkillCard>
                    </div>
                </div>
            </div>
        </>
    )
}

function ExpEntry({ logo, title, company, type, period, duration, location, skills }) {
    return (
        <div className="flex items-start py-3 border-b border-gray-700 border-opacity-40 last:border-0">
            <div className="w-10 h-10 mr-3 rounded flex-shrink-0 flex items-center justify-center text-lg"
                style={{ background: '#1e2a3a', border: '1px solid #2e4060' }}>
                {logo}
            </div>
            <div className="flex-1">
                <div className="font-bold text-sm text-white">{title}</div>
                <div className="text-xs mt-0.5" style={{ color: '#00e5a0' }}>{company} · {type}</div>
                <div className="text-xs text-gray-400 mt-0.5">{period} · {duration}</div>
                <div className="text-xs text-gray-400">{location} · On-site</div>
                {skills && <div className="text-xs mt-1 text-gray-300">💎 {skills}</div>}
            </div>
        </div>
    );
}

function Experience() {
    return (
        <>
            <div className="font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Experience
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <div className="w-10/12 mt-4">
                <ExpEntry
                    logo="🏢"
                    title="GEA – IT Infrastructure"
                    company="Suchi Semicon Pvt Ltd"
                    type="Full-time"
                    period="Apr 2026 - Present"
                    duration="3 mos"
                    location="Surat, Gujarat, India"
                />
                <ExpEntry
                    logo="🖥"
                    title="Hardware Support Engineer"
                    company="MSI"
                    type="Full-time"
                    period="Dec 2025 - Mar 2026"
                    duration="4 mos"
                    location="Surat, Gujarat, India"
                />
                <ExpEntry
                    logo="💻"
                    title="Frontend Web Developer"
                    company="Depthin solution"
                    type="Part-time"
                    period="Aug 2023 - Oct 2024"
                    duration="1 yr 3 mos"
                    location="Surat, Gujarat, India"
                    skills="React.js, Project Management and +1 skill"
                />
                <ExpEntry
                    logo="🎓"
                    title="Frontend Web Developer Intern"
                    company="Bluesoft Infotech"
                    type="Internship"
                    period="Jun 2023 - Aug 2023"
                    duration="3 mos"
                    location="Mota varacha"
                />
            </div>
        </>
    );
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