import { Typography } from "@mui/material";

function MoviesHeader({ title, image }: { title: string; image: string }) {
  return (
    <div>
      <img src="./movie-logo" alt={title} />
      <Typography gutterBottom variant="h5" component="h5">
        {title}
      </Typography>
    </div>
  );
}

export default MoviesHeader;
