type TProps = {
  children: React.ReactNode;
};

export default function Layout({children}: TProps) {
  return (
    <div className="flex justify-center items-center w-full min-h-screen px-4 py-10 bg-gradient-to-b from-[#020024] to-[#48138b]">
      <div className="w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl text-[#f9f7e3]">
        {children}
      </div>
    </div>
  );
}
