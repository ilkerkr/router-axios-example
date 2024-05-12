import React from "react";

const Pagination = ({ totalPosts, dataPerPage, setCurrrentPage,currentPage }) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / dataPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="pagination">
      {pages.map((page, index) => (
        <button key={index} onClick={() => setCurrrentPage(page)} className={page == currentPage ? "active" : ""}>
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
