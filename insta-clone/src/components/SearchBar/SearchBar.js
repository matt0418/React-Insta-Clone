import React from 'react'
import './SearchBar.css'
import styled from 'styled-components'

const SearchWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
const LogoutButton = styled.button`
    width: 20%;
    padding-top: 2.5%;
    padding-bottom: 2.5%;
    padding-right: 18%;
    padding-left: 10%;
    border-radius 15px;
    margin-left: 37%;
    margin-bottom: 10px;
`

const SearchForm = styled.form`
    border-bottom: .5px solid silver;
    margin-bottom: 10px;
`

const StyledInput = styled.input`
    width: 100%;
    text-align: center;
    border: none;
    font-size: 16px;
    padding: 5px;
`

function SearchBar(props) {
    return(
        <SearchWrapper>
            <SearchForm onSubmit = {(event) => props.searchFilter(event)}>
                <StyledInput onChange = {props.handleChange} type="text" placeholder="search" name = "searchInput"></StyledInput>
            </SearchForm>
            <LogoutButton onClick = {props.logout}>Logout</LogoutButton>
        </SearchWrapper>
    )
}

export default SearchBar