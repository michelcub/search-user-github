import {createContext, useContext} from 'react';
import {useState, useEffect} from 'react';


import useFetchUser from '../services/useFetchUser'


interface userInput{
    user: string
}

export const AppContext = createContext(null);


export const AppProvider = ({children}) => {

    const [data, setData] = useState();
    const [isPending, setIsPending] = useState<boolean>(true);
    const [error, setError] = useState();

    const [userInput, setUserInput] = useState<string>('')


    
    const onSubmit = (dataForm: userInput) => {
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