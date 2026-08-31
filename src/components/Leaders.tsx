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
                    style={{ mixBlendMode: "multiply" }}
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
      {leaders.map((l, i) => (
        <LeaderProfile key={l.slug} leader={l} dark={i % 2 === 0} />
      ))}
    </>
  );
}

function LeaderProfile({ leader: l, dark }: { leader: Leader; dark: boolean }) {
  return (
    <section
      id={l.slug}
      className={`relative overflow-hidden scroll-mt-20 px-5 py-24 sm:px-8 sm:py-32 ${
        dark ? "bg-ink text-white" : "bg-background text-foreground"
      }`}
    >
      <div
        aria-hidden
        className={`ghost-number absolute -right-6 top-8 text-[34vw] leading-none sm:text-[18vw] ${
          dark ? "text-white" : "text-foreground"
        }`}
      >
        {l.order}
      </div>

      <div className="relative mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[minmax(0,420px)_1fr] lg:gap-20">
        <Reveal>
          <div className="lg:sticky lg:top-24">
            <div className="relative aspect-[3/4] overflow-hidden bg-muted">
              <span
                aria-hidden
                className="display absolute bottom-0 left-1 z-0 text-[16rem] leading-[0.7] text-primary"
              >
                {l.order.replace(/^0/, "")}
              </span>
              <img
                src={l.photo}
                alt={`${l.role} ${l.name}`}
                loading="lazy"
                className="relative z-10 h-full w-full object-cover object-top"
                style={{ mixBlendMode: "multiply" }}
              />
            </div>
            <div className="bg-primary px-6 py-5 text-primary-foreground">
              <p className="eyebrow opacity-80">{l.roleEn}</p>
              <p className="display mt-2 text-3xl">{l.name}</p>
              {l.nickname && <p className="mt-2 text-sm opacity-90">ชื่อเล่น {l.nickname}</p>}
            </div>
          </div>
        </Reveal>

        <div className={`space-y-10 ${dark ? "text-white/75" : "text-foreground/75"}`}>
          <Reveal>
            <p className="eyebrow text-primary">{l.role}</p>
            <h2 className={`display mt-3 text-4xl sm:text-5xl ${dark ? "text-white" : ""}`}>
              ประวัติ
            </h2>
          </Reveal>

          <Block dark={dark} title="การศึกษา">
            <ul className="space-y-3">
              {l.education.map((e) => (
                <Li key={e} dark={dark}>
                  {e}
                </Li>
              ))}
            </ul>
          </Block>

          {l.awards.length > 0 && (
            <Block dark={dark} title="ผลงานและรางวัลที่ภาคภูมิใจ">
              <ul className="space-y-3">
                {l.awards.map((a) => (
                  <Li key={a} dark={dark}>
                    {a}
                  </Li>
                ))}
              </ul>
            </Block>
          )}

          {l.motto && (
            <Block dark={dark} title="คติประจำใจ">
              <p className="border-l-2 border-primary pl-4 text-lg italic leading-relaxed">
                {l.motto}
              </p>
            </Block>
          )}

          {l.skills.length > 0 && (
            <Block dark={dark} title="ความสามารถพิเศษ">
              <ul className="space-y-3">
                {l.skills.map((s) => (
                  <Li key={s} dark={dark}>
                    {s}
                  </Li>
                ))}
              </ul>
            </Block>
          )}

          <Block dark={dark} title="ความคาดหวังต่อพรรคและการเลือกตั้ง">
            <div className="space-y-4 leading-relaxed">
              {l.expectation.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <p className="mt-6 text-sm font-semibold text-primary">{l.sign}</p>
          </Block>
        </div>
      </div>
    </section>
  );
}

function Block({
  title,
  children,
  dark,
}: {
  title: string;
  children: React.ReactNode;
  dark: boolean;
}) {
  return (
    <Reveal>
      <div className={`border-t pt-6 ${dark ? "border-white/15" : "border-foreground/15"}`}>
        <h3 className={`eyebrow mb-5 ${dark ? "text-white/50" : "text-foreground/50"}`}>{title}</h3>
        {children}
      </div>
    </Reveal>
  );
}

function Li({ children, dark }: { children: React.ReactNode; dark: boolean }) {
  return (
    <li className="flex gap-3 leading-relaxed">
      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
      <span className={dark ? "text-white/75" : "text-foreground/75"}>{children}</span>
    </li>
  );
}
