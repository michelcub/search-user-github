import {createContext, useContext} from 'react';
import {useState, useEffect} from 'react';


import useFetchUser from '../services/useFetchUser'




export const AppContext = createContext(null);


export const AppProvider = ({children}) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    const [userInput, setUserInput] = useState('')


    
    const onSubmit = (dataForm) => {
        setUserInput(dataForm.user)
    }


 
        const response = useFetchUser(userInput)
        useEffect(() => {
            if(response){
                setData(response.data)
                setIsPending(response.isPending)
                setError(response.error)
            }
        }, [response])
        console.log(response)
   

    

    const store = {
        data,
        isPending,
        error,
        userInput,

    }

    const actions = {
        setUserInput,
        onSubmit

    }

    return (
        <AppContext.Provider value={{store, actions}}>
            {children}
        </AppContext.Provider>
    )
}

const useAppContext = () => useContext(AppContext);
export default useAppContext;