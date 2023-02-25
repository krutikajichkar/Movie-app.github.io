import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import MovieIcon from "@mui/icons-material/Movie";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from 'react-router-dom'

export default function SimpleBottomNavigation() {
  const makestyle = {
    width:"100%",
    position: "fixed",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "black",
    
  };

  const pathname = window.location.pathname;

  const [value, setValue] = React.useState(pathname);

  return (
    <div>
      <Box>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          style={makestyle}
        >
          <BottomNavigationAction
            value="/"
            style={{ color: "red" }}
            label="Trending"
            icon={<WhatshotIcon />}
            component={Link} to='/'
          />
          <BottomNavigationAction
            value="/movie"
            style={{ color: "red" }}
            label="Movies"
            icon={<MovieIcon />}
            component={Link} to='/discovermovie'
          />
          <BottomNavigationAction
            value="/tv"
            style={{ color: "red" }}
            label="TV"
            icon={<LiveTvIcon />}
            component={Link} to='/discovertv'
          />
          <BottomNavigationAction
            value="/search"
            style={{ color: "red" }}
            label="Search"
            icon={<SearchIcon />}
            component={Link} to='/search'
          />
        </BottomNavigation>
      </Box>
    </div>
  );
}
