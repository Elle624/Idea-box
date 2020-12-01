import React, {Component} from 'react';
import './App.css';
import Nav from './component/Nav';
import Form from './component/Form';
import Display from './component/Display';

class App extends Component {

  constructor() {
    super();
    this.state = {
      ideas: [],
      showFav: false,
      id:''
    }
  }
  componentDidMount = () => {
    const storedIdeas = JSON.parse(localStorage.getItem('idea')) || [];
    this.setState({
      ideas: storedIdeas
    })
  }

  storeIdeas = (idea) => {
    this.setState({
      ideas: [...this.state.ideas, idea]
    })
  }

  addFavIdea = (id) => {
    const updatedIdeas = this.state.ideas.map(idea => {
      if (idea.id === id) {
        return {
          id: idea.id,
          title: idea.title,
          body: idea.body,
          isFav: !idea.isFav,
          comment: ''
        }
      } else {
        return idea
      }
    })
    this.setState({
      ideas: updatedIdeas
    })
    localStorage.setItem('idea', JSON.stringify(updatedIdeas))
  }

  displayfavIdeas = (event) => {
    event.preventDefault();
    this.setState((prevState) => {
      return {showFav: !prevState.showFav}
    })
  }

  removeIdea = (id) => {
    const updatedIdeas = this.state.ideas.filter(idea => idea.id !== id)
    this.setState({
      ideas: updatedIdeas
    })
    localStorage.setItem('idea', JSON.stringify(updatedIdeas))
  }

  openComment = (id) => {
    this.setState({
     id: id
    })

  }

  closeComment = () => {
    this.setState({
      id: ''
     })
  }

  addComment = (text, id) => {
    const ideasWithComment = this.state.ideas.map(idea => {
      if (idea.id === id) {
        return {
          id: idea.id,
          title: idea.title,
          body: idea.body,
          isFav: idea.isFav,
          comment: text
        }
      } else {
        return idea
      }
    })
    this.setState({
      ideas: ideasWithComment
    })
    localStorage.setItem('idea', JSON.stringify(ideasWithComment))
  }
  
  render() {
    const favIdeas = this.state.ideas.filter(idea => idea.isFav === true);
    return (
      <section className="main-section">
        <Nav StarredIdea={this.displayfavIdeas} showFav={this.state.showFav}/>
        <section className="right-side">
          <Form getIdea={this.storeIdeas} />
          <Display
            ideas={this.state.showFav ? favIdeas : this.state.ideas} 
            showFav={this.state.showFav}
            commentId={this.state.id}
            fav={this.addFavIdea} 
            remove={this.removeIdea} 
            openComment={this.openComment}
            closeComment={this.closeComment}
            addComment={this.addComment}
          />
        </section>
      </section>
    )
  }
}

export default App;
