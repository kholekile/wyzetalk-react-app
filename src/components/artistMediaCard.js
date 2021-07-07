import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

export default function ArtistMediaCard(props) {

  const {name, picture_big, nb_fan} = props.artist

  return (
  
  <Card className="artist-card">
        <CardMedia className="artist-card-image" image={picture_big}/>
        <CardContent className="artist-card-body">
            <h4 className="artist-card-body-name">{name}</h4>
            <h6 className="artist-card-body-fans">Fans: {nb_fan}k</h6>
        </CardContent>
    </Card>
  );
}