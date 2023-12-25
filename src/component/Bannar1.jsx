import Marquee from 'react-fast-marquee';
import img from '../../src/assets/image/banner/bannar.jpg'

const Bannar1 = () => {
    return (
        <div>
            <div className="hero object-cover h-screen" style={{ backgroundImage: `url(${img})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="lg:mx-20 mx-2 space-y-10">

                        <p className='text-4xl font-semibold'>🔥 HOT DEALS AND SPECIAL OFFERS! 🔥</p>
                        <Marquee>
                            <div className='text-xl font-medium '>
                                🌟 Limited Time Offer: Get <span className=' text-pink-500'> 20% off </span> on all Rooms! Use code: <span className=' text-pink-500'>SALE20</span> at checkout. Don't miss out!
                            </div>
                        </Marquee>

                        <button className="btn btn-primary btn-outline">call-to-action</button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Bannar1;