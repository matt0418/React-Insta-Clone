import React from 'react'
import './SearchBar.css'

function SearchBar(props) {
    return(
        <div className="search">
            <form onSubmit = {(event) => props.searchFilter(event)}>
                <input onChange = {props.handleChange} type="text" placeholder="search" name = "searchInput"></input>
            </form>
            <button onClick = {props.logout}>Logout</button>
        </div>
    )
}

export default SearchBar