
import React, {Component} from "react";

import "./Game.css";

import Wrapper from "../Wrapper";
import Navbar from "../Navbar";
import Jumbotron from "../Jumbotron";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import PlayerCard from "../PlayerCard";
import players from "./players.json";


class Game extends Component
{

  state = 
  {
    players,
    score: 0,
    topScore: 0,
    navbarMsg: "Click an image to begin",
    idArray: []
  }

  //Function1: when user clicks on photo
  photoClick = id =>
  {
    //console.log(id);

    //Check and see if current clicked image was previously
    //clicked on that image, if so then nofiy the user they
    //lost b/c can't click on same image twice. Also
    //use check for (for-loop) to see if id of prevously clicked image
    // is in the (idArray) if so set it to false.
    var check = true

    //for loop to check to see if image was already clicked on by
    //scanning the array of clicked image id's
    for(var i = 0; i < this.state.idArray.length; i++)
    {
      
      if(id === this.state.idArray[i])
      {
          check = false;
      }
    }
  

  if(check === true)
  {
      console.log("true");
    this.setState({ score: this.state.score + 1 });
    this.setState({ navbarMsg: "You Guessed Correctly"});

    //push the correct image onto (idArray) so we can check
    //previously clicked on images.
    this.state.idArray.push(id);

    console.log("check " + this.state.score);

    //increment if topScore if topScore is beat
    if(this.state.score >= this.state.topScore)
    {
      this.setState({ topScore: this.state.topScore + 1 });

    }
  }
  else
  {
    //Reset the score to 0 while maintaing the current top score
    //and display incorrect message.
    this.setState({ navbarMsg: "You Guessed Incorrectly"});
    this.setState({score: 0 });

    //reset array
    this.setState({ idArray: [] });

  }
  






    var a = this.state.players;

    //Allows random shuffling in the array in order for images to move
    //in a different order
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) 
    {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }

    //NOTE: optional but not necessary the changes that are made in var a (array)
    //      are reflected in our array players(array of baseball players).
    //this.setState({players: a});

  
  };

  render()
  {
    return(

      <div>  

        <Navbar 
                  score={this.state.score}
                  topScore={this.state.topScore} 
                  navbarMsg={this.state.navbarMsg}
        />

          <Wrapper>

            <Jumbotron />

            <Container>

            <Row>

             <Col size = "lg-12">

              {this.state.players.map(player => (

                <PlayerCard
                      id={player.id}
                      key={player.id}
                      name={player.name}
                      image={player.image}
                      photoClick={this.photoClick}
                />

                ))}

              </Col>
              

            </Row>

            </Container>


         </Wrapper>
</div>
    );
  }
}


export default Game;