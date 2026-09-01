export function MemberPhoto({
  name,
  photo,
  number,
  className = "",
}: {
  name: string;
  photo?: string;
  number?: string;
  className?: string;
}) {
  const initial = name.replace(/^(นาย|นางสาว|นาง)\s*/, "").charAt(0);

  return (
    <div className={`relative overflow-hidden bg-ink-soft ${className}`}>
      {number && (
        <span
          aria-hidden
          className="display absolute bottom-0 left-2 z-0 text-[12rem] leading-[0.7] text-primary/85"
        >
          {number.replace(/^0/, "")}
        </span>
      )}
      {photo ? (
        <img
          src={photo}
          alt={name}
          loading="lazy"
          className="relative z-10 h-full w-full object-cover object-top"
        />
      ) : (
        <div className="relative z-10 flex h-full w-full items-center justify-center">
          <span className="display text-6xl text-white/25">{initial}</span>
        </div>
      )}
    </div>
  );
}
