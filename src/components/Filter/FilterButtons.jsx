import React, { act } from "react";

function FilterButtons() {

    let categories = ["Movies", "Cinema", "Adventure", "Comedy", "Fantasy", "History", "Cartoon", "Detective", "Mysticism", "Drama"];
    const [active, changeActive] = React.useState('Movies');
    return (
        <div className="filter__buttons">
            {
                categories.map((value, index) => (
                    <button
                        key={index}
                        onClick={() => changeActive(value)}
                        className={`${active === value ? 'active' : ''}`}>
                        {value}
                    </button>
                ))
            }

        </div>
    )
}
export default FilterButtons;