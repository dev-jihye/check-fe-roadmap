type TProps = {
  children: React.ReactNode;
};

export default function Layout({children}: TProps) {
  return (
    <div className="flex justify-center items-center w-full h-full px-4 py-10">
      <div className="w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl">
        {children}
      </div>
    </div>
  );
}
