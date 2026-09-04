import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal, CountUp } from "@/components/Reveal";
import { BallotBadge } from "@/components/BallotBadge";
import { MemberPhoto } from "@/components/MemberPhoto";
import { members } from "@/data/members";
import { leaders } from "@/data/leaders";

const TITLE = "สมาชิกพรรค | พรรคก้าวหน้า KAONA PARTY";
const DESC =
  "รายชื่อสมาชิกพรรคก้าวหน้า ผู้สมัครคณะกรรมการสภานักเรียนโรงเรียนเมืองนครศรีธรรมราช ปีการศึกษา 2569";

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

function Page() {
  return (
    <main className="bg-ink text-white">
      <section className="relative overflow-hidden px-5 pb-16 pt-32 sm:px-8 sm:pt-40">
        <div className="relative mx-auto max-w-[1400px]">
          <Reveal>
            <p className="eyebrow text-primary">Members</p>
            <h1 className="display mt-4 text-[12vw] leading-[0.9] sm:text-[7vw]">
              สมาชิก
              <span className="text-primary">พรรคก้าวหน้า</span>
            </h1>
            <p className="mt-8 max-w-lg text-white/60">
              คณะทำงานที่ลงสมัครร่วมกันในนามพรรคก้าวหน้า แต่ละคนรับผิดชอบงานคนละด้าน
              กดที่ชื่อเพื่อดูประวัติและหน้าที่ของแต่ละคน
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-10 flex flex-wrap items-center gap-10">
              <BallotBadge number="1" />
              <div>
                <p className="display text-6xl text-primary sm:text-7xl">
                  <CountUp to={leaders.length + members.length} /> คน
                </p>
                <p className="eyebrow mt-2 text-white/40">สมาชิกพรรคชุดปัจจุบัน</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Leadership */}
      <section className="px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="eyebrow text-primary">Leadership</p>
            <h2 className="display mt-3 text-3xl sm:text-4xl">ทีมนำพรรค</h2>
          </Reveal>
          <div className="mt-8 grid gap-px bg-white/10 sm:grid-cols-3">
            {leaders.map((l, i) => (
              <Reveal key={l.slug} delay={i * 90} className="bg-ink">
                <Link to="/" hash={l.slug} className="group block">
                  <MemberPhoto
                    name={l.name}
                    photo={l.photo}
                    number={l.order}
                    className="aspect-[3/4]"
                  />
                  <div className="bg-primary px-5 py-4 text-primary-foreground">
                    <p className="eyebrow opacity-80">{l.role}</p>
                    <p className="display mt-1.5 text-xl">{l.name}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Members */}
      <section className="px-5 py-14 pb-24 sm:px-8">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="eyebrow text-primary">Party members</p>
            <h2 className="display mt-3 text-3xl sm:text-4xl">สมาชิกพรรค 15 คน</h2>

          </Reveal>
          <div className="mt-8 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {members.map((m, i) => (
              <Reveal key={m.slug} delay={Math.min(i, 8) * 60} className="bg-ink">
                <Link
                  to="/members/$slug"
                  params={{ slug: m.slug }}
                  className="group flex h-full flex-col"
                >
                  <MemberPhoto
                    name={m.name}
                    photo={m.photo}
                    number={m.no}
                    className="aspect-[4/3]"
                  />
                  <div className="flex flex-1 flex-col p-6">
                    <p className="eyebrow text-primary">{m.position}</p>
                    <p
                      className={`display mt-2 text-2xl ${m.placeholder ? "text-white/35" : ""}`}
                    >
                      {m.name}
                    </p>
                    {(m.classroom || m.program) && (
                      <p className="mt-1 text-sm text-white/50">
                        {[m.classroom, m.program].filter(Boolean).join(" · ")}
                      </p>
                    )}
                    <span className="arrow-move mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      ดูประวัติ <ArrowRight size={15} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary px-5 py-20 text-primary-foreground sm:px-8 sm:py-28">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <h2 className="display text-[11vw] leading-[0.9] sm:text-[5vw]">พร้อมแล้วหรือยัง?</h2>
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
