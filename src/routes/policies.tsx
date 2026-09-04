import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  Clock,
  LayoutGrid,
  ListChecks,
  Search,
  Star,
  Target,
  TriangleAlert,
  Users,
  X,
} from "lucide-react";
import {
  policies,
  policyCategories,
  POLICY_COUNT,
  type Policy,
  type PolicyCategory,
} from "@/data/policies";
import { Reveal } from "@/components/Reveal";
import { BallotBadge } from "@/components/BallotBadge";

const TITLE = `นโยบายทั้ง ${POLICY_COUNT} ข้อ | พรรคก้าวหน้า KAONA PARTY`;
const DESC = `นโยบายพรรคก้าวหน้า ${POLICY_COUNT} ข้อ แยกตามหมวดหมู่ พร้อมปัญหาที่พบ วิธีทำ ผู้ได้ประโยชน์ ระยะเวลา และงบประมาณ สภานักเรียนโรงเรียนเมืองนครศรีธรรมราช 2569`;

export const Route = createFileRoute("/policies")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/policies" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/policies" }],
  }),
  component: Page,
});

type Filter = PolicyCategory | "ทั้งหมด" | "นโยบายหลัก";

function Page() {
  const [active, setActive] = useState<Filter>("ทั้งหมด");
  const [q, setQ] = useState("");
  const [open, setOpen] = useState<string | null>(null);

  const counts = useMemo(() => {
    const m = new Map<PolicyCategory, number>();
    policies.forEach((p) => m.set(p.categoryTh, (m.get(p.categoryTh) ?? 0) + 1));
    return m;
  }, []);

  const featuredCount = useMemo(() => policies.filter((p) => p.featured).length, []);

  const list = useMemo(() => {
    const term = q.trim().toLowerCase();
    return policies.filter((p) => {
      const inCat =
        active === "ทั้งหมด"
          ? true
          : active === "นโยบายหลัก"
            ? Boolean(p.featured)
            : p.categoryTh === active;
      const hay =
        `${p.id} ${p.title} ${p.summary} ${p.problem} ${p.how.join(" ")} ${p.categoryTh}`.toLowerCase();
      return inCat && (term === "" || hay.includes(term));
    });
  }, [active, q]);

  const chips: Filter[] = ["ทั้งหมด", "นโยบายหลัก", ...policyCategories];

  return (
    <main className="min-h-screen bg-ink text-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10 px-4 pb-12 pt-28 sm:px-6 sm:pb-16 sm:pt-36">
        <div
          aria-hidden
          className="ghost-number pointer-events-none absolute -right-6 top-16 text-[9rem] leading-none text-white sm:text-[18rem]"
        >
          {POLICY_COUNT}
        </div>
        <div className="relative mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <p className="eyebrow text-primary">Our policies</p>
            <h1 className="display mt-4 text-[13vw] leading-[0.9] sm:text-6xl lg:text-7xl">
              <span className="text-primary">{POLICY_COUNT}</span> นโยบาย
              <br />
              เพื่อโรงเรียนที่ก้าวหน้า
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
              ทุกข้อมาจากปัญหาจริงของนักเรียน และบอกชัดว่าจะทำอย่างไร ใครได้ประโยชน์
              ใช้เวลาเท่าไร และใช้งบเท่าไร
            </p>
          </Reveal>
          <Reveal delay={120} className="lg:justify-self-end">
            <BallotBadge number="1" />
          </Reveal>
        </div>

        {/* Stats */}
        <div className="relative mx-auto mt-12 grid max-w-[1400px] gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: ListChecks, k: `${POLICY_COUNT}`, l: "นโยบายทั้งหมด" },
            { icon: Star, k: `${featuredCount}`, l: "นโยบายหลัก" },
            { icon: LayoutGrid, k: `${policyCategories.length}`, l: "หมวดนโยบาย" },
            { icon: Users, k: "ทุกชั้นปี", l: "กลุ่มที่ได้ประโยชน์" },
          ].map((s, i) => (
            <Reveal key={s.l} delay={i * 80}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
                <s.icon size={18} className="text-primary" />
                <p className="display mt-4 text-3xl sm:text-4xl">{s.k}</p>
                <p className="mt-2 text-sm text-white/55">{s.l}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Sticky filter bar */}
      <div className="sticky top-14 z-30 border-b border-white/10 bg-ink/90 backdrop-blur supports-[backdrop-filter]:bg-ink/70">
        <div className="mx-auto max-w-[1400px] px-4 py-3 sm:px-6">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
            <div className="relative lg:w-80">
              <Search
                size={16}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
              />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="ค้นหานโยบาย เช่น น้ำดื่ม, ห้องน้ำ, Wi-Fi"
                aria-label="ค้นหานโยบาย"
                className="w-full rounded-full border border-white/15 bg-white/[0.04] py-3 pl-11 pr-4 text-base text-white outline-none placeholder:text-white/35 focus:border-primary"
              />
            </div>
            <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 lg:mx-0 lg:flex-1 lg:px-0">
              {chips.map((c) => {
                const n =
                  c === "ทั้งหมด"
                    ? POLICY_COUNT
                    : c === "นโยบายหลัก"
                      ? featuredCount
                      : (counts.get(c) ?? 0);
                return (
                  <button
                    key={c}
                    onClick={() => {
                      setActive(c);
                      setOpen(null);
                    }}
                    className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      active === c
                        ? "bg-primary text-primary-foreground"
                        : "bg-white/[0.07] text-white/65 hover:text-white"
                    }`}
                  >
                    {c}
                    <span className="ml-2 opacity-60">{n}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="px-4 py-10 pb-24 sm:px-6">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex items-baseline justify-between">
            <h2 className="display text-2xl sm:text-3xl">
              {active === "ทั้งหมด" ? "นโยบายทั้งหมด" : active}
            </h2>
            <p className="text-sm text-white/45">{list.length} ข้อ</p>
          </div>

          {list.length === 0 ? (
            <p className="mt-16 text-center text-white/50">ไม่พบนโยบายที่ค้นหา</p>
          ) : (
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {list.map((p, i) => (
                <Reveal key={p.id} delay={Math.min(i, 6) * 60} className="h-full">
                  <PolicyCard
                    policy={p}
                    open={open === p.id}
                    onToggle={() => setOpen(open === p.id ? null : p.id)}
                  />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

function PolicyCard({
  policy: p,
  open,
  onToggle,
}: {
  policy: Policy;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <article
      className={`flex h-full flex-col rounded-2xl border bg-white/[0.03] p-5 transition-colors sm:p-6 ${
        open ? "border-primary bg-primary/[0.08]" : "border-white/10 hover:border-white/25"
      }`}
    >
      <div className="flex items-start gap-4">
        <span className="display text-3xl leading-none text-primary sm:text-4xl">{p.id}</span>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] text-white/65">
              {p.categoryTh}
            </span>
            {p.featured && (
              <span className="rounded-full bg-primary px-3 py-1 text-[11px] font-semibold text-primary-foreground">
                นโยบายหลัก
              </span>
            )}
          </div>
          <h3 className="mt-3 text-lg font-bold leading-snug sm:text-xl">{p.title}</h3>
          <p className="mt-2 text-base leading-relaxed text-white/65">{p.summary}</p>
        </div>
      </div>

      {open && (
        <div className="mt-5 space-y-5 border-t border-white/10 pt-5 text-base leading-relaxed">
          <Block icon={TriangleAlert} title="ปัญหาที่พบ">
            <p className="text-white/70">{p.problem}</p>
          </Block>
          <Block icon={Target} title="ทำอย่างไร">
            <ul className="space-y-2">
              {p.how.map((h) => (
                <li key={h} className="flex gap-3 text-white/70">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </Block>
          <Block icon={Users} title="ใครได้ประโยชน์">
            <p className="text-white/70">{p.benefit}</p>
          </Block>
          <Small icon={Clock} label="ระยะเวลา" value={p.duration} />
        </div>
      )}

      <button
        onClick={onToggle}
        aria-expanded={open}
        className="arrow-move mt-5 inline-flex items-center gap-2 self-start text-sm font-semibold text-primary"
      >
        {open ? (
          <>
            ย่อรายละเอียด <X size={15} />
          </>
        ) : (
          <>
            ดูรายละเอียด <ArrowRight size={15} />
          </>
        )}
      </button>
    </article>
  );
}

function Block({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof Target;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="eyebrow mb-2 flex items-center gap-2 text-primary">
        <Icon size={13} /> {title}
      </p>
      {children}
    </div>
  );
}

function Small({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Clock;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-ink px-4 py-3">
      <p className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-white/40">
        <Icon size={12} /> {label}
      </p>
      <p className="mt-1.5 text-sm text-white/80">{value}</p>
    </div>
  );
}
