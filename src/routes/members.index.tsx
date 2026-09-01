import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal, CountUp } from "@/components/Reveal";
import { BallotBadge } from "@/components/BallotBadge";

const TITLE = "สมาชิกพรรค | พรรคก้าวหน้า KAONA PARTY";
const DESC = "ร่วมเป็นส่วนหนึ่งของพรรคก้าวหน้า ทุกเสียงของนักเรียนคือพลังของพรรค";

export const Route = createFileRoute("/members/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/members" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/members" }],
  }),
  component: Page,
});

const steps = [
  { n: "01", t: "ติดตามข่าวสาร", d: "ติดตามนโยบายและความคืบหน้าของพรรคผ่านเว็บไซต์และช่องทางของพรรค" },
  { n: "02", t: "ส่งเสียงถึงเรา", d: "แจ้งปัญหาหรือไอเดียผ่านกระดานรับฟังเสียง ทุกข้อความจะถูกนำไปพูดคุยจริง" },
  { n: "03", t: "ร่วมกิจกรรม", d: "มาร่วมกิจกรรมของพรรคและโรงเรียน สร้างการเปลี่ยนแปลงไปด้วยกัน" },
  { n: "04", t: "ออกเสียงเลือกตั้ง", d: "วันเลือกตั้ง กากบาทที่เบอร์ 1 พรรคก้าวหน้า" },
];

function Page() {
  return (
    <main className="bg-ink text-white">
      <section className="relative overflow-hidden px-5 pb-20 pt-32 sm:px-8 sm:pt-40">
        <div className="relative mx-auto max-w-[1400px]">
          <Reveal>
            <p className="eyebrow text-primary">Members</p>
            <h1 className="display mt-4 text-[12vw] leading-[0.9] sm:text-[7vw]">
              สมาชิกพรรคคือ
              <br />
              <span className="text-primary">นักเรียนทุกคน</span>
            </h1>
            <p className="mt-8 max-w-md text-white/60">
              พรรคก้าวหน้าไม่ได้เป็นของใครคนใดคนหนึ่ง แต่เป็นพื้นที่ของนักเรียนทุกคนที่อยากเห็นโรงเรียนดีกว่าเดิม
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-10 flex flex-wrap items-center gap-10">
              <BallotBadge number="1" />
              <div>
                <p className="display text-7xl text-primary sm:text-8xl">
                  <CountUp to={2569} />
                </p>
                <p className="eyebrow mt-2 text-white/40">ปีการศึกษาแห่งการเปลี่ยนแปลง</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-28">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="eyebrow text-primary">Join the movement</p>
            <h2 className="display mt-3 text-4xl sm:text-5xl">ร่วมเป็นส่วนหนึ่งได้ง่าย ๆ</h2>
          </Reveal>
          <div className="mt-12 grid gap-px bg-foreground/10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 100} className="bg-background p-8">
                <p className="display text-4xl text-primary">{s.n}</p>
                <h3 className="mt-4 text-xl font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/65">{s.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary px-5 py-24 text-primary-foreground sm:px-8 sm:py-32">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <h2 className="display text-[11vw] leading-[0.9] sm:text-[5vw]">
              พร้อมแล้วหรือยัง?
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <Link
              to="/policies"
              className="arrow-move mt-10 inline-flex items-center gap-2 bg-ink px-7 py-4 text-base font-semibold text-white"
            >
              ดูนโยบายของเรา <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
