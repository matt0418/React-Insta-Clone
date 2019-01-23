import React from 'react'
import './SearchBar.css'

function SearchBar() {
    return(
        <div className="search">
            <form>
                <input type="text" placeholder="search"></input>
            </form>
        </div>
    )
}

export default SearchBar