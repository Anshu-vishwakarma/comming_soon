import React from 'react'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/Card'
function MyCard() {
    return (
        <>
       
        <div className="row" >
            <div className="col"> 
            <CardGroup>
               <Card>
                    <Card.Img variant="top" src="https://source.unsplash.com/500x160/?wind" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                </CardGroup>
                
                </div>
                <div className="col"> 
            <CardGroup>
               <Card>
                    <Card.Img variant="top"src="https://source.unsplash.com/500x160/?water" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                </CardGroup>
                
                </div>
                  <div className="col"> 
            <CardGroup>
               <Card>
                    <Card.Img variant="top" src="https://source.unsplash.com/500x160/?nature" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                </CardGroup>
                
                </div>
               
        </div>
           
            
              
                
            
        </>
    )
}

export default MyCard
