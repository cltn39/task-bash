import React, { Component } from "react";
import {
  Container,
  Header,
  Columm,
  Card,
  EmptyColumm
} from "../components/Boards";
import AppDragDropDemo from "../components/Clickanddrag";
// TODO: Set Kanban Card Element as Child Element to the Board
import NavbarAll from "../components/NavbarAll";
import Footer from "../components/Footer";

class Board extends Component {
  state = {
    tasks: [
      { name: "Learn Angular", category: "wip", bgcolor: "yellow" },
      { name: "React", category: "wip", bgcolor: "pink" },
      { name: "Vue", category: "complete", bgcolor: "skyblue" }
    ]
  };

  onDragStart = (ev, id) => {
    console.log("dragstart:", id);
    ev.dataTransfer.setData("id", id);
  };

  onDragOver = ev => {
    ev.preventDefault();
  };

  onDrop = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    let tasks = this.state.tasks.filter(task => {
      if (task.name === id) {
        task.category = cat;
      }
      return task;
    });

    this.setState({
      ...this.state,
      tasks
    });
  };
  render() {
    return (
      <div>
        <NavbarAll />
        <p>this is going to be board page</p>
        <Footer />
      </div>
    );
  }
}
export default Board;
