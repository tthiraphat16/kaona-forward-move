import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { policies, policyCategories, POLICY_COUNT, type PolicyCategory } from "@/data/policies";
import { Reveal } from "@/components/Reveal";
import { BallotBadge } from "@/components/BallotBadge";

const TITLE = "นโยบายทั้ง 57 ข้อ | พรรคก้าวหน้า KAONA PARTY";
const DESC =
  "สำรวจ 57 นโยบายของพรรคก้าวหน้า ผู้สมัครสภานักเรียน โรงเรียนเมืองนครศรีธรรมราช ปีการศึกษา 2569";

export const Route = createFileRoute("/policies")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/policies" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/policies" }],
  }),
  component: Page,
});

function Page() {
  const [active, setActive] = useState<PolicyCategory | "ทั้งหมด">("ทั้งหมด");

  const list = useMemo(
    () => (active === "ทั้งหมด" ? policies : policies.filter((p) => p.categoryTh === active)),
    [active]
  );

  return (
    <main className="bg-ink text-white">
      {/* Hero */}
      <section className="relative overflow-hidden px-5 pb-16 pt-32 sm:px-8 sm:pt-40">
        <div
          aria-hidden
          className="ghost-number absolute -right-8 top-10 text-[30vw] leading-none text-white sm:text-[20vw]"
        >
          {POLICY_COUNT}
        </div>
        <div className="relative mx-auto max-w-[1400px]">
          <Reveal>
            <p className="eyebrow text-primary">Our policies</p>
            <h1 className="display mt-4 text-[13vw] leading-[0.9] sm:text-[7vw]">
              {POLICY_COUNT} นโยบาย
              <br />
              <span className="text-primary">เพื่อโรงเรียนที่ดีกว่า</span>
            </h1>
            <p className="mt-8 max-w-md text-white/60">
              ทุกนโยบายคิดจากปัญหาจริงของนักเรียน และออกแบบมาให้ลงมือทำได้จริงภายในปีการศึกษา 2569
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-10">
              <BallotBadge number="1" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Filter */}
      <section className="sticky top-0 z-20 border-y border-white/10 bg-ink/90 px-5 py-4 backdrop-blur sm:px-8">
        <div className="no-scrollbar mx-auto flex max-w-[1400px] gap-2 overflow-x-auto">
          {(["ทั้งหมด", ...policyCategories] as const).map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`shrink-0 rounded-full border px-5 py-2 text-sm font-medium transition-colors ${
                active === c
                  ? "border-primary bg-primary text-white"
                  : "border-white/20 text-white/60 hover:border-white/50 hover:text-white"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* List */}
      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => (
            <Reveal key={p.id} delay={Math.min(i, 8) * 60} className="bg-ink">
              <article className="group flex h-full flex-col justify-between p-7 transition-colors duration-300 hover:bg-white/[0.04] sm:p-8">
                <div>
                  <div className="flex items-baseline justify-between">
                    <span className="display text-4xl text-primary">{p.id}</span>
                    <span className="eyebrow text-[10px] text-white/35">{p.categoryEn}</span>
                  </div>
                  <h2 className="display mt-5 text-2xl leading-tight">{p.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">{p.summary}</p>
                  {p.detail && (
                    <p className="mt-3 border-l-2 border-primary/50 pl-3 text-sm leading-relaxed text-white/40">
                      {p.detail}
                    </p>
                  )}
                </div>
                <p className="mt-6 text-xs font-medium text-white/30">{p.categoryTh}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary px-5 py-24 text-primary-foreground sm:px-8 sm:py-32">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <h2 className="display text-[11vw] leading-[0.9] sm:text-[5vw]">
              เห็นด้วยกับนโยบายเรา?
              <br />
              กากบาท <span className="text-ink">เบอร์ 1</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <a
              href="/team"
              className="arrow-move mt-10 inline-flex items-center gap-2 bg-ink px-7 py-4 text-base font-semibold text-white"
            >
              รู้จักทีมผู้สมัคร <ArrowRight size={18} />
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
