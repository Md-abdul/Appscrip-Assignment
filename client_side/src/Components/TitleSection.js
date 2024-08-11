import React from "react";

const TitleSection = () => {
  return (
    <>
      <div className="text-center px-4 sm:px-6 md:px-12 lg:px-24">
        <h1 className="font-textfont text-2xl sm:text-thirdSetoftext md:text-secondsetofText lg:text-textSize font-normal leading-tight sm:leading-subHeadingLineHeight md:leading-customLineHeight tracking-customLetterSpacing mt-8 sm:mt-12 md:mt-16 base:font-bold">
          DISCOVER OUR PRODUCTS
        </h1>
        <p className="mt-4 sm:mt-5 md:mt-6 font-textfont text-sm sm:text-base md:text-subHeadingSize leading-normal sm:leading-relaxed md:leading-subHeadingLineHeight font-extralight">
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          <span className="hidden md:inline">
            {" "}
            <br />{" "}
          </span>
          <span className="inline md:hidden"> </span>
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </div>
      <hr className="h-px my-4 bg-horizontalLineColor border-1 mx-auto w-5/6 mt-8"></hr>
    </>
  );
};

export default TitleSection;
