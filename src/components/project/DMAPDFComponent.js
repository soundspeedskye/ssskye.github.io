import React, { useCallback } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "../../styles/AnnotationLayer.css";
import "../../styles/TextLayer.css";
import { MdPlayArrow } from "react-icons/md";

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

const DMAPDFComponent = ({ pdf_file1 }) => {
  const onDocumentLoadSuccess1 = useCallback(() => {}, []);

  return (
    <div className="flex flex-col items-start">
      {/* 프로젝트 제목 및 설명 */}
      <h1 className="relative flex items-center">
        <MdPlayArrow className="text-indigo-500" size={50} />
        <span className="ml-2 text-lg font-move-sans">
          유기동물 보호관리 플랫폼 제작 프로젝트
        </span>
      </h1>
      <p className="mt-4 text-2xl font-move-sans">
        &ensp;최근 반려가구가 증가함을 분석하고 사회적 이슈까지 연계하여
        유기동물 보호관리 플랫폼을 제작하였습니다.
      </p>
      <div className="flex flex-col items-center my-4 w-full max-w-4xl mx-auto">
        <div className="border-2 border-indigo-800 rounded-lg p-4 mb-4">
          {/* PDF 뷰어를 감싸는 div */}
          <div className="flex justify-center items-center w-full">
            <PDFViewer
              pdfFile={pdf_file1}
              onDocumentLoadSuccess={onDocumentLoadSuccess1}
              scale={0.84} // PDF 확대 비율
            />
          </div>
        </div>

        {/* 유튜브 섹션 */}
        <div className="border-2 border-indigo-800 p-4 rounded-lg w-[139%] max-w-none">
          <p className="mt-4 mb-4 text-center text-lg text-gray-800 font-move-sans">
            DAENGMYOAPP DEMO VIDEO
          </p>
          <iframe
            className="rounded-lg w-full"
            style={{ height: "600px", width: "100%" }}
            src="https://www.youtube.com/embed/7jut9Qcvbrw?list=PLOxo9D4D-nZ1be2K7FOd1mcvSxFB0lGe0&index=2"
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

export default DMAPDFComponent;
