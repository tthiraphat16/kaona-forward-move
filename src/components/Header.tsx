import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";


export const NAV = [
  { label: "พรรค", to: "/about" },
  { label: "นโยบาย", to: "/policies" },
  { label: "ทีมของเรา", to: "/team" },
  { label: "สมาชิก", to: "/members" },
  { label: "กิจกรรม", to: "/activities" },
  { label: "สื่อ", to: "/media" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-ink/80 backdrop-blur-xl border-b border-white/10 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto grid max-w-[1400px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-8">
          <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
            <img
src="/kaona-logo.PNG"
              alt="โลโก้พรรคก้าวหน้า"
              className="h-9 w-9 shrink-0 object-contain"
              width={36}
              height={36}
            />
            <span className="min-w-0 leading-none">
              <span className="block truncate text-[15px] font-bold tracking-tight text-white">
                พรรคก้าวหน้า
              </span>
              <span className="eyebrow block text-[9px] text-primary">พูดจริง ทำจริง เปลี่ยนแปลงได้</span>
            </span>
          </Link>

          <div className="flex items-center gap-6">
            <nav className="hidden items-center gap-7 lg:flex">
              {NAV.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  className="text-sm font-medium text-white/70 transition-colors hover:text-primary"
                  activeProps={{ className: "text-primary" }}
                >
                  {n.label}
                </Link>
              ))}
            </nav>
            <Link
              to="/policies"
              className="arrow-move hidden items-center gap-2 bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-deep lg:inline-flex"
            >
              ดูนโยบาย <ArrowRight size={16} />
            </Link>
            <button
              type="button"
              aria-label={open ? "ปิดเมนู" : "เปิดเมนู"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 shrink-0 place-items-center text-white lg:hidden"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 flex flex-col justify-center bg-ink px-6 transition-all duration-400 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1">
          {NAV.map((n, i) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="group flex items-baseline gap-4 border-b border-white/10 py-4"
            >
              <span className="eyebrow w-8 text-primary">{String(i + 1).padStart(2, "0")}</span>
              <span className="display text-4xl text-white transition-colors group-hover:text-primary">
                {n.label}
              </span>
            </Link>
          ))}
        </nav>
        <Link
          to="/policies"
          onClick={() => setOpen(false)}
          className="arrow-move mt-8 inline-flex items-center justify-center gap-2 bg-primary px-6 py-4 text-base font-semibold text-primary-foreground"
        >
          ดูนโยบาย <ArrowRight size={18} />
        </Link>
      </div>
    </>
  );
}
