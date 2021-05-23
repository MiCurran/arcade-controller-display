import React, { useState } from 'react';
import { useGamepads } from 'react-gamepads';
import './App.css'
import { Row, Col } from 'react-bootstrap'
import Buttons from './components/buttons/buttonComponent'

export default function App() {
  const [gamepads, setGamepads] = useState({});
  useGamepads(gamepads => setGamepads(gamepads));
  
 const greySquare = 
 <button className="push--flat is-pushed"></button> ;

 const joystickUp = <div class="joystick up"></div>




    const redSquare = 
    <button className="push--flat"></button> ;

  const standardButtons = Object.keys(gamepads).map(gamepadId => {
    // console.log("displaying gamepad", gamepads[gamepadId]);
    let topRowButtons = gamepads[gamepadId].buttons.slice(2,6)
    let bottomRowButtons = gamepads[gamepadId].buttons.slice(0,2)
    let bottomRowSecond = gamepads[gamepadId].buttons.slice(6,8)
    let bottomRow = [...bottomRowButtons,...bottomRowSecond];
    return (
      <div>
{/*         <h2>{gamepads[gamepadId].id}</h2>
        <h2>standard buttons</h2> */}
        <Row className='d-flex justify-contents-center align-items-center'>
        {gamepads[gamepadId].buttons &&
          topRowButtons.map((button, index) => (
              button.pressed ? greySquare : redSquare
          ))}
          </Row>
          <Row className='d-flex justify-contents-center align-items-center'>
        {gamepads[gamepadId].buttons &&
          bottomRow.map((button, index) => (
              button.pressed ? greySquare : redSquare
          ))}
          </Row>
      </div>
    );
  });

  const dpad = Object.keys(gamepads).map(gamepadId => {
    let buttons = gamepads[gamepadId].buttons.slice(12,16)
    let up = gamepads[gamepadId].buttons[12]
    let down = gamepads[gamepadId].buttons[13]
    let left = gamepads[gamepadId].buttons[14]
    let right = gamepads[gamepadId].buttons[15]
    const direction = () => {
      if(up.pressed){
        return 'joystick up'
      } else if (down.pressed) {
        return 'joystick down'
      } else if (left.pressed) {
        return 'joystick left'
      } else if (right.pressed) {
        return 'joystick right'
      } else {
        return 'joystick'
      }
    }
    const whichWay = direction();

    return (
      <div>
{/*         <h2>dpad</h2> */}
        <Row className='controllerBox ml-5 mt-5'>
          <div className={whichWay}></div>
          </Row>
      </div>
    );
  });

  return (
    <div className="Gamepads">
      <Row>
        <Col xs={3}>
        {dpad}
        </Col>
        <Col xs={8}>
        {standardButtons}
        </Col>
      </Row>
    </div>
  );
}