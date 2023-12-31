import './App.css';
import { useState,useEffect } from 'react';

function AllStudents() {

    const [stu_data,set_stu_data] = useState("");

    useEffect(   () => {
        fetch(
            `http://localhost:3000/thnkgoods/3.json`
        )
        .then(set_stu_data)
    },[]);

    if(stu_data)
        return (
            <div className="App">
            <h1>All Students</h1>
            <pre>{JSON.stringify(stu_data,null,2)}</pre>
            </div>
        );
        
    return <h1>Data</h1>

}

export default AllStudents;
