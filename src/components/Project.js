import CloseIcon from "@mui/icons-material/Close";
import LanguageSharpIcon from "@mui/icons-material/LanguageSharp";
import { useNavigate, Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import gemni from "../assets/gemni.png";
import vidhub from "../assets/vidhub.png";
import portfolio from "../assets/logo.png";
import inshort from "../assets/inshort.png";

const Project = () => {
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
          <p className="text-thin text-[#9f9f9f]">Check out My Projects</p>
          <h1 className=" text-5xl mt-3">Projects</h1>
        </div>
        {/* Card Container */}
        <div className="flex flex-wrap justify-center m-auto sm:max-lg:flex-wrap max-md:flex-col max-md:text-center max-md:mb-4">
          {/* Card */}
          <div className="bg-[#1f1e1e] rounded-md lg:m-4 w-96 max-md:mt-4">
            <div className="relative m-auto cursor-pointer group overflow-x-hidden hover:scale-105 transition-all duration-300 ease-linear">
              <div className="bg-[#000000dc] hidden z-20 w-[92%] m-4 h-[88%] overflow-hidden absolute transition animate-right group-hover:block">
                <div className="flex align-middle justify-center p-16">
                  <Link to="https://clone-gemini.vercel.app/">
                    <LanguageSharpIcon
                      sx={{ color: "#009e66", fontSize: "35px" }}
                      className=" hover:scale-125 m-4"
                    />
                  </Link>
                </div>
              </div>
              <img src={gemni} alt="" className="w-full p-4" />
            </div>
            <div className="p-3 max-md:text-center">
              <h1 className="lg:text-2xl px-2">Google gemini Clone</h1>
              <ul className="flex text-sm text-[#009e66] max-md:justify-center">
                <li className="p-2">HTML</li>
                <li className="p-2">CSS</li>
                <li className="p-2">JavaScript</li>
                <li className="p-2">ReactJs</li>
              </ul>
            </div>
          </div>

          {/* Card */}
          <div className="bg-[#1f1e1e] rounded-md lg:m-4 w-96 max-md:mt-4">
            <div className="relative cursor-pointer group overflow-x-hidden hover:scale-105 transition-all duration-300 ease-linear">
              <div className="bg-[#000000dc] hidden z-20 w-[92%] m-4 h-[88%] overflow-hidden absolute transition animate-right group-hover:block">
                <div className="flex align-middle justify-center p-16">
                  <Link to="https://github.com/ritikshrivastav9517/youtube">
                    <GitHubIcon
                      sx={{ color: "#009e66", fontSize: "35px" }}
                      className=" hover:scale-125 m-4"
                    />
                  </Link>

                  <Link to="https://magenta-naiad-8e8466.netlify.app/">
                    <LanguageSharpIcon
                      sx={{ color: "#009e66", fontSize: "35px" }}
                      className=" hover:scale-125 m-4"
                    />
                  </Link>
                </div>
              </div>
              <img src={vidhub} alt="vidhub" className="w-full p-5 " />
            </div>
            <div className="p-3">
              <h1 className="lg:text-2xl px-2">YouTube Clone</h1>
              <ul className="flex text-sm text-[#009e66] max-md:justify-center">
                <li className="p-2">React</li>
                <li className="p-2">Redux</li>
                <li className="p-2">TailwindCSS</li>
                <li className="p-2">YouTube APIs</li>
              </ul>
            </div>
          </div>

          {/* Card */}
          <div className="bg-[#1f1e1e] rounded-md lg:m-4 w-96 max-md:mt-4">
            <div className="relative cursor-pointer group overflow-x-hidden hover:scale-105 transition-all duration-300 ease-linear">
              <div className="bg-[#000000dc] z-20 w-[92%] m-4 h-[88%] overflow-hidden absolute transition animate-right hidden group-hover:block">
                <div className="flex align-middle justify-center p-16">
                  <Link to="">
                    <GitHubIcon
                      sx={{ color: "#009e66", fontSize: "35px" }}
                      className=" hover:scale-125 m-4"
                    />
                  </Link>
                  <Link to="">
                    <LanguageSharpIcon
                      sx={{ color: "#009e66", fontSize: "35px" }}
                      className=" hover:scale-125 m-4"
                    />
                  </Link>
                </div>
              </div>
              <img
                src={portfolio}
                alt="portfolio"
                className="w-3/4 p-4 ml-12"
              />
            </div>
            <div className="p-3 w-full">
              <h1 className="lg:text-2xl px-2">Portfolio</h1>
              <ul className="flex text-sm text-[#009e66] max-md:justify-center">
                <li className="p-2">HTML</li>
                <li className="p-2">CSS</li>
                <li className="p-2">JavaScript</li>
                <li className="p-2">React</li>
                <li className="p-2">TailwindCSS</li>
              </ul>
            </div>
          </div>

          {/* Card */}
          <div className="bg-[#1f1e1e] rounded-md lg:m-4 w-96 max-md:mt-4">
            <div className="relative cursor-pointer group overflow-x-hidden hover:scale-105 transition-all duration-300 ease-linear">
              <div className="bg-[#000000dc] z-20 w-[92%] m-4 h-[88%] overflow-hidden absolute transition animate-right hidden group-hover:block">
                <div className="flex align-middle justify-center p-16">
                  <Link to="https://github.com/ritikshrivastav9517/inshort-clon">
                    <GitHubIcon
                      sx={{ color: "#009e66", fontSize: "35px" }}
                      className=" hover:scale-125 m-4"
                    />
                  </Link>
                </div>
              </div>
              <img src={inshort} alt="portfolio" className="w-3/4 p-4 ml-12" />
            </div>
            <div className="p-3 w-full">
              <h1 className="lg:text-2xl px-2">Inshort News</h1>
              <ul className="flex text-sm text-[#009e66] max-md:justify-center">
                <li className="p-2">JavaScript</li>
                <li className="p-2">React</li>
                <li className="p-2"></li>
                <li className="p-2">Node</li>
                <li className="p-2">Express</li>
                <li className="p-2">mongoDb</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Project;
