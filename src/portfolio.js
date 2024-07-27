/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import Link from '@mui/joy/Link';
import Launch from '@mui/icons-material/Launch';



// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Rakesh Nori",
  title: "Rakesh Nori",
  subTitle: (
    <>
      Engineering at <Link href='https://ramp.com/' rel="noopener" target ="_blank" style={{ fontSize: 'inherit', fontFamily: 'inherit' }}> Ramp </Link>
    </>
  ),
  resumeLink:
    "https://read.cv/rnori", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const interests = {
  spotify: "https://open.spotify.com/user/rocky3.14?si=0f8e1b2909804cb1",
  soundcloud: "https://soundcloud.com/rnori_21",
  goodreads: "https://www.goodreads.com/user/show/44655928-rakesh",
  letterboxd: "https://letterboxd.com/rakesh12/",
}

const socialMediaLinks = {
  github: "https://github.com/rnori-harv",
  linkedin: "https://linkedin.com/in/rakesh-nori-18371715a/",
  gmail: "rakeshsnori@gmail.com",
  twitter: "https://twitter.com/rakesh_nori",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "ML engineering, SWE. Interested in anything that involves learning new tech and building.",
  skills: [
    "Full-stack web application development with Python, Java, JavaScript, and React.",
     "Machine Learning + Deep Learning using PyTorch + Tensorflow",
      "Integrating Machine Learning models into production environments."
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Node",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },

    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      subHeader: "S.M. in Computational Science and Engineering (CSE), B.A. in Computer Science",
      duration: "September 2020 - May 2024",
      desc: "GPA: 3.94 / 4.00",
      descBullets: [
        "Notable courses: Machine Learning, Advanced Scientific Computing, Distributed Systems, Systems Development, Systems Programming, Programming Languages, Data Science, Data Structures and Algorithms"
      ]

    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "ML / Statistical Data Analysis", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Frontend",
      progressPercentage: "50%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section


const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experiences: [
    {
      role: "Backend Engineer",
      company: "Ramp",
      date: "July 2024 – Present",
      desc: "Spend Management Team"
    },
    {
      role: "Full Stack Engineer Intern",
      company: "ShapeCI",
      date: "January – May 2024",
    },
    {
      role: "Machine Learning Engineer Intern",
      company: "Splunk",
      date: "May – August 2022, May - August 2023",
      desc: "Anomaly Detection, AI Assistant, Cloud Networking",
    },
    {
      role: "Software Engineering Intern",
      company: "Quantumscape",
      date: "May 2021 – August 2021",
      desc: "Scientific Computing Team",
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
};

// Talks Sections

const talkSection = {
};

// Podcast Section

const podcastSection = {
};

const info = {
  twitter: "https://twitter.com/rakesh_nori",
  github: "https://github.com/rnori-harv",
  linkedin: "https://linkedin.com/in/rakesh-nori-18371715a/",
  email: "rnori@college.harvard.edu"
}

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  email_address: "rnori@college.harvard.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "rakesh_nori", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  interests,
  isHireable,
  info
};