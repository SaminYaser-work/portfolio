// import CallToAction from './CallToAction.astro'

import {getSocialLinks} from "../data";

const currentYear = new Date().getFullYear()

const socialLinks = getSocialLinks(20)

export default function Footer() {
  return (
    <footer>
      <section className="py-8">
        <div className="container flex justify-between items-center">
          <div className={"flex justify-center items-center gap-3 flex-wrap md:gap-10"}>
            {
              socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-2xl text-onewhite hover:text-oneblue"
                >
                  {item.icon}
                </a>
              ))
            }
          </div>
          <p>
            &copy; {currentYear} - Samin Yaser
          </p>
        </div>
      </section>
    </footer>
  );
}