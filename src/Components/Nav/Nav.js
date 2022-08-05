import React from "react";
import './Nav.css'
import Filter from "./Filter";

const Nav = ({sectionTag, setSectionTag}) => {


    return (
        <nav>
            <h1>NYT Top Stories</h1>
            <Filter sectionTag={sectionTag} setSectionTag={setSectionTag} />
        </nav>
    )
}
export default Nav