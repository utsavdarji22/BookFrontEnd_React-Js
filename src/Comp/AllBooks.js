import  {React, useState, useEffect} from "react";

const AllBooks = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch("https://localhost:44388/api/Books")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
            <table>
                
                {items.map(item => (
                    
                    <tr>
                    <td>
                        {item.id}
                    </td>
                    <td>
                        {item.name} 
                    </td>
                    <td>
                        
                        {item.description}
                    </td>
                    </tr>
                    
                ))}
                
            </table>
            </div>
        );
    }
};

export default AllBooks;