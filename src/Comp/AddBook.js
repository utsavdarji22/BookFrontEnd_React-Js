import React, { useState } from "react";

const AddBook = () => {
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
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: inputs.name,
            description : inputs.desc
         })
        };
        fetch('https://localhost:44388/api/Books', requestOptions)
            .then(response => response.json())
            .then(data => setSubmit(data.id));
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <label>Name</label><br/>
                <input type="text" id="name" onChange={handleChange}></input><br></br>
                <label >Description</label><br/>
                <input type="text" id="desc" onChange={handleChange}></input><br/>
                <input type="submit"></input><br/>
                {submit && 
                    <label>Response Submitted</label>
                }
            </form>
        </div>
    );
}

export default AddBook;