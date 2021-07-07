import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { formattext } from '../utils/helpers';


export default function ArtistCard(props) {

    const {id, picture_medium, nb_fan, name} = props.artist

    return (
        <Link to={`/artist/${id}`}>
        <Card style = {{width:180, display: "inline-block", margin:20}}>
            <CardMedia style = {{height:120}}
                image={picture_medium}
            />
            <CardContent style={{backgroundColor:"grey", width:"100%"}}>
            <h4 style={{fontWeight:"normal", fontSize:25, margin:0 }} >{formattext(name, 9, 10)}</h4>
                <h6 style={{fontWeight:"normal", fontSize:15, margin:0 }}>Fans: {nb_fan}k</h6>
            </CardContent>
        </Card>
        </Link>
    )
}