import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://i0.wp.com/www.dafontfree.co/wp-content/uploads/2021/11/Amazon-Logo-Font-1-scaled.jpg?resize=2560%2C1578"
        alt={props.company}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.testType}
        </Typography>
        <Typography variant="body2" color="text.secondary">{props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Start Test</Button>
      </CardActions>
    </Card>
  );
}