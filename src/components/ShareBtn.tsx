import {ShareIcon} from '@heroicons/react/outline';

export default function ShareBtn() {
  return (
    <div className="flex flex-col justify-center items-center">
      <button className="mb-2 text-sm">공유하기</button>
      <div className="bg-[#3178b8] p-2 rounded-full cursor-pointer">
        <ShareIcon className="w-6 h-6" />
      </div>
    </div>
  );
}
