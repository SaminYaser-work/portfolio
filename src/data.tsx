import { FaGithub, FaRegAddressBook } from 'react-icons/fa'
import { RiTwitterXFill } from 'react-icons/ri'
import { SiMaildotru } from 'react-icons/si'
import { TfiLinkedin } from 'react-icons/tfi'

const iconSize = 30

export const cv_link = 'https://drive.google.com/file/d/1rk1Gz1D9vmN2NfAGTafvFaSg_gU3FRkE/view?usp=sharing'
export const gh = 'https://github.com/SaminYaser-work'

export const resumeHover = 'Download My Resume'

export const getSocialLinks = (iconSize: number) => [
  {
    icon: <SiMaildotru size={iconSize} />,
    link: 'mailto:saminyaserwork@gmail.com?Body=Dear%20Samin%2C',
    hover: 'Contact Me via Email',
  },
  {
    icon: <FaRegAddressBook size={iconSize} />,
    link: cv_link,
    hover: resumeHover,
  },
  {
    icon: <TfiLinkedin size={iconSize} />,
    link: 'https://www.linkedin.com/in/realsaminyaser/',
    hover: 'Connect with Me',
  },
  {
    icon: <FaGithub size={iconSize} />,
    link: gh,
    hover: 'Check Out My Work',
  },
  {
    icon: <RiTwitterXFill size={iconSize} />,
    link: 'https://twitter.com/RealSaminYaser',
    hover: 'Follow Me',
  },
]

export const cv_alt_link =
  'https://docs.google.com/spreadsheets/d/1db7KXLb-Rtw34cF_Zr0ot3YaqEKoOKDfEUYvN7mIW-Q/edit?usp=sharing'

export const cv_mail_link =
  'mailto:saminyaserwork@gmail.com?Body=Dear%20Samin%2C%0A%0ACan%20you%20please%20send%20me%20your%20CV%3F'

export const google_doc_cms =
  'https://script.google.com/macros/s/AKfycbydPvmFkqunUDjXHyHb6Wo4YE3UP3IwhbEcZS7VrsGcD-D9xy75VDCrwXzLLBnELLcWZg/exec'

export const jobInfo = [
    {
        icon: "ic:baseline-engineering",
        title: "Software Engineer",
        subtitle: "WPXPO",
        timeline: "November, 2023 - Present",
        description: [
            "Develop and deploy major updates and new features for the company's flagship product, PostX, enhancing functionality and user experience for more than 45K active users",
            "Enhanced the React and PHP server performance of the WooCommerce based product, WowStore (Formerly ProductX) by 40% within the first 4 months of joining the team",
            'Spearheaded the design and development of "WowOptin", a wordpress plugin to generate lead and perform conversion optimization to help website owners grow their email lists and increase sales.',
            "Updated the codebase to newer version of React, optimized and automated the build processes and enforced improved coding standards, significantly enhancing overall code quality and maintainability.",
            "Conduct interviews and provide training for new recruits, ensuring they are well-integrated into the team and equipped with the necessary skills.",
            "Collaborate with the design team to implement visually appealing and intuitive interfaces.",
            "Troubleshoot and resolve issues while collaborating with the support team.",
        ],
        skills: [
            "PHP",
            "TypeScript",
            "Sass",
            "ReactJS",
            "Wordpress",
            "Woocommerce",
            "MySQL",
            "NGINX",
            "NextJS",
            "Webpack",
            "Gulp",
            "Playwright",
            "PHPUnit",
        ],
    },
    {
        icon: "ic:baseline-person-4",
        title: "Junior Software Engineer",
        subtitle: "Inovace Technologies Ltd.",
        timeline: "May, 2023 - October, 2023",
        description: [
            "Write modern, performant, maintainable code for a HRM system that is used by more than 30K concurrent users daily.",
            "Work with a variety of different languages, platforms, frameworks, and IoT-related technologies such as Sprint Boot, Laravel, AngularJS, Apache Kafka, MQTT, etc.",
            "Gather a deep understanding of system architecture, leading the effort to create comprehensive system documentation and deployment on remote servers.",
            "Successfully identified and eliminated bottlenecks in critical workflows and Implemented database optimizations, reducing query response times by 86% and improving overall system performance",
            "Solely responsible for the first integration of Face Recognition attendance device, FastFace, used by thousands of people everyday, making it the companies best-selling product.",
            "Major contributor in the development of full-scale duplicate fingerprint detection system for BRAC Education Program consisting more than 10K young children.",
            "Successfully implemented hardened password validation and expiration, JWT refresh token, Activity log etc. to make the system PCIDSS compatible.",
            "Demonstrated a deep understanding of system architecture, leading the effort to create comprehensive system documentation and deploying applications to BRAC Bank’s on-premise servers.",
        ],
        skills: [
            "Java",
            "Spring Boot",
            "Laravel",
            "AngularJS",
            "Apache Kafka",
            "MQTT",
            "MySQL",
            "PostgreSQL",
            "NGINX",
            "Docker",
            "Bash",
            "AWS",
            "ELK",
        ],
    },
    {
        icon: "ic:baseline-person",
        title: "Cloud Computing Trainee",
        subtitle: "ETech Solutions Ltd.",
        timeline: "April, 2023 - September, 2023",
        description: [
            "Acquired in-depth knowledge about AWS EC2, S3, RDS, Lambda, CloudWatch, Elastic Beanstalk, Azure App Service and Flexible Database.",
            "Successfully completed an extensive course on cloud computing and have acquired the corresponding certification.",
            "The full-stack application was effectively deployed to the cloud infrastructure.",
        ],
        skills: ["AWS", "Azure", "Docker", "Laravel"],
    },
];

