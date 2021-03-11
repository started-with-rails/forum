import React from 'react'

function Answers({answer}) {
    return(
     <div >
      <ol className="commentlist">
         <li className="comment wrap threaded clearfix  ">
            <div className="votes">
               <p>
                  <span  className="bnone">0 <b>Votes</b></span> 
                  <img style={{ "padding": "0px;", border: "none;", cursor: "pointer;"}} className="up-thumb" id="up-34" src="https://demo.templatic.com/answers/wp-content/themes/Answers/images/2_14_up.png" alt="Thumb up" title="" />
                 
                  <span id="karma-34-up"  className="up_points">0 <b>Votes</b></span>&nbsp;
                  <img style={{ "padding": "0px;", border: "none;", cursor: "pointer;"}} className="down-thumb" id="down-34" src="https://demo.templatic.com/answers/wp-content/themes/Answers/images/2_14_down.png" alt="Thumb down" title="" />

                  <span id="karma-34-down" className="down_points">0 <b>Votes</b></span></p>
            </div>
            <div className="content_left">
               <p>{answer.answer}</p>
               <p className="author"> <img name="user_photo" className="agent_photo" id="user_photo" src="https://demo.templatic.com/answers/wp-content/uploads/users/20161213110410_janiffer-150X150.jpg" width="38" height="38" /> <span className="auhtor_name"><strong> 
                  <a href="https://demo.templatic.com/answers/author/rajesh/">{answer.answered_by}</a>
                  </strong>  <small>- {answer.created_at} </small> </span> <span className="comments_links">   
                  |
                  </span> 
               </p>
            </div>
            <span className="comm-reply">
            </span> 
         </li>
      </ol>
   </div>
    )
}
export default Answers;