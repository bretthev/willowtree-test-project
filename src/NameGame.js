import React, { Component } from 'react';
import axios from 'axios';
import { shuffle } from 'lodash';

export default class NameGame extends Component {
  constructor() {
    super()
    this.state = {
      willowTreePeople: [],
      randomPeopleForGameRound: [],
      answerPerson: {}
    }
  }

  getRandomFromArray(array, number) {
    let newArray = shuffle(array)
    return newArray.slice(0, number)
  }

  getWillowTreePeople() {
    axios.get('http://api.namegame.willowtreemobile.com/')
    .then((response)=> {
      this.setState({ willowTreePeople: response.data })
      this.setState({ randomPeopleForGameRound: this.getRandomFromArray( response.data, 5 )})
      this.setState({ answerPerson: this.getRandomFromArray( this.state.randomPeopleForGameRound, 1 )[0] })
    })
    .catch(()=> {
      console.log('error')
    })
  }

  displayRoundPictures() {
    return this.state.randomPeopleForGameRound.map((person, index) => <img key={index} src={person.url}/>)
  }


  componentWillMount() {
    this.getWillowTreePeople();
  }


  render() {
    const { answerPerson, randomPeopleForGameRound } = this.state
    return(
      <section className="name-game">
        <h2> { answerPerson ? answerPerson.name : null } </h2>
        { randomPeopleForGameRound ? this.displayRoundPictures() : null }
      </section>
    )
  }
}
