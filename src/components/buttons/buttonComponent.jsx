import React, { useState, useEffect} from 'react';
import { useGamepads } from 'react-gamepads';
import { Row, Col } from 'react-bootstrap'

export default function  Buttons (){
    const [gamepads, setGamepads] = useState({});
  useGamepads(gamepads => setGamepads(gamepads));

   const gamepadDisplay = Object.keys(gamepads).map(gamepadId => {
     console.log("displaying gamepad", gamepads[gamepadId]);
    return (
      <div>
        <h2>{gamepads[gamepadId].id}</h2>
        <Row className='controllerBox'>
        {gamepads[gamepadId].buttons &&
          gamepads[gamepadId].buttons.map((button, index) => (
              <Col xs={4}>{index}{button.pressed ? "redSquare" : "greySquare"}</Col>
          ))}
          </Row>
      </div>
    );
          })

    return(
        {gamepadDisplay}
    )
    }