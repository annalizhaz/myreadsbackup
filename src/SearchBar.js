import React from 'react'
import { Link } from 'react-router-dom'

class SearchBar extends React.Component {
  /*
  handleChange = event => {
    const newSearchTerm = event.target.value
    this.props.sendSearch(newSearchTerm)
  }
  */
  
  render () {
    const { handleChange, searchTerm, toggleView } = this.props
    return(
      <div className="search-books-bar">
        <Link to="/" onClick={toggleView} className="close-search" >Close</Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            onChange={handleChange}
            value={searchTerm}
          />
        </div>
      </div>
    )
  }
}

export default SearchBar