
import Header from "./Components/Header";
import SimpleBottomNavigation from "./Components/SimpleBottomNavigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "@mui/system";
import Trending from "./Components/Trending";
import DiscoverMovie from "./Components/Movie";
import DiscoverTv from "./Components/Series";
import Search from "./Components/Search";
import './App.css';

function App() {
  return (
    <div>
   <BrowserRouter>
  
      <Header/>
      <Container>
        <Routes>
          <Route path='/' element={<Trending/>}/>
          <Route path='discovermovie' element={<DiscoverMovie/>}/>
          <Route path='discoverTv' element={<DiscoverTv/>}/>
          <Route path='search' element={<Search/>}/>
        </Routes>
      </Container>
      <SimpleBottomNavigation/>
    
   </BrowserRouter>
   </div>
  );
}

export default App;
