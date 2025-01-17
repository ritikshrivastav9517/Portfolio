import CloseIcon from "@mui/icons-material/Close";
import { useNavigate, Link } from "react-router-dom";
import about_img from "../assets/Ritik.jpeg";
import DownloadIcon from '@mui/icons-material/Download';

const About = () => {
  const navigate = useNavigate();
  const backHome = () => {
    navigate("/");
  };
  return (
    <div
      className="text-white box-border animate-fade"
      style={{ fontFamily: "Poppins,sans-serif" }}
    >
      <div className="absolute right-14 top-7 max-md:right-6 max-md:top-4 ">
        <button
          onClick={backHome}
          className="after:border-2 after:border-[#009e66] after:w-4/5 after:h-4/5 after:animate-ping after:ease-out after:absolute after:rounded-full after:right-1 after:top-1"
        >
          <CloseIcon sx={{ fontSize: "38px", color: "#009e66" }} />
        </button>
      </div>
      <div className="flex align-middle justify-center flex-col">
        <div className="m-auto p-20">
          <p className="text-thin text-[#9f9f9f]">Get to Know About Me</p>
          <h1 className=" text-5xl">About</h1>
        </div>
        <div className="lg:w-3/4 max-md:w-full flex m-auto sm:max-lg:flex-col sm:max-lg:text-center sm:max-lg:p-auto max-md:flex-col max-md:text-center max-md:p-auto">
          <img
            src={about_img}
            className="w-1/3 max-md:mb-7 max-md:max-lg:w-1/4 max-md:border-2 max-md:border-[#009e66] sm:max-lg:rounded-full sm:max-lg:m-auto sm:max-lg:mt-16 max-md:w-1/3 max-md:border-1 max-md:rounded-full max-md:m-auto"
            alt="Ritik shrivastav"
          />

          <div className="ml-14 max-md:ml-0">
            <div className="p-5 ">
              <h1 className="text-[#009e66] text-2xl p-2 -mt-5 sm:max-lg:mr-10">
                Who am i?
              </h1>
              <h1 className="text-3xl font-bold p-3 max-md:text-xl">
                I'm Ritik Shrivastav, Full Stack Developer.
              </h1>
              <p className="text-[#9f9f9f] p-2 text-sm">
                I am a B.Tech undergraduate student at Abes Enginnering college,
                 pursuing Computer Science. I have a passion for
                developing solutions and am a keen learner. I enjoy working in
                Development and collaborating with Technical Societies. As a web developer, I love creating human-centric
                websites using ReactJs, and infusing functionality
                using Node. My goal is to create value and impact to bring
                about positive change.
              </p>
              <hr className="text-[#9f9f9f] mt-6" />
            </div>
            <div className="flex flex-col max-md:ml-5">
              <div className="flex max-md:flex-col max-md:p-0 p-2 ">
                <div className="flex pl-4 max-md:pl-0">
                  <span>Name:</span>
                  <p className="pl-2 text-[#9f9f9f]">Ritik Shrivastav</p>
                </div>
                <div className="flex pl-40 max-md:pl-0">
                  <span>Email:</span>
                  <p className="pl-2 text-[#009e66] hover:text-[#346b57] cursor-pointer">
                    <a href="gmailhere">
                     ritikshrivastav2003@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex max-md:flex-col  max-md:p-0 p-2">
                <div className="flex max-md:pl-0 pl-4">
                  <span>Age:</span>
                  <p className="pl-2 text-[#9f9f9f]">22</p>
                </div>
                <div className="flex pl-[283px] max-md:pl-0">
                  <span>Live: </span>
                  <p className="pl-2 text-[#9f9f9f]">Kushinagar, Uttar Pradesh</p>
                </div>
              </div>
            </div>
            <div>
              {/* <button class="mt-2 ml-5 bg-[#009e66] hover:bg-[#0e522b] text-white font-bold py-2 px-4 rounded-full mb-3">
                <Link to="#" target="_blank">
                <DownloadIcon sx={{ fontSize: "20px" }} className="animate-bounce mr-1 text-sm"/> Resume
                </Link>
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
