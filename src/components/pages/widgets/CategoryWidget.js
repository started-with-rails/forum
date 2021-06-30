import React from 'react';

function CategoryWidget({categories}){
  return(
  <div className="widget">
    <h3>Categories</h3>
    <ul>
     { categories.map(category =>  
       <li className="cat-item cat-item-2">
          <a href={`/categories/${category.id}/questions`}>{category.title}</a> ({category.questions_count})
        </li>
     )}
    </ul>
  </div>
  )
}

export default  CategoryWidget;