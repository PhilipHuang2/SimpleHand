// import './SimpleCard.css';
import logo from './logo.svg';
import React from 'react';
import Card from 'react-bootstrap/Card';


class SimpleCard extends React.Component{
    
    render (props) {
        const style1 = {
            border: "1px solid #555",
            width: '200px',
            height: '350px',
            lineHeight: '30px',
            textAlign: 'center',
            fontSize: 12,      
        };
        const style2 = {
            borderBottom: '1px solid #555',
            borderTop: '1px solid #555',
        };
        return(
            <Card 
                classname="Border" 
                style = {style1} 
            >
                <Card.Title classname="Title">
                    {this.props.name}
                </Card.Title>
                <Card.Img classname = "Image" src={logo} style = {style2} />
                <Card.Body classname = "Description">
                    {this.props.description}
                </Card.Body>
            </Card>
      );
    }
  }

  export default SimpleCard;