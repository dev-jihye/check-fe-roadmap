import {ChevronDownIcon} from '@heroicons/react/outline';
import {ChevronUpIcon} from '@heroicons/react/outline';
import ShareBtn from '../components/ShareBtn';

export default function Roadmap() {
  return (
    <div>
      <h1 className="mb-10 text-lg sm:text-xl font-medium">
        나의 프론트엔드 추천 로드맵
      </h1>
      <div className="mb-10">
        <div className="flex items-center mb-6">
          <div className="border-2 flex px-4 py-2 rounded-full border-[#e853a9] text-[#e853a9] cursor-pointer">
            <span className="inline-block mr-2">React 로드맵 접기</span>
            <ChevronUpIcon className="w-5 h-5" />
          </div>
        </div>
        <div>
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://ko.reactjs.org/"
              className="inline-block w-full bg-[#6979bb] p-3 sm:p-4 my-2 rounded-md"
            >
              <span className="py-1 px-2 bg-[#e9e069] text-gray-900 text-xs rounded-md mr-2">
                기초
              </span>{' '}
              <span className="text-sm sm:text-base">공식 문서로 시작하기</span>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning"
              className="inline-block w-full bg-[#6979bb] p-3 sm:p-4 my-2 rounded-md"
            >
              <span className="py-1 px-2 bg-[#17d1ff] text-gray-900 text-xs rounded-md mr-2">
                심화
              </span>{' '}
              <span className="text-sm sm:text-base">todo list 만들기</span>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://nomadcoders.co/react-for-beginners"
              className="inline-block w-full bg-[#6979bb] p-3 sm:p-4 my-2 rounded-md"
            >
              <span className="py-1 px-2 bg-[#a3e75f] text-gray-900 text-xs rounded-md mr-2">
                강의
              </span>{' '}
              <span className="text-sm sm:text-base">영화 웹서비스 만들기</span>
            </a>
          </div>
        </div>
      </div>
      <div className="mb-10">
        <div className="flex items-center mb-6">
          <div className="border-2 flex px-4 py-2 rounded-full border-[#e77820] text-[#e77820] cursor-pointer">
            <span className="inline-block mr-2">CS 로드맵 펼치기</span>
            <ChevronDownIcon className="w-5 h-5" />
          </div>
        </div>
      </div>
      <div className="mt-20">
        <ShareBtn />
      </div>
    </div>
  );
}
