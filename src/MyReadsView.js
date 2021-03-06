import React from 'react'
import Shelf from './Shelf'
import { Link } from 'react-router-dom'

class MyReadsView extends React.Component {
  state = {}

  /**
  * @description Get shelf display text based on value in shelf name in book data
  * @return String with formatted shelf description
  */
  getShelfTitle = (shelfName) => {
    if (shelfName === "read") {
      return "Read"
    } else if (shelfName === "currentlyReading") {
      return "Currently Reading"
    } else if (shelfName === "wantToRead") {
      return "Want to Read"
    } else {
      return ""
    }
  }
  
  render () {
    const { shelvedBooks, refreshView } = this.props
    return(
      <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {Object.entries(shelvedBooks).map(([ shelfName, booksOnShelf ]) => (<Shelf key={shelfName} shelfTitle={this.getShelfTitle(shelfName)} books={booksOnShelf} refreshView={refreshView}/>))}
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
    )
  }
}

export default MyReadsView