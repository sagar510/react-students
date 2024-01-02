import './App.css';
import { useState,useEffect } from 'react';


function AddStudent() {

    const [first_name,setfname] = useState("");
    const [last_name,setlname] = useState("");
    const [email,setemail] = useState("");
    const [phone,setphone] = useState("");
    const [twitter,settwitter] = useState("");


    const handleSubmit = async(e) => {
        e.preventDefault();

        const postData = {first_name,last_name,email,phone,twitter};
    
        const response = await fetch(`http://localhost:3000/thnkgoods`,{
        
            method: "POST",
            headers:{
                "content-type": "application/json",
            },
            body: JSON.stringify(postData),
    
        });

        if(response.ok){
            console.log("Things are good");    
            console.log(response);
            alert('Data Submitted Sucessfully');
            
            setfname("");
            setlname("");
            setemail("");
            setphone("");
            settwitter("");
        }else{
            console.log("Error Ocurred");
        }
    
    }

    return (
        <div className='App'>
            <h1>Add a new Student</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <div>
                        <label>First Name</label>
                        <input type='text' value={first_name} onChange={(e)=>setfname(e.target.value)} required/>
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input type='text' value={last_name} onChange={(e)=>setlname(e.target.value)} required/>
                    </div>
                    <div>
                        <label>Email</label>
                        <input type='text' value={email} onChange={(e)=>setemail(e.target.value)} required/>
                    </div>
                    <div>
                        <label>Phone</label>
                        <input type='text' value={phone} onChange={(e)=>setphone(e.target.value)} required/>
                    </div>
                    <div>
                        <label>Twitter</label>
                        <input type='text' value={twitter} onChange={(e)=>settwitter(e.target.value)} required/>
                    </div>
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default AddStudent;