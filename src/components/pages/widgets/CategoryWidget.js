import React from 'react';

function CategoryWidget(){
  return(
  <div className="widget">
    <h3>Categories</h3>
    <ul>
      <li className="cat-item cat-item-2"><a href="https://demo.templatic.com/answers/category/blog/">Blog</a> (4) </li>
      <li className="cat-item cat-item-5"><a href="https://demo.templatic.com/answers/category/questions/">Questions</a> (19) </li>
      <li className="cat-item cat-item-1"><a href="https://demo.templatic.com/answers/category/uncategorized/">Uncategorized</a> (7) </li>
    </ul>
  </div>
  )
}

export default  CategoryWidget;