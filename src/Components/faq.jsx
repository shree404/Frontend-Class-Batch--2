import { useState  , useEffect} from "react";
import { IoMdAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa";


function FAQS(){
    const [showAnswer,setShowAnswer] = useState (0);
    const [count,setCount] = useState(0);

    const FaqArray = [
        {
            question:"What is your name?",
            answer:"My name is shreesha"
        },
        {
            question:"How are you?",
            answer:"I am fine "
        },
        {
            question:"What you do ?" ,
            answer : "I do nothning"
        }
    ]

    const handleClick = (index) => {
        if ( showAnswer === index) {
            setShowAnswer(null);
        }
        else{
            setShowAnswer(index);
        }
    }

    // useEffect (() => {
    //     return() => {

    //     }
    // }, [dependencies])

    // 1.Page Load 

    // useEffect (() => {
    //     console.log("Page reload using useeefect")
    // })

    useEffect (() => {
        console.log("Value Increase"); 
    } ,[count])

   



    return(
        <>
       
        <div>
            {FaqArray.map((item,index) => (
                <div key={index}>
                    <p className={showAnswer === index ? "redtext" : "blacktext"}>{item.question} <button onClick={() => handleClick(index)}> {showAnswer === index ? <FaMinus /> : <IoMdAdd/>}
                          </button></p>
                    {showAnswer === index && 
                    <p>{item.answer}</p>
                    }
                    </div>
            ))}
        </div>
        </>
    )
}

export default FAQS;