import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import ProgressBar from '../components/ProgressBar';
import Selection from '../components/Selection';
import Models from '../data';

const {CategoryModel, QuestionModel} = Models();

const questions = QuestionModel.map((question) => {
  return {
    ...question,
    category: CategoryModel.find(
      (category) => category.id === question.categoryId,
    ),
  };
});

export default function Question() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [question, setQuestion] = useState(questions[currentIndex]);
  const navigate = useNavigate();
  console.log(questions, 'q');

  const handleClick = () => {
    setCurrentIndex(currentIndex + 1);
    if (currentIndex === questions.length - 1) {
      navigate('/result');
    }
  };

  useEffect(() => {
    setQuestion(questions[currentIndex]);
  }, [currentIndex]);

  return (
    <div>
      <div className="inline-block py-2 px-4 rounded-full border-2 border-[#17d1ff] text-[#17d1ff] mb-10 text-xs">
        <span>{question.category.title}</span>
      </div>
      <ProgressBar
        currentPage={currentIndex + 1}
        totalPage={questions.length}
      />
      <div>
        <h2 className="text-center my-20 text-lg sm:text-xl">
          {question.title}
        </h2>
        <Selection onClick={handleClick} title="전혀 모른다." />
        <Selection onClick={handleClick} title="들어본 적은 있다." />
        <Selection
          onClick={handleClick}
          title="개념은 아는데 자세한 설명은 생략한다.."
        />
        <Selection onClick={handleClick} title="설명까지 SSAP! 가능!" />
      </div>
    </div>
  );
}
