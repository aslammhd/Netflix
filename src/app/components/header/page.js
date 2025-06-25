'use client';
import Email from '../email/page';

export default function Header() { 
 
  return (
    <div className="bg-[url('/images/homebackground.jpg')] bg-cover h-[80vh] relative text-white ">
      <div className=" bg-opacity-70 h-full p-5">
        <nav className="relative">
          <img src="images/netflixLogo.png" alt="Netflix" className="w-[150px] md:w-[250px]" />
          <div className="flex absolute top-[50px] right-[10px] gap-2 items-center">
            <select className="bg-black bg-opacity-70 border border-white text-white px-2 py-1">
              <option value="en">English</option>
              <option value="hi">हिन्दी </option>
            </select>
            <button className="bg-red-600 text-white px-4 py-2 hover:bg-[#b30000] transition duration-300">Sign In</button>
          </div>
        </nav> 
        <div className="mt-[100px] text-center">
          <h1 className="font-extrabold text-[32px] md:text-[68px]">Unlimited movies, TV <br />shows and more</h1>
          <h2 className="mt-5 mb-[50px] text-xl">Starts at ₹149. Cancel at any time.</h2>
         <Email />
        </div>  
      </div>  
    </div>
  );
}
