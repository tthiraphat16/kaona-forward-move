import { X } from "lucide-react";

interface BallotBadgeProps {
  number?: string;
  className?: string;
}

/**
 * ป้ายเลขเบอร์สไตล์บัตรเลือกตั้ง — ช่องซ้ายเป็นเลข ช่องขวาเป็นกล่องส้มพร้อม X
 * ตัวเลขและเครื่องหมายเป็นสีขาวตามแบบ
 */
export function BallotBadge({ number = "1", className = "" }: BallotBadgeProps) {
  return (
    <div
      className={`inline-flex overflow-hidden rounded-2xl border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.5)] ${className}`}
      role="img"
      aria-label={`ป้ายเบอร์ ${number}`}
    >
      <div className="flex items-center justify-center bg-white/5 px-8 py-6 sm:px-12 sm:py-8">
        <span className="display text-6xl leading-none text-white sm:text-8xl">{number}</span>
      </div>
      <div className="flex items-center justify-center bg-primary px-8 py-6 sm:px-12 sm:py-8">
        <X
          className="h-12 w-12 text-white sm:h-20 sm:w-20"
          strokeWidth={3}
          aria-hidden
        />
      </div>
    </div>
  );
}
