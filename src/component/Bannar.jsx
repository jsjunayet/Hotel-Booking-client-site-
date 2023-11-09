import img1 from '../assets/image/banner/room.jpg'
import img2 from '../assets/image/banner/myroom.jpg'



const Bannar = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col gap-10 lg:flex-row">
                <div className='lg:w-1/2 w-full relative'>
                    <img src={img1} className="lg:w-2/3 w-full rounded-lg shadow-2xl" />
                    <img src={img2} className="lg:w-1/2 w-2/3 rounded-lg shadow-2xl absolute lg:right-5 -right-5 -bottom-20 border-8 border-white" />
                </div>
                <div className='lg:w-1/2 w-full  space-y-6 p-5'>
                    <h2 className='text-3xl font-semibold'>Subscribe to Our Newsletter</h2>
                    <p className='text-xl font-medium'>Subscribe to our newsletter for the latest updates, exclusive deals, and special offers!Stay ahead of the curve! Sign up for our newsletter to receive the latest updates, exclusive deals, and special offers straight to your inbox. Don't miss out on the chance to be the first to know about our exciting new releases and limited-time promotions. Join our community today and elevate your shopping experience!</p>
                    <div>

                        <input type="text" placeholder="Subscribe" className="input input-bordered input-info w-full max-w-xs" />
                        <button className='btn btn-outline btn-secondary ml-10'>Subscribe</button>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Bannar;