import React, {Component} from 'react';
import { GrInfo } from 'react-icons/gr';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      body: ''
    }
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
  }


  handleClick = (event) => {
    event.preventDefault();
    this.props.getIdea({id: new Date().getTime(), title: this.state.title, body: this.state.body, isFav: false});
    this.setState({
      title: '',
      body: ''
    })
  }

  render() {
    return (
      <form className="idea-form">
        <label htmlFor="title">Title
          <input type="text" id="title" name="title" value={this.state.title} className="idea idea-title" onChange={this.handleChange}>
          </input>
        </label>
        <label htmlFor="body">Body
          <textarea type="text" id="body" name="body" value={this.state.body} className="idea idea-content" onChange={this.handleChange}>
          </textarea>
        </label>
        <label htmlFor="submit">
          <input type="submit" id="submit" value="save" className="idea idea-submit" onClick={this.handleClick}>
          </input>
        </label>
        <label htmlFor="search" className="search-bar">
          < GrInfo className="search-icon"/>
          <input type="search" id="search" className="idea idea-search" placeholder="Search ideas"></input>
        </label>
      </form>
    )
  }
}

export default Form