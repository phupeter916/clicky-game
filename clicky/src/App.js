import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";
import Nav from "./components/Nav";



class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    currentScore: 0,
    topScore: 0,
    winner: "",
    clicked: [],
  };


  handleShuffleCard(array) {
     for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };



  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      console.log("OK");
      this.handleIncrement();
      this.setState({clicked:this.state.clicked.concat(id)});
    } else {
      alert("lost, it was in the array");
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      winner: ""
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    else if (newScore === 24) {
      this.setState({ winner: "Congratulations, You Won!" });
    }
    var shuffledArray = this.handleShuffleCard(this.state.friends);
    this.setState({ friends: shuffledArray });
    
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      winner: "Wrong Answer!",
      clicked: []
    });
    var shuffledArray = this.handleShuffleCard(this.state.friends);
    this.setState({ friends: shuffledArray });
  };


  

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>

        <Nav
          winner={this.state.winner}
          score={this.state.currentScore}
          topScore={this.state.topScore}
        />
        


        <Title>Clicky Game</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            handleClick={this.handleClick}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
