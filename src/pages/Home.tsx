import img from '../assets/developer.jpeg'
import gitLogo from '../assets/github.svg'

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col border px-4">
      <h1 className="text-2xl mb-10">
        프론트 개발자가 되기까지 얼마나 남았을까?
      </h1>
      <img className="w-96" src={img} alt="work" />
      {/* 테스트 시작하기 누르면 다음 페이지로 이동 */}
      <a href="#" className="my-10 p-4 bg-slate-200 rounded-md">
        테스트 시작하기
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/dev-jihye/check-fe-roadmap"
        className="flex flex-col justify-center items-center"
      >
        <img src={gitLogo} alt="github" className="w-8 h-8" />
        <span className="mt-2 text-sm">2022 dev-jihye</span>
      </a>
    </div>
  )
}
