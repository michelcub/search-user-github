import {FiSearch} from 'react-icons/fi'
import useAppContext from '../context/AppContext'
import { useForm } from 'react-hook-form'

export const FindInput = () => {

    const {store, actions} = useAppContext()

    const {register, handleSubmit} = useForm()

    return (
        <form onSubmit={handleSubmit(actions.onSubmit)} className="w-full bg-[#1F2A48] p-2 rounded-xl flex gap-4 items-center">
            <FiSearch className="text-[#0079FE] text-2xl ms-2"/>
            <input {...register('user')} className="bg-[#1F2A48] text-xl p-2 w-[50%] focus:outline-none  text-white" type="text" placeholder="Find a user" />
            <button type='submit' className='bg-[#0079FE] text-white p-2 px-4 rounded-lg ms-auto'>Search</button>
        </form>
    )
}