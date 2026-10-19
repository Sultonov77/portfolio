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
            <span className="inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.2em] text-brand-300">
              <span className="h-px w-6 bg-gradient-to-r from-brand-400 to-pink" />
              {tag}
            </span>
            <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">{title}</h2>
            {sub && <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">{sub}</p>}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
