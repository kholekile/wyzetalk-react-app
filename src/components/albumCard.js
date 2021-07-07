import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { formattext } from '../utils/helpers';


export default function AlbumCard(props) {

    const {title, cover_medium, fans, release_date} = props.album

    return (
        <Card style = {{width:180, display: "inline-block", margin:20}}>
            <CardMedia style = {{height:120}} image={cover_medium}/>
            <CardContent style={{backgroundColor:"grey", width:"100%"}}>
                <h4 style={{fontWeight:"normal", fontSize:25, margin:0 }} >{formattext(title,9,10)}</h4>
                <h6 style={{fontWeight:"normal", fontSize:15, margin:0 }}>Fans: {fans}k</h6>
                <h6 style={{fontWeight:"normal", fontSize:15, margin:0 }}>Released: {release_date}</h6>
            </CardContent>
        </Card>
    )
}