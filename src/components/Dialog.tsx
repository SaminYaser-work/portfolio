import { useEffect, type ReactNode, useState } from 'react'
import { cv_mail_link, cv_alt_link, google_doc_cms } from '../data'

type DialogProps = {
  isOpen: boolean
  onClose: () => void
}

// polyfill for AbortSignal
AbortSignal.timeout ??= function timeout(ms) {
  const ctrl = new AbortController()
  setTimeout(() => ctrl.abort(), ms)
  return ctrl.signal
}

const defaultDiaglogContent = {
  title: 'Thank You for Viewing my CV!',
  text: 'A New Tab shall open shortly. Please wait...',
  isError: false,
}

const errorDiaglogContent = {
  title: 'Oops!',
  text: 'Could not fetch CV link from my CMS. Please try again later.',
  isError: true,
}

const Dialog = ({ isOpen, onClose }: DialogProps) => {
  const [dialogContent, setDialogContent] = useState(defaultDiaglogContent)

  function openEmailLink(e) {
    e.preventDefault()
    window.open(cv_mail_link, '_blank')
    onClose()
  }

  useEffect(() => {
    if (!isOpen) {
      return
    }

    setDialogContent(defaultDiaglogContent)

    fetch(google_doc_cms, { signal: AbortSignal.timeout(5000) })
      .then((response) => response.json())
      .then((data) => window.open(data.cv, '_blank'))
      .then(() => setTimeout(onClose, 1000))
      .catch((error) => {
        setDialogContent(errorDiaglogContent)
      })
  }, [isOpen])

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-10 overflow-y-auto text-oneblack dark:text-white">
          <div className="flex min-h-screen items-center justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-onegrey2 opacity-20"></div>
            </div>

            <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">
              &#8203;
            </span>

            <div className="z-50 inline-block transform overflow-hidden rounded-lg bg-onegrey2 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle">
              <div className="bg-onewhite px-4 pb-4 pt-5 dark:bg-onegrey2 sm:p-6 sm:pb-4">
                <div className="flex flex-col items-center justify-center">
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                    {dialogContent.isError ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-red-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    ) : (
                      <svg
                        className="h-6 w-6 text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <div className="mt-3">
                    <h3 className="text-center text-xl font-bold leading-6">{dialogContent.title}</h3>
                    <div className="mt-2">
                      <p className="text-sm">{dialogContent.text}</p>
                    </div>
                  </div>
                </div>
              </div>
              {dialogContent.isError && (
                <div className="justify-center px-4 py-3 sm:flex sm:px-6">
                  <a
                    href={cv_alt_link}
                    target="_blank"
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-onegreen px-4 py-2 text-base font-bold !text-white !no-underline shadow-sm hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={onClose}
                  >
                    Try Alt. Link
                  </a>
                  <a
                    href={cv_mail_link}
                    target="_blank"
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-onemagenta px-4 py-2 text-base font-bold !text-white !no-underline shadow-sm hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={openEmailLink}
                  >
                    Email me
                  </a>
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-onelightred px-4 py-2 text-base font-bold text-white shadow-sm hover:bg-onedarkred focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={onClose}
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Dialog
