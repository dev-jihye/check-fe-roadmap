import {SpeakerphoneIcon} from '@heroicons/react/outline';
import StartBtn from '../components/StartBtn';

export default function Notice() {
  return (
    <div className="border px-4 sm:px-20">
      <SpeakerphoneIcon className="w-6 h-6 mx-auto mb-4" />
      <p className="text-sm sm:text-base mb-6">
        현재의 본인의 위치를 알기 위한 자가진단 테스트로 결과에 성실하게
        답변해주시고 결과에 이어지는 로드맵은 권장사항입니다.
      </p>
      <p className="text-sm sm:text-base">
        총 문항은 30개로 구성되어 있습니다.
      </p>
      <ul className="my-6 text-sm sm:text-base">
        <li>HTML & CSS 5문항</li>
        <li>Javascript 5문항</li>
        <li>Framework 5문항</li>
        <li>CS 5문항</li>
        <li>Tools 5문항</li>
      </ul>
      <div className="flex justify-center items-center">
        <StartBtn />
      </div>
    </div>
  );
}
