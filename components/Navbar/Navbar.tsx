'use client'
import Icon from "../shared/Icon"

import NavItems from "./NavItems/NavItems"
import Profile from "./Profile/Profile"
import SearchSection from "./SearchSection/SearchSection"

const Navbar = () =>{
    return (
        <div className="flex flex-row items-center justify-end lg:justify-between h-20 px-4 lg:px-20 relative">
             <div className="absolute left-0 top-3">
               <Icon/>
             </div>
             
             <Profile/>
             <NavItems/>
             <SearchSection/>
        </div>
    )
}

export default Navbar