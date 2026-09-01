import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, LayoutGrid, ListChecks, Target, Users, X } from "lucide-react";
import {
  policies,
  policyCategories,
  POLICY_COUNT,
  type Policy,
  type PolicyCategory,
} from "@/data/policies";
import { Reveal } from "@/components/Reveal";
import { BallotBadge } from "@/components/BallotBadge";
import logo from "@/assets/kaona-logo.png.asset.json";

const TITLE = "นโยบายทั้ง 57 ข้อ | พรรคก้าวหน้า KAONA PARTY";
const DESC =
  "แดชบอร์ดนโยบายพรรคก้าวหน้า 57 ข้อ แยกตามหมวดหมู่ พร้อมรายละเอียดรายนโยบาย สภานักเรียนโรงเรียนเมืองนครศรีธรรมราช 2569";

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

function Page() {
  const [active, setActive] = useState<PolicyCategory | "ทั้งหมด">("ทั้งหมด");
  const [selected, setSelected] = useState<Policy | null>(null);
  const [q, setQ] = useState("");

  const counts = useMemo(() => {
    const m = new Map<PolicyCategory, number>();
    policies.forEach((p) => m.set(p.categoryTh, (m.get(p.categoryTh) ?? 0) + 1));
    return m;
  }, []);

  const list = useMemo(() => {
    const term = q.trim().toLowerCase();
    return policies.filter(
      (p) =>
        (active === "ทั้งหมด" || p.categoryTh === active) &&
        (term === "" ||
          `${p.id} ${p.title} ${p.summary} ${p.detail ?? ""} ${p.categoryTh}`
            .toLowerCase()
            .includes(term)),
    );
  }, [active, q]);

  const max = Math.max(...policyCategories.map((c) => counts.get(c) ?? 0), 1);


  return (
    <main className="min-h-screen bg-ink text-white">
      <div className="mx-auto grid max-w-[1500px] gap-6 px-4 pb-20 pt-24 sm:px-6 lg:grid-cols-[240px_1fr] lg:pt-28">
        {/* Sidebar */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <div className="flex items-center gap-3">
              <img src={logo.url} alt="โลโก้พรรคก้าวหน้า" className="h-9 w-9 object-contain" />
              <div>
                <p className="display text-lg leading-none">KAONA</p>
                <p className="eyebrow mt-1 text-[9px] text-white/45">พรรคก้าวหน้า</p>
              </div>
            </div>
            <nav className="mt-6 space-y-1">
              {(
                [
                  ["ภาพรวมนโยบาย", LayoutGrid, "ทั้งหมด"],
                  ["นโยบายทั้งหมด", ListChecks, "ทั้งหมด"],
                ] as const
              ).map(([label, Icon], i) => (
                <button
                  key={label}
                  onClick={() => {
                    setActive("ทั้งหมด");
                    setSelected(null);
                  }}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                    i === 0 ? "bg-primary text-primary-foreground" : "text-white/60 hover:bg-white/5"
                  }`}
                >
                  <Icon size={16} /> {label}
                </button>
              ))}
            </nav>
            <div className="mt-6 border-t border-white/10 pt-5">
              <p className="eyebrow text-white/40">หมวดหมู่</p>
              <div className="mt-3 space-y-1">
                {policyCategories.map((c) => (
                  <button
                    key={c}
                    onClick={() => {
                      setActive(c);
                      setSelected(null);
                    }}
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors ${
                      active === c ? "bg-white/10 text-white" : "text-white/55 hover:text-white"
                    }`}
                  >
                    <span>{c}</span>
                    <span className="text-xs text-primary">{counts.get(c) ?? 0}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-6 hidden lg:block">
              <p className="eyebrow text-white/40">ก้าวต่อไป</p>
              <p className="display mt-2 text-2xl text-primary">ไปด้วยกัน</p>
            </div>
          </div>
        </aside>

        {/* Content */}
        <div className="space-y-6">
          {/* Hero card */}
          <Reveal>
            <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 sm:p-10">
              <div
                aria-hidden
                className="ghost-number absolute -right-4 -top-6 text-[12rem] leading-none text-white"
              >
                {POLICY_COUNT}
              </div>
              <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="eyebrow text-primary">Our policies</p>
                  <h1 className="display mt-4 text-5xl leading-[0.95] sm:text-6xl">
                    <span className="text-primary">{POLICY_COUNT}</span> นโยบาย
                    <br />
                    เพื่อโรงเรียนที่ก้าวหน้า
                  </h1>
                  <p className="mt-6 max-w-md text-white/60">
                    เราไม่ได้แค่สัญญา แต่เราวางแผนว่าจะทำอะไร อย่างไร และเพื่อใคร
                    ทุกนโยบายมาจากปัญหาจริงของนักเรียน
                  </p>
                </div>
                <BallotBadge number="1" className="shrink-0" />
              </div>
            </section>
          </Reveal>

          {/* Stat row */}
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { icon: ListChecks, k: `${POLICY_COUNT}`, l: "นโยบายทั้งหมด" },
              { icon: LayoutGrid, k: `${policyCategories.length}`, l: "หมวดนโยบาย" },
              { icon: Users, k: "ทุกชั้นปี", l: "กลุ่มที่ได้ประโยชน์" },
            ].map((s, i) => (
              <Reveal key={s.l} delay={i * 90}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <s.icon size={18} className="text-primary" />
                  <p className="display mt-4 text-4xl">{s.k}</p>
                  <p className="mt-2 text-sm text-white/55">{s.l}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Category breakdown */}
          <Reveal>
            <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <div className="flex items-baseline justify-between">
                <h2 className="display text-2xl">
                  <span className="text-primary">{policyCategories.length}</span> หมวดนโยบายหลัก
                </h2>
                <button
                  onClick={() => setActive("ทั้งหมด")}
                  className="arrow-move flex items-center gap-2 text-sm text-white/55 hover:text-white"
                >
                  ดูทุกหมวด <ArrowRight size={15} />
                </button>
              </div>
              <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {policyCategories.map((c) => {
                  const n = counts.get(c) ?? 0;
                  return (
                    <button
                      key={c}
                      onClick={() => {
                        setActive(c);
                        setSelected(null);
                      }}
                      className={`rounded-xl border p-5 text-left transition-colors ${
                        active === c
                          ? "border-primary bg-primary/10"
                          : "border-white/10 bg-ink hover:border-white/25"
                      }`}
                    >
                      <p className="text-base font-semibold">{c}</p>
                      <p className="mt-2 text-sm text-primary">{n} นโยบาย</p>
                      <span className="mt-4 block h-1.5 w-full rounded-full bg-white/10">
                        <span
                          className="block h-1.5 rounded-full bg-primary"
                          style={{ width: `${Math.round((n / max) * 100)}%` }}
                        />
                      </span>
                    </button>
                  );
                })}
              </div>
            </section>
          </Reveal>

          {/* List + detail */}
          <div className="grid gap-6 xl:grid-cols-[1fr_380px]">
            <Reveal>
              <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-6">
                <div className="flex items-baseline justify-between px-2">
                  <h2 className="display text-2xl">
                    {active === "ทั้งหมด" ? "นโยบายทั้งหมด" : active}
                  </h2>
                  <p className="text-sm text-white/45">{list.length} ข้อ</p>
                </div>

                <div className="mt-4 px-2">
                  <input
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    placeholder="ค้นหานโยบาย เช่น น้ำดื่ม, ห้องน้ำ, Wi-Fi"
                    className="w-full rounded-xl border border-white/15 bg-ink px-4 py-3 text-base text-white outline-none placeholder:text-white/35 focus:border-primary"
                  />
                  <div className="no-scrollbar mt-3 flex gap-2 overflow-x-auto pb-1">
                    {(["ทั้งหมด", ...policyCategories] as const).map((c) => (
                      <button
                        key={c}
                        onClick={() => {
                          setActive(c);
                          setSelected(null);
                        }}
                        className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                          active === c
                            ? "bg-primary text-primary-foreground"
                            : "bg-white/8 text-white/65 hover:text-white"
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>

                <ul className="mt-5 space-y-2">
                  {list.map((p) => (
                    <li key={p.id}>
                      <button
                        onClick={() => setSelected(selected?.id === p.id ? null : p)}
                        className={`flex w-full items-start gap-4 rounded-xl border px-4 py-4 text-left transition-colors ${
                          selected?.id === p.id
                            ? "border-primary bg-primary/10"
                            : "border-white/10 bg-ink hover:border-white/25"
                        }`}
                      >
                        <span className="display w-10 shrink-0 text-2xl text-primary">{p.id}</span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-lg font-semibold leading-snug">{p.title}</span>
                          <span className="mt-1.5 block text-base leading-relaxed text-white/65">
                            {p.summary}
                          </span>
                          {selected?.id === p.id && p.detail && (
                            <span className="mt-3 block border-t border-white/10 pt-3 text-base leading-relaxed text-white/75 xl:hidden">
                              {p.detail}
                            </span>
                          )}
                        </span>
                        <span className="hidden shrink-0 rounded-full bg-white/10 px-3 py-1 text-[11px] text-white/60 sm:block">
                          {p.categoryTh}
                        </span>
                      </button>
                    </li>
                  ))}
                  {list.length === 0 && (
                    <li className="px-2 py-8 text-center text-white/50">ไม่พบนโยบายที่ค้นหา</li>
                  )}
                </ul>

              </section>
            </Reveal>

            {/* Detail panel */}
            <aside className="xl:sticky xl:top-24 xl:self-start">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                {selected ? (
                  <>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="eyebrow text-primary">{selected.categoryEn}</p>
                        <p className="display mt-3 text-5xl text-primary">{selected.id}</p>
                      </div>
                      <button
                        onClick={() => setSelected(null)}
                        aria-label="ปิดรายละเอียด"
                        className="rounded-full border border-white/15 p-2 text-white/60 hover:text-white"
                      >
                        <X size={14} />
                      </button>
                    </div>
                    <h3 className="display mt-4 text-2xl leading-tight">{selected.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-white/65">{selected.summary}</p>
                    {selected.detail && (
                      <div className="mt-6 border-t border-white/10 pt-5">
                        <p className="eyebrow mb-3 flex items-center gap-2 text-white/40">
                          <Target size={13} /> เราจะทำอะไร
                        </p>
                        <p className="text-sm leading-relaxed text-white/65">{selected.detail}</p>
                      </div>
                    )}
                    <div className="mt-6 border-t border-white/10 pt-5">
                      <p className="eyebrow mb-3 text-white/40">หมวดหมู่</p>
                      <span className="inline-block rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground">
                        {selected.categoryTh}
                      </span>
                    </div>
                  </>
                ) : (
                  <div className="py-6 text-center">
                    <ArrowLeft size={18} className="mx-auto text-primary" />
                    <p className="mt-4 text-sm text-white/55">
                      เลือกนโยบายจากรายการเพื่อดูรายละเอียดฉบับเต็ม
                    </p>
                  </div>
                )}
              </div>
            </aside>
          </div>

          {/* CTA */}
          <Reveal>
            <section className="rounded-2xl bg-primary p-8 text-primary-foreground sm:p-12">
              <h2 className="display text-4xl leading-[0.95] sm:text-5xl">
                เห็นด้วยกับนโยบายเรา?
                <br />
                กากบาท <span className="text-ink">เบอร์ 1</span>
              </h2>
              <a
                href="/#leaders"
                className="arrow-move mt-8 inline-flex items-center gap-2 rounded-xl bg-ink px-7 py-4 text-base font-semibold text-white"
              >
                รู้จักทีมผู้สมัคร <ArrowRight size={18} />
              </a>
            </section>
          </Reveal>
        </div>
      </div>
    </main>
  );
}
