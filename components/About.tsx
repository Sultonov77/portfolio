"use client";

import ProblemSolvers from "./ProblemSolvers";
import type { Lang } from "@/lib/content";

export default function About({ lang }: { lang: Lang }) {
  return <ProblemSolvers lang={lang} />;
}
