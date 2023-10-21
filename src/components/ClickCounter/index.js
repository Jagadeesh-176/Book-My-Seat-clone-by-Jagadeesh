import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0, increaseCount: 0, decreaseCount: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
    this.setState(prevState => ({increaseCount: prevState.increaseCount + 1}))
  }

  onDecrement = () => {
    this.setState(prevState => ({count: prevState.count - 1}))
    this.setState(prevState => ({decreaseCount: prevState.decreaseCount + 1}))
  }

  render() {
    const {count, increaseCount, decreaseCount} = this.state
    return (
      <div className="main-con">
        <h1 className="heading">Count {count}</h1>
        <div className="b-con">
          <button className="button" type="button" onClick={this.onIncrement}>
            Increment
          </button>
          <button className="button" type="button" onClick={this.onDecrement}>
            Decrement
          </button>
        </div>
        <p>The increase button is clicked {increaseCount} times</p>
        <p>The decrease button is clicked {decreaseCount} times</p>
      </div>
    )
  }
}

export default ClickCounter
