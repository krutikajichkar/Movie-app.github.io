import  React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import MovieIcon from "@mui/icons-material/Movie";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SearchIcon from "@mui/icons-material/Search";
import { Link} from 'react-router-dom';


export default function SimpleBottomNavigation() {
  const makestyle = {
    width:"100%",
    position: "fixed",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgb(43,39,39)",
    zIndex:100,
  };

  const pathname = window.location.pathname;

  const [value, setValue] = React.useState(pathname);
  

  // useEffect(() => {
  //   if (value === 0) {
  //     history.push("/");
  //   } else if (value === 1) {
  //     history.push("/movies");
  //   } else if (value === 2) {
  //     history.push("/series");
  //   } else if (value === 3) {
  //     history.push("/search");
  //   }
  // }, [value, history]);

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
          
            style={{ color: "rgb(243, 142, 142)" , textShadow:'0px 0px 5px red' }}
            label="Trending"
            icon={<WhatshotIcon />}
            component={Link} to='/'
          />
          <BottomNavigationAction
            value="/movie"
            style={{ color: "rgb(243, 142, 142)" , textShadow:'0px 0px 5px red' }}
            label="Movies"
            icon={<MovieIcon />}
            component={Link} to='/movie'
          />
          <BottomNavigationAction
           
            style={{  color: "rgb(243, 142, 142)" , textShadow:'0px 0px 5px red' }}
            label="TV"
            icon={<LiveTvIcon />}
            component={Link} to='/tv'
          />
          <BottomNavigationAction
            
            style={{  color: "rgb(243, 142, 142)" , textShadow:'0px 0px 5px red' }}
            label="Search"
            icon={<SearchIcon />}
            component={Link} to='/search'
          />
        </BottomNavigation>
      </Box>
    </div>
  );
}
