import Reveal from "./Reveal";

type Props = {
  id: string;
  tag: string;
  title: string;
  sub?: string;
  className?: string;
  children: React.ReactNode;
};

export default function Section({ id, tag, title, sub, className = "", children }: Props) {
  return (
    <section id={id} className={`relative scroll-mt-20 px-4 py-20 sm:px-6 sm:py-24 lg:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-10 max-w-2xl sm:mb-14">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">{tag}</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
            {sub && <p className="mt-3 text-base leading-relaxed text-slate-400">{sub}</p>}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
