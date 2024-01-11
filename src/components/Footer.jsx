
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto aak py-16 px-4 grid lg:grid-cols-3 gap-20 ml-10 mt-10  text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-red-500'>WEBNEX</h1>
        <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
        <h6 className='font-medium text-red-400'>Lorem</h6>
        <ul>
            <li className='py-2 text-sm'>Lorem</li>
            <li className='py-2 text-sm'>lorem</li>
            <li className='py-2 text-sm'>lorem</li>
            <li className='py-2 text-sm'>lorem</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-red-400'>Academy</h6>
        <ul>
            <li className='py-2 text-sm'>Classes</li>
            <li className='py-2 text-sm'>Contact</li>
           <li className='py-2 text-sm'>Location</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-red-400'>Company</h6>
        <ul>
            <li className='py-2 text-sm'>About</li>
            <li className='py-2 text-sm'>Blog</li>
            <li className='py-2 text-sm'>Job</li>
            <li className='py-2 text-sm'>Media</li>
            <li className='py-2 text-sm'>Careers Councelling</li>
        </ul>
    </div>
    <div>
    <h6 className='font-medium text-red-400'>Lorem</h6>
        <ul>
            <li className='py-2 text-sm'>Lorem</li>
            <li className='py-2 text-sm'>Lorem</li>
            <li className='py-2 text-sm'>Lorem</li>
            <li className='py-2 text-sm'>Lorem</li>
        </ul>
    </div>
      </div>
    </div>
  );
};

export default Footer;