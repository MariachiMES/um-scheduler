import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
const weekdays = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]



export default function Week() {
  return (
    <div style= {{display: 'flex'}}>{weekdays.map((day)=> (
    <Card style={{ width: '18rem', marginTop: '20px', marginLeft: '5px'} }>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>{day}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    ))}
 </div>
  )
}
