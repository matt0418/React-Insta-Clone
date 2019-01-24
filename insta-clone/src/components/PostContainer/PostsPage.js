import React from 'react'
import dummyData from '/Users/matthewfeldman/Desktop/git/React-Insta-Clone/insta-clone/src/dummy-data'
import PostContainer from './PostContainer'
import SearchBar from '../SearchBar/SearchBar'
import styled from 'styled-components'

const StyleApp = styled.div`
    text-align: center;
    width: 500px;
    margin: 0 auto;
`

class PostsPage extends React.Component {
    constructor() {
        super();
        this.state = {
            postData: [],
            searchInput: ''
        }
    }
    componentDidMount() {
        this.setState({
            postData: dummyData
        })
    }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
        if (event.target.value === '') {
          this.setState({
            postData: dummyData
          })
        }
    }

    searchFilter = (event) => {
        event.preventDefault(event)
        let filteredPosts = [];
        this.state.postData.map((post) => {
          if(post.username.includes(this.state.searchInput)) {
            filteredPosts.push(post)
          }
        })
        this.setState({
          postData: filteredPosts
        })
    }

    logout = () => {
        localStorage.clear()
        window.location.reload()
    }

    render() {
        return(
            <StyleApp>
                <SearchBar
                searchInput = {this.state.searchInput}
                handleChange = {this.handleChange}
                searchFilter = {this.searchFilter}
                logout = {this.logout}
                />
                <PostContainer 
                postData = {this.state.postData}
                />
            </StyleApp>
        )
    }



}


export default PostsPage