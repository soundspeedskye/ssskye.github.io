import React from "react";
import NIMOPDFComponent from "../components/project/NIMOPDFComponent";
import DMAPDFComponent from "../components/project/DMAPDFComponent";

const ProjectPage = ({ project }) => {
  const renderPDFComponent = () => {
    switch (project) {
      case "project1":
        return (
          <NIMOPDFComponent
            pdf_file1="assets/pdf/nimonemo_P.pdf"
            pdf_file2="assets/pdf/nimonemo_T.pdf"
          />
        );
      case "project2":
        return (
          <DMAPDFComponent
            pdf_file1="assets/pdf/daengmyoapp_P.pdf"
            pdf_file2="assets/pdf/daengmyoapp_T.pdf"
          />
        );
      default:
        return <div>Invalid Project</div>;
    }
  };

  return <div>{renderPDFComponent()}</div>;
};

export default ProjectPage;
