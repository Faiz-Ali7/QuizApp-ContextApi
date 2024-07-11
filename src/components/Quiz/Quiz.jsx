import"./Quiz.css"
import { useRef, useState } from "react";
import { data } from "../../assets/data";
const Quiz = () => {
  const [index,setIndex]=useState(0);
  let [lock,setLock]=useState(false);
  const [question,setQuestion]=useState(data[index]);
  let [score,setScore]=useState(0);
  let option1=useRef(null);
  let option2=useRef(null);
  let option3=useRef(null);
  let option4=useRef(null);
  let options_array=[option1,option2,option3,option4]
let [selected,setSelected]=useState(null);
  const checkAns=(e,ans)=>{
    if(lock==false)
      {
    if(question.ans===ans){
      e.target.classList.add("correct");
      setScore(score+1);
      setLock(true);
    }
    else{
      e.target.classList.add("wrong");
      setLock(true);
      options_array[question.ans-1].current.classList.add("correct")
    }
  }
  }
  const next=()=>{
   
    if(lock==true)
      {
        if(index==data.length-1)
          {
            setSelected(true);
            return 0;
          }
        setIndex(index+1);
        setQuestion(data[index]);
        setLock(false);
        options_array.map((option)=>{
          option.current.classList.remove("correct");
          option.current.classList.remove("wrong");
          return null;
        })
      }
  }
 
  return (
    <div className="container">
        <h1>Quiz App</h1>
        <hr />
       {selected?<></>:<><h2>{index+1}.{question.question}</h2>
        <ul>
            <li ref={option1} onClick={(e)=>{checkAns(e,1)}}>{question.option1}</li>
            <li ref={option2} onClick={(e)=>{checkAns(e,2)}}>{question.option2}</li>
            <li ref={option3} onClick={(e)=>{checkAns(e,3)}}>{question.option3}</li>
            <li ref={option4} onClick={(e)=>{checkAns(e,4)}}>{question.option4}</li>
        </ul>
 
        <button onClick={next}>Next</button>
        <div className="index">
          {index+1} of {data.length} qustions
        </div> </>}
        {selected?<><h1>Your Score:{score}</h1> <button onClick={()=>{setSelected(false),setIndex(0),setLock(false),setQuestion(data[index]),setScore(0)}}>reset</button></>:<></>}
        
    </div>
  )
}

export default Quiz