export const educationInfo = [
    {
        icon: "fa-solid:user-graduate",
        title: "American International University - Bangladesh",
        subtitle: "BSc in Computer Science and Engineering",
        timeline: "2019-2023",
    },
    {
        icon: "teenyicons:school-solid",
        title: "Dhaka City College",
        subtitle: "Higher Secondary Certificate",
        timeline: "2016-2018",
    },
    {
        icon: "ep:school",
        title: "Govt. Laboratory High School",
        subtitle: "Secondary School Certificate",
        timeline: "2006-2016",
    },
];

export const aboutMe = `
I'm Samin Yaser, a devoted and enthusiastic full-stack web developer with a creative mind and a strong dedication to transforming ideas into wonderfully functional websites and applications. My web development adventure began when I started my study for Computer Science degree. Since then, I've been on a never-ending drive to broaden my knowledge and improve my talents. I've had the pleasure of working on a wide range of projects, all of which have contributed to my development as a developer. Travelling on the path of the world of technology, my unquenchable curiosity drove me to investigate the fascinating worlds of machine learning and deep learning. This path into artificial intelligence has opened up new possibilities for me, allowing me to work on projects that use data-driven insights to construct intelligent, predictive systems. At the same time, the disruptive potential of blockchain and Web3 technologies piqued my interest. I saw their potential to decentralise, secure, and change businesses. This realisation drove me to enter the world of blockchain development, where I've been actively involved in the design and deployment of blockchain solutions. In my free time, I enjoy learning about new technologies. I also enjoy reading books about Computer Science and Islamic history and sciences.

Choosing to work with me means working with a dynamic technologist who combines technical competence with innovative problem-solving abilities. I am a diligent worker who thrives under pressure and excels at dealing with complicated issues in a calm and imaginative manner. My agility keeps me ahead of developing technology, and my strong work ethic ensures that I fulfil deadlines and provide great outcomes. Collaboration is central to my work, and I approach each project with a visionary mindset, striving not just to address urgent demands but also to create long-term value. When you collaborate with me, you receive a partner that is committed to pushing limits, solving issues, and ensuring the success of your project.
`

export const skills = [
  'React',
  'Next.js',
  'Angular',
  'TailwindCSS',
  'JQuery',
  'Wordpress',
  'Bootstrap',
  'Laravel',
  'Spring Boot',
  'Node.js',
  'Flask',
  'FastAPI',
  'Firebase',
  'MySQL',
  'PostgreSQL',
  'MongoDB',
  'TensorFlow',
  'PyTorch',
  'Scikit-Learn',
  'Numpy',
  'Pandas',
  'Matplotlib',
  'Ethers.js',
  'Hardhat',
  'Truffle',
  'JavaScript',
  'TypeScript',
  'Java',
  'Python',
  'PHP',
  'Solidity',
  'Git',
  'Docker',
  'Bash',
  'Selenium',
]

export const callToActionText =
  "Although I'm currently not looking for new opportunities, feel free to reach out if you want to say hi."

/*
  "I'm currently looking for new opportunities. Whether you have a proposition or just want to say hi, I'll try my best to get back to you!"

      'Write modern, performant, maintainable code for a HRM system that is used by more than 30K concurrent users daily.',
      'Work with a variety of different languages, platforms, frameworks, and IoT devices such as Sprint Boot, Laravel, AngularJS, DotNet Core, MQTT, etc.',
      'Developed, maintained, and improved HRM system that used by 25000 users daily.',
      'Developed RESTful APIs, implemented JWT & Refresh token, enhanced password validation and many other security enhancements in HRM with Spring Boot',
      'Implemented new features in the Tipsoi attendance devices via Laravel and MQTT.',
      'Developed new features in HRM with AngularJS while maintaining great UI/UX and built automated excel and PDF report generation with Flask',
      'Integrated third-party devices with existing system via DotNet Core.',
      "Played a pivotal role in the upgrade of HRM software's Java SDK, achieving an impressive 16% performance boost, enhancing system efficiency, and delivering an improved user experience.",
      'Maintained and optimized MySQL & Postgres databases, fixed bottlenecks resulting reduced query response times, monitored application performance with ELK stack and New Relic.',
      'Demonstrated a deep understanding of system architecture, leading the effort to create comprehensive system documentation.',
      'Successfully contributed to a high volume of commits and accepted PRs, showcasing a strong commitment to code quality and team collaboration.',
*
* */
