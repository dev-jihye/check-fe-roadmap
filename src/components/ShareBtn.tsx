import {ShareIcon} from '@heroicons/react/outline';

export default function ShareBtn() {
  return (
    <div className="flex flex-col justify-center items-center">
      <button className="mb-2 text-sm">공유하기</button>
      <ShareIcon className="w-6 h-6" />
    </div>
  );
}
