import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { BallotBadge } from "@/components/BallotBadge";
import logo from "@/assets/kaona-logo.png.asset.json";

const TITLE = "รู้จักพรรคก้าวหน้า | KAONA PARTY";
const DESC =
  "ความหมายของชื่อพรรค วิสัยทัศน์ ปณิธาน พันธกิจ อุดมการณ์ ค่านิยม และความหมายของโลโก้พรรคก้าวหน้า โรงเรียนเมืองนครศรีธรรมราช";

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

const MISSIONS = [
  "ผลักดันนโยบายที่สามารถดำเนินการได้จริง และตอบโจทย์ความต้องการของนักเรียน",
  "ส่งเสริมการมีส่วนร่วมของนักเรียนในการเสนอความคิดเห็นและร่วมพัฒนาโรงเรียน",
  "พัฒนาคุณภาพชีวิต สวัสดิการ และสภาพแวดล้อมภายในโรงเรียนให้เอื้อต่อการเรียนรู้",
  "สนับสนุนกิจกรรมที่ส่งเสริมศักยภาพ ความคิดสร้างสรรค์ และความสามารถของนักเรียนในทุกด้าน",
  "บริหารงานด้วยความโปร่งใส รับผิดชอบ และเปิดเผยข้อมูลที่เกี่ยวข้อง เพื่อสร้างความเชื่อมั่นให้กับนักเรียน",
];

const CORE_VALUES = [
  { t: "ซื่อสัตย์และโปร่งใส", d: "บริหารงานด้วยความรับผิดชอบ ตรวจสอบได้" },
  { t: "รับฟังทุกเสียง", d: "เปิดโอกาสให้นักเรียนทุกคนมีส่วนร่วมในการพัฒนาโรงเรียน" },
  { t: "ลงมือทำจริง", d: "ผลักดันนโยบายให้เกิดผลอย่างเป็นรูปธรรม" },
  { t: "พัฒนาอย่างต่อเนื่อง", d: "ไม่หยุดนิ่งในการสร้างสิ่งใหม่และแก้ไขปัญหา" },
  { t: "ทำงานเพื่อส่วนรวม", d: "ยึดประโยชน์ของนักเรียนและโรงเรียนเป็นสำคัญ" },
];

