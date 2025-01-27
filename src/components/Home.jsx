import { ReactTyped } from "react-typed";
import "animate.css"

const Home = () => {
  const strings = [
    "<span class='highlight'>I'm</span> a frontend developer",
    "<span class='highlight'>I'm</span> a backend developer",
    "<span class='highlight'>I'm</span> a UI/UX designer",
    "<span class='highlight'>I'm</span> a tester"
  ]
  return (
    <div className="py-20 text-white bg-black bg-opacity-70">   
         <section
        id="home"
        className="min-h-screen flex items-center justify-center"
      >
        <div className="text-center  p-6 rounded-lg "
      
        >
          
          <img
            src="/profilePic.jpeg"
            className="h-52 w-52 md:h-48 md:w-48 mx-auto rounded-full mb-6  animate__animated  animate__flipInX"
            alt="this is the logo"
          />
          <h1 className="  text-5xl a70:text-5xl black-ops-one-regular svg transition-colors   hover:text-green-900 font-bold animate__animated animate__backInDown">
            Welcome
          </h1>
          <p className="text-2xl md:text-3xl mt-4 ">Salim Khan</p>
          <p className="mt-4 text-lg">
            <ReactTyped
              className="  text-white"
              strings={strings}
              typeSpeed={40}
              backSpeed={50}
              loop
            /></p>
          <p className="mt-4 text-lg">Explore my work below!</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
