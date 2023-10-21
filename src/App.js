// import {useState} from 'react'

// import './App.css'

// const App = () => {
//   const [seatType, setSeatType] = useState('Standard')
//   const [numSeats, setNumSeats] = useState(1)
//   const [selectedSeats, setSelectedSeats] = useState([])
//   const [seats, setSeats] = useState([
//     {id: 1, type: 'Standard', available: true},
//     {id: 2, type: 'Standard', available: true},
//     {id: 3, type: 'Standard', available: true},
//     {id: 4, type: 'Standard', available: true},
//     {id: 5, type: 'Standard', available: true},
//     {id: 6, type: 'Premium', available: true},
//     {id: 7, type: 'Premium', available: true},
//     {id: 8, type: 'Premium', available: true},
//     {id: 9, type: 'Premium', available: true},
//     {id: 10, type: 'Premium', available: true},
//   ])

//   const handleSeatSelect = seatId => {
//     if (selectedSeats.includes(seatId)) {
//       setSelectedSeats(selectedSeats.filter(id => id !== seatId))
//     }
//     if (selectedSeats.length < numSeats) {
//       setSelectedSeats([...selectedSeats, seatId])
//     }
//   }

//   const handleProceed = () => {
//     const updatedSeats = seats.map(seat => {
//       if (selectedSeats.includes(seat.id)) {
//         return {...seat, available: false}
//       }
//       return seat
//     })

//     setSeats(updatedSeats)
//     setSelectedSeats([])
//     setSeatType('Standard')
//     setNumSeats(1)
//   }

//   return (
//     <div className="App">
//       <h1>Book My Seat</h1>

//       <div className="seat-type-select">
//         <label htmlFor="seat-type">Seat Type:</label>
//         <select
//           id="seat-type"
//           value={seatType}
//           onChange={e => setSeatType(e.target.value)}
//         >
//           <option value="Standard">Standard</option>
//           <option value="Premium">Premium</option>
//         </select>
//       </div>

//       <div className="num-seats-select">
//         <label htmlFor="no-of-seats">Number of Seats:</label>
//         <select
//           id="no-of-seats"
//           value={numSeats}
//           onChange={e => setNumSeats(e.target.value)}
//         >
//           <option value="1">1</option>
//           <option value="2">2</option>
//           <option value="3">3</option>
//           <option value="4">4</option>
//           <option value="5">5</option>
//         </select>
//       </div>

//       <div className="seat-map">
//         {seats.map(seat => (
//           // eslint-disable-next-line jsx-a11y/no-static-element-interactions
//           <div
//             key={seat.id}
//             className={`seat ${seat.type} ${
//               seat.available ? 'available' : 'unavailable'
//             }`}
//             onClick={() => handleSeatSelect(seat.id)}
//           >
//             {seat.id}
//           </div>
//         ))}
//       </div>

//       <button type="button" onClick={handleProceed}>
//         Proceed
//       </button>
//     </div>
//   )
// }
// export default App

import {Component} from 'react'
import './App.css'

