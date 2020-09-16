import React from 'react';

function TopUsersWidget(){
  return(
  <div className="widget">
    <h3 className="clearfix"><span className="fl">Top Users</span><span className="fr point">Point</span></h3>
    <ul className="topusers">
      <li className="clearfix">
        <div className="user-details">
          <div className="user-pic">
            <a href="https://demo.templatic.com/answers/author/satyajit/"> <img name="user_photo" className="agent_photo" id="user_photo" src="https://demo.templatic.com/answers/wp-content/themes/Answers/images/avatar_post.png" width="64" height="64" /> </a>
          </div>
          <div className="user-info"> <span className="points">786</span> <span className="users">
                    <a href="https://demo.templatic.com/answers/author/satyajit/">SATYAJIT</a>
                  </span> <span className="user-answers">
                    <label className="label-col">Total Answers:</label>10								</span> </div>
        </div>
      </li>
    </ul>
  </div>
  )
}

export default  TopUsersWidget;