import Subtitle from './HeroSubtitle'
import { cv_link } from '../../data.tsx'
import Dialog from '../Dialog.tsx'
import { useState } from 'react'

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false)

  function closeDialog() {
    setIsOpen(false)
  }

  return (
    <div
      style={{
        fontFamily: 'JetBrains Mono Variable',
        marginTop: '-5rem',
      }}
    >
      <section className="flex h-screen flex-col items-center justify-center">
        <div className="flex flex-grow flex-col items-center justify-center gap-3">
          <h3 className="text-sm text-onegrey2 md:text-2xl lg:text-4xl">
            <span>
              &#47;&#47; <span className="not-italic">👋</span>&nbsp;
              <span className={'font-mono italic'}>Assasalamu Alaikum, I&apos;m</span>
            </span>
          </h3>
          <h1
            className="group text-center font-mono text-4xl font-bold md:text-8xl lg:text-9xl"
            style={{ fontFamily: 'JetBrains Mono Variable' }}
          >
            <span className="inline-block text-onelightyellow duration-200 ease-in-out group-hover:-translate-x-2 ">
              &lt;
            </span>
            <span className="text-onedarkred">Samin Yaser</span>
            <span className="inline-block text-onelightyellow duration-200 ease-in-out group-hover:translate-x-2">
              /&gt;
            </span>
          </h1>
          <Subtitle />
          <a
            href={cv_link}
            onClick={(e) => {
              e.preventDefault()
              setIsOpen(true)
            }}
            target="_blank"
            referrerPolicy="no-referrer"
            className="group relative mb-2 mr-2 mt-10 inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-onedarkred to-oneblue p-0.5 text-xl font-medium !text-oneblack !no-underline hover:!text-white focus:outline-none focus:ring-4 focus:ring-onelightred group-hover:from-onedarkred group-hover:to-oneblue dark:!text-onewhite dark:hover:!text-oneblack"
          >
            <span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-oneblack">
              Download Resume
            </span>
          </a>
        </div>
      </section>
      <Dialog isOpen={isOpen} onClose={closeDialog} />
    </div>
  )
}
