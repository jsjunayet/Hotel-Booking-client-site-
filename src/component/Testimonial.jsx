
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonial = () => {
    const testimonials = [
        {
            id: 1,
            name: 'John Doe',
            testimonial: 'Great experience! The hotel staff was very friendly and the room was comfortable.',
            rating: 5,
        },
        {
            id: 2,
            name: 'Jane Smith',
            testimonial: 'Amazing stay! The location was perfect, and the amenities exceeded my expectations.',
            rating: 4,
        },
        // Add more testimonials as needed
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className="testimonial-container">
            <h2>User Testimonials</h2>
            <Slider {...settings}>
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="testimonial-item">
                        <p className="testimonial-text">"{testimonial.testimonial}"</p>
                        <p className="testimonial-user">
                            <strong>{testimonial.name}</strong>
                        </p>
                        <p className="testimonial-rating">Rating: {testimonial.rating}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Testimonial;