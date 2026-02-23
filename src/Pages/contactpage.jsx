
import { useEffect , useRef , useState } from "react"


function  ContactPage(){
    const [name , setname] = useState("");
    const [email , setemail] = useState("");
    const [message , setmessage] = useState("");

    const [nameError , setnameError] = useState("");
    const [emailError , setemailError] = useState("");
    const [messageError , setmessageError] = useState("");

const validation = () => {
    let isValid = true;
    setemailError("");
    setnameError("");
    setmessageError("");

    if (!name.trim()) {
        setnameError("Name is required");
        isValid = false;
    }
  const phonenumber = /^(\+977)?(98|97)\d{8}$/;
        // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const gmailvalidation = /^[a-zA-Z0-9.%+-]+@gmail\.com$/;

        if (!email.trim()) {
        setemailError("Email is required");
        isValid = false;
    } else if (!gmailvalidation.test(email)) {
        setemailError("Please enter a valid Gmail address");
        isValid = false;
    }

    if (!message.trim()) {
        setmessageError("Message is required");
        isValid = false;
    }
    return isValid;
}

    const handleSubmit = (e) =>{
        e.preventDefault();
       if(validation()){
        console.log(name , email , message);
       }
        setname("");
        setemail("");
        setmessage("");
    }



    return(
        <>
        <div>
            <form style={{display:'flex',flexDirection:'column',gap:'20px' , marginTop:'50px'}} onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Name</label>
                <input type="text" placeholder="Enter Your Name" value={name} onChange={(e) =>{ setname(e.target.value) ;
                setnameError("")
            } }/>
                {nameError && <p style={{color:'red'}}>Name is required</p>}
                
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input type="email" placeholder="Enter Your Email" 
                value={email} onChange={ (e) => {
                    setemail(e.target.value) ;
                    setemailError("")
                }}/>
                {emailError && <p style={{color:'red'}}>{emailError}</p>}
            </div>
            <div>
                {/* <label htmlFor="">Message</label> */}
                <textarea name="" id="" cols="30" rows="10" placeholder="Enter Your Message" value={message} onChange={(e) => {
                    setmessage(e.target.value);
                    setmessageError("");
                }}></textarea>
                {messageError && <p style={{color:'red'}}>Message is required</p>}
            </div>
            <div>
            <button type="submit">Send Message</button>
            </div>
            </form>
        </div>
        </>
    )
}

export default ContactPage