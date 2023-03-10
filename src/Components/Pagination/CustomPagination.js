import { Pagination } from "@mui/material";
import styled from "styled-components";
import React from "react";
import "./CustomPagination.css";

const StyledPagination = styled(Pagination)(({ theme }) => ({
  "& .MuiPaginationItem-page": {
    color: "white",
  },
}));

function CustiomPagination({ setPage, numberOfPages }) {
  // const classes = useStyles();

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
      <StyledPagination
        count={numberOfPages}
        onChange={(e) => handlePage(e.target.textContent)}
        color="secondary"
        hideNextButton
        hidePrevButton
      />
    </div>
  );
}

export default CustiomPagination;
