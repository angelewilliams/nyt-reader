import React from "react";
import { sections } from "../../Assets/data";
import fetchData from "../../apiCalls";

const Filter = ({ sectionTag, setSectionTag }) => {
    const handleSelect = (e) => {
        console.log('selected: ', e.target.value)
        setSectionTag(e.target.value)
    }
    let sectionOptions = sections.map(section => {
        let capitalized = section.charAt(0).toUpperCase() + section.slice(1)
        return <option value={section}>{capitalized}</option>

    })
    return (
        <div className="article-filter">
            <select
                title="Filter By Section"
                className="section-dropdown"
                onChange={handleSelect}
                data-cy="filter-select"
            >
                <option value="home">Home</option>
                {sectionOptions}

            </select>
        </div>
    )
}

export default Filter