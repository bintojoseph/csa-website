import React, { useRef, useState } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Event1 from '../assets/images/achievements.jpg';
import Event2 from '../assets/images/achievements.jpg';
import Navbar from '../components/Navbar';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import "./styles/achievements.css";

const studentEvents = [
  {
    id: 1,
    image: Event1,
    Name: 'John Doe',
    Year: '2022-2023',
    description: 'Student',
    registrationButton: 'Register',
  },
  {
    id: 2,
    image: Event2,
    Name: 'John Doe',
    Year: '2022-2023',
    description: 'Student',
    registrationButton: 'Register',
  },
  {
    id: 3,
    image: Event2,
    Name: 'John Doe',
    Year: '2022-2023',
    description: 'Student',
    registrationButton: 'Register',
  },
  {
    id: 4,
    image: Event2,
    Name: 'John Doe',
    Year: '2022-2023',
    description: 'Student',
    registrationButton: 'Register',
  },
  {
    id: 5,
    image: Event2,
    Name: 'John Doe',
    Year: '2022-2023',
    description: 'Student',
    registrationButton: 'Register',
  },
  {
    id: 6,
    image: Event2,
    Name: 'John Doe',
    Year: '2022-2023',
    description: 'Student',
    registrationButton: 'Register',
  },
];

const facultyEvents = [
  {
    id: 1,
    image: Event1,
    Name: 'John Doe',
    Year: '2022-2023',
    description: 'Faculty',
    registrationButton: 'Register',
  },
  {
    id: 2,
    image: Event2,
    Name: 'John Doe',
    Year: '2022-2023',
    description: 'Faculty',
    registrationButton: 'Register',
  },
  {
    id: 3,
    image: Event2,
    Name: 'John Doe',
    Year: '2022-2023',
    description: 'Faculty',
    registrationButton: 'Register',
  },
  {
    id: 4,
    image: Event2,
    Name: 'John Doe',
    Year: '2022-2023',
    description: 'Faculty',
    registrationButton: 'Register',
  },
  {
    id: 5,
    image: Event2,
    Name: 'John Doe',
    Year: '2022-2023',
    description: 'Faculty',
    registrationButton: 'Register',
  },
  {
    id: 6,
    image: Event2,
    Name: 'John Doe',
    Year: '2022-2023',
    description: 'Faculty',
    registrationButton: 'Register',
  },
];

function Events() {
  const swiperRef = useRef(null);
  const [showStudentEvents, setShowStudentEvents] = useState(true);

  React.useEffect(() => {
    if (swiperRef.current) {
      new Swiper(swiperRef.current, {
        initialSlide: 0,
        effect: 'coverflow',
        loop:true,
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        spaceBetween: 30,
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        keyboard: {
          enabled: true,
          onlyInViewport: false,
        },
      });
    }
  }, []);

  const handleStudentClick = () => {
    setShowStudentEvents(true);
  };

  const handleFacultyClick = () => {
    setShowStudentEvents(false);
  };

  const eventsToShow = showStudentEvents ? studentEvents : facultyEvents;

  return (
    <div className='achievements'>
      <Navbar textColor="black" />
      <div className='p-10 pt-44 items-center flex flex-col'>
        <div className="text-7xl text-center mb-4 font-bold">Achievements</div>
        <div className='items-center m-0 flex flex-row justify-center'>
          <button className={`text-4xl text-center text-[#00000080] font-semibold ${showStudentEvents ? 'text-black' : ''}`} onClick={handleStudentClick}>Student</button>
          <button className={`text-4xl text-center text-[#00000080] font-semibold ${!showStudentEvents ? 'text-black' : ''}`} onClick={handleFacultyClick}>Faculty</button>
        </div>
        <div className='mx-24 mt-7 relative flex flex-row justify-center swiper-container space-x-14'>
          <button className="bg-transparent rounded-full text-[#525252] ml-4 max-w-6 self-center" onClick={() => swiperRef.current.swiper.slidePrev()}>
            <FaAngleLeft className='text-2xl text-[#ffffff] bg-[#B3BBD8] rounded-full' />
          </button>
          <div className="swiper-container " ref={swiperRef} style={{padding: '0 ', overflow: 'hidden' }}>
            <div className="swiper-wrapper my-10">
            {eventsToShow.map((event) => (
              <div className="swiper-slide bg-transparent items-center w-[208px] h-[280px] rounded-3xl relative expand-container transition-all duration-300 hover:scale-110" key={event.id}>
              <div className="absolute m-auto left-0 right-0 z-10">
                    <img className="w-[166px] m-auto bg-transparent h-[179px] rounded-xl" src={event.image} alt={event.Year} />
                    <h2 className="text-center bg-transparent text-black font-medium text-base">{event.Name}</h2>
                    <h2 className="text-center bg-transparent text-[#7A8193] text-xs font-normal">{event.Year}</h2>
                    <p className="text-center bg-transparent text-[#7A8193] font-normal text-xs">{event.description}</p>
                  </div>
                <div className='h-[64px]'></div>
                <div className="flex flex-col items-center justify-between h-[208px] bg-white rounded-xl">
                  
                </div>
              </div>
            ))}
            </div>
            <div className="swiper-pagination"></div>
          </div>
          <button className="mx-24 rounded-full mr-4 max-w-6 self-center" onClick={() => swiperRef.current.swiper.slideNext()}>
            <FaAngleRight className='text-2xl text-[#ffffff] bg-[#B3BBD8] rounded-full' />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Events;
