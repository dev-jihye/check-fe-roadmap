import roadImg from '../assets/running.png';
import {MapIcon} from '@heroicons/react/outline';
import ShareBtn from '../components/ShareBtn';
import {Link} from 'react-router-dom';

export default function Result() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center mb-16">
        <h2 className="text-lg sm:text-2xl text-center mb-16">
          당신은 프론트엔드 개발자까지 60% 왔습니다.
        </h2>
        <img className="w-96" src={roadImg} alt="road" />
      </div>
      <div className="w-full px-4 sm:w-[32rem] mb-14">
        <div className="mb-6">
          <p className="text-lg sm:text-xl">💪 나의 강점</p>
          <p className="mt-2">HTML, CSS, Javascript, React, CS 기초 지식</p>
        </div>
        <div>
          <p className="text-lg sm:text-xl">✍ 나의 약점</p>
          <p className="mt-2">React, CS 기초 지식</p>
        </div>
        <div className="flex justify-center items-center">
          <a
            href="#"
            className="flex justify-center items-center mt-10 bg-[#e9e069] text-gray-900 px-5 py-4 rounded-md text-sm sm:text-base"
          >
            <MapIcon className="w-5 h-5 mr-2" />
            <Link to="/roadmap" className="text-sm sm:text-base">
              추천 로드맵 보러가기
            </Link>
          </a>
        </div>
      </div>
      <ShareBtn />
    </div>
  );
}
