import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Food from '../components/Food.jsx';
import Feedback from '../components/Feedback.jsx';

const Home = () => {
    const foodSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const feedbackSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const feedbacks = [
        {
            feedback:
                'After partnering with KhanaPina, my food stall has seen a great boost. More people now know about my special fish fry, and I have regular customers. The platform is easy to use and has broadened my reach.',
            name: 'Subhankar Roy',
        },
        {
            feedback:
                'KhanaPina has been a blessing for a food lover like me. It helped me find hidden gems in the city. I recently tried the best puchka ever, thanks to KhanaPina’s recommendations.',
            name: 'Ananya Banerjee',
        },
        {
            feedback:
                'Starting my food venture was challenging, but KhanaPina provided a platform to showcase my mutton rolls to a wider audience. Their support has significantly increased my footfall and revenue.',
            name: 'Rajat Das',
        },
        {
            feedback:
                'KhanaPina has transformed my street food experiences. The app is user-friendly, and I can read reviews before deciding where to eat. Finding a jhal muri vendor through KhanaPina was delightful!',
            name: 'Sohini Chatterjee',
        },
        {
            feedback:
                'Being part of KhanaPina has been life-changing. It’s not just listing my food but being part of a community that supports small businesses like mine. My famous chicken ghugni has gained popularity!',
            name: 'Biplab Ghosh',
        },
        {
            feedback:
                "As a street food enthusiast, KhanaPina has made my adventures exciting. The vendor profiles and customer feedback led me to discover some of the best and most authentic street foods in Kolkata.",
            name: 'Priyanka Mukherjee',
        },
    ];
    

    return (
        <div className="bg-white min-h-screen">
            <section className="relative w-full h-96 overflow-hidden">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src="/videos/video1.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
                    <h1 className="text-4xl md:text-6xl font-black mb-4">KhanaPina</h1>
                    <p className="text-lg md:text-4xl max-w-2xl text-center">
                        Discover the best street food around you
                    </p>
                </div>
            </section>

            <section className="px-4 md:px-20 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mt-12 mb-4 text-red-500">
                    Explore the Flavors of Your City
                </h2>
                <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
                    From savory snacks to sweet treats, find the best street foods near you. Whether you're craving spicy chaat, tangy golgappas, or sizzling kebabs, we’ve got you covered!
                </p>
                <Slider {...foodSettings}>
                    {[...Array(10)].map((_, index) => (
                        <Food key={index} filename={`image${index + 1}.jpg`} />
                    ))}
                </Slider>
            </section>

            <section className="relative w-full mt-20">
                <h2 className="text-3xl md:text-4xl font-bold text-center mt-12 mb-4 text-red-500">
                    What They Say
                </h2>
                <div className="relative w-full h-96 overflow-hidden">
                    <video
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        src="/videos/video2.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
                        <div className="w-4/5">
                            <Slider {...feedbackSettings}>
                                {feedbacks.map((item, index) => (
                                    <Feedback key={index} feedback={item.feedback} name={item.name} />
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;