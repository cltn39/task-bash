import React, { Component } from "react";
import Board from 'react-trello'

const data = {
  lanes: [
    {
      id: 'lane1',
      title: 'Planned Tasks',
      label: '',
      cards: [
        {id: 'Card1', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins', draggable: false},
        {id: 'Card2', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: {sha: 'be312a1'}}
      ]
    },
    {
      id: 'lane2',
      title: 'Completed',
      label: '',
      cards: []
    }
  ]
}

export default class App extends React.Component {
  render() {
    return <Board data={data} draggable collapsibleLanes editable editLaneTitle canAddLanes/>
  }
}