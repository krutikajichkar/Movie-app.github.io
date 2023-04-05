import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import SingleContent from "../SingleContent";
import CustomPagination from "../Pagination/CustomPagination";
function Search() {
  const [text, setText] = useState("");
  const [type, setType] = useState(0);
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numberOfPages, setnumberOfPages] = useState();

  const fetchSearch = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${
          process.env.REACT_APP_API_KEY
        }&language=en-US&query=${text}&page=${page}&include_adult=false`
      );
      setContent(data.results);
      setnumberOfPages(data.total_pages);
      //console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
     // eslint-disable-next-line
  }, [type, page]);
  return (
    <div>
      <div style={{ display: "flex", paddingTop: "50px" }}>
        <TextField
          style={{ width: "80%", background: "white", borderRadius: "20px" ,height:'50px' }}
          id="filled-basic"
          label="Search"
          variant="filled"
          onChange={(e) => setText(e.target.value)}
        />
        <Button
          style={{ marginLeft: "20px", background: "white" }}
          onClick={fetchSearch}
        >
          <SearchIcon style={{ color: "black" }} size="large" />
        </Button>
      </div>

      <div style={{ marginTop: "30px" }}>
        <Tabs
          value={type}
          indicatorColor="primary"
          textColor="primary"
          onChange={(e, newValue) => {
            setType(newValue);
            setPage(1);
          }}
          style={{ marginBottom: "20px" }}
        >
          <Tab style={{ width: "50%", color: "white" }} label="Search Movie" />
          <Tab
            style={{ width: "50%", color: "white", marginLeft: "5%" }}
            label="Search Series"
          />
        </Tabs>
      </div>

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
      {text &&
        content.length === 0 &&
        (type ? (
          <h1 style={{ textAlign: "center" }}>No Series Found</h1>
        ) : (
          <h1 style={{ textAlign: "center" }}>No Movies Found</h1>
        ))}

      {numberOfPages > 1 && (
        <CustomPagination setPage={setPage} numberOfPages={numberOfPages} />
      )}
    </div>
  );
}

export default Search;
