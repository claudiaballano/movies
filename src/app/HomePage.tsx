import { AppBar, Box, CssBaseline, Toolbar, Typography } from "@mui/material";
import List from "../components/MoviesList";
import NavigationMenu from "../components/NavigationMenu";
import type { MoviesList } from "../domain/types";

const HomePage = ({ upcomingMovies }: { upcomingMovies: MoviesList }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - 240px)`, ml: `240px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Upcoming Movies
          </Typography>
        </Toolbar>
      </AppBar>
      <NavigationMenu />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3, pt: 12 }}
      >
        <List moviesList={upcomingMovies} />
      </Box>
    </Box>
  );
};

export default HomePage;
