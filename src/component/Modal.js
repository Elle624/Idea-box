import React from 'react';

function Modal() {
  return (
    <section className="modal">
      <section className="modal-content">
        <button aria-label="close-form" className="close-button" id="close-form">x</button>
        <form>
          <label htmlFor="comment">Enter Comment
            <input type="text" id="comment" className="comment-input"></input>
          </label>
          <input type="submit" value="submit" className="comment-submit"></input>
        </form>
      </section>
    </section>
  )
}

export default Modal