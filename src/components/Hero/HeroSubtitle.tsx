import { useEffect, useRef } from "react";
// @ts-ignore
import styles from "./HeroSubtitle.module.css";

const data = [
    "Software Engineer",
    "Web Developer",
    "ML Researcher",
    "Blockchain Developer",
];

export default function Subtitle() {
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        let it = 0;
        let done = false;

        const typeWriter = (text: string, i: number) => {
            if (i < text.length) {
                ref.current!.innerHTML = text.substring(0, i + 1);

                setTimeout(() => {
                    typeWriter(text, i + 1);
                }, 100);
            } else {
                setTimeout(() => {
                    removeText(text, i);
                }, 1000);
            }
        };

        const removeText = (text: string, i: number) => {
            if (i > 0) {
                ref.current!.innerHTML = text.substring(0, i - 1);

                setTimeout(() => {
                    removeText(text, i - 1);
                }, 100);
            } else done = true;
        };

        typeWriter(data[it], 0);

        const interval = setInterval(() => {
            if (done) {
                it = (it + 1) % data.length;
                done = false;
                typeWriter(data[it], 0);
            }
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <h2 className="text-lg font-bold text-center text-md md:text-2xl lg:text-4xl">
            <div>
                <span className="text-onelightred">console</span>.
                <span className="text-oneblue">log</span>(
                <span className={"text-onegreen"}>
          &ldquo;
                    <span ref={ref} className={styles.cursor}></span>
                    &rdquo;
        </span>
                );
            </div>
        </h2>
    );
}
