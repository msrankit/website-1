

function Btn(props){
  return(
    <>
     <button className="bg-red-500 hover:bg-red-700 text-white font-bold min-w-[110px] py-2 px-6 border border-red-700 rounded md:ml-8">
  {props.children}
</button>
    </>
  )
}
export default Btn;
