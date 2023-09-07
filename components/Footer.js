const Footer = () => {
  return (
    <footer className="w-full bg-deepskyblue flex flex-row py-5 items-center justify-center ">
        <div className="ml-10 flex flex-row justify-start items-start">
            <img
              className="h-[40px] object-cover mx-10"
              alt=""
              src="/logo@2x.png"
            />
          </div>
        <div className="flex-1 flex flex-row items-center justify-end gap-[20px] text-[15px] text-white font-inter mr-8 ">
          <div className="relative">Vaccination and Healthcare</div>
          <div className="self-stretch relative bg-aliceblue-100 w-[1px] " />
          <div className="relative">Pet adoption FAQ’s</div>
          <div className="self-stretch relative bg-aliceblue-100 w-[1px] " />
          <div className="relative">{`Pet care connect© 2023 `}</div>
        </div>
   
    </footer>
  );
};

export default Footer;
