import { Link } from "@tanstack/react-router";
import { NAV } from "./Header";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8">
        <div className="grid gap-14 md:grid-cols-[1.2fr_auto_auto] md:gap-16">
          <div>
            <p className="display text-5xl sm:text-6xl">
              KAONA
              <br />
              <span className="text-primary">PARTY</span>
            </p>
            <p className="mt-6 text-sm leading-relaxed text-white/60">
              พรรคก้าวหน้า
              <br />
              โรงเรียนเมืองนครศรีธรรมราช
            </p>
          </div>

          <nav aria-label="ลิงก์เว็บไซต์">
            <p className="eyebrow text-primary">Navigation</p>
            <ul className="mt-5 space-y-2.5">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link
                    to={n.to}
                    className="text-sm text-white/70 transition-colors hover:text-primary"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="eyebrow text-primary">Contact</p>
            <div className="mt-5 space-y-5 text-sm">
              <div>
                <p className="text-white/40">Instagram</p>
                <a
                  href="https://instagram.com/kaonaparty.official"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-white/80 transition-colors hover:text-primary"
                >
                  @kaonaparty.official
                </a>
              </div>
              <div>
                <p className="text-white/40">Email</p>
                <a
                  href="mailto:hello@kaonaparty.org"
                  className="text-white/80 transition-colors hover:text-primary"
                >
                  hello@kaonaparty.org
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8">
          <p className="max-w-3xl text-xs leading-relaxed text-white/45">
            สื่อหาเสียงอิเล็กทรอนิกส์นี้ ผลิตโดยพรรคก้าวหน้า โรงเรียนเมืองนครศรีธรรมราช 120 หมู่ที่ 1
            ตำบล นาทราย อำเภอ เมือง จังหวัดนครศรีธรรมราช 80280 จำนวน 1 ชิ้น วันที่ 22 สิงหาคม 2569
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 KAONA PARTY ALL RIGHTS RESERVED.</p>
          <p>พรรคก้าวหน้า · KAONA PARTY</p>
        </div>
      </div>
    </footer>
  );
}
