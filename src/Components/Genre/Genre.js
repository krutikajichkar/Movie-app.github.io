import React, { useEffect } from "react";
import Chip from "@mui/material/Chip";
import axios from "axios";
function Genre({
  genres,
  setselectedGenre,
  setGenres,
  selectedGenre,
  type,
  setPage,
}) {
  const handleAdd = (gen) => {
    setselectedGenre([...selectedGenre, gen]);
    setGenres(genres.filter((g) => g.id !== gen.id));
    setPage(1);
  };

  const handleRemove = (gen) => {
    setselectedGenre(selectedGenre.filter((g) => g.id !== gen.id));
    setGenres([...genres, gen]);
    setPage(1);
  };

  const fetchGenre = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setGenres(data.genres);
    console.log(data);
    console.log(typeof genres);
  };

  useEffect(() => {
    fetchGenre();
    // eslint-disable-next-line
  }, []);

  return (
    <div style={{ paddingBottom: "15px" }}>
      {selectedGenre &&
        selectedGenre.map((gen) => (
          <Chip
            key={gen.id}
            label={gen.name}
            style={{
              margin: 2,
              backgroundColor: "blue",
              padding: "4px 4px",
            }}
            color="primary"
            size="small"
            clickable
            onDelete={() => handleRemove(gen)}
          />
        ))}

      {genres.length > 0 &&
        genres.map((gen) => (
          <Chip
            key={gen.id}
            label={gen.name}
            style={{
              margin: 2,
              backgroundColor: "white",
              padding: "2px 2px",
            }}
            size="small"
            clickable
            onClick={() => handleAdd(gen)}
          />
        ))}
    </div>
  );
}

export default Genre;