class App extends Component {
  state = {
    seatType: 'Standard',
    numSeats: 1,
    cost: '',
    selectedSeats: [],
    seats: [
      {id: 1, type: 'Standard', available: true, isSeatSelected: false},
      {id: 2, type: 'Standard', available: true, isSeatSelected: false},
      {id: 3, type: 'Standard', available: true, isSeatSelected: false},
      {id: 4, type: 'Standard', available: true, isSeatSelected: false},
      {id: 5, type: 'Standard', available: true, isSeatSelected: false},
      {id: 6, type: 'Premium', available: true, isSeatSelected: false},
      {id: 7, type: 'Premium', available: true, isSeatSelected: false},
      {id: 8, type: 'Premium', available: true, isSeatSelected: false},
      {id: 9, type: 'Premium', available: true, isSeatSelected: false},
      {id: 10, type: 'Premium', available: true, isSeatSelected: false},
      {id: 11, type: 'Standard', available: true, isSeatSelected: false},
      {id: 12, type: 'Standard', available: true, isSeatSelected: false},
      {id: 13, type: 'Standard', available: true, isSeatSelected: false},
      {id: 14, type: 'Standard', available: true, isSeatSelected: false},
      {id: 15, type: 'Standard', available: true, isSeatSelected: false},
      {id: 16, type: 'Premium', available: true, isSeatSelected: false},
      {id: 17, type: 'Premium', available: true, isSeatSelected: false},
      {id: 18, type: 'Premium', available: true, isSeatSelected: false},
      {id: 19, type: 'Premium', available: true, isSeatSelected: false},
      {id: 20, type: 'Premium', available: true, isSeatSelected: false},
      {id: 21, type: 'Standard', available: true, isSeatSelected: false},
      {id: 22, type: 'Standard', available: true, isSeatSelected: false},
      {id: 23, type: 'Standard', available: true, isSeatSelected: false},
      {id: 24, type: 'Standard', available: true, isSeatSelected: false},
      {id: 25, type: 'Standard', available: true, isSeatSelected: false},
      {id: 26, type: 'Premium', available: true, isSeatSelected: false},
      {id: 27, type: 'Premium', available: true, isSeatSelected: false},
      {id: 28, type: 'Premium', available: true, isSeatSelected: false},
      {id: 29, type: 'Premium', available: true, isSeatSelected: false},
      {id: 30, type: 'Premium', available: true, isSeatSelected: false},
      {id: 31, type: 'Standard', available: true, isSeatSelected: false},
      {id: 32, type: 'Standard', available: true, isSeatSelected: false},
      {id: 33, type: 'Standard', available: true, isSeatSelected: false},
      {id: 34, type: 'Standard', available: true, isSeatSelected: false},
      {id: 35, type: 'Standard', available: true, isSeatSelected: false},
      {id: 36, type: 'Premium', available: true, isSeatSelected: false},
      {id: 37, type: 'Premium', available: true, isSeatSelected: false},
      {id: 38, type: 'Premium', available: true, isSeatSelected: false},
      {id: 39, type: 'Premium', available: true, isSeatSelected: false},
      {id: 40, type: 'Premium', available: true, isSeatSelected: false},
      {id: 41, type: 'Standard', available: true, isSeatSelected: false},
      {id: 42, type: 'Standard', available: true, isSeatSelected: false},
      {id: 43, type: 'Standard', available: true, isSeatSelected: false},
      {id: 44, type: 'Standard', available: true, isSeatSelected: false},
      {id: 45, type: 'Standard', available: true, isSeatSelected: false},
      {id: 46, type: 'Premium', available: true, isSeatSelected: false},
      {id: 47, type: 'Premium', available: true, isSeatSelected: false},
      {id: 48, type: 'Premium', available: true, isSeatSelected: false},
      {id: 49, type: 'Premium', available: true, isSeatSelected: false},
      {id: 50, type: 'Premium', available: true, isSeatSelected: false},
      {id: 51, type: 'Standard', available: true, isSeatSelected: false},
      {id: 52, type: 'Standard', available: true, isSeatSelected: false},
      {id: 53, type: 'Standard', available: true, isSeatSelected: false},
      {id: 54, type: 'Standard', available: true, isSeatSelected: false},
      {id: 55, type: 'Standard', available: true, isSeatSelected: false},
      {id: 56, type: 'Premium', available: true, isSeatSelected: false},
      {id: 57, type: 'Premium', available: true, isSeatSelected: false},
      {id: 58, type: 'Premium', available: true, isSeatSelected: false},
      {id: 59, type: 'Premium', available: true, isSeatSelected: false},
      {id: 60, type: 'Premium', available: true, isSeatSelected: false},
      {id: 61, type: 'Standard', available: true, isSeatSelected: false},
      {id: 62, type: 'Standard', available: true, isSeatSelected: false},
      {id: 63, type: 'Standard', available: true, isSeatSelected: false},
      {id: 64, type: 'Standard', available: true, isSeatSelected: false},
      {id: 65, type: 'Standard', available: true, isSeatSelected: false},
      {id: 66, type: 'Premium', available: true, isSeatSelected: false},
      {id: 67, type: 'Premium', available: true, isSeatSelected: false},
      {id: 68, type: 'Premium', available: true, isSeatSelected: false},
      {id: 69, type: 'Premium', available: true, isSeatSelected: false},
      {id: 70, type: 'Premium', available: true, isSeatSelected: false},
      {id: 71, type: 'Standard', available: true, isSeatSelected: false},
      {id: 72, type: 'Standard', available: true, isSeatSelected: false},
      {id: 73, type: 'Standard', available: true, isSeatSelected: false},
      {id: 74, type: 'Standard', available: true, isSeatSelected: false},
      {id: 75, type: 'Standard', available: true, isSeatSelected: false},
      {id: 76, type: 'Premium', available: true, isSeatSelected: false},
      {id: 77, type: 'Premium', available: true, isSeatSelected: false},
      {id: 78, type: 'Premium', available: true, isSeatSelected: false},
      {id: 79, type: 'Premium', available: true, isSeatSelected: false},
      {id: 80, type: 'Premium', available: true, isSeatSelected: false},
      {id: 81, type: 'Standard', available: true, isSeatSelected: false},
      {id: 82, type: 'Standard', available: true, isSeatSelected: false},
      {id: 83, type: 'Standard', available: true, isSeatSelected: false},
      {id: 84, type: 'Standard', available: true, isSeatSelected: false},
      {id: 85, type: 'Standard', available: true, isSeatSelected: false},
      {id: 86, type: 'Premium', available: true, isSeatSelected: false},
      {id: 87, type: 'Premium', available: true, isSeatSelected: false},
      {id: 88, type: 'Premium', available: true, isSeatSelected: false},
      {id: 89, type: 'Premium', available: true, isSeatSelected: false},
      {id: 90, type: 'Premium', available: true, isSeatSelected: false},
      {id: 91, type: 'Standard', available: true, isSeatSelected: false},
      {id: 92, type: 'Standard', available: true, isSeatSelected: false},
      {id: 93, type: 'Standard', available: true, isSeatSelected: false},
      {id: 94, type: 'Standard', available: true, isSeatSelected: false},
      {id: 95, type: 'Standard', available: true, isSeatSelected: false},
      {id: 96, type: 'Premium', available: true, isSeatSelected: false},
      {id: 97, type: 'Premium', available: true, isSeatSelected: false},
      {id: 98, type: 'Premium', available: true, isSeatSelected: false},
      {id: 99, type: 'Premium', available: true, isSeatSelected: false},
      {id: 100, type: 'Premium', available: true, isSeatSelected: false},
    ],
  }

