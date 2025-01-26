import * as React from "react";
import Pagination from "@mui/material/Pagination";

import "./Paginationn.css"


export default function Paginationn({ totalPage, currPage, onPageChange }) {
 

  if(!totalPage){
   return (<></>);
  }
  return (
    <div className="pagination-master">
      <Pagination
        count={totalPage}
        page={currPage} // Controlled page state
        onChange={onPageChange} // Update current page when clicked
        shape="rounded"
        sx={{
          "& .MuiPaginationItem-root": {
            color: "#1976d2", // Default text color
          },
          "& .Mui-selected": {
            backgroundColor: "#1976d2 !important", // Selected background color
            color: "#fff", // Selected text color
          },
          "& .MuiPaginationItem-ellipsis": {
            color: "inherit", // Inherit text color for ellipsis
          },
        }}
      />
    </div>
  );
}
