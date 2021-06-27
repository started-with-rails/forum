import React, {useState} from 'react'

function Pagination({ data, RenderComponent, title, pageLimit, dataLimit }) {
  let totalPages = Math.round(data.length / dataLimit)
  const [currentPage, setCurrentPage] = useState(1);

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
    
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    let limit = totalPages > pageLimit ? pageLimit : totalPages
    return new Array(limit).fill().map((_, idx) => start + idx + 1);
  };

  if (totalPages == 0) return <p></p>;

  return (
    <div>
    
    {getPaginatedData().map((d, idx) => (
        <RenderComponent key={idx} question={d} />
    ))}

    <div className="pagination">
    <div className="Navi">

    <strong
      onClick={goToPreviousPage}
      className={`paginationItem prev ${currentPage === 1 ? 'disabled' : ''}`}
    >
       <a href="#">prev</a>
    </strong>

    {getPaginationGroup().map((item, index) => (
        <strong
          key={index}
          onClick={changePage}
          className={`paginationItem ${currentPage === item ? 'on' : null}`}
        >
          <a href="#">{item}</a>
        </strong>
      ))}
       <strong
        onClick={goToNextPage}
        className={`paginationItem next ${currentPage === totalPages ? 'disabled' : ''}`}
      >
         <a href="#">next</a>
      </strong>

      {/* <strong className="on">1</strong>
      <a href="https://demo.templatic.com/answers/page/2/">2</a>
      <a href="https://demo.templatic.com/answers/page/3/">3</a> 
      <a href="https://demo.templatic.com/answers/page/2/"><strong>»</strong></a> */}
    </div>
  </div>
  </div>
  );
}

export default Pagination;