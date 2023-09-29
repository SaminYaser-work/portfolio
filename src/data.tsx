import { FaGithub, FaRegAddressBook } from 'react-icons/fa'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { BsLinkedin } from 'react-icons/bs'
import { SiMaildotru } from 'react-icons/si'
import { RiTwitterXFill } from 'react-icons/ri'
import { TfiLinkedin } from 'react-icons/tfi'

const iconSize = 30

export const getSocialLinks = (iconSize: number) => [
  {
    icon: <SiMaildotru size={iconSize} />,
    link: 'mailto:saminyaserwork@gmail.com?Body=Dear%20Samin%2C',
    hover: 'Contact Me via Email',
  },
  {
    icon: <FaRegAddressBook size={iconSize} />,
    link: 'https://samin-yaser.vercel.app/',
    hover: 'Download My Resume',
  },
  {
    icon: <TfiLinkedin size={iconSize} />,
    link: 'https://www.linkedin.com/in/realsaminyaser/',
    hover: 'Connect with Me',
  },
  {
    icon: <FaGithub size={iconSize} />,
    link: 'https://github.com/SaminYaser-work',
    hover: 'Check Out My Work',
  },
  {
    icon: <RiTwitterXFill size={iconSize} />,
    link: 'https://twitter.com/RealSaminYaser',
    hover: 'Follow Me',
  },
]

export const jobInfo = [
  {
    icon: 'ic:baseline-engineering',
    title: 'Junior Software Engineer',
    subtitle: 'Inovace Technologies Ltd.',
    timeline: 'May, 2023 - Present',
    description: [
      'Write modern, performant, maintainable code for a HRM system that is used by more than 30K concurrent users daily.',
      'Work with a variety of different languages, platforms, frameworks, and IoT-related technologies such as Sprint Boot, Laravel, AngularJS, Apache Kafka, MQTT, etc.',
      'Gather a deep understanding of system architecture, leading the effort to create comprehensive system documentation and deployment on remote servers.',
    ],
  },
  {
    icon: 'ic:baseline-person',
    title: 'Cloud Computing Trainee',
    subtitle: 'ETech Solutions Ltd.',
    timeline: 'April, 2023 - September, 2023',
    description: [
      'Aquired in-depth knowledge about AWS EC2, S3, RDS, Lambda, CloudWatch, Elastic Beanstalk, Azure App Service and Flexible Database.',
      'Successfully completed an extensive course on cloud computing and have acquired the corresponding certification.',
      'The full-stack application was effectively deployed to the cloud infrastructure.',
    ],
  },
]

export const educationInfo = [
  {
    icon: 'fa-solid:user-graduate',
    title: 'American International University-Bangladesh',
    subtitle: 'BSc in Computer Science and Engineering',
    timeline: '2019-2023',
  },
  {
    icon: 'teenyicons:school-solid',
    title: 'Dhaka City College',
    subtitle: 'Higher Secondary Certificate',
    timeline: '2016-2018',
  },
  {
    icon: 'ep:school',
    title: 'Govt. Laboratory High School',
    subtitle: 'Secondary School Certificate',
    timeline: '2006-2016',
  },
]

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
  "I'm currently looking for new opportunities in research work in the field of SWE, ML/DL or Blockchain with a team that has a strong determination to publish good papers. Whether you have a proposition or just want to say hi, I'll try my best to get back to you!"

/*

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
