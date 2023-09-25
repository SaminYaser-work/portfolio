import Subtitle from "./HeroSubtitle"
// import { RxDoubleArrowDown } from "react-icons/rx";

export default function Hero() {
    return (
        <div style={{
            "fontFamily": "JetBrains Mono Variable",
            "marginTop": "-5rem",
        }}>
            <section className="flex flex-col items-center justify-center h-screen">
                <div className="flex flex-col items-center justify-center flex-grow gap-3">
                    <h3 className="text-lg text-onegrey2 md:text-xl xl:text-4xl">
            <span style={{
                "fontStyle": "italic",
            }}>
              &#47;&#47;&nbsp; <span className="not-italic">👋</span> Assasalamu
              Alaikum, I&apos;m
            </span>
                    </h3>
                    <h1 className="font-mono text-4xl font-bold text-center md:text-8xl">
                        <span className="text-onelightyellow">&lt;</span>
                        <span className="text-onedarkred">Samin Yaser</span>
                        <span className="text-onelightyellow">/&gt;</span>
                    </h1>
                    <Subtitle/>
                    <a
                        href="https://www.google.com"
                        target="_blank"
                        referrerPolicy="no-referrer"
                        className="cursor-pointer relative mt-10 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium !text-onewhite !no-underline rounded-lg group bg-gradient-to-br from-onedarkred to-oneblue group-hover:from-onedarkred group-hover:to-oneblue hover:!text-oneblack focus:ring-4 focus:outline-none focus:ring-onelightred"
                    >
                        <span
                            className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-oneblack rounded-md group-hover:bg-opacity-0">
                          Download Resume
                        </span>
                    </a>
                </div>
                {/*<RxDoubleArrowDown className="mt-20 animate-bounce h-1/5" size={40} />*/}
            </section>
        </div>
    );
}