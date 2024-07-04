import StarIcon from "@mui/icons-material/Star";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Movie } from "../domain/types";
import styles from "./MovieCard.module.css";
function MovieCard(movie: Partial<Movie>) {
  return (
    <Card className={styles.card}>
      <CardMedia
        className={styles.cardMedia}
        image={movie.image}
        title={movie.title}
      />
      <CardContent className={styles.cardContent}>
        <Typography gutterBottom variant="h5" component="h5">
          {movie.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          className={styles.cardDescription}
        >
          {movie.description}
        </Typography>
      </CardContent>
      <CardActions className={styles.cardActions}>
        <Button size="small">See More</Button>
        <div className={styles.cardRating}>
          <StarIcon className={styles.cardIcon} />
          <p>{movie.rating}</p>
        </div>
      </CardActions>
    </Card>
  );
}

export default MovieCard;
