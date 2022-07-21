import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import ProgressBar from '../components/ProgressBar';
import Selection from '../components/Selection';
import Models from '../data';
import {TQuestionModelInLS} from '../types/model';

const {CategoryModel, QuestionModel} = Models();

export default function Question() {
  const [questions, setQuestions] = useState<TQuestionModelInLS[]>(
    QuestionModel.map((question) => {
      return {
        ...question,
        category: CategoryModel.find(
          (category) => category.id === question.categoryId,
        ),
      };
    }),
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [question, setQuestion] = useState(questions[currentIndex]);
  const navigate = useNavigate();

  useEffect(() => {
    setQuestion(questions[currentIndex]);

    if (currentIndex === questions.length) {
      localStorage.setItem('questions', JSON.stringify(questions));
      navigate('/result');
    }
  }, [currentIndex, questions, navigate]);

  const handleClick = (score: number) => {
    setQuestions(
      questions.map((question, index) => {
        if (index === currentIndex) {
          return {
            ...question,
            score,
          };
        } else {
          return question;
        }
      }),
    );

    setCurrentIndex(currentIndex + 1);
  };
  return (
    <div>
      <div className="inline-block py-2 px-4 rounded-full border-2 border-[#17d1ff] text-[#17d1ff] mb-10 text-xs">
        <span>{question.category?.title || '카테고리'}</span>
      </div>
      <ProgressBar
        currentPage={currentIndex + 1}
        totalPage={questions.length}
      />
      <div>
        <h2 className="text-center my-20 text-lg sm:text-xl">
          {question.title}
        </h2>
        <Selection
          onClick={() => {
            handleClick(1);
          }}
          title="전혀 모른다."
        />
        <Selection
          onClick={() => {
            handleClick(2);
          }}
          title="들어본 적은 있다."
        />
        <Selection
          onClick={() => {
            handleClick(3);
          }}
          title="개념은 아는데 자세한 설명은 생략한다.."
        />
        <Selection
          onClick={() => {
            handleClick(4);
          }}
          title="설명까지 SSAP! 가능!"
        />
      </div>
    </div>
  );
}
