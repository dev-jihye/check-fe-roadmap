import {SpeakerphoneIcon} from '@heroicons/react/outline';
import {Link} from 'react-router-dom';
import StartBtn from '../components/StartBtn';
import Models from '../data';

export default function Notice() {
  const {CategoryModel, QuestionModel} = Models();
  const categories = CategoryModel.map((category) => {
    return {
      ...category,
      questions: QuestionModel.filter(
        (question) => question.categoryId === category.id,
      ),
    };
  });
  return (
    <div className="px-4 sm:px-20">
      <SpeakerphoneIcon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto my-4" />
      <p className="text-sm sm:text-base mb-6">
        현재 본인의 위치를 알기 위한 자가진단 테스트로 결과에 성실하게
        답변해주세요. 결과에 이어지는 로드맵은 권장사항입니다.
      </p>
      <p className="text-sm sm:text-base">
        총 문항은 {QuestionModel.length}개로 구성되어 있습니다.
      </p>
      <ul className="my-6 text-sm sm:text-base">
        {categories.map((category) => (
          <li key={category.id}>
            {category.title} {category.questions.length}문항
          </li>
        ))}
      </ul>
      <div className="flex justify-center items-center">
        <Link to="/question">
          <StartBtn />
        </Link>
      </div>
    </div>
  );
}
