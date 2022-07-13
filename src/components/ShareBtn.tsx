import {ShareIcon} from '@heroicons/react/outline';
import {useState} from 'react';
import useThrottle from '../hooks/useThrottle';

type TProps = {
  url?: string;
  text?: string;
};

export default function ShareBtn({url, text = '공유하기'}: TProps) {
  const [isCopied, setIsCopied] = useState(false);
  const closeTooltipAsync = useThrottle({
    handler: () => {
      setIsCopied(false);
    },
    delay: 700,
  });

  const copy = () => {
    navigator.clipboard.writeText(url || window.location.href);
    setIsCopied(true);
    closeTooltipAsync();
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <button className="mb-2 text-sm">{text}</button>
      <div
        onClick={copy}
        className="bg-[#30a1d7] p-3 rounded-full cursor-pointer relative"
      >
        <ShareIcon className="w-6 h-6" />
        {isCopied && (
          <div className="w-0 h-0 absolute top-1/2 translate-y-1/2">
            <span className="whitespace-nowrap top-1/2 -translate-y-1/2 left-14 absolute text-sm p-2 border rounded-md bg-white text-gray-900 after:absolute after:content-[''] after:border-t-[10px] after:border-r-[10px] after:border-b-[10px] after:top-[9px] after:left-[-10px] after:border-x-[#fff] after:border-y-[transparent]">
              복사 완료
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
