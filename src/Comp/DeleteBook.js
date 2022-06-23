import React, { useState } from "react";

const DeleteBook = () => {
    const [submit, setSubmit] = useState(null);
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.id;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        // alert(inputs.desc);

        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        };
        fetch('https://localhost:44388/api/Books/'+inputs.id, requestOptions)
            .then(response => response.json())
            .then(setSubmit(1));
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Id</label><br></br>
                <input type="text" id="id" onChange={handleChange}></input><br></br>
                <input type="submit"></input><br/>
                {submit && 
                    <label>Response Submitted</label>
                }
            </form>
        </div>
    );
}

export default DeleteBook;