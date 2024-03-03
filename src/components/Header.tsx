 import { Link } from "react-router-dom"
 import MobileNav from "./MobileNav"
import MainNav from "./MainNav"
 export default function Header() {
   return (
    
       <header>
        <div className='border-b-2 border-b-orange-500 py-6'>
            <div className="container flex items-center mx-auto justify-between">
                <Link to={"/"} className="text-3xl font-bold tracking-tight text-orange-500">
                    MernEats.com
                </Link>
                <div className="md:hidden">
                    <MobileNav/>
                </div>
                <div className="hidden md:block">
                    <MainNav/>
                </div>
                {/* <div className="flex gap-2 items-center text-xl text-center text-orange-400 font-bold">
Order from <span className="text-3xl font-bold tracking-tight text-orange-500">MernEats.com</span> and Chill!! <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
</svg> */}
                {/* <div className="">Order from almost 4000 Restaurants with discount coupons</div> */}
                {/* </div>
                <div className='flex rounded-2xl gap-1 items-center '>
                
                <input className="border-2 border-orange-600 rounded-2xl px-2 py-1" type="text" placeholder='Restaurants Nearby'/>
                <div className="bg-orange-500 rounded-full p-1 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg> */}
{/* </div> */}
            {/* </div> */}
            </div>
            
           
        </div>
       </header>
   )
 }
 