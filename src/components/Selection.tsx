type TProps = {
  title: string;
};

export default function Selection(props: TProps) {
  return (
    <button className="bg-sky-100 rounded-md w-full p-4 my-2">
      {props.title}
    </button>
  );
}
