import React from "react";
import "./Member.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Icon, Image } from 'semantic-ui-react'



const renderMembers = (item, index) => {

    return (
        <Card className="member">
            <Image src={item.img} wrapped ui={true} />
            <Card.Content>
                <Card.Header>{item.name}</Card.Header>
                <Card.Meta>
                    <span className='date'>{item.date}</span>
                </Card.Meta>
                <Card.Description>
                    {item.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a>
                    <Icon class='user' />
                    {item.position}
                </a>
            </Card.Content>
        </Card>

    )

}

export default renderMembers;
