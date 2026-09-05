import { Reveal } from "@/components/Reveal";
import { leaders, type Leader } from "@/data/leaders";

export function LeadersOverview() {
  return (
    <section id="leaders" className="bg-background px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="eyebrow text-primary">Our candidates</p>
          <h2 className="display mt-4 text-[12vw] leading-[0.9] sm:text-[6vw]">
            ทีมนำ
            <span className="text-primary">พรรคก้าวหน้า</span>
          </h2>
          <p className="mt-6 max-w-lg text-foreground/70">
            หัวหน้าพรรค 1 คน และรองหัวหน้าพรรค 2 คน — เลื่อนลงเพื่ออ่านประวัติของแต่ละคน
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px bg-foreground/10 sm:grid-cols-3">
          {leaders.map((l, i) => (
            <Reveal key={l.slug} delay={i * 110} className="bg-background">
              <a href={`#${l.slug}`} className="group block">
                <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                  <span
                    aria-hidden
                    className="display absolute bottom-0 left-2 z-0 text-[14rem] leading-[0.7] text-primary/85"
                  >
                    {i + 1}
                  </span>
                  <img
                    src={l.photo}
                    alt={`${l.role} ${l.name}`}
                    loading="lazy"
                    className="relative z-10 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="bg-primary px-6 py-5 text-primary-foreground">
                  <p className="eyebrow opacity-80">{l.role}</p>
                  <p className="display mt-2 text-2xl">{l.name}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LeaderProfiles() {
  return (
    <>
      {leaders.map((l) => (
        <LeaderProfile key={l.slug} leader={l} />
      ))}
    </>
  );
}

function LeaderProfile({ leader: l }: { leader: Leader }) {
  const num = l.order.replace(/^0/, "");

  return (
    <section id={l.slug} className="relative scroll-mt-0 bg-ink text-white">
      {/* Sticky hero: name band + portrait stay pinned while the bio scrolls over */}
      <div className="sticky top-0 z-0 flex h-screen flex-col overflow-hidden">
        <div className="bg-primary px-5 py-5 text-center text-primary-foreground sm:px-8 sm:py-7">
          <p className="text-sm font-semibold sm:text-xl">{l.role}</p>
          <h2 className="display mt-1 text-[7vw] leading-[1.05] sm:text-5xl">{l.name}</h2>
        </div>
        <div className="relative flex flex-1 items-end justify-center overflow-hidden px-4">
          <span
            aria-hidden
            className="display pointer-events-none absolute bottom-0 left-1/2 z-0 -translate-x-[115%] text-[42vw] leading-[0.75] text-primary sm:text-[24rem]"
          >
            {num}
          </span>
          <img
            src={l.photo}
            alt={`${l.role} ${l.name}`}
            loading="lazy"
            className="relative z-10 h-full w-auto max-w-full object-contain object-bottom"
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[860px] bg-ink px-5 pb-24 pt-14 shadow-[0_-40px_60px_-20px_rgba(0,0,0,0.8)] sm:px-8 sm:pb-28">
        {l.motto && (
          <Reveal>
            <p className="text-center text-xl font-semibold leading-relaxed text-primary sm:text-2xl">
              “ {l.motto.replace(/^[“"]|[”"]$/g, "")} ”
            </p>
          </Reveal>
        )}

        {l.nickname && (
          <Reveal>
            <p className="mt-8 text-lg">
              <span className="font-semibold text-primary">ชื่อเล่น</span>{" "}
              <span className="text-white/90">{l.nickname}</span>
            </p>
          </Reveal>
        )}

        <Field title="การศึกษา" items={l.education} />
        {l.awards.length > 0 && <Timeline title="ผลงานและรางวัลที่ภาคภูมิใจ" items={l.awards} />}
        {l.skills.length > 0 && <Field title="ความสามารถพิเศษ" items={l.skills} />}

        <Reveal>
          <h3 className="mt-10 text-xl font-bold text-primary sm:text-2xl">
            ความคาดหวังต่อพรรคและการเลือกตั้ง
          </h3>
          <div className="mt-4 space-y-4 text-lg leading-relaxed text-white/80">
            {l.expectation.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <p className="mt-6 text-base font-semibold text-primary">{l.sign}</p>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ title, items }: { title: string; items: string[] }) {
  return (
    <Reveal>
      <h3 className="mt-10 text-xl font-bold text-primary sm:text-2xl">{title}</h3>
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

function Timeline({ title, items }: { title: string; items: string[] }) {
  return (
    <Reveal>
      <h3 className="mt-10 text-xl font-bold text-primary sm:text-2xl">{title}</h3>
      <ol className="relative mt-6 space-y-7 border-l-2 border-primary pl-7">
        {items.map((t) => (
          <li key={t} className="relative">
            <span className="absolute -left-[38px] top-1.5 h-4 w-4 rounded-full bg-primary ring-4 ring-primary/25" />
            <p className="text-lg leading-relaxed text-white/85">{t}</p>
          </li>
        ))}
      </ol>
    </Reveal>
  );
}