function Page() {
  return (
    <main className="bg-ink text-white">
      {/* HERO + ความหมายของชื่อพรรค */}
      <section className="relative overflow-hidden px-5 pb-20 pt-32 sm:px-8 sm:pt-40">
        <div
          aria-hidden
          className="absolute -left-32 -top-32 h-[480px] w-[480px] rounded-full blur-[140px]"
          style={{ background: "color-mix(in oklab, var(--primary) 35%, transparent)" }}
        />
        <div className="relative mx-auto max-w-[1400px]">
          <Reveal>
            <img
              src={logo.url}
              alt="โลโก้พรรคก้าวหน้า"
              width={80}
              height={80}
              className="h-16 w-16 object-contain sm:h-20 sm:w-20"
            />
            <p className="eyebrow mt-8 text-primary">About Kaona</p>
            <h1 className="display mt-4 text-[12vw] leading-[0.9] sm:text-[7vw]">
              เกี่ยวกับ
              <br />
              <span className="text-primary">พรรคก้าวหน้า</span>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-10 max-w-3xl">
              <p className="eyebrow text-white/40">ความหมายของชื่อพรรค</p>
              <p className="mt-5 text-lg leading-relaxed text-white/70">
                <span className="font-semibold text-white">“พรรคก้าวหน้า”</span> หมายถึง
                การมุ่งพัฒนาและขับเคลื่อนโรงเรียนไปข้างหน้าอย่างไม่หยุดนิ่ง ด้วยแนวคิดที่ทันสมัย
                โปร่งใส และยึดประโยชน์ของนักเรียนเป็นศูนย์กลาง พร้อมผลักดันนโยบายที่ทำได้จริง
                เพื่อยกระดับคุณภาพการศึกษา สิ่งแวดล้อม และคุณภาพชีวิตของนักเรียนในทุกด้าน
              </p>
              <p className="mt-5 text-lg leading-relaxed text-white/70">
                ชื่อ “ก้าวหน้า” ยังสะท้อนถึงความมุ่งมั่นในการสร้างการเปลี่ยนแปลงเชิงบวก
                เปิดรับความคิดเห็นของทุกคน กล้าคิด กล้าทำ
                และร่วมกันพัฒนาโรงเรียนให้เป็นสถานที่ที่ดีกว่าสำหรับนักเรียนทุกคน
                ทั้งในปัจจุบันและอนาคต
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

      {/* วิสัยทัศน์ / ปณิธาน / สโลแกน */}
      <section className="bg-background px-5 py-24 text-foreground sm:px-8 sm:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-px bg-foreground/10 md:grid-cols-3">
          {[
            {
              n: "01",
              t: "วิสัยทัศน์",
              d: "สร้างโรงเรียนที่ก้าวหน้า โปร่งใส ทันสมัย และเปิดโอกาสให้นักเรียนทุกคนมีส่วนร่วม เพื่อยกระดับคุณภาพชีวิตและการเรียนรู้อย่างเท่าเทียม",
            },
            {
              n: "02",
              t: "ปณิธาน",
              d: "“พูดจริง ทำจริง รับฟังทุกเสียง เพื่อสร้างการเปลี่ยนแปลงที่นักเรียนสัมผัสได้”",
            },
            {
              n: "03",
              t: "สโลแกน",
              d: "“พูดจริง ทำจริง เปลี่ยนแปลงได้”",
            },
          ].map((v, i) => (
            <Reveal key={v.n} delay={i * 120} className="bg-background p-8 sm:p-10">
              <p className="display text-5xl text-primary">{v.n}</p>
              <h2 className="mt-4 text-2xl font-semibold">{v.t}</h2>
              <p className="mt-3 leading-relaxed text-foreground/65">{v.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* พันธกิจ */}
      <section className="bg-ink-soft px-5 py-24 text-white sm:px-8 sm:py-32">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="eyebrow text-primary">Our mission</p>
            <h2 className="display mt-4 text-4xl sm:text-6xl">พันธกิจของเรา</h2>
          </Reveal>
          <ol className="mt-14 grid gap-px bg-white/10 sm:grid-cols-2">
            {MISSIONS.map((m, i) => (
              <Reveal as="li" key={m} delay={i * 90} className="bg-ink-soft p-8 sm:p-10">
                <p className="display text-4xl text-primary">{String(i + 1).padStart(2, "0")}</p>
                <p className="mt-4 text-lg leading-relaxed text-white/80">{m}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* อุดมการณ์และค่านิยม */}
      <section className="bg-background px-5 py-24 text-foreground sm:px-8 sm:py-32">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="eyebrow text-primary">Ideology & values</p>
            <h2 className="display mt-4 text-4xl sm:text-6xl">อุดมการณ์และค่านิยม</h2>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-foreground/70">
              พรรคก้าวหน้ายึดมั่นในการพัฒนาอย่างต่อเนื่อง
              โดยเชื่อว่าการเปลี่ยนแปลงที่ดีเกิดขึ้นได้จากความร่วมมือของทุกคน
              เราพร้อมรับฟังทุกความคิดเห็น เคารพความแตกต่าง
              และมุ่งสร้างสังคมในโรงเรียนที่เปิดกว้าง เป็นธรรม และเท่าเทียม
            </p>
          </Reveal>
          <div className="mt-14">
            <p className="eyebrow text-muted-foreground">ค่านิยมหลักของพรรค</p>
            <ul className="mt-6 grid gap-px bg-foreground/10 sm:grid-cols-2 lg:grid-cols-3">
              {CORE_VALUES.map((v, i) => (
                <Reveal as="li" key={v.t} delay={i * 90} className="bg-background p-8">
                  <h3 className="text-xl font-semibold text-primary">{v.t}</h3>
                  <p className="mt-3 leading-relaxed text-foreground/65">{v.d}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ความหมายของโลโก้ */}
      <section className="bg-ink px-5 py-24 text-white sm:px-8 sm:py-32">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="eyebrow text-primary">Logo meaning</p>
            <h2 className="display mt-4 text-4xl sm:text-6xl">ความหมายของโลโก้พรรค</h2>
          </Reveal>
          <div className="mt-12 grid gap-12 md:grid-cols-[minmax(0,340px)_1fr] md:gap-16">
            <Reveal>
              <div className="flex items-center justify-center bg-white p-12">
                <img
                  src={logo.url}
                  alt="โลโก้พรรคก้าวหน้า ลูกศรคู่พุ่งไปข้างหน้า"
                  width={220}
                  height={220}
                  className="h-40 w-40 object-contain sm:h-52 sm:w-52"
                />
              </div>
            </Reveal>
            <div>
              <Reveal delay={100}>
                <p className="text-lg leading-relaxed text-white/70">
                  โลโก้พรรคก้าวหน้าได้รับการออกแบบจาก
                  <span className="font-semibold text-white"> เส้นลูกศรคู่ที่พุ่งไปข้างหน้า </span>
                  สื่อถึงการเดินหน้าอย่างมั่นคง การพัฒนาอย่างต่อเนื่อง
                  และความมุ่งมั่นในการสร้างการเปลี่ยนแปลงที่เป็นรูปธรรม
                  เพื่อยกระดับโรงเรียนและคุณภาพชีวิตของนักเรียน
                </p>
              </Reveal>
              <div className="mt-10 grid gap-px bg-white/10 sm:grid-cols-2">
                <Reveal delay={160} className="bg-ink p-8">
                  <p className="eyebrow text-primary">แถบด้านขวา · ลูกศรหลัก</p>
                  <h3 className="mt-3 text-2xl font-semibold">การก้าวไปข้างหน้าอย่างมั่นคง</h3>
                  <ul className="mt-4 space-y-3 text-white/70">
                    <li>เป็นองค์ประกอบหลักของโลโก้ เปรียบเสมือนทิศทางและเป้าหมายของพรรค</li>
                    <li>สื่อถึงการพัฒนาอย่างต่อเนื่อง ไม่หยุดนิ่ง และการขับเคลื่อนโรงเรียนสู่อนาคต</li>
                  </ul>
                </Reveal>
                <Reveal delay={240} className="bg-ink p-8">
                  <p className="eyebrow text-primary">แถบด้านซ้าย · ลูกศรรอง</p>
                  <h3 className="mt-3 text-2xl font-semibold">พลังของนักเรียนและการมีส่วนร่วม</h3>
                  <ul className="mt-4 space-y-3 text-white/70">
                    <li>เปรียบเสมือนเสียงของนักเรียนที่ร่วมกันผลักดันการเปลี่ยนแปลง</li>
                    <li>สื่อถึงการทำงานร่วมกันระหว่างนักเรียน ครู และโรงเรียน เพื่อให้ทุกฝ่ายก้าวไปในทิศทางเดียวกัน</li>
                  </ul>
                </Reveal>
              </div>
            </div>
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
              ดูนโยบายทั้งหมด <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
