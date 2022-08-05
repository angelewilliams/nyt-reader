import React from "react";
import { sections } from "../../Assets/data";
import fetchData from "../../apiCalls";

const Filter = ({ setArticles, setSectionTag }) => {
    

  const handleFetch = (tag) => {
    fetchData(tag)
      .then(data => {
        console.log(data.results)
        setArticles(data.results)

      })
      .catch(err => {
        console.error(err);
      });
  }



    const handleSelect = (e) => {
        console.log('selected: ', e.target.value)

        handleFetch(e.target.value)
        setSectionTag(e.target.value)
        
    }
    let sectionOptions = sections.map(section => {
        let capitalized = section.charAt(0).toUpperCase() + section.slice(1)
        return <option key={section} value={section}>{capitalized}</option>

    })
    return (
        <div className="article-filter">
            <select
                title="Filter By Section"
                className="section-dropdown"
                onChange={handleSelect}
                data-cy="filter-select"
            >
                {sectionOptions}

            </select>
        </div>
    )
}

export default Filter