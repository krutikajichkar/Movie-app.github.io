
import Header from "./Components/Header";
import SimpleBottomNavigation from "./Components/SimpleBottomNavigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "@mui/system";
import Trending from "./Components/Trending/Trending";
import Movie from "./Components/Movies/Movie";
import TVSeries from "./Components/TVSeries/TVSeries";
import Search from "./Components/Search/Search";
import './App.css';


function App() {
  return (
    <div>
   <BrowserRouter>
  
      <Header/>
      
     <div className="app">
     <Container>
       <Routes>
          <Route path='/' element={<Trending/>}/>
          <Route path='movie' element={<Movie/>}/>
          <Route path='tv' element={<TVSeries/>}/>
          <Route path='search' element={<Search/>}/>
        </Routes>
       </Container>
     </div>
      
      <SimpleBottomNavigation/>
    
   </BrowserRouter>
   </div>
  );
}

export default App;
