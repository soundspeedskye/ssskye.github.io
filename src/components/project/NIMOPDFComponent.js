import React, { useCallback, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "../../styles/AnnotationLayer.css";
import "../../styles/TextLayer.css";
import { MdPlayArrow } from "react-icons/md";
import { useNavigate } from "react-router-dom";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.mjs`;

const PDFViewer = React.memo(({ pdfFile, onDocumentLoadSuccess, scale }) => {
  const handlePdfClick = () => {
    window.open(pdfFile, "_blank"); // PDF를 새 창에서 열기
  };

  return (
    <div onClick={handlePdfClick} style={{ cursor: "pointer" }}>
      <Document
        file={pdfFile}
        onLoadSuccess={onDocumentLoadSuccess}
        className="my-4"
        options={{ cMapUrl: "cmaps/", cMapPacked: true }}
      >
        <Page pageNumber={1} scale={scale} /> {/* 첫 페이지만 표시 */}
      </Document>
    </div>
  );
});

const NIMOPDFComponent = ({ pdf_file1 }) => {
  const onDocumentLoadSuccess1 = useCallback(() => {}, []);

  return (
    <div className="flex flex-col items-start">
      <h1 className="relative flex items-center">
        <MdPlayArrow className="text-indigo-500" size={50} />

        <span className="ml-2 text-lg font-move-sans">
          직장인 대상 프리랜서 마켓 플랫폼 제작 프로젝트
        </span>
      </h1>
      <p className="mt-4 text-2xl font-move-sans">
        &ensp;부업을 하는 직장인이 증가함에 따라 취미 생활과 수입원을 연계한
        프리랜서 온라인 마켓 플랫폼을 직접 기획하였습니다.
      </p>
      <div className="flex flex-col items-center my-4 w-full max-w-4xl mx-auto">
        <div className="border-2 border-indigo-800 rounded-lg p-4 mb-4">
          {/* PDF 뷰어를 감싸는 div */}
          <div className="flex justify-center items-center w-full">
            <PDFViewer
              pdfFile={pdf_file1}
              onDocumentLoadSuccess={onDocumentLoadSuccess1}
              scale={1.4} // PDF 확대 비율
            />
          </div>
        </div>
        <div className="border-2 border-indigo-800 p-4 rounded-lg w-[136%] max-w-none">
          {" "}
          {/* 유튜브 링크를 위한 div */}
          <p className="mt-4 mb-4 text-center text-lg text-gray-800 font-move-sans">
            NIMONEMO DEMO VIDEO
          </p>
          <iframe
            className="rounded-lg w-full"
            style={{ height: "600px", width: "100%" }} // 높이를 800px로 설정
            src="https://www.youtube.com/embed/eRX9UAozuA8?list=PLOxo9D4D-nZ1be2K7FOd1mcvSxFB0lGe0&index=1"
            title="Nimonemo Demo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default NIMOPDFComponent;
