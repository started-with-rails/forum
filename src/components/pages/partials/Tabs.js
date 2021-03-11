import React,{useState} from 'react'

function Tabs({clickMe}) {
    return(
    <ul id="tab" className="clearfix">
      <li className="page_item current_page_item"><a onClick={clickMe('recent')} href="#" >Recent</a></li>
      <li className="page_item"><a onClick={clickMe('popular')} href="#">Most Responses</a></li>
      <li className="page_item"><a onClick={clickMe('unanswered')} href="#">Unanswered</a></li>
      <li className="page_item"><a onClick={clickMe('answers')} href="#">Recently Answered</a></li>
    </ul>
    )
}
export default Tabs;