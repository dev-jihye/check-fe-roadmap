import {Link} from 'react-router-dom';
import img from '../assets/laptop.png';
import gitLogo from '../assets/github-logo.svg';
import StartBtn from '../components/StartBtn';
import {getLsQuestions} from '../utils/utils';

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col ">
      <h1 className="text-lg sm:text-2xl mb-10">
        프론트 개발자가 되기까지 얼마나 왔을까?
      </h1>
      <img className="w-96" src={img} alt="work" />
      <div className="flex flex-col space-y-4 py-4">
        <Link to="/notice">
          <StartBtn />
        </Link>
        {getLsQuestions() && (
          <Link to="/result" className="text-sm px-5 py-4">
            지난 결과 보기 &rarr;
          </Link>
        )}
      </div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/dev-jihye/check-fe-roadmap"
        className="flex flex-col justify-center items-center mt-4"
      >
        <img src={gitLogo} alt="github" className="w-10 h-10" />
        <span className="mt-2 text-xs sm:text-sm">2022 dev-jihye</span>
      </a>
    </div>
  );
}
