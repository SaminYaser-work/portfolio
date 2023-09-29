import { Tooltip } from 'react-tooltip'
import {getSocialLinks} from "../../data.tsx";

const socialLinks = getSocialLinks(25)

export default function SocialSideBar() {
  return (
    <aside className="fixed bottom-0 left-10 hidden xl:block">
      <ul className="after:content[''] flex flex-col items-center justify-center gap-2 after:block after:h-20 after:w-[2px] after:bg-onecyan">
        {socialLinks.map((item, index) => (
          <li key={index} id={'d_' + index.toString()} className="duration-300 ease-in-out hover:-translate-y-[2px] mb-5">
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className={'duration-300 ease-in-out hover:text-oneblue'}
            >
              {item.icon}
            </a>
            <Tooltip
              anchorSelect={'#d_' + index.toString()}
              place={'right'}
              border={'1px solid #fff'}
              delayShow={200}
              style={{
                backgroundColor: '#1f2937',
                color: '#fff',
                borderRadius: '5px',
                fontSize: '1rem',
              }}
            >
              {item.hover}
            </Tooltip>
          </li>
        ))}
      </ul>
    </aside>
  )
}
