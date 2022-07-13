type TProps = {
  title: string;
  onClick: () => void;
};

export default function Selection({title, onClick}: TProps) {
  return (
    <button
      onClick={onClick}
      className="bg-[#5d4893] active:bg-[#3f2d7a] rounded-md w-full p-4 my-2"
    >
      {title}
    </button>
  );
}
