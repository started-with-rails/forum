import React from 'react'

function Pagination() {
    return(
    <div className="pagination">
      <div className="Navi">
        <strong className="on">1</strong>
        <a href="https://demo.templatic.com/answers/page/2/">2</a>
        <a href="https://demo.templatic.com/answers/page/3/">3</a> 
        <a href="https://demo.templatic.com/answers/page/2/"><strong>»</strong></a>
      </div>
    </div>
    )
}
export default Pagination;