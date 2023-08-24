import { useState, useEffect } from "react";


const useFetchUser = (user:string) => {
    
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    const url: string = `https://api.github.com/users/${user}`;
    const token: string = import.meta.env.VITE_GITHUB_TOKEN;
    const Headers = {
        'Authorization': 'token ' + token,
    }

    

    useEffect(() => {
        try{
            if(user === ''){
                return 
            }
            fetch(url, Headers )
        .then(res => {
            if (!res.ok){
                throw Error('could not fetch the data for that resource')
                
            }
            return res.json()
        })
        .then(data => {
            setData(data)
            setError(null)
        })
        }catch(err){
            setError(err)
        }finally{
            setIsPending(false)
        }
    }, [user]);

    if(!isPending && data!==null){
        return { data, isPending, error }
    }

}

export default useFetchUser;