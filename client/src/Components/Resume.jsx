import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import resume from '../resume.pdf';

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   'pdfjs-dist/build/pdf.worker.min.js',
//   import.meta.url,
// ).toString();



const Resume = () => {
  return (
    <div>
      <Document file={resume}>
        <Page pageNumber={1}/>
      </Document>

    </div>
  )
}

export default Resume;