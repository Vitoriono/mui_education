import React from 'react';
import Grid from '@mui/material/Grid' ;
import { Card, CardActions, CardContent, CardMedia, Typography, Button } from '@mui/material';

const GoodsItem = (props) => {
    const { name, price, poster, setOrder } = props;

    return (
        <Grid item xs={12} md={4} >
            <Card
                sx={{
                    height: "100%"
                }}
            >
                <CardMedia
                    image={poster}                    
                    alt={name}
                    title={name}
                    sx={{height: 140}}
                />
                <CardContent>
                    <Typography
                       variant="h6"
                       component="h3" 
                    >
                        {name}
                    </Typography>
                    <Typography variant="body1">Ціна: {price} грн.</Typography>
                </CardContent> 
                <CardActions>  
                    <Button
                        variant="text"
                        onClick={() =>
                            setOrder({
                                id: props.id,
                                name: props.name,
                                price: props.price,
                            })
                        }
                    >
                        Придбати
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default GoodsItem;