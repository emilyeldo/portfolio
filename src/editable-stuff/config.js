// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  // gradientColors: "#ffeddb, #f2dac5, #e5c8b0, #d8b69a, #cca485, ##bf9270",
  firstName: "Emily",
  middleName: "",
  lastName: "Eldo",
  message: " Msc Computing student at Northampton University ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/emilyeldo",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/emily-eldo-0a005515a/",
    }
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/1688537625134.jpeg"),
  imageSize: 375,
  messages:
    ["Hello. My name is Emily. Good to see you! ",
    "I am a passionate Software Tester having seven plus years of experience in Automation and Manual Testing across various domains, and currently pursuing MSc Computing in University of Northampton. I am always ready to employ automation methodologies to maximize quality assurance and testing quality. I have a proven track record of developing and optimizing the automation frameworks using Selenium that reduced testing time by 50% and improved overall test coverage.  My strong coding background provided me with a very good understanding of software development process which enables me to work well with development teams."+
    "Led peer reviews and provided coaching to team members by promoting best practices in test automation. I have helped my team to build confidence in delivering high quality products to various customers by designing better test strategies. In my previous roles as a team lead, I always took the approach to ensure that every team member is actively engaged and contributing their skills and ideas to the project. I am currently seeking a job as a Software Tester and I am eager to leverage both industry experience and ongoing academic pursuits to drive innovation and excellence in software testing and development"
    ],
  resume: require("../editable-stuff/resume-emily.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: false,
  heading: "Recent Projects",
  gitHubUsername: "emilyeldo", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/1688537625134.jpeg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/1688537625134.jpeg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: false,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 55 },
    { name: "C#", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "Let's get in touch!",
  email: "emilyeldo [at] outlook [dot] com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

const education = {
  show: true,
  heading: "Education",
  lists: [
      {
      university: "UNIVERSITY OF NORTHAMPTON",
      degree: "Post Graduate Degree - MSc Computing",
      time: "2023 - 2024",
      description: ""
      },
      {
          university: "MA COLLEGE OF ENGINEERING",
          degree: "Bachelor of Technology - Electrical Engineering",
          time: "2011-2015",
          description: ""
      }
  ]
};

const career = {
  show: true,
  heading: "Career",
  lists: [
      {
          CompanyName: "Ernst & Young",
          Address: "Kochi India",
          Title: "Senior Software Tester",
          Time: "June 2022 to June 2023",
          Descriptions: [
              "• Performed QA Analysis, test case preparation and test case execution for all sprint stories. ",
              "• Implemented test plan, requirement traceability matrix and test summary report. ",
              "• Managed end-to-end testing process, from requirement analysis to final delivery of the product.",
              "• Verified integrity between front end and back end using SQL queries.",
              "• Participated in sprint planning sessions, daily stand ups and retrospective meetings as part of Agile practices.",
              "• Coordinated with the internal teams to ensure the quality of products delivered."
          ],
          TechStack: ["Jira, Java, Selenium, Git, Agile, MS SQL"],
      },
      {
          CompanyName: "TCS",
          Address: "Kochi, India",
          Title: "Software Tester",
          Time: "September 2015 to June 2022 ",
          Descriptions: [
              "• Implemented Test Automation Framework using Selenium, Java, TestNG, Apache POI,Extent Reports, Page Object Model and Cucumber, thereby helped the team to reduce the manual testing effort. ",
              "• Developed and executed test cases in postman for Api interfaces of the product. ",
              "• Executed functional, regression, smoke, sanity and integration testing for all new products. ",
              "• Attended daily scrums and represented the testing team. ",
              "• Estimated and coordinated testing activities, ensuring minimal risk and maintaining product quality. ",
              "• Mentored junior testing members, provided guidance and support in testing. ",
              "• Defined regression test cases for the project and maintained traceability records back to the requirements. "
          ],
          TechStack: ["Java, Selenium, TestNG, Apache POI, Cucumber, Jira, Git"],
      }
  ]
};

const academicProject = {
  show: true,
  heading: "Projects",
  lists: [
      {
          ProjectTitle: "UtilityHub",
          DegreeTitle: "Msc Computing",
          Title: "Masters",
          Time: "",
          ProjectLink: "",
          GithubLink: "",
          Descriptions: [
              "Utility Bill Hub is a bill management system which is used to manage and track utility bills and payments made by various customers. The system would be having one admin login. Admin will have the responsibility to register a new customer, calculate the utility bill and send the bill via email to the customer. Hence the customer can get the utility bill instantly via online. This project is a java based application and done based on MVC model."
          ],
          TechStack: ["JavaFX, MySQL"],
      }
  ]
};


export { navBar, mainBody, about, repos, skills, leadership, getInTouch, career, education, academicProject };
