import React from "react";
import "./Member.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Card, Icon, Image } from 'semantic-ui-react'  
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const renderMembers = (item, index) => {

    return (
        // PROBEM WITH SEMANTIC UI
        // <Card className="member">
        //     <Image src={item.img} wrapped ui={true} />
        //     <Card.Content>
        //         <Card.Header>{item.name}</Card.Header>
        //         <Card.Meta>
        //             <span className='date'>{item.date}</span>
        //         </Card.Meta>
        //         <Card.Description>
        //             {item.description}
        //         </Card.Description>
        //     </Card.Content>
        //     <Card.Content extra>
        //         <a>
        //             <Icon class='user' />
        //             {item.position}
        //         </a>
        //     </Card.Content>
        // </Card>
        <div>
            <Card className="member">
                < Card.Img variant="top" src={item.img} />
                <Card.Body>
                    <Card.Title className="title">{item.name}</Card.Title>
                    <Card.Subtitle className="subtitle mb-1 text-muted"> {item.position}</Card.Subtitle>

                    <Card.Text className="description">
                        {item.description}
                    </Card.Text>

                    <Button variant="dark">{item.button}</Button>
                </Card.Body>
            </Card >

        </div>
    )

}

export default renderMembers;
