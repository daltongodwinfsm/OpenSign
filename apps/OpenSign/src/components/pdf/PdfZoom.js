import React from "react";
import { useTranslation } from "react-i18next";
import { rotatePdfPage } from "../../constant/Utils";

function PdfZoom(props) {
  const { t } = useTranslation();
  const onClickZoomIn = () => {
    props.setScale(props.scale + 0.1 * props.scale);
    props.setZoomPercent(props.zoomPercent + 10);
  };
  const onClickZoomOut = () => {
    if (props.zoomPercent > 0) {
      if (props.zoomPercent === 10) {
        props.setScale(1);
      } else {
        props.setScale(props.scale - 0.1 * props.scale);
      }
      props.setZoomPercent(props.zoomPercent - 10);
    }
  };
  //`handleRotationFun` function is used to roatate pdf particular page
  const handleRotationFun = async (rotateDegree) => {
    const urlDetails = await rotatePdfPage(
      props.file,
      rotateDegree,
      props.pageNumber - 1,
      props.pdfRotateBase64
    );
    props?.setPdfArrayBuffer &&
      props?.setPdfArrayBuffer(urlDetails.arrayBuffer);
    props.setPdfRotatese64(urlDetails.base64);
  };
  return (
    <span className="hidden md:flex flex-col gap-1 text-center md:w-[5%] mt-[43px] 2xl:mt-[63px]">
      <span
        className="bg-gray-50 px-[4px] 2xl:px-[15px] 2xl:py-[10px] cursor-pointer"
        onClick={onClickZoomIn}
        title={t("zoom-in")}
      >
        <i className="fa-light fa-magnifying-glass-plus text-gray-500 2xl:text-[30px]"></i>
      </span>
      {!props?.isDisableRotate && (
        <>
          <span
            className="bg-gray-50 px-[4px] 2xl:px-[15px] 2xl:py-[10px] cursor-pointer"
            onClick={() => handleRotationFun(90)}
            title={t("rotate-right")}
          >
            <i className="fa-light fa-rotate-right text-gray-500 2xl:text-[30px]"></i>
          </span>
          <span
            className="bg-gray-50 px-[4px] 2xl:px-[15px] 2xl:py-[10px] cursor-pointer"
            title={t("rotate-left")}
            onClick={() => handleRotationFun(-90)}
          >
            <i className="fa-light fa-rotate-left text-gray-500 2xl:text-[30px]"></i>
          </span>
        </>
      )}
      <span
        className="bg-gray-50 px-[4px] 2xl:px-[15px] 2xl:py-[10px]"
        onClick={onClickZoomOut}
        style={{
          cursor: props.zoomPercent > 0 ? "pointer" : "default"
        }}
        title={t("zoom-out")}
      >
        <i className="fa-light fa-magnifying-glass-minus text-gray-500 2xl:text-[30px]"></i>
      </span>
    </span>
  );
}

export default PdfZoom;
