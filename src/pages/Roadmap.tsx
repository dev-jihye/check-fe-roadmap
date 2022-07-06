import {ChevronDownIcon} from '@heroicons/react/outline';
import {ChevronUpIcon} from '@heroicons/react/outline';
import {ShareIcon} from '@heroicons/react/outline';
import ShareBtn from '../components/ShareBtn';

export default function Roadmap() {
  return (
    <div className="border">
      <h1 className="mb-10 text-lg sm:text-xl font-medium">
        나의 프론트엔드 추천 로드맵
      </h1>
      <div className="mb-10">
        <div className="flex justify-center items-center mb-6">
          <ChevronUpIcon className="w-5 h-5 mr-2" />
          <span className="inline-block">React 로드맵 접기</span>
        </div>
        <div>
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://ko.reactjs.org/"
              className="inline-block w-full bg-gray-100 p-4 my-2"
            >
              <span className="p-2 bg-yellow-200 text-xs rounded-md mr-2">
                기초
              </span>{' '}
              공식 문서로 시작하기
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning"
              className="inline-block w-full bg-gray-100 p-4 my-2"
            >
              <span className="p-2 bg-yellow-200 text-xs rounded-md mr-2">
                기초
              </span>{' '}
              todo list 만들기
            </a>
            <a
              href="https://nomadcoders.co/react-for-beginners"
              className="inline-block w-full bg-gray-100 p-4 my-2"
            >
              <span className="p-2 bg-purple-200 text-xs rounded-md mr-2">
                강의
              </span>{' '}
              영화 웹서비스 만들기
            </a>
          </div>
        </div>
      </div>
      <div className="mb-10">
        <div className="flex justify-center items-center mb-6">
          <ChevronDownIcon className="w-5 h-5 mr-2" />
          <span className="inline-block">CS 로드맵 펼치기</span>
        </div>
      </div>
      <ShareBtn />
    </div>
  );
}
