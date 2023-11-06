
import { Link } from 'react-router-dom';
import img from '../../src/assets/image/icons/404.gif'
const Error = () => {
    return (
        <div className="flex justify-center items-center pt-28">
            <div className=''>
                <p className=' text-2xl font-semibold ml-32 pb-6'>Oops there is a no content.</p>
                <div className='flex gap-5 items-center ml-32'>
                    <p className='text-xl font-semibold'>Please back the</p> <Link className='btn btn-secondary btn-outline' to={'/'}>Home</Link>
                </div>
                <img src={img} alt="" className=' max-w-xl' />
            </div>
        </div>
    );
};

export default Error;