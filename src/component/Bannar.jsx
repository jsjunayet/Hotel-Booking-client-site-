import img1 from '../assets/image/banner/1.jpg'
import img2 from '../assets/image/banner/2.jpg'
import img3 from '../assets/image/banner/3.jpg'
import img4 from '../assets/image/banner/4.jpg'


const Bannar = () => {
    return (
        <div>
            <div className="carousel w-full h-screen">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} className="w-full rounded-lg" />
                    <div className="absolute w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className='text-white space-y-5 lg:mt-40 mt-40 lg:ml-20 ml-5'>
                            <p className='lg:w-1/4 w-1/2 text-4xl lg:text-4xl font-semibold space-y-5 space-x-2'>Affordable Price For Car Servicing</p>
                            <p className='lg:w-1/3 w-2/3'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='flex gap-5'>
                                <button className="btn btn-warning">Discover More</button>
                                <button className="btn btn-outline  btn-error">Latest Project</button>
                            </div>

                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-5  left-5 right-10 bottom-5">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full rounded-lg" />
                    <div className="absolute w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">


                        <div className='text-white space-y-5 lg:mt-40 mt-40 lg:ml-20 ml-5'>
                            <p className='lg:w-1/4 w-1/2 text-4xl lg:text-4xl font-semibold space-y-5 space-x-2'>Affordable Price For Car Servicing</p>
                            <p className='lg:w-1/3 w-2/3'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='flex gap-5'>
                                <button className="btn btn-warning">Discover More</button>
                                <button className="btn btn-outline btn-error">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-5  left-5 right-10 bottom-5">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} className="w-full rounded-lg" />
                    <div className="absolute w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">


                        <div className='text-white space-y-5 lg:mt-40 mt-40 lg:ml-20 ml-5'>
                            <p className='lg:w-1/4 w-1/2 text-4xl lg:text-4xl font-semibold space-y-5 space-x-2'>Affordable Price For Car Servicing</p>
                            <p className='lg:w-1/3 w-2/3'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='flex gap-5'>
                                <button className="btn btn-warning">Discover More</button>
                                <button className="btn btn-outline btn-error">Latest Project</button>
                            </div>

                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-5  left-5 right-10 bottom-5">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img4} className="w-full rounded-lg" />
                    <div className="absolute w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">


                        <div className='text-white space-y-5 lg:mt-40 mt-40 lg:ml-20 ml-5'>
                            <p className='lg:w-1/4 w-1/2 text-4xl lg:text-4xl font-semibold space-y-5 space-x-2'>Affordable Price For Car Servicing</p>
                            <p className='lg:w-1/3 w-2/3'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='flex gap-5'>
                                <button className="btn btn-warning">Discover More</button>
                                <button className="btn btn-outline btn-error">Latest Project</button>
                            </div>

                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-5  left-5 right-10 bottom-5">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bannar;