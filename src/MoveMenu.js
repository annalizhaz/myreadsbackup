import React from 'react'
import * as BooksAPI from './BooksAPI'

class MoveMenu extends React.Component {
  state = {
    selected: "currentlyReading",
    menuOptions: [
      {
        text: "Currently Reading",
        value: "currentlyReading"
      },
      {
        text: "Want to Read",
        value: "wantToRead"
      },
      {
        text: "Read",
        value: "read"
      },
      {
        text: "None",
        value: "none"
      }
    ]
  }

  /**
  * @description Handles a change in the book location menu by sending and update to the API and trigging a data refresh in the parent App component
  * @param { event } Event object sent by form change
  */
  handleChange = event => {
    const shelf = event.target.value
    BooksAPI.update(this.props.book, shelf).then(() => {
      this.setState({ selected: shelf })
      this.props.refreshView()
      console.log("results from API update")
    })
  }
  
  /**
  * @description Set selected item in menu according to book data
  */
  setSelected = book => {
    if (book.shelf) {
      this.setState({
        selected: book.shelf
      })
    } else {
      this.setState({
        selected: "none"
      })
    }
  }
  
  componentDidMount(){
    this.setSelected(this.props.book)
  }
  
  render () {
    return(
      <div className="book-shelf-changer">
        <select value={this.state.selected} onChange={this.handleChange}>
          <option value="move" disabled>Move to...</option>
          {this.state.menuOptions.map(menuOption => (
            <option key={menuOption.value} value={menuOption.value}>{menuOption.text}</option>
          ))}
        </select>
      </div>
    )
  }
}

export default MoveMenu