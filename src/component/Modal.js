import React, { Component } from 'react';

class Modal extends Component {
  constructor() {
    super()
    this.state = {
      comment: ''
    }
  }

  getComment = (event) => {
    this.setState({
      comment: event.target.value
    })
  }

  addComment = (event) => {
    event.preventDefault();
    this.props.addComment(this.state.comment, this.props.id)
    this.setState({
      comment: ''
    })
    this.props.closeComment()
  }

  render() {
    return (
      <section className="modal">
        <section className="modal-content">
          <button onClick={this.props.closeComment} aria-label="close-form" className="close-button" id="close-form">x</button>
          <form>
            <label htmlFor="comment">Enter Comment
              <input type="text" id={this.props.id} value={this.state.comment} className="comment-input" onChange={this.getComment}></input>
            </label>
            <input type="submit" value="submit" onClick={this.addComment} className="comment-submit"></input>
          </form>
        </section>
      </section>
    )
  }

}

export default Modal