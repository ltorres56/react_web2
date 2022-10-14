import React from 'react'
import { Card, Typography, CardMedia, CardContent, Card } from '@mui/material';
import 'animate.css';

const Card = ({ name, species, image, gender }) => {
    return (
        <Card sx={{ maxWidth: 345, m:2 }} className="animate__animated animate__backInDown">
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={`${image.path}.${image.extension}`}
                    alt={name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        Tipos: {species}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {gender}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
};

export default Card