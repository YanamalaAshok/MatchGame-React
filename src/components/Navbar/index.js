import './index.css'

const Navbar = props => {
  const {topScore, timeLeftSec} = props
  return (
    <nav className="nav-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        className="logo-image"
        alt="website logo"
      />

      <div className="score-time-container">
        <p className="score-sty">Score: {topScore}</p>
        <div className="nav-image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            className="time-image"
            alt=" timer"
          />
          <p className="time-sty"> {timeLeftSec} sec</p>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
