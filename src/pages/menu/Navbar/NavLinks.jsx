import React, { useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import { links } from "./Mylinks";
import { FaChevronUp ,FaChevronDown } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
const NavLinks = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const navigate = useNavigate();



  const handleHeadClick =(mysublink)=>{
    navigate(`/collection/${mysublink}`)
    console.log(mysublink);
  }

   
  return (
    <>
      {links.map((link) => (
        <div>
          <div className=" flex px-3 justify-between text-center  text-center md:cursor-pointer group">
          <h1
            className="text-base text-[#204694] flex md:pr-0 pr-1 group"
            onClick={() => {
              if (link.submenu) {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }
            }} >
                      
                      <Link
                  className="text-[#204694] text-base capitalize"
                  to={
                    link.link === "full-collections"
                      ? `/allproducts/${link.link}`
                      : link.link === "limited-edition"
                      ? '/limited-edition'
                      : link.link === "/aboutus"
                      ? '/aboutus'
                      : "/home"
                  }
                >
               {link.name}
                 </Link>

               
                      
         {link.submenu && (
              <span className="text-sm md:hidden inline">
                <ion-icon
                  name={`${heading === link.name ? <FaChevronUp /> : <FaChevronDown />}`}
                ></ion-icon>
              </span>
            )}
            <span className="text-sm md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 group-hover:mt-2">
              {link.submenu && <FaChevronDown />}
            </span>
          </h1>

            {link.submenu && (
              <div>
                <div className="absolute left-0 w-full  z-10 top-32 hidden group-hover:md:block hover:md:block ">
                  <div className="bg-black w-full bg-opacity-75 border-2 border-white px-16 py-10 grid grid-cols-5 ">
                    {link.sublinks.map((mysublinks, index) => (
                     
                      <div key={index} className={index !== -1 ? "pl-5 border-l border-white" : ""}>
                       
                        <h1 className="text-sm capitalize text-left py-5 text-white font-semibold" onClick={() => handleHeadClick(mysublinks.link)}>
                          {mysublinks.Head}
                        </h1>
                        {mysublinks.sublink.map((slink, subIndex) => (
                          <li key={subIndex} className="text-xs capitalize text-left text-white ">
                            <Link to={`/allproducts/${slink.link}`} className="text-white">
                              <span>{slink.name}</span>
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div className="md:hidden">
        <FaBars onClick={() => setMenuOpen(!menuOpen)} />
      </div>

      {links.map((link, index) => (
        <div key={index}>
          {/* Existing code... */}

          {link.submenu && (
            <div className={`md:hidden ${menuOpen ? "block" : "hidden"}`}>
              {/* Mobile Submenus */}
              {link.sublinks.map((mysublinks, index) => (
                <div key={index}>
                  <h1
                    onClick={() =>
                      setSubHeading(
                        subHeading !== mysublinks.Head ? mysublinks.Head : ""
                      )
                    }
                    className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center"
                  >
                    {mysublinks.Head}
                    <span className="text-xl inline">
                      <ion-icon
                        name={`${
                          subHeading === mysublinks.Head
                            ? "chevron-up"
                            : "chevron-down"
                        }`}
                      ></ion-icon>
                    </span>
                  </h1>
                  <div
                    className={`${subHeading === mysublinks.Head ? "block" : "hidden"
                      }`}
                  >
                    {mysublinks.sublink.map((slink, subIndex) => (
                      <li key={subIndex} className="py-3 pl-14">
                        <Link to={slink.link}>{slink.name}</Link>
                      </li>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
        </div>
      ))}
    </>
  );
};

export default NavLinks;
