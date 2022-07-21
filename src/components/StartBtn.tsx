type TProps = {
  text?: string;
};

export default function StartBtn({text = '테스트 시작하기'}: TProps) {
  return (
    <button className="text-sm sm:text-base px-5 py-4 rounded-md bg-[#e9e069] text-gray-900">
      {text}
    </button>
  );
}
