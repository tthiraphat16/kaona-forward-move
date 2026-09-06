import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Reveal, CountUp } from "@/components/Reveal";
import { featuredPolicies, POLICY_COUNT } from "@/data/policies";
import { BallotBadge } from "@/components/BallotBadge";
import { LeadersOverview, LeaderProfiles } from "@/components/Leaders";



const TITLE = "พรรคก้าวหน้า | KAONA PARTY";
const DESC =
  "พรรคก้าวหน้า ผู้สมัครรับเลือกตั้งคณะกรรมการสภานักเรียน โรงเรียนเมืองนครศรีธรรมราช ปีการศึกษา 2569";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <main>
      <Hero />
      <Believe />
      <LeadersOverview />
      <LeaderProfiles />
      <About />
      <Vision />
      <PolicyHero />
      <Featured />
      <WhyKaona />
      <CTA />
    </main>
  );
}


function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink text-white">
      <div
        aria-hidden
        className="absolute -right-32 -top-32 h-[520px] w-[520px] rounded-full blur-[140px]"
        style={{ background: "color-mix(in oklab, var(--primary) 45%, transparent)" }}
      />
      <div
        aria-hidden
        className="ghost-number absolute -bottom-10 right-2 text-[34vw] leading-none text-white sm:text-[26vw]"
      >
        69
      </div>

      <div className="relative mx-auto w-full max-w-[1400px] px-5 pb-16 pt-32 sm:px-8 sm:pb-24">
        <Reveal>
          <img
src="/kaona-logo.PNG"
            alt="โลโก้พรรคก้าวหน้า"
            width={72}
            height={72}
            className="h-16 w-16 object-contain sm:h-20 sm:w-20"
          />
        </Reveal>
        <Reveal delay={80}>
          <p className="eyebrow mt-8 text-primary">พรรคก้าวหน้า · KAONA PARTY</p>
        </Reveal>
        <Reveal delay={160}>
          <h1 className="display mt-5 text-[13vw] sm:text-[8vw] lg:text-[6.5vw]">
            ก้าวสู่การเปลี่ยนแปลง
            <br />
            <span className="text-primary">เพื่อโรงเรียนที่ดีกว่า</span>
          </h1>
        </Reveal>
        <Reveal delay={240}>
          <p className="mt-8 max-w-md text-sm leading-relaxed text-white/60">
            ผู้สมัครรับเลือกตั้งคณะกรรมการสภานักเรียน
            <br />
            โรงเรียนเมืองนครศรีธรรมราช
            <br />
            ปีการศึกษา 2569
          </p>
        </Reveal>
        <Reveal delay={280}>
          <div className="mt-10">
            <p className="eyebrow mb-4 text-white/40">เลือกพรรคก้าวหน้า กากบาทที่เบอร์</p>
            <BallotBadge number="1" />
          </div>
        </Reveal>
        <Reveal delay={320}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/policies"
              className="arrow-move inline-flex items-center justify-center gap-2 bg-primary px-7 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary-deep"
            >
              สำรวจนโยบาย <ArrowRight size={18} />
            </Link>
            <Link
              to="/team"
              className="arrow-move inline-flex items-center justify-center gap-2 border border-white/25 px-7 py-4 text-base font-semibold text-white transition-colors hover:border-primary hover:text-primary"
            >
              รู้จักทีมของเรา <ArrowRight size={18} />
            </Link>
          </div>
        </Reveal>
        <div className="mt-14 flex items-center gap-3 text-white/35">
          <ArrowDown size={16} className="animate-bounce" />
          <span className="eyebrow text-[10px]">SCROLL</span>
        </div>
      </div>
    </section>
  );
}

