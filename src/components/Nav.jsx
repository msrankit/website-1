import  { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Btn from './Btn'

function Nav() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex  justify-between items-center h-24 max-w-[1240px] mx-auto px-4 w-full top-0  text-white'>
      <span className="mr-1 pb-2">
        <img src={'https://png.pngtree.com/png-vector/20220822/ourmid/pngtree-letter-w-logo-png-png-image_6119566.png'} className=" h-20  py-0" />
      </span>
      <h1 className='w-full text-xl font-[Roboto] font-bold text-red-500'> Webnex</h1>

      <ul className='hidden   lg:flex'>
        <li className='p-4 hover:text-red-500 cursor-pointer'>Home</li>
        <li className='p-4 hover:text-red-500 cursor-pointer'>Branch</li>
        <li className='p-4 hover:text-red-500 cursor-pointer'>About</li>
        <li className='p-4 hover:text-red-500 cursor-pointer'>Contact</li>
        <Btn>Sign in</Btn>
      </ul>
      <div onClick={handleNav} className='block lg:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r lg:hidden z-10  border-r-gray-900 bg-[#222629] ease-in-out duration-500' : 'ease-in-out duration-500 fixed  left-[-100%]'}>
        <span className="mr-1 pb-2">
          <img src={'https://png.pngtree.com/png-vector/20220822/ourmid/pngtree-letter-w-logo-png-png-image_6119566.png'} className=" h-20  py-0" />
        </span>
        <h1 className='w-full text-3xl font-bold text-red-500  m-4'>Webnex</h1>
        <li className='p-4 hover:text-red-500 cursor-pointer'>Home</li>
        <li className='p-4 hover:text-red-500 cursor-pointer'>Company</li>
        <li className='p-4 hover:text-red-500 cursor-pointer'>About</li>
        <li className='p-4 hover:text-red-500 cursor-pointer'>Contact</li>
        <Btn>Sign in</Btn>
      </ul>
    </div>
  );
}

export default Nav;