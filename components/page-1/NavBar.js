import React from "react"
import { useRouter } from "next/router";
import App from "next/app";

export default function Navbar(){

    const router = useRouter();

    const underlineClass = "col-start-6 link link-underline link-underline-black "

    const HomeButton = () => (
        <div
          className="flex justify-center " 
          onClick={function() {router.push("../");}}
    
        >
        Home </div>
      );
      const AboutButton = () => (
        <div
          className="flex justify-center"
          onClick={function() {router.push("../about");}}
    
        >
        About Us</div>
      );
      const CompilersButton = () => (
        <div
          className="flex justify-center"
          onClick={function() {router.push("../compilers");}}
    
        >
        Compilers </div>
      );
      const BlogButton = () => (
        <div
          className="flex justify-center"
          onClick={function() {router.push("../blogs");}}
    
        >
        Blogs </div>
      );
      const ContactButton = () => (
        <div
          className="flex justify-center outline outline-1 outline-gray-300 outline-offset-1 rounded-2xl"
          onClick={function() {router.push("../contact");}}
    
        >
        Contact us </div>
      );
    return(
        <div id="Navbar" className="">
            <div className=" bg-transparent grid grid-cols-12 gap-4">
                <div className="text-3xl font-extrabold flex justify-center col-start-2">RYU</div>
                    <div className={underlineClass} ><HomeButton /></div>
                    <div className=""> <AboutButton/></div>
                    <div><CompilersButton/></div>
                    <div><BlogButton/></div>
                    <div><ContactButton/></div>
            </div>

        </div>
    )
}