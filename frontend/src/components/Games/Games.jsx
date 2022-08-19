import React from 'react'
import './Games.css'
import Navbar from "../Navbar/Navbar";
const Games = (props) => {
        return (
         <div className='game-main'>
          <Navbar activeButton={props.activeButton} newButton={props.newButton}/>
          <div className="games-container">
            <div className="games-sub-cantainer">
              <div className="game-box-holder">

                <div className="game-box cs-text-box">
                  <a href="JavaScript:Void(0);">
                    <img className="game-img" src="http://nice1010.fun/images/game_4.jpg" />
                    <div className="game-inner">
                      <div className="icn">
                        <div className="icn-inner cs-text">
                          Blocked
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="game-box cs-text-box">
                  <a href="JavaScript:Void(0);">
                    <img className="game-img" src="http://nice1010.fun/images/roulette.jpg" />
                    <div className="game-inner">
                      <div className="icn">
                        <div className="icn-inner cs-text">
                          Blocked
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                
                <div className="game-box cs-text-box">
                  <a href="#">
                    <img className="game-img" src="http://nice1010.fun/images/ab-game.jpg" />
                    <div className="game-inner">
                      <div className="icn">
                        <div className="icn-inner cs-text">
                          Blocked
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <br />

                <div className="game-box ">
                  <a href="#">
                    <img className="game-img" src="http://nice1010.fun/images/tp-20.png" />
                    <div className="game-inner">
                      <div className="icn">
                        <div className="icn-inner">
                          <img src="	http://nice1010.fun/images/play-button.svg" />
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="game-box cs-text-box">
                  <a href="#">
                    <img className="game-img" src="http://nice1010.fun/images/tp-one-day.png" />
                    <div className="game-inner">
                      <div className="icn">
                        <div className="icn-inner cs-text">
                        Coming Soon
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="game-box game-triple cs-text-box">
        <a href="JavaScript:Void(0);">
          <img className="game-img" id='game-id1' src="	http://nice1010.fun/images/tc_header.png"/>
          <div className="game-inner">
            <div className="icn">
                  <div className="icn-inner cs-text">
                    Blocked
                  </div>
            </div>
          </div>
        </a>
      </div>

                <br />

                <div className="game-box game-triple cs-text-box">
                <a href="#">
                  <img className="game-img" id='game-id2' src="http://nice1010.fun/images/spinner_1.png" />
                  <div className="game-inner">
                    <div className="icn">
                      <div className="icn-inner cs-text">
                        Coming Soon
                      </div>
                    </div>
                  </div>
                </a>
                  </div>
                </div> 
              </div>
            </div>
            </div>
        );
      }

export default Games

