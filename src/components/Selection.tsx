type TProps = {
  title: string;
  onClick: () => void;
};

export default function Selection({title, onClick}: TProps) {
  return (
    <button
      onClick={onClick}
      className="bg-[#2e3074] active:bg-[#6979bb] rounded-md w-full p-4 my-2"
    >
      {title}
    </button>
  );
}
