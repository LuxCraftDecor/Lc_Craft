import React from 'react';
import { useState } from 'react';
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from './MenuCard.jsx';
import Navbar from './Navbar.jsx';
import HeroSection from '../../components/heroSection/HeroSection.jsx';

const uniqueList = ["Home","All",  ...new Set(Menu.map((curElem) => curElem.category))];


const MenuItems = () => {

    const [menuData, setMenuData] = useState([]);
    const [menuList, setMenuList] = useState(uniqueList);

    const filterItem = (category) => {

        if (category === "All"){
           setMenuData(Menu);
           return;
        } else if (category === "Home") {
            setMenuData([]);
            return;
          }

        const updatedList = Menu.filter((curElem) => {
            return curElem.category === category;
        });
        setMenuData(updatedList);
    };
    return (
        <>
        
            <Navbar filterItem={filterItem} menuList={menuList} />
            <HeroSection/>
            <MenuCard menuData={menuData} />
        </>
    )
};

export default MenuItems;