function Believe() {
  return (
    <section className="bg-ink px-5 py-28 text-white sm:px-8 sm:py-40">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="display text-[11vw] leading-[0.95] sm:text-[6vw]">
            WE BELIEVE
            <br />
            IN <span className="text-primary">CHANGE.</span>
          </p>
        </Reveal>
        <div className="mt-12 space-y-2 text-2xl font-medium leading-snug sm:text-4xl">
          {["เราเชื่อว่า", "โรงเรียนที่ดีกว่า", "เริ่มต้นจากเสียงของนักเรียน"].map((line, i) => (
            <Reveal key={line} delay={i * 120}>
              <p className={i === 2 ? "text-primary" : "text-white/85"}>{line}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="bg-background px-5 py-24 sm:px-8 sm:py-36">
      <div className="mx-auto grid max-w-[1400px] gap-12 md:grid-cols-[auto_1fr] md:gap-24">
        <Reveal>
          <div>
            <p className="display text-7xl text-primary sm:text-8xl">01</p>
            <p className="eyebrow mt-4 text-muted-foreground">
              ABOUT
              <br />
              KAONA
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="max-w-2xl">
            <h2 className="display text-4xl sm:text-6xl">พรรคก้าวหน้าคืออะไร?</h2>
            <p className="mt-8 text-lg leading-relaxed text-foreground/75 sm:text-xl">
              พรรคก้าวหน้าเกิดขึ้นจากความตั้งใจที่จะทำให้เสียงของนักเรียนมีความหมาย
              และเปลี่ยนแนวคิดที่เราอยากเห็นให้กลายเป็นสิ่งที่สามารถลงมือทำได้จริง
            </p>
            <Link
              to="/about"
              className="arrow-move mt-10 inline-flex items-center gap-2 border-b-2 border-primary pb-1 text-base font-semibold"
            >
              อ่านเพิ่มเติม <ArrowRight size={18} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Vision() {
  const principles = [
    { n: "01", t: "รับฟัง" },
    { n: "02", t: "ลงมือทำ" },
    { n: "03", t: "เปลี่ยนแปลง" },
  ];
  return (
    <section className="bg-primary px-5 py-28 text-primary-foreground sm:px-8 sm:py-40">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <blockquote className="display max-w-5xl text-[9vw] leading-[1.02] sm:text-[5vw]">
            “ก้าวสู่การเปลี่ยนแปลง เพื่อโรงเรียนที่ดีกว่า”
          </blockquote>
        </Reveal>
        <div className="mt-20 grid gap-10 sm:grid-cols-3">
          {principles.map((p, i) => (
            <Reveal key={p.n} delay={i * 120}>
              <div className="border-t border-white/35 pt-6">
                <p className="display text-5xl">{p.n}</p>
                <p className="mt-3 text-2xl font-semibold">{p.t}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PolicyHero() {
  return (
    <section className="relative overflow-hidden bg-background px-5 py-28 sm:px-8 sm:py-40">
      <div className="mx-auto grid max-w-[1400px] items-end gap-10 md:grid-cols-2">
        <Reveal>
          <div>
            <p className="display text-[13vw] leading-[0.85] sm:text-[7vw]">
              OUR
              <br />
              POLICIES
            </p>
            <p className="mt-8 max-w-sm text-lg text-foreground/70">
              {POLICY_COUNT} แนวคิด เพื่อสร้างโรงเรียนที่เราอยากเห็น
            </p>
            <Link
              to="/policies"
              className="arrow-move mt-8 inline-flex items-center gap-2 bg-ink px-7 py-4 text-base font-semibold text-white transition-colors hover:bg-primary"
            >
              สำรวจนโยบายทั้งหมด <ArrowRight size={18} />
            </Link>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="text-right">
            <p className="display text-[42vw] leading-[0.75] text-primary sm:text-[20vw]">
              <CountUp to={POLICY_COUNT} />
            </p>
            <p className="eyebrow mt-2 text-muted-foreground">นโยบาย</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Featured() {
  return (
    <section className="bg-ink py-24 text-white sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow text-primary">Featured policies</p>
          <h2 className="display mt-4 text-4xl sm:text-6xl">นโยบายไฮไลต์</h2>
        </Reveal>
      </div>
      <div className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 sm:px-8">
        {featuredPolicies.map((p) => (
          <Link
            key={p.id}
            to="/policies"
            className="group relative flex w-[78vw] shrink-0 snap-start flex-col justify-between overflow-hidden border border-white/12 p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/60 hover:bg-white/[0.04] sm:w-[360px] sm:p-8"
          >
            <span
              aria-hidden
              className="ghost-number absolute -bottom-6 right-1 text-[9rem] text-white transition-transform duration-500 group-hover:scale-110"
            >
              {p.id}
            </span>
            <div className="relative">
              <span className="eyebrow text-primary">{p.id}</span>
              <h3 className="display mt-5 text-3xl">{p.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/55">{p.summary}</p>
            </div>
            <div className="relative mt-12">
              <span className="eyebrow block text-white/40">{p.categoryEn}</span>
              <span className="mt-4 flex items-center gap-2 text-sm font-semibold text-white">
                ดูรายละเอียด <ArrowRight size={16} className="arrow" />
              </span>
              <span className="mt-4 block h-px w-full bg-white/15">
                <span className="block h-px w-0 bg-primary transition-all duration-500 group-hover:w-full" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function WhyKaona() {
  const points = [
    { n: "01", t: "ฟังเสียงนักเรียน" },
    { n: "02", t: "คิดจากปัญหาจริง" },
    { n: "03", t: "ออกแบบให้ทำได้จริง" },
    { n: "04", t: "กล้าสร้างการเปลี่ยนแปลง" },
  ];
  return (
    <section className="bg-ink-soft px-5 py-28 text-white sm:px-8 sm:py-36">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <h2 className="display text-[14vw] leading-[0.85] sm:text-[7vw]">
            WHY
            <br />
            <span className="text-primary">KAONA?</span>
          </h2>
        </Reveal>
        <ul className="mt-16 grid gap-px bg-white/10 sm:grid-cols-2">
          {points.map((p, i) => (
            <Reveal as="li" key={p.n} delay={i * 100} className="bg-ink-soft p-8 sm:p-12">
              <p className="display text-4xl text-primary">{p.n}</p>
              <p className="mt-4 text-xl font-semibold sm:text-2xl">{p.t}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="bg-primary px-5 py-28 text-primary-foreground sm:px-8 sm:py-40">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="display text-[16vw] leading-[0.85] sm:text-[8vw]">
            READY
            <br />
            TO MOVE
            <br />
            FORWARD?
          </p>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-10 text-xl font-medium sm:text-2xl">
            ก้าวสู่การเปลี่ยนแปลง เพื่อโรงเรียนที่ดีกว่า
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/policies"
              className="arrow-move inline-flex items-center justify-center gap-2 bg-ink px-7 py-4 text-base font-semibold text-white"
            >
              ดูนโยบาย <ArrowRight size={18} />
            </Link>
            <Link
              to="/team"
              className="arrow-move inline-flex items-center justify-center gap-2 border border-white/60 px-7 py-4 text-base font-semibold"
            >
              รู้จักทีมของเรา <ArrowRight size={18} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
