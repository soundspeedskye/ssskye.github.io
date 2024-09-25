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
}) => {
  const handlePdfClick = () => {
    // 새 창에서 PDF 열기
    window.open(pdfFile, "_blank");
  };

  return (
    <div onClick={handlePdfClick} style={{ cursor: "pointer" }}>
      <Document
        file={pdfFile}
        onLoadSuccess={onDocumentLoadSuccess}
        className="my-4"
        options={{ cMapUrl: "cmaps/", cMapPacked: true }}
      >
        <Page pageNumber={pageNumber} scale={scale} />
      </Document>
    </div>
  );
};

export default PDFViewer;
