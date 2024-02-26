import Giscus from '@giscus/react'

export default function Comments() {
  const darkMode = localStorage.getItem('darkMode') === 'enabled'

  return (
    <>
      <h6>Leave a comment</h6>
      <Giscus
        repo="SaminYaser-work/portfolio"
        repoId="R_kgDOKYENvQ"
        category="Comments"
        categoryId="DIC_kwDOKYENvc4Cdc21"
        mapping="url"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        term="Leave a comment"
        inputPosition="top"
        theme={darkMode ? 'dark' : 'light'}
        lang="en"
        loading="lazy"
      />
    </>
  )
}