  handleSeatSelect = seatId => {
    const {selectedSeats, numSeats, seats} = this.state

    const updatedSeats = seats.map(seat => {
      if (seat.id === seatId) {
        return {
          ...seat,
          isSeatSelected: !seat.isSeatSelected,
        }
      }
      return seat
    })

    if (selectedSeats.includes(seatId)) {
      this.setState({
        selectedSeats: selectedSeats.filter(id => id !== seatId),
        seats: updatedSeats,
      })
    }

    if (selectedSeats.length < numSeats) {
      this.setState({
        selectedSeats: [...selectedSeats, seatId],
        seats: updatedSeats,
      })
    }
  }

  handleProceed = () => {
    const {seats, selectedSeats} = this.state
    const updatedSeats = seats.map(seat => {
      if (selectedSeats.includes(seat.id)) {
        return {...seat, available: false}
      }
      return seat
    })

    this.setState({
      seats: updatedSeats,
      selectedSeats: [],
      seatType: 'Standard',
      numSeats: 1,
      cost: String(selectedSeats.length * 200),
    })
  }

  render() {
    const {seatType, numSeats, seats, cost} = this.state

    return (
      <div className="App">
        <h1 className="head">Book My Seat</h1>
        <div className="con-2">
          <div className="seat-type-select">
            <label htmlFor="seat-type">Seat Type:</label>
            <select
              id="seat-type"
              value={seatType}
              onChange={e => this.setState({seatType: e.target.value})}
            >
              <option value="Standard">Standard</option>
              <option value="Premium">Premium</option>
            </select>
          </div>

          <div className="num-seats-select">
            <label htmlFor="no-of-seats">Number of Seats:</label>
            <select
              id="no-of-seats"
              value={numSeats}
              onChange={e => this.setState({numSeats: e.target.value})}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>
        </div>
        <div className="details">
          <div className="req">
            <p className="round1" />
            <h1 className="det-head">Available</h1>
          </div>
          <div className="req">
            <p className="round2" />
            <h1 className="det-head">Selected</h1>
          </div>
          <div className="req">
            <p className="round3" />
            <h1 className="det-head">Unavailable</h1>
          </div>
        </div>
        <div className="bottom-con">
          <div className="screen" />
          <div className="seat-map">
            {seats.map(seat => (
              // eslint-disable-next-line jsx-a11y/no-static-element-interactions
              <div
                key={seat.id}
                className={`seat ${seat.type} ${
                  // eslint-disable-next-line no-nested-ternary
                  seat.available
                    ? seat.isSeatSelected
                      ? 'selected'
                      : 'available'
                    : 'unavailable'
                }`}
                onClick={() => this.handleSeatSelect(seat.id)}
              >
                {seat.id}
              </div>
            ))}
          </div>
          <button type="button" className="button" onClick={this.handleProceed}>
            Proceed {cost}
          </button>
        </div>
      </div>
    )
  }
}

export default App
