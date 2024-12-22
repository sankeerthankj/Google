import { FormEvent, useRef } from "react";
import {
  MicrophoneIcon,
  SearchIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import Avatar from "../Components/Avatar";
import { Footer } from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import { useResultContext } from "../Context/ResultContextProvider";


export const Home = () => {
  const searchInputRef = useRef<HTMLInputElement>(null) 
  const navigate = useNavigate();
  const { setSearchTerm } = useResultContext();  
  const search = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const term = searchInputRef.current?.value!;  


    setSearchTerm(term);
    navigate("/search")
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <header className="flex w-full p-5 justify-between text-sm text-gray-950">
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
          <Avatar url="https://media.licdn.com/dms/image/v2/D5603AQHCVwmSHOb1vQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1695571985320?e=2147483647&v=beta&t=xUaxWwlRveIZ8MS7WNVdYsOskv6k_0d5k0r3v-2eGBk" />
        </div>
      </header>

      <form className="flex flex-col items-center mt-44 flex-grow w-4/5" onSubmit={search}>
        <img
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          width={300}
          height={100}
        />
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input type="text" className="focus:outline-none flex-grow" />
          <MicrophoneIcon className="h-5" />
        </div>
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button className="btn">Google Search</button>
          <button className="btn">I'm Feeling Lucky</button>
        </div>
      </form>
      <Footer />
    </div>
  );
};
