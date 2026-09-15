import Reveal from "./Reveal";

type Props = {
  id: string;
  title: string;
  sub?: string;
  children: React.ReactNode;
};

export default function Section({ id, title, sub, children }: Props) {
  return (
    <section id={id} className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-12 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gradient-to-r from-accent to-transparent" />
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
            </div>
            {sub && <p className="max-w-xl text-sm text-muted sm:text-base">{sub}</p>}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
