import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, TextField } from "@mui/material";

function SearchMovies() {
  return (
    <form>
      <TextField
        onInput={(e) => {
          console.log(e.target.value);
        }}
        label="Enter a movie name"
        variant="outlined"
        placeholder="Search..."
        size="medium"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </form>
  );
}
export default SearchMovies;
