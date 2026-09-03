import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { BallotBadge } from "@/components/BallotBadge";

const TITLE = "กิจกรรมหาเสียง | พรรคก้าวหน้า KAONA PARTY";
const DESC = "ติดตามกิจกรรมหาเสียงและแผนงานของพรรคก้าวหน้าตลอดช่วงเลือกตั้งสภานักเรียน 2569";

export const Route = createFileRoute("/activities")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/activities" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/activities" }],
  }),
  component: Page,
});

const timeline = [
  { phase: "01", t: "เปิดตัวพรรค", d: "แนะนำพรรคก้าวหน้า ทีมผู้สมัคร และวิสัยทัศน์ต่อนักเรียนทั้งโรงเรียน" },
  { phase: "02", t: "รับฟังเสียงจริง", d: "ลงพื้นที่พูดคุยกับนักเรียนทุกชั้นปี เก็บปัญหาและไอเดียมาพัฒนานโยบาย" },
  { phase: "03", t: "เปิดตัว นโยบายทุกข้อ", d: "เผยแพร่นโยบายทั้งหมดอย่างโปร่งใส ตอบคำถามทุกข้อสงสัย" },
  { phase: "04", t: "เวทีปราศรัย", d: "นำเสนอแผนงานต่อหน้านักเรียน ครู และผู้เกี่ยวข้อง พร้อมตอบคำถามสด" },
  { phase: "05", t: "วันเลือกตั้ง", d: "ออกไปใช้สิทธิ์ กากบาทที่เบอร์ 1 พรรคก้าวหน้า" },
  { phase: "06", t: "เริ่มลงมือทำ", d: "หลังเลือกตั้ง เริ่มทำนโยบายทันที พร้อมรายงานความคืบหน้าทุกเดือน" },
];

function Page() {
  return (
    <main className="bg-ink text-white">
      <section className="px-5 pb-16 pt-32 sm:px-8 sm:pt-40">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="eyebrow text-primary">Campaign activities</p>
            <h1 className="display mt-4 text-[12vw] leading-[0.9] sm:text-[7vw]">
              เส้นทางสู่
              <br />
              <span className="text-primary">การเปลี่ยนแปลง</span>
            </h1>
            <p className="mt-8 max-w-md text-white/60">
              ทุกกิจกรรมของเราเปิดให้นักเรียนร่วมได้ ติดตามและมาร่วมสร้างการเปลี่ยนแปลงไปด้วยกัน
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-10">
              <BallotBadge number="1" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 sm:pb-32">
        <div className="mx-auto max-w-[1400px]">
          <ol className="relative border-l border-white/15 pl-8 sm:pl-12">
            {timeline.map((t, i) => (
              <Reveal as="li" key={t.phase} delay={i * 80} className="relative pb-14 last:pb-0">
                <span
                  aria-hidden
                  className={`absolute -left-[37px] top-1 h-3 w-3 rounded-full sm:-left-[53px] ${
                    i === 4 ? "bg-primary" : "bg-white/30"
                  }`}
                />
                <p className="eyebrow text-primary">Phase {t.phase}</p>
                <h2 className="display mt-2 text-3xl sm:text-4xl">{t.t}</h2>
                <p className="mt-3 max-w-lg leading-relaxed text-white/55">{t.d}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
