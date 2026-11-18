import { } from 'react';
import { VscDownload } from "react-icons/vsc";
import { useAppState } from '../../../hooks/useAppContext';
import useRevealClass from '../../../hooks/useRevealClass';

import enCV from '../../../assets/docs/hojjat-azizi-cv.en.pdf';
import faCV from '../../../assets/docs/hojjat-azizi-cv.fa.pdf';
import { classCombiner } from '../../../utils';


const DownloadCV = () => {
  const { language: lang } = useAppState();


  return (
    <div className='pt-8 flex flex-col gap-0'>
      <div className='clear-both mt-6'></div>
      <h2 ref={useRevealClass({ className: ['animation-delay-[150ms]', 'animate-fade-r'] })}
        className='opacity-0 flex items-center gap-2 md:gap-3 text-base font-semibold text-primary-100 leading-none text-shadow-primary-900 text-shadow-md'>
        <i className='block flex-1 h-px bg-primary-500'></i>

        <a href={lang === "en" ? enCV : faCV} aria-label={lang === "en" ? 'Download Resume (PDF)' : 'دانلود رزومه (PDF)'}
          className={classCombiner(`inline-flex items-center justify-center gap-2 transition hover:text-blue-600`)}>
          <span><VscDownload fontSize={'1.5em'} /></span>
          {lang === "en"
            ? 'Download CV'
            : 'دانلود رزومه'}
        </a>

        <i className='block flex-1 h-px bg-primary-500'></i>
      </h2>
      <div className='clear-both mb-2'></div>
    </div>
  )
}

export default DownloadCV;
