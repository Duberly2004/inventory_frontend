import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IProduct } from '../../others/interfaces';
interface Props{
    product: IProduct
}
export default function CardProduct({product}:Props) {
  return (
    <Card sx={{ maxWidth: 330,background:"transparent" }}>
      <CardMedia
        sx={{ height: 140 }}
        image={product.url_image}
        title={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {product.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">delete</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
