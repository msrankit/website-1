import { useTypewriter} from 'react-simple-typewriter';



function Hero(){
  const[typeEffect] = useTypewriter({
    words:['web Development;','Hacking;','App Development;', 'Linux;','Many more;'],
   loop:{},
   typeSpeed:160,
   deleteSpeed:120
  });


    return(
      <div className="text-white">
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
            <p className="text-[#f7dd7795] text-2xl font p-2">
          Learn Together!!      
            </p>
            <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 p-0">
            Learn with Webnex
            </h1>
            <div className="flex justify-center items-center">
                <p className="md:flex-5xl sm:text-4xl text-2xl font-bold py-4">
                    UpSkills in
                    <span className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 '>
                      {typeEffect}
             </span>
                </p>
               
            </div>
            <p className='md:text-2xl text-xl font-bold text-[#4ed4aef9]'>Eat,Code,Sleep And Repeat</p>
            <button className='bg-red-500 w-[200px] rounded-xl font-medium my-6 mx-auto py-3 text-white hover:bg-red-700  duration-500 opacity-95 text-2xl'>Get Started</button>
        </div>
      </div>

    )
}

export default Hero