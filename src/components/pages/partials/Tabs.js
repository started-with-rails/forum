import React from 'react'

function Tabs({clickMe,type}) {
    return(
    <ul id="tab" className="clearfix">
      <li className={`page_item ${type == 'recent' ? 'current_page_item' : ''}`}><a onClick={clickMe('recent')} href="#" >Recent</a></li>
      <li className={`page_item ${type == 'popular' ? 'current_page_item' : ''}`}><a onClick={clickMe('popular')} href="#">Most Responses</a></li>
      <li className={`page_item ${type == 'unanswered' ? 'current_page_item' : ''}`}><a onClick={clickMe('unanswered')} href="#">Unanswered</a></li>
      <li className={`page_item ${type == 'answered' ? 'current_page_item' : ''}`}><a onClick={clickMe('answered')} href="#">Recently Answered</a></li>
    </ul>
    )
}
export default Tabs;