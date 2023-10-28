import { Tooltip } from 'react-tooltip'
import { getSocialLinks } from '../../data.tsx'
import { resumeHover } from '../../data.tsx'
import { useState } from 'react'
import Dialog from '../Dialog.tsx'

const socialLinks = getSocialLinks(25)

export default function SocialSideBar() {
  const [isOpen, setIsOpen] = useState(false)

  function closeDialog() {
    setIsOpen(false)
  }

  return (
    <>
      <Dialog isOpen={isOpen} onClose={closeDialog} />
      <aside className="fixed bottom-0 left-10 hidden xl:block">
        <ul className="after:content[''] flex flex-col items-center justify-center gap-2 after:block after:h-20 after:w-[2px] after:bg-onecyan">
          {socialLinks.map((item, index) => (
            <li
              key={index}
              id={'d_' + index.toString()}
              className="mb-5 duration-300 ease-in-out hover:-translate-y-[2px]"
            >
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                aria-label={item.hover}
                className={'duration-300 ease-in-out hover:text-oneblue'}
                onClick={(e) => {
                  if (item.hover === resumeHover) {
                    e.preventDefault()
                    setIsOpen(true)
                  }
                }}
              >
                {item.icon}
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
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </>
  )
}
