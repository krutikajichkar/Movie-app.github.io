import { Pagination } from "@mui/material";
import React from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';


function CustiomPagination({ setPage }) {
  const dark = createTheme({
    pallete:{
      type:"dark",
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
        paddingTop: "10px",
      }}
    >
     <ThemeProvider theme={dark}>
     <Pagination
        count={10}
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
