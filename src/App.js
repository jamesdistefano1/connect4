import React from 'react';
import ReactDOM, { createPortal } from 'react-dom';
import './index.css';

var redTurn = true;

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      column1: {s6: "circle",s5:"circle",s4:"circle",s3:"circle",s2:"circle",s1:"circle"},
      column2: {s6: "circle",s5:"circle",s4:"circle",s3:"circle",s2:"circle",s1:"circle"},
      column3: {s6: "circle",s5:"circle",s4:"circle",s3:"circle",s2:"circle",s1:"circle"},
      column4: {s6: "circle",s5:"circle",s4:"circle",s3:"circle",s2:"circle",s1:"circle"},
      column5: {s6: "circle",s5:"circle",s4:"circle",s3:"circle",s2:"circle",s1:"circle"},
      column6: {s6: "circle",s5:"circle",s4:"circle",s3:"circle",s2:"circle",s1:"circle"},
      column7: {s6: "circle",s5:"circle",s4:"circle",s3:"circle",s2:"circle",s1:"circle"},
    }
    this.play = this.play.bind(this);
  }
  play(){
     // on a click, if the square in the column is white, it changes to the correct player color, if not, nothing happens
  }
  makeColumn(id, c){
    return <Column id={id} c={c}/>;
  }
  render(){
    return (
      <div className ="game">
        <Clock/>
        <div className="board">
          {this.makeColumn(1, this.state.column1)}
          {this.makeColumn(2, this.state.column2)}
          {this.makeColumn(3, this.state.column3)}
          {this.makeColumn(4, this.state.column4)}
          {this.makeColumn(5, this.state.column5)}
          {this.makeColumn(6, this.state.column6)}
          {this.makeColumn(7, this.state.column7)}
        </div>
      </div>
    );
  }
}


class Column extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      id: this.props.id,
      c1: 1,
      c2: 2,
      c3: 3,
      c4: 4,
      c5: 5,
      c6: 6,
      col1: this.props.c.s1,
      col2: this.props.c.s2,
      col3: this.props.c.s3,
      col4: this.props.c.s4,
      col5: this.props.c.s5,
      col6: this.props.c.s6
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    redTurn = !redTurn;
    this.setState((state, props) => {
      if(redTurn){
        if(this.state.col6 === "circle")return {col6: "circleRed"};
        else if(this.state.col5 === "circle")return {col5: "circleRed"};
        else if(this.state.col4 === "circle")return {col4: "circleRed"};
        else if(this.state.col3 === "circle")return {col3: "circleRed"};
        else if(this.state.col2 === "circle")return {col2: "circleRed"};
        else if(this.state.col1 === "circle")return {col1: "circleRed"};
      }
      else{
        if(this.state.col6 === "circle")return {col6: "circleBlack"};
        else if(this.state.col5 === "circle")return {col5: "circleBlack"};
        else if(this.state.col4 === "circle")return {col4: "circleBlack"};
        else if(this.state.col3 === "circle")return {col3: "circleBlack"};
        else if(this.state.col2 === "circle")return {col2: "circleBlack"};
        else if(this.state.col1 === "circle")return {col1: "circleBlack"};
      }
    });
  }
  makeCell(id, col){
    return <Square id={id} col={col}/>;
  }
  render(){
    return(
      <div className="column" onClick={this.handleClick}>
        <div>{this.makeCell(this.state.c1, this.state.col1)}</div> 
        <div>{this.makeCell(this.state.c2, this.state.col2)}</div> 
        <div>{this.makeCell(this.state.c3, this.state.col3)}</div> 
        <div>{this.makeCell(this.state.c4, this.state.col4)}</div> 
        <div>{this.makeCell(this.state.c5, this.state.col5)}</div> 
        <div>{this.makeCell(this.state.c6, this.state.col6)}</div> 
      </div>
    );
  }
}

class Square extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      col: this.props.col
    };
  }
  render(){
    return(
      <td>
        <button className="square">
          <button className={this.props.col}>  
          </button>
        </button>
      </td>
    );
  }
}



class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      date: new Date()
    };
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  render(){
    return (
      <div className="clock">
        <h1>{this.state.date.toLocaleTimeString()}</h1>
      </div>
    );
  }
  
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
