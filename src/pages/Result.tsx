import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import roadImg from '../assets/running.png';
import finish from '../assets/finish-line.png';
import ShareBtn from '../components/ShareBtn';
import StartBtn from '../components/StartBtn';
import Models from '../data';
import {TQuestionModelInLS} from '../types/model';

export default function Result() {
  const {CategoryModel, QuestionModel} = Models();
  const [result, setResult] = useState<TQuestionModelInLS[]>([]);
  const isPerfect =
    result.filter((question) => question.score === 4).length === result.length;

  useEffect(() => {
    const allQuestions = QuestionModel.map((question) => {
      return {
        ...question,
        category: CategoryModel.find(
          (category) => category.id === question.categoryId,
        ),
        score: 1,
      };
    });
    const questionsFromLS = localStorage.getItem('questions');
    if (questionsFromLS) {
      const questions = JSON.parse(questionsFromLS);
      setResult(questions);
    } else {
      setResult(allQuestions);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      {isPerfect ? (
        <div>
          <div className="flex flex-col justify-center items-center mb-16">
            <h2 className="text-lg sm:text-2xl text-center mb-16">
              이론은 이미 척척 박사🧑‍🎓 이제는 실전 차례!
            </h2>
            <img className="w-96" src={finish} alt="road" />
            <span className="text-xs mt-5">Image from iconscout</span>
          </div>
          <div className="w-full sm:w-[32rem] mb-10">
            <div className="mb-6">
              {result
                .filter((question: any) => question.score <= 3)
                .map((question: any) => (
                  <div
                    key={question.id}
                    className="flex items-center justify-between bg-[#282044] text-[#eee] p-3 sm:p-4 my-4 rounded-md space-x-4"
                  >
                    <p className="text-sm sm:text-base">{question.title}</p>
                    <a
                      href={question.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base shrink-0"
                    >
                      <span className="py-1 px-3 bg-[#7559bf] text-white text-sm rounded-md mr-2 tracking-wide">
                        Link
                      </span>
                    </a>
                  </div>
                ))}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex flex-col justify-center items-center mb-16">
            <h2 className="text-lg sm:text-2xl text-center mb-16">
              이 부분을 더 공부하면 좋을 것 같아요!
            </h2>
            <img className="w-96" src={roadImg} alt="road" />
            <span className="text-xs mt-5">Image from kindpng</span>
          </div>
          <div className="w-full sm:w-[32rem] mb-10">
            <div className="mb-6">
              {result
                .filter((question: any) => question.score <= 3)
                .map((question: any) => (
                  <div
                    key={question.id}
                    className="flex items-center justify-between bg-[#282044] text-[#eee] p-3 sm:p-4 my-4 rounded-md space-x-4"
                  >
                    <p className="text-sm sm:text-base">{question.title}</p>
                    <a
                      href={question.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base shrink-0"
                    >
                      <span className="py-1 px-3 bg-[#7559bf] text-white text-sm rounded-md mr-2 tracking-wide">
                        Link
                      </span>
                    </a>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
      <Link to="/" className="mb-10">
        <StartBtn text="테스트 다시하기" />
      </Link>
      <div className="mb-10">
        <ShareBtn url={window.location.origin} text="테스트 공유하기" />
      </div>
    </div>
  );
}
