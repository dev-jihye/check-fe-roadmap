import ProgressBar from '../components/ProgressBar';
import Selection from '../components/Selection';

export default function Question() {
  return (
    <div className="border">
      <div className="inline-block py-2 px-4 rounded-full bg-violet-300 mb-10 text-xs">
        <span>HTML</span>
        <span className="pl-2">1 / 5</span>
      </div>
      <ProgressBar />
      <div>
        <h2 className="text-center my-20 text-lg sm:text-xl">
          시맨틱 태그가 무엇인지 알고 설명할 수 있다
        </h2>
        <Selection title="전혀 모른다." />
        <Selection title="들어본 적은 있다." />
        <Selection title="개념은 아는데 자세한 설명은 생략한다.." />
        <Selection title="설명까지 SSAP! 가능!" />
      </div>
    </div>
  );
}
