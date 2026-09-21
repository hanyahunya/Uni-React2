const weeks = [
  {
    date: "2026.09.09",
    title: "Next.js 프로젝트 시작하기",
    description: "프로젝트 생성 방법과 App Router의 기본 구조를 정리했습니다.",
  },
  {
    date: "2026.09.16",
    title: "라우팅과 프로젝트 구성",
    description: "동적 세그먼트와 라우트 그룹, 특수 파일의 역할을 학습했습니다.",
  },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col px-6 py-20 sm:px-10">
      <header className="border-b border-zinc-200 pb-10">
        <p className="mb-3 text-sm font-semibold tracking-[0.18em] text-blue-600">
          REACT2 · NEXT.JS
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl">
          202430231 정하민
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
          React2 수업에서 배운 내용을 주차별로 기록하는 Next.js 실습 프로젝트입니다.
        </p>
      </header>

      <section className="py-12" aria-labelledby="weekly-notes">
        <h2 id="weekly-notes" className="text-2xl font-bold text-zinc-950">
          주차별 학습 기록
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {weeks.map((week) => (
            <article
              key={week.date}
              className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <time className="text-sm font-medium text-blue-600">{week.date}</time>
              <h3 className="mt-2 text-xl font-semibold text-zinc-900">{week.title}</h3>
              <p className="mt-3 leading-7 text-zinc-600">{week.description}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="mt-auto border-t border-zinc-200 pt-6 text-sm text-zinc-500">
        자세한 학습 내용은 README.md에서 확인할 수 있습니다.
      </footer>
    </main>
  );
}
