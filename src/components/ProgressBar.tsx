type TProps = {
  totalPage: number;
  currentPage: number;
};

export default function ProgressBar({totalPage, currentPage}: TProps) {
  return (
    <div>
      <div className="w-full h-4 bg-[#e9e069] rounded-md"></div>
      <span className="block w-full mt-2 text-center text-sm">
        {currentPage} / {totalPage}
      </span>
    </div>
  );
}
