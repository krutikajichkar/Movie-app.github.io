import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleContent from "../SingleContent";
import './Trending.css'
import CustiomPagination from "../Pagination/CustiomPagination";

function Trending() {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);

  const fetchResults = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );

    setContent(data.results);
  };

  useEffect(() => {
    fetchResults();
  }, [page]);

  return (
    <>
    <h2 className="trending_title">Trending Today</h2>
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
                media_type={c.media_type}
                vote_average={c.vote_average}
              />
            );
          })}
      </div>
      <CustiomPagination setPage={setPage}/>
    </>
  );
}

export default Trending;
