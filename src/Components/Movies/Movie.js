import axios from "axios";
import React, { useState, useEffect } from "react";
import Genre from "../Genre/Genre";
import CustiomPagination from "../Pagination/CustomPagination";
import SingleContent from "../SingleContent";
import useGenre from "../Hooks/useGenre";
function Movie() {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numberOfPages, setnumberOfPages] = useState();
  const [genre, setGenre] = useState([]);
  const [selectedGenre, setselectedGenre] = useState([]);
  const genreURL = useGenre(selectedGenre);
  const fetchMovies = async () => {
    const { data } = await axios.get(`
    https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate/page=${page}&with_genres=${genreURL}`);

    setContent(data.results);
    //console.log(data.results)
    setnumberOfPages(data.total_pages);
  };

  useEffect(() => {
    window.scroll(0,0);
    fetchMovies();
    // eslint-disable-next-line
  }, [page,genreURL]);

  return (
    <div>
      <h2 className="trending_title">Discover Movies</h2>
      <Genre
        genres={genre}
        setselectedGenre={setselectedGenre}
        setGenres={setGenre}
        selectedGenre={selectedGenre}
        type="movie"
        setPage={setPage}
      />
      <div className="trending_wrapper">
        {content &&
          content.map((c) => {
            return (
              <SingleContent
                key={c.id}
                id={c.id}
                poster={c.poster_path}
                title={c.title || c.name}
                date={c.release_date || c.first_air_date}
                media_type="movie"
                vote_average={c.vote_average}
              />
            );
          })}
      </div>
      {numberOfPages > 1 && (
        <CustiomPagination setPage={setPage} numberOfPages={numberOfPages} />
      )}
    </div>
  );
}

export default Movie;
