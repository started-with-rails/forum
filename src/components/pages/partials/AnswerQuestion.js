import React from 'react'

function AnswerQuestion() {
    return(
    <div id="respond">
      <h3>Answer Question</h3>
      <form action="https://demo.templatic.com/answers/?ptype=add_comments" method="post" id="commentform">
        <p className="clearfix">
          <label> Your Answer</label>
          <textarea name="comment" id="comment" rows="10" cols="10" tabindex="4" className="textarea" required=""></textarea>
        </p>
        <input name="submit" type="submit" id="submit" className="" value="Submit" tabindex="6" />
      </form>
      <div className="fix"></div>
    </div>
    )
}

export default AnswerQuestion;