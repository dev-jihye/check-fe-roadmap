type TProps = {
  totalPage: number;
  currentPage: number;
};

export default function ProgressBar({totalPage, currentPage}: TProps) {
  return (
    <div>
      <div className="w-full h-4 border-2 border-[#e9e069] rounded-md overflow-hidden">
        <div
          className="w-full h-full bg-[#e9e069]"
          style={{
            transform: `translateX(${
              (100 - (currentPage / totalPage) * 100) * -1
            }%)`,
          }}
        ></div>
      </div>
      <span className="block w-full mt-2 text-center text-sm">
        {currentPage} / {totalPage}
      </span>
    </div>
  );
}
