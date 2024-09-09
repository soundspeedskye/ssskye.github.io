import React, { useState, useCallback } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "../../styles/AnnotationLayer.css";
import "../../styles/TextLayer.css";
import { MdPlayArrow } from "react-icons/md";
import { useNavigate } from "react-router-dom";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.mjs`;

const PDFViewer = React.memo(
  ({ pdfFile, pageNumber, onDocumentLoadSuccess, scale }) => (
    <Document
      file={pdfFile}
      onLoadSuccess={onDocumentLoadSuccess}
      className="my-4"
      options={{ cMapUrl: "cmaps/", cMapPacked: true }}
    >
      <Page pageNumber={pageNumber} scale={scale} />
    </Document>
  )
);

const NIMOPDFComponent = ({ pdf_file1, pdf_file2 }) => {
  const [pageNumber1, setPageNumber1] = useState(1);
  const [numPages1, setNumPages1] = useState(null);
  const [pageNumber2, setPageNumber2] = useState(1);
  const [numPages2, setNumPages2] = useState(null);
  const [showTooltip, setShowTooltip] = useState(false); // 툴팁

  const navigate = useNavigate();

  const onDocumentLoadSuccess1 = useCallback(({ numPages }) => {
    setNumPages1(numPages);
  }, []);

  const onDocumentLoadSuccess2 = useCallback(({ numPages }) => {
    setNumPages2(numPages);
  }, []);

  const goToPreviousPage1 = () =>
    setPageNumber1((prev) => Math.max(prev - 1, 1));
  const goToNextPage1 = () =>
    setPageNumber1((prev) => Math.min(prev + 1, numPages1));
  const goToPreviousPage2 = () =>
    setPageNumber2((prev) => Math.max(prev - 1, 1));
  const goToNextPage2 = () =>
    setPageNumber2((prev) => Math.min(prev + 1, numPages2));

  return (
    <div className="flex flex-col items-start">
      <h1 className="relative flex items-center">
        <MdPlayArrow
          className="text-indigo-500 cursor-pointer"
          size={50}
          onClick={() => navigate("/video")} // 아이콘 클릭 시 이동
          onMouseEnter={() => setShowTooltip(true)} // 마우스 오버 시 툴팁 표시
          onMouseLeave={() => setShowTooltip(false)} // 마우스 아웃 시 툴팁 숨김
        />
        {showTooltip && ( // 툴팁 표시 조건
          <div className="absolute top-10 left-8 bg-gray-500 text-white text-xs rounded py-1 px-2 z-10">
            시연 영상 보러가기
          </div>
        )}
        <span className="ml-2 text-lg font-move-sans">
          직장인 대상 프리랜서 마켓 플랫폼 제작 프로젝트
        </span>
      </h1>
      <p className="mt-4 text-2xl font-move-sans">
        &ensp;부업을 하는 직장인이 증가함에 따라 취미 생활과 수입원을 연계한
        프리랜서 온라인 마켓 플랫폼을 직접 기획하였습니다.
      </p>
      <div className="flex flex-col items-center my-4 w-full max-w-4xl mx-auto">
        <div className="flex justify-center items-center w-full">
          <PDFViewer
            pdfFile={pdf_file1}
            pageNumber={pageNumber1}
            onDocumentLoadSuccess={onDocumentLoadSuccess1}
            scale={1.4}
          />
        </div>
        <div className="flex justify-center items-center mt-4">
          <button
            onClick={goToPreviousPage1}
            className="mx-2 p-2 bg-indigo-300 rounded hover:bg-gray-300"
            disabled={pageNumber1 <= 1}
          >
            <FaArrowLeft />
          </button>
          <p>
            Page {pageNumber1} of {numPages1}
          </p>
          <button
            onClick={goToNextPage1}
            className="mx-2 p-2 bg-indigo-300 rounded hover:bg-gray-300"
            disabled={pageNumber1 >= numPages1}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center my-4 w-full max-w-4xl mx-auto">
        <div className="flex justify-center items-center w-full">
          <PDFViewer
            pdfFile={pdf_file2}
            pageNumber={pageNumber2}
            onDocumentLoadSuccess={onDocumentLoadSuccess2}
            scale={0.8}
          />
        </div>
        <div className="flex justify-center items-center mt-4">
          <button
            onClick={goToPreviousPage2}
            className="mx-2 p-2 bg-indigo-300 rounded hover:bg-gray-300 "
            disabled={pageNumber2 <= 1}
          >
            <FaArrowLeft />
          </button>
          <p>
            Page {pageNumber2} of {numPages2}
          </p>
          <button
            onClick={goToNextPage2}
            className="mx-2 p-2 bg-indigo-300 rounded hover:bg-gray-300"
            disabled={pageNumber2 >= numPages2}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NIMOPDFComponent;
