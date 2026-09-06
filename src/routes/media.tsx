import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { BallotBadge } from "@/components/BallotBadge";


const TITLE = "สื่อและภาพกิจกรรม | พรรคก้าวหน้า KAONA PARTY";
const DESC = "รวมสื่อหาเสียง โปสเตอร์ และภาพกิจกรรมของพรรคก้าวหน้า ปีการศึกษา 2569";

export const Route = createFileRoute("/media")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/media" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/media" }],
  }),
  component: Page,
});

function Page() {
  return (
    <main className="bg-ink text-white">
      <section className="px-5 pb-16 pt-32 sm:px-8 sm:pt-40">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="eyebrow text-primary">Media</p>
            <h1 className="display mt-4 text-[12vw] leading-[0.9] sm:text-[7vw]">
              สื่อหาเสียง
              <br />
              <span className="text-primary">ของพรรค</span>
            </h1>
            <p className="mt-8 max-w-md text-white/60">
              โปสเตอร์ ภาพกิจกรรม และสื่อทุกชิ้นของพรรคก้าวหน้า แชร์ต่อได้เพื่อชวนเพื่อนมาเปลี่ยนโรงเรียนไปด้วยกัน
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 sm:pb-32">
        <div className="mx-auto grid max-w-[1400px] gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Reveal>
            <figure className="flex aspect-square flex-col items-center justify-center border border-white/12 bg-ink-soft p-8">
              <img src="/kaona-logo.PNG" alt="โลโก้พรรคก้าวหน้า" className="h-32 w-32 object-contain" loading="lazy" />
              <figcaption className="eyebrow mt-6 text-white/40">Official logo</figcaption>
            </figure>
          </Reveal>
          <Reveal delay={100}>
            <figure className="flex aspect-square flex-col items-center justify-center border border-white/12 bg-ink-soft p-8">
              <BallotBadge number="1" />
              <figcaption className="eyebrow mt-6 text-white/40">Ballot number 1</figcaption>
            </figure>
          </Reveal>
          <Reveal delay={200}>
            <figure className="flex aspect-square flex-col items-center justify-center border border-white/12 bg-primary p-8 text-center">
              <p className="display text-3xl leading-snug text-primary-foreground sm:text-4xl">
                พูดจริง ทำจริง
                <br />
                เปลี่ยนแปลงได้
              </p>
              <figcaption className="eyebrow mt-6 text-primary-foreground/70">Campaign slogan</figcaption>
            </figure>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="mt-16 border border-dashed border-white/20 p-10 text-center sm:p-16">
            <p className="display text-2xl text-white/70 sm:text-3xl">ภาพกิจกรรมหาเสียงกำลังตามมาเร็ว ๆ นี้</p>
            <p className="mt-3 text-sm text-white/40">
              ติดตามภาพบรรยากาศการเปิดตัวพรรค เวทีปราศรัย และกิจกรรมต่าง ๆ ได้ที่นี่
            </p>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
