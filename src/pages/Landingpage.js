import React,{useEffect} from 'react'
import AOS from 'aos';
import "aos/dist/aos.css";
// components
import Logo from "../Reusables/Logo";

const Landingpage = () => {

    useEffect(() =>{
        AOS.init({
			duration:1000,
			easing:'ease-in',
			delay:500,
			offset:100
		});
    },[])




    return (
        <div>
            <div className=" flex container-banner">

            <div data-aos="zoom-out" className="text-center">
                <h1 className="highlighted-text"> Admin <span className="white-text"> panel</span> </h1>
                <Logo />
            </div>
            </div>
        </div>
    )
}

export default Landingpage;
