import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { Tooltip } from "react-tooltip";

const iconSize = 30;

const data = [
    {
        icon: <BsPersonCircle size={iconSize} />,
        link: "https://samin-yaser.vercel.app/",
        hover: "Download My Resume"
    },
    {
        icon: <TiSocialLinkedinCircular size={iconSize + 10} />,
        link: "https://www.linkedin.com/in/realsaminyaser/",
        hover: "Connect with Me"
    },
    {
        icon: <FaGithub size={iconSize} />,
        link: "https://github.com/SaminYaser-work",
        hover: "Check Out My Work"
    },
    {
        icon: <AiFillTwitterCircle size={iconSize} />,
        link: "https://twitter.com/RealSaminYaser",
        hover: "Follow Me"
    }
];

export default function SocialSideBar() {
    return (
        <aside className="fixed bottom-0 hidden left-10 md:block">
            <ul
                className="flex justify-center items-center flex-col gap-1 after:content[''] after:bg-onewhite after:w-[1px] after:h-10 after:block">
                {data.map((item, index) => (
                    <li
                        key={index}
                        id={"d_" + index.toString()}
                        className="hover:-translate-y-[2px] ease-in-out duration-300"
                        title={`${item.hover ?? ""}`}
                    >
                        <a
                            href={item.link}
                            target="_blank"
                            rel="noreferrer"
                            className={"duration-300 ease-in-out hover:text-oneblue"}
                        >
                            {item.icon}
                        </a>
                        <Tooltip anchorSelect={"#d_" + index.toString()} place={"right"}
                                 border={"1px solid #fff"}
                                 style={{
                                     backgroundColor: "#1f2937",
                                     color: "#fff",
                                     borderRadius: "5px",
                                     fontSize: "1rem"
                                 }}
                        >
                            {item.hover}
                        </Tooltip>
                    </li>
                ))}
            </ul>
        </aside>
    );
}
