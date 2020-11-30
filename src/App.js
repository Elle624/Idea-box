// import logo from './logo.svg';
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
      addComment: false
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
          isFav: !idea.isFav
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

  addComment = () => {
    this.setState((prevState) => {
      return {addComment: !prevState.addComment}
    })
  }
  
  render() {
    //console.log(this.state.ideas);
    
    return (
      <section className="main-section">
        <Nav StarredIdea={this.displayfavIdeas} showFav={this.state.showFav}/>
        <section className="right-side">
          <Form getIdea={this.storeIdeas} />
          <Display 
            ideas={this.state.ideas} 
            showFav={this.state.showFav}
            comment={this.state.addComment}
            fav={this.addFavIdea} 
            remove={this.removeIdea} 
            addComment={this.addComment}/>
        </section>
      </section>
    )
  }

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
