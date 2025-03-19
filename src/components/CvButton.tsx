const CvButton = () => {
  return (
    <a href="/pdf/cv.pdf" target="_blank" rel="noopener noreferrer" className="relative mt-4 sm:mt-5 md:mt-6">
      <div className="w-48 sm:w-52 md:w-56 h-10 sm:h-12 md:h-14 bg-main-yellow flex justify-between items-center rounded-full">
        <div className="m-1 w-2/3 h-[calc(100%-4px)] bg-main-green rounded-full flex items-center pl-3 sm:pl-4">
          <span className="text-white text-xs sm:text-sm md:text-base font-medium font-heebo">
            Download CV
          </span>
        </div>
        <div className="w-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 mx-2 px-2 py-1 bg-white rounded-full items-center">
          <img
            className="flex items-center justify-center"
            src="/images/Download.png"
            alt="Download"
          />
        </div>
      </div>
    </a>
  );
}; 
export default CvButton;