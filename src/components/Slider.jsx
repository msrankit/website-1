import { useState } from "react"
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import './Nav.css'
import { RxDotFilled } from 'react-icons/rx';


function Slider() {
    const slides = [
        { url: 'https://assets-global.website-files.com/6410ebf8e483b5bb2c86eb27/6410ebf8e483b53d6186fc53_ABM%20College%20Web%20developer%20main.jpg' },
        { url: 'https://www.shutterstock.com/image-vector/cyber-attack-concept-hacker-computer-600nw-2178049635.jpg' },
        { url: "https://img.freepik.com/premium-photo/mobile-app-developer-coding-language-development-purple-background-software-programming-concept-statistic-user-interface-system-minimal-cartoon-3d-render-illustration_598821-1149.jpg" },
        { url: "https://www.dreamhost.com/blog/wp-content/uploads/2018/09/elements-web-design-opt.jpg" }

    ]

    const [currentindex, setcurrentindex] = useState(0);

    const prevSlide = () => {
        const firstSlide = currentindex === 0;
        const newindex = firstSlide ? slides.length - 1 : currentindex - 1;
        setcurrentindex(newindex)
    }

    const gotoSlide=(slideIndex)=>{
        setcurrentindex(slideIndex)
    }

    const nextSlide = () => {
        const lastSlide = currentindex === slides.length - 1;
        const newIndex = lastSlide ? 0 : currentindex + 1;
        setcurrentindex(newIndex)
    }
    return (

        <div className=" max-w-[1400px] w-full   h-[600px] m-auto  relative group ">
            <h1 className="text-center text-7xl mb-10 pb-8 font-bold text-white  ">Why Us</h1>
            <div style={{ backgroundImage: `url(${slides[currentindex].url})` }} className="  w-full h-full rounded-2xl bg-center bg-cover  duration-500"></div>

            {/* left arrow */}
            <div className=' hidden group-hover:block absolute top-[70%] translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft size={30} onClick={prevSlide}></BsChevronCompactLeft>
            </div>
            {/* Right arrow */}
            <div className='hidden group-hover:block  absolute top-[70%] translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer' onClick={nextSlide} >
                <BsChevronCompactRight size={30} onClick={nextSlide}></BsChevronCompactRight>
            </div>
            <div className="flex top-4 justify-center py-2 ">
                {slides.map((slide,slideIndex)=>(
                    <div key={slideIndex} onClick={()=>gotoSlide(slideIndex)} className="text-2xl cursor-pointer">
                      <RxDotFilled />
                    </div>
                ))}
            </div>
        </div>
    )
}


export default Slider
