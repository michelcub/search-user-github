import {ImLocation} from 'react-icons/im'
import {BiLink} from 'react-icons/bi'
import {BsBuildingsFill} from 'react-icons/bs'
import {MdAttachEmail} from 'react-icons/md'
import useAppContext from '../context/AppContext.jsx'

export const UserDetails = () => {

    const {store} = useAppContext()


    return (
        <article className="w-full h-full bg-[#1F2A48] p-8 rounded-xl flex gap-4 mt-6 flex-col justify-evenly text-white">

            <div className="flex flex-col md:flex-row md:justify-around items-center">
                <img className="border w-24 h-24 rounded-full" src={store?.data?.avatar_url|| ''} alt="img avatar" />

                <div className="flex flex-col md:flex-row md:gap-12">
                    <div className='flex flex-col justify-center items-center'>
                        <h2>{store?.data?.name !== null && store?.data?.name !== undefined ? `${store?.data?.name}`:'The Name'}</h2>
                        <p>{store?.data?.login !== null && store?.data?.login !== undefined ? `@${store?.data?.login}`:'@username'}</p>
                        
                    </div>
                    <div className='flex items-center'>
                        <p>Joined {store?.data?.created_at !== null && `${store?.data?.created_at.slice(0,10).split('-').reverse().join('/')}`}</p>
                    </div>
                </div>
                
            </div>

            <div className="w-full p-2 flex justify-center">
                <p> {store?.data?.bio !== null? store?.data?.bio:'This profile has no bio'}</p>
            </div>

            <div className="flex justify-evenly p-3 rounded-lg bg-[#141C2F]">
                <div className="flex flex-col justify-center items-center">
                    <h3>Repos</h3>
                    <p>0</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h3>Followers</h3>
                    <p>0</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h3>Following</h3>
                    <p>0</p>
                </div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-around mt-5">
                <ul>
                    <li className='flex items-center gap-2 text-lg'><ImLocation/> {store?.data?.location !== null? store?.data?.location:'Not Available'}</li>
                    <li className='flex items-center gap-2 text-lg'><BiLink/> {store?.data?.html_url !== null? store?.data?.html_url:'Not Available'}</li>
                </ul>
                <ul>
                    <li className='flex items-center gap-2 text-lg'><MdAttachEmail/> {store?.data?.email !== null? store?.data?.email:'Not Available'}</li>
                    <li className='flex items-center gap-2 text-lg'><BsBuildingsFill/> {store?.data?.company !== null? store?.data?.company:'Not Available'}</li>
                </ul>
            </div>

        </article>  
    )
}