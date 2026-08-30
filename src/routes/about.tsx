import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { BallotBadge } from "@/components/BallotBadge";
import logo from "@/assets/kaona-logo.png.asset.json";

const TITLE = "รู้จักพรรคก้าวหน้า | KAONA PARTY";
const DESC =
  "พรรคก้าวหน้า เกิดจากเสียงจริงของนักเรียน โรงเรียนเมืองนครศรีธรรมราช พูดจริง ทำจริง เปลี่ยนแปลงได้";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: Page,
});

function Page() {
  const values = [
    { n: "01", t: "พูดจริง", d: "ไม่ให้คำมั่นลอย ๆ ทุกนโยบายมีแผนและระยะเวลาชัดเจน" },
    { n: "02", t: "ทำจริง", d: "ลงมือทำทันที รายงานความคืบหน้าให้นักเรียนตรวจสอบได้ทุกเดือน" },
    { n: "03", t: "เปลี่ยนแปลงได้", d: "เชื่อว่าเสียงนักเรียนเปลี่ยนโรงเรียนได้จริง ถ้ามีคนรับฟังและลงมือทำ" },
  ];

  return (
    <main className="bg-ink text-white">
      <section className="relative overflow-hidden px-5 pb-20 pt-32 sm:px-8 sm:pt-40">
        <div
          aria-hidden
          className="absolute -left-32 -top-32 h-[480px] w-[480px] rounded-full blur-[140px]"
          style={{ background: "color-mix(in oklab, var(--primary) 35%, transparent)" }}
        />
        <div className="relative mx-auto max-w-[1400px]">
          <Reveal>
            <img src={logo.url} alt="โลโก้พรรคก้าวหน้า" width={80} height={80} className="h-16 w-16 object-contain sm:h-20 sm:w-20" />
            <p className="eyebrow mt-8 text-primary">About Kaona</p>
            <h1 className="display mt-4 text-[12vw] leading-[0.9] sm:text-[7vw]">
              พรรคก้าวหน้า
              <br />
              <span className="text-primary">คือเสียงของพวกเรา</span>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-10 max-w-2xl space-y-5 text-lg leading-relaxed text-white/70">
              <p>
                พรรคก้าวหน้าเกิดขึ้นจากนักเรียนกลุ่มหนึ่งของโรงเรียนเมืองนครศรีธรรมราช
                ที่เชื่อว่าปัญหาเล็ก ๆ รอบตัว — น้ำดื่ม ห้องน้ำ ที่นั่งพักเที่ยง
                หรือช่องทางพูดคุยกับโรงเรียน — ไม่ควรถูกมองข้าม
              </p>
              <p>
                เราไม่ได้มาเพื่อสัญญา แต่มาเพื่อ <span className="font-semibold text-white">ลงมือทำ</span>
                ทุกนโยบายของเราผ่านการรับฟังเสียงจริงจากนักเรียน และออกแบบมาให้เริ่มได้ทันทีในปีการศึกษา 2569
              </p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-12">
              <BallotBadge number="1" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-background px-5 py-24 text-foreground sm:px-8 sm:py-32">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="eyebrow text-primary">Our values</p>
            <h2 className="display mt-4 text-4xl sm:text-6xl">สามสิ่งที่เรายึดมั่น</h2>
          </Reveal>
          <div className="mt-14 grid gap-px bg-foreground/10 sm:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.n} delay={i * 120} className="bg-background p-8 sm:p-10">
                <p className="display text-5xl text-primary">{v.n}</p>
                <h3 className="mt-4 text-2xl font-semibold">{v.t}</h3>
                <p className="mt-3 leading-relaxed text-foreground/65">{v.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary px-5 py-24 text-primary-foreground sm:px-8 sm:py-32">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start gap-10">
          <Reveal>
            <p className="display max-w-4xl text-[10vw] leading-[0.95] sm:text-[4.5vw]">
              “พูดจริง ทำจริง เปลี่ยนแปลงได้”
            </p>
          </Reveal>
          <Reveal delay={120}>
            <Link
              to="/policies"
              className="arrow-move inline-flex items-center gap-2 bg-ink px-7 py-4 text-base font-semibold text-white"
            >
              ดูนโยบายทั้ง 57 ข้อ <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
