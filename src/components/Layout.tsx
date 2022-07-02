type TProps = {
  children: React.ReactNode;
};

export default function Layout({children}: TProps) {
  return (
    <div className="flex justify-center text-center my-10">
      <div className="w-[500px] lg:w-[800px]">{children}</div>
    </div>
  );
}
