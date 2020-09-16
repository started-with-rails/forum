import React from 'react';

function SearchWidget(){
  return(
  <div className="widget">
    <form role="search" method="get" id="searchform" className="searchform" action="https://demo.templatic.com/answers/">
      <div>
        <label className="screen-reader-text" for="s">Search for:</label>
        <input type="text" value="" name="s" id="s" />
        <input type="submit" id="searchsubmit" value="Search" /> </div>
    </form>
  </div>
  )
}

export default  SearchWidget;