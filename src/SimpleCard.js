import logo from './logo.svg';
import React from 'react';
import Card from 'react-bootstrap/Card';

class SimpleCard extends React.Component{
    
    render (props) {
        console.log("This is the card data.", this.props.json)
        const name = this.props.json.Name;
        const description = this.props.json.Description;
        console.log(", name: ", name, ", description: ", description)

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
                id="Border" 
                style = {style1} 
            >
                <Card.Title id="Title">
                    {name}
                </Card.Title>
                <Card.Img id = "Image" src={logo} style = {style2} />
                <Card.Body id = "Description">
                    {description}
                </Card.Body>
            </Card>
      );
    }
  }

  export default SimpleCard;