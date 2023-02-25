import { Pagination } from '@mui/material'
import React from 'react'

function CustiomPagination({setPage , numOfPages=10}) {
    const handlePage = (page) => {
       setPage(page);
       window.scroll(0,0);
    }
  return (
    <div className='page_style'>
        <Pagination count={10} onChange={(e) => handlePage(e.target.textContent)}/>
    </div>
  )
}

export default CustiomPagination