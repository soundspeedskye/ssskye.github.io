import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "../../styles/AnnotationLayer.css";
import "../../styles/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.mjs`;

const PDFViewer = ({
  pdfFile,
  pageNumber,
  onDocumentLoadSuccess,
  scale = 1,
}) => (
  <Document
    file={pdfFile}
    onLoadSuccess={onDocumentLoadSuccess}
    className="my-4"
    options={{ cMapUrl: "cmaps/", cMapPacked: true }}
  >
    <Page pageNumber={pageNumber} scale={scale} />
  </Document>
);

export default PDFViewer;
