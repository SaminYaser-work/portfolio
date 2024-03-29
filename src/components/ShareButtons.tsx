import { cloneElement } from 'react'

interface ShareButtonsProps {
  url?: string
  title?: string
}

const AnchorTag = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    className="group flex cursor-pointer justify-center rounded-full p-2 align-middle transition-shadow duration-500 ease-in-out hover:shadow-[0_0_40px] hover:shadow-onemagenta"
  >
    {cloneElement(children as React.ReactElement, {
      className:
        'w-8 h-8 group-hover:scale-[0.8] transition-transform duration-500 ease-in-out fill-[color:var(--font-color)]',
    })}
  </a>
)

export default function ShareButtons({ url, title }: ShareButtonsProps) {
  if (!url) {
    url = window.location.href
  }

  const facebookSL = `https://www.facebook.com/sharer/sharer.php?u=${url}`
  const linkedinSL = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`
  const xSL = `https://twitter.com/intent/tweet?url=${url}`
  const redditSL = `https://reddit.com/submit?url=${url}&title=${title}`
  const hackerNewsSL = `http://news.ycombinator.com/submitlink?u=${url}&t=${title}`

  return (
    <>
      <h6>Share this</h6>

      <div className="flex justify-center gap-5 align-middle">
        <AnchorTag href={xSL}>
          <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24">
            <title>X</title>
            <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path>
          </svg>
        </AnchorTag>

        <AnchorTag href={linkedinSL}>
          <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <title>LinkedIn</title>
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
          </svg>
        </AnchorTag>

        <AnchorTag href={redditSL}>
          <svg
            fill="#000000"
            height="800px"
            width="800px"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 279.748 279.748"
          >
            <path
              d="M279.748,133.142c0-19.299-15.701-35-35-35c-10.768,0-20.674,4.812-27.279,13.064
   c-18.532-8.431-39.663-13.626-62.015-15.271l19.206-60.692l42.895,9.294c3.285,12.782,14.901,22.258,28.693,22.258
   c16.336,0,29.627-13.29,29.627-29.626c0-16.336-13.291-29.627-29.627-29.627c-11.801,0-21.999,6.941-26.759,16.95l-49.497-10.725
   c-5.041-1.092-10.094,1.833-11.651,6.756l-23.705,74.907c-26.164,0.638-50.988,6.053-72.356,15.775
   C55.674,102.954,45.768,98.142,35,98.142c-19.299,0-35,15.701-35,35c0,9.373,3.683,18.173,10.222,24.709
   c-3.9,8.37-5.875,17.076-5.875,25.936c0,24.048,14.396,46.492,40.538,63.199c25.447,16.264,59.183,25.221,94.989,25.221
   c35.808,0,69.542-8.957,94.989-25.221c26.142-16.707,40.538-39.151,40.538-63.199c0-8.859-1.975-17.565-5.875-25.936
   C276.065,151.314,279.748,142.515,279.748,133.142z M15.369,145.139c-2.212-3.59-3.369-7.688-3.369-11.997c0-12.682,10.317-23,23-23
   c5.444,0,10.558,1.851,14.649,5.258C35.027,123.702,23.517,133.689,15.369,145.139z M68.04,165.405c0-13.785,11.215-25,25-25
   c13.785,0,25,11.215,25,25c0,13.785-11.215,25-25,25C79.255,190.405,68.04,179.19,68.04,165.405z M191.159,222.459
   c-9.745,10.637-29.396,17.244-51.285,17.244c-21.888,0-41.539-6.607-51.284-17.244c-1.805-1.97-2.733-4.525-2.617-7.192
   c0.116-2.669,1.266-5.133,3.235-6.937c1.849-1.694,4.247-2.627,6.754-2.627c2.797,0,5.484,1.183,7.373,3.244
   c5.803,6.333,20.827,10.756,36.539,10.756c15.712,0,30.737-4.423,36.539-10.756c1.889-2.062,4.576-3.244,7.374-3.244
   c2.508,0,4.906,0.933,6.755,2.627c1.97,1.804,3.118,4.268,3.234,6.937C193.893,217.934,192.964,220.489,191.159,222.459z
    M186.708,190.405c-13.785,0-25-11.215-25-25c0-13.785,11.215-25,25-25c13.785,0,25,11.215,25,25
   C211.708,179.19,200.493,190.405,186.708,190.405z M264.379,145.139c-8.147-11.45-19.657-21.436-34.28-29.739
   c4.092-3.408,9.205-5.258,14.649-5.258c12.683,0,23,10.318,23,23C267.748,137.451,266.591,141.549,264.379,145.139z"
            ></path>
          </svg>
        </AnchorTag>

        <AnchorTag href={hackerNewsSL}>
          <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <title>Y Combinator</title>
            <path d="M0 24V0h24v24H0zM6.951 5.896l4.112 7.708v5.064h1.583v-4.972l4.148-7.799h-1.749l-2.457 4.875c-.372.745-.688 1.434-.688 1.434s-.297-.708-.651-1.434L8.831 5.896h-1.88z"></path>
          </svg>
        </AnchorTag>

        <AnchorTag href={facebookSL}>
          <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24">
            <title>Facebook</title>
            <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"></path>
          </svg>
        </AnchorTag>
      </div>
    </>
  )
}
