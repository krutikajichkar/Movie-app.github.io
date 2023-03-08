import { Pagination } from "@mui/material";
import React from "react";
import { ThemeProvider ,createTheme} from '@mui/material/styles';
import white from '@mui/material/colors/blue';




function CustiomPagination({ setPage , numberOfPages }) {
  const darktheme = createTheme({
    pallete:{
     primary: white,
    },
  });
  const handlePage = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        paddingTop: "20px",
      }}
    >
     <ThemeProvider theme={darktheme}>
     <Pagination
        count={numberOfPages}
        onChange={(e) => handlePage(e.target.textContent)}
        color='primary'
        hideNextButton
        hidePrevButton
      />
     </ThemeProvider>
    </div>
  );
}

export default CustiomPagination;
