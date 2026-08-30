import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { BallotBadge } from "@/components/BallotBadge";

const TITLE = "ทีมผู้สมัคร | พรรคก้าวหน้า KAONA PARTY";
const DESC = "รู้จักทีมผู้สมัครคณะกรรมการสภานักเรียนจากพรรคก้าวหน้า ปีการศึกษา 2569";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/team" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/team" }],
  }),
  component: Page,
});

const executive = [
  { role: "หัวหน้าพรรค", duty: "วางทิศทางนโยบายและประสานงานกับโรงเรียน" },
  { role: "รองหัวหน้าพรรค", duty: "ติดตามความคืบหน้าทุกโครงการให้เกิดจริง" },
  { role: "เลขาธิการพรรค", duty: "ดูแลการสื่อสาร รับฟังเสียงนักเรียนทุกชั้นปี" },
];

const units = [
  { name: "ฝ่ายนโยบาย", d: "ออกแบบและพัฒนา 57 นโยบายจากปัญหาจริง" },
  { name: "ฝ่ายสื่อสาร", d: "ถ่ายทอดข่าวสารและความคืบหน้าอย่างโปร่งใส" },
  { name: "ฝ่ายกิจกรรม", d: "จัดกิจกรรมที่ทุกคนมีส่วนร่วมได้" },
  { name: "ฝ่ายสวัสดิการ", d: "ดูแลคุณภาพชีวิตในโรงเรียนทุกด้าน" },
  { name: "ฝ่ายเทคโนโลยี", d: "พัฒนาระบบดิจิทัลให้โรงเรียนทันสมัย" },
  { name: "ฝ่ายศิลป์และกีฬา", d: "สร้างสีสันและสุขภาพที่ดีให้นักเรียน" },
];

function Page() {
  return (
    <main className="bg-ink text-white">
      <section className="relative overflow-hidden px-5 pb-20 pt-32 sm:px-8 sm:pt-40">
        <div
          aria-hidden
          className="ghost-number absolute -right-8 top-10 text-[30vw] leading-none text-white sm:text-[18vw]"
        >
          01
        </div>
        <div className="relative mx-auto max-w-[1400px]">
          <Reveal>
            <p className="eyebrow text-primary">Our team</p>
            <h1 className="display mt-4 text-[12vw] leading-[0.9] sm:text-[7vw]">
              ทีมที่พร้อม
              <br />
              <span className="text-primary">ลงมือทำจริง</span>
            </h1>
            <p className="mt-8 max-w-md text-white/60">
              ทีมผู้สมัครคณะกรรมการสภานักเรียนจากพรรคก้าวหน้า ทำงานเป็นระบบ แบ่งหน้าที่ชัดเจน
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-10">
              <BallotBadge number="1" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="eyebrow text-primary">Executive</p>
            <h2 className="display mt-3 text-4xl sm:text-5xl">คณะบริหารพรรค</h2>
          </Reveal>
          <div className="mt-12 grid gap-px bg-white/10 sm:grid-cols-3">
            {executive.map((m, i) => (
              <Reveal key={m.role} delay={i * 120} className="bg-ink p-8 sm:p-10">
                <p className="display text-4xl text-primary">0{i + 1}</p>
                <h3 className="mt-4 text-2xl font-semibold">{m.role}</h3>
                <p className="mt-3 leading-relaxed text-white/55">{m.duty}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-28">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="eyebrow text-primary">Working units</p>
            <h2 className="display mt-3 text-4xl sm:text-5xl">ฝ่ายงานทั้ง 6</h2>
          </Reveal>
          <ul className="mt-12 grid gap-px bg-foreground/10 sm:grid-cols-2 lg:grid-cols-3">
            {units.map((u, i) => (
              <Reveal as="li" key={u.name} delay={i * 80} className="bg-background p-8">
                <p className="display text-3xl text-primary">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 text-xl font-semibold">{u.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/65">{u.d}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
