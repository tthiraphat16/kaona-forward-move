import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/media")({
  head: () => ({
    meta: [
      { title: "Media | พรรคก้าวหน้า KAONA PARTY" },
      { name: "description", content: "พรรคก้าวหน้า โรงเรียนเมืองนครศรีธรรมราช ปีการศึกษา 2569" },
      { property: "og:title", content: "Media | พรรคก้าวหน้า KAONA PARTY" },
      { property: "og:description", content: "พรรคก้าวหน้า โรงเรียนเมืองนครศรีธรรมราช ปีการศึกษา 2569" },
      { property: "og:url", content: "/media" },
    ],
    links: [{ rel: "canonical", href: "/media" }],
  }),
  component: Page,
});

function Page() {
  return (
    <main className="bg-ink text-white"><div className="mx-auto flex min-h-[70vh] max-w-[1400px] flex-col justify-center px-5 py-32 sm:px-8">
      <p className="eyebrow text-primary">Media</p>
      <h1 className="display mt-4 text-5xl sm:text-7xl">กำลังจัดทำ</h1>
      <p className="mt-6 max-w-md text-white/60">
        หน้านี้อยู่ระหว่างการจัดทำในเฟสถัดไปของเว็บไซต์แคมเปญ
      </p>
    </div></main>
  );
}
