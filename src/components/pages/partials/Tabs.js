import React from 'react'

function Tabs() {
    return(
    <ul id="tab" className="clearfix">
      <li className="page_item current_page_item"><a href="https://demo.templatic.com/answers/?ptype=latest">Recent</a></li>
      <li className="page_item "><a href="https://demo.templatic.com/answers/?ptype=popular">Most Responses</a></li>
      <li className="page_item "><a href="https://demo.templatic.com/answers/?ptype=unanswered">Unanswered</a></li>
      <li className="page_item "><a href="https://demo.templatic.com/answers/?ptype=answers">Recently Answered</a></li>
    </ul>
    )
}
export default Tabs;