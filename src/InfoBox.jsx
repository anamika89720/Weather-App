import Card from '@mui/material/Card';
//import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox({ info }){
    const INIT_URL =
    "https://media.istockphoto.com/id/1007768414/photo/blue-sky-with-bright-sun-and-clouds.jpg?s=612x612&w=is&k=20&c=sXYzkYnpsLq8S-_GXG0B-EeC9ZcJGSQj5IksvuEMxDc=";

    return(
        <div className="InfoBox">
           {/* <h1>WeatherInfo-{info.weather}</h1>*/}
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={INIT_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" color='text.secondary' component={"span"} >
          <div>Temperature={info.temp}&deg;C</div>
          <div>Humidity={info.humidity}</div>
          <div>Min Temp={info.tempMin}&deg;C</div>
          <div>Max Temp={info.tempMax}&deg;C</div>
          <div>The Weather can be described as <i><b>{info.weather}</b></i> and feels like={info.feelsLike}&deg;C</div>
        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>
    );
}