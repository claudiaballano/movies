import { Card, CardContent, Grid, Skeleton } from "@mui/material";
import styles from "./LoadingList.module.css";

export default function LoadingList() {
  const skeletonCards = [];
  for (let i = 0; i < 12; i++) {
    skeletonCards.push(
      <Grid item key={i} xs={12} sm={6} md={4} lg={2}>
        <Card className={styles.card}>
          <Skeleton
            className={styles.cardMedia}
            animation="wave"
            variant="rectangular"
          />
          <CardContent className={styles.cardContent}>
            <Skeleton
              animation="wave"
              variant="rectangular"
              className={styles.cardTitle}
            />
            <Skeleton
              className={styles.cardDescription}
              animation="wave"
              variant="rectangular"
            />
          </CardContent>
        </Card>
      </Grid>
    );
  }

  return (
    <Grid container spacing={2}>
      {skeletonCards}
    </Grid>
  );
}
