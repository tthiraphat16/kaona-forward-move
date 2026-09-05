import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { MemberPhoto } from "@/components/MemberPhoto";
import { getMember, members } from "@/data/members";

export const Route = createFileRoute("/members/$slug")({
  loader: ({ params }) => {
    const member = getMember(params.slug);
    if (!member) throw notFound();
    return { member };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "ไม่พบสมาชิก | พรรคก้าวหน้า" }, { name: "robots", content: "noindex" }],
      };
    }
    const m = loaderData.member;
    const title = `${m.name} | สมาชิกพรรคก้าวหน้า KAONA PARTY`;
    const desc = `ประวัติและหน้าที่ของ ${m.name} ${m.position ?? "สมาชิกพรรค"} พรรคก้าวหน้า สภานักเรียนโรงเรียนเมืองนครศรีธรรมราช 2569`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "profile" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: NotFoundMember,
  component: Page,
});

function NotFoundMember() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-ink px-6 text-center text-white">
      <h1 className="display text-4xl">ไม่พบสมาชิกที่ค้นหา</h1>
      <Link to="/members" className="arrow-move inline-flex items-center gap-2 text-primary">
        กลับไปหน้าสมาชิก <ArrowRight size={16} />
      </Link>
    </main>
  );
}

function Page() {
  const { member: m } = Route.useLoaderData();
  const idx = members.findIndex((x) => x.slug === m.slug);
  const next = members[(idx + 1) % members.length];

  return (
    <main className="min-h-screen bg-ink text-white">
      <div className="bg-primary px-5 py-7 text-primary-foreground sm:px-8 sm:py-9">
        <Reveal>
          <p className="eyebrow opacity-80">{m.position ?? "สมาชิกพรรค"}</p>
          <h1 className="display mt-2 text-[9vw] leading-[1.05] sm:text-5xl">{m.name}</h1>
        </Reveal>
      </div>

      <div className="mx-auto grid max-w-[1100px] gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[380px_1fr]">
        <Reveal>
          <MemberPhoto
            name={m.name}
            photo={m.photo}
            number={m.no}
            className="aspect-[3/4] rounded-2xl"
          />
        </Reveal>

        <div>
          {m.placeholder && (
            <Reveal>
              <p className="rounded-xl border border-white/15 bg-white/[0.04] p-5 text-white/60">
                ตำแหน่งนี้ยังรอประกาศรายชื่อและข้อมูลประวัติอย่างเป็นทางการ
              </p>
            </Reveal>
          )}

          {m.quote && (
            <Reveal>
              <p className="text-xl font-semibold leading-relaxed text-primary sm:text-2xl">
                “ {m.quote} ”
              </p>
            </Reveal>
          )}

          <Reveal>
            <dl className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ["ลำดับสมาชิก", m.no],
                ["ชื่อเล่น", m.nickname],
                ["ระดับชั้น", m.classroom],
                ["แผนการเรียน", m.program],
              ]
                .filter(([, v]) => Boolean(v))
                .map(([k, v]) => (
                  <div key={k} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                    <dt className="eyebrow text-white/40">{k}</dt>
                    <dd className="mt-1.5 text-lg">{v}</dd>
                  </div>
                ))}
            </dl>
          </Reveal>

          {m.education && m.education.length > 0 && (
            <Section title="การศึกษา" items={m.education} />
          )}
          {m.awards && m.awards.length > 0 && (
            <Section title="ผลงานและรางวัลที่ภาคภูมิใจ" items={m.awards} />
          )}
          {m.skills && m.skills.length > 0 && (
            <Section title="ความสามารถพิเศษ" items={m.skills} />
          )}
          {m.expectation && m.expectation.length > 0 && (
            <Reveal>
              <h2 className="mt-10 text-xl font-bold text-primary sm:text-2xl">
                ความคาดหวังต่อพรรคและการเลือกตั้ง
              </h2>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-white/80">
                {m.expectation.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Reveal>
          )}
          {m.duties && m.duties.length > 0 && (
            <Section title="หน้าที่ในพรรค" items={m.duties} />
          )}
          {m.works && m.works.length > 0 && <Section title="ผลงานที่ผ่านมา" items={m.works} />}

          <Reveal>
            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                to="/members"
                className="inline-flex items-center gap-2 border border-white/25 px-6 py-3 text-sm font-semibold hover:border-primary hover:text-primary"
              >
                <ArrowLeft size={16} /> สมาชิกทั้งหมด
              </Link>
              {next && (
                <Link
                  to="/members/$slug"
                  params={{ slug: next.slug }}
                  className="arrow-move inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
                >
                  คนถัดไป: {next.name} <ArrowRight size={16} />
                </Link>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </main>
  );
}

function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <Reveal>
      <h2 className="mt-10 text-xl font-bold text-primary sm:text-2xl">{title}</h2>
      <ul className="mt-4 space-y-3">
        {items.map((t) => (
          <li key={t} className="flex gap-3 text-lg leading-relaxed text-white/80">
            <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
