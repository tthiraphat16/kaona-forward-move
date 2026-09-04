import m04 from "@/assets/member-04.jpg.asset.json";
import m06 from "@/assets/member-06.jpg.asset.json";
import m07 from "@/assets/member-07.jpg.asset.json";
import m08 from "@/assets/member-08.jpg.asset.json";
import m09 from "@/assets/member-09.jpg.asset.json";
import m10 from "@/assets/member-10.jpg.asset.json";
import m11 from "@/assets/member-11.jpg.asset.json";
import m12 from "@/assets/member-12.jpg.asset.json";
import m13 from "@/assets/member-13.jpg.asset.json";
import m14 from "@/assets/member-14.jpg.asset.json";
import m15 from "@/assets/member-15.jpg.asset.json";
import m16 from "@/assets/member-16.jpg.asset.json";
import m17 from "@/assets/member-17.jpg.asset.json";
import m18 from "@/assets/member-18.jpg.asset.json";

export interface Member {
  slug: string;
  no: string;
  /** ว่างไว้ = ยังไม่ได้รับรายชื่อ */
  name: string;
  nickname?: string | undefined;
  position?: string | undefined;
  classroom?: string | undefined;
  program?: string | undefined;
  photo?: string | undefined;
  quote?: string | undefined;
  duties?: string[] | undefined;
  works?: string[] | undefined;
  /** true = ช่องว่างรอข้อมูล */
  placeholder?: boolean | undefined;
}

/** รายชื่อสมาชิกพรรค เรียงตามลำดับ 04-18 (ต่อจากทีมนำ 01-03) */
const roster: { name: string; photo?: string }[] = [
  { name: "นางสาว วิรัลพัชร จันทพันธ์", photo: m04.url },
  { name: "นาย โอฬาร พุทธรัตน์" },
  { name: "นาย ธีรภัทร ร่างมณี", photo: m06.url },
  { name: "นางสาว กฤติญา แจ้งแก้ว", photo: m07.url },
  { name: "นางสาว ธัมมาวดี ผลอินทร์", photo: m08.url },
  { name: "นางสาว กชพรรณ กิจบันชา", photo: m09.url },
  { name: "นางสาว ธัญวรัตน์ นันทชัยพิทักษ์", photo: m10.url },
  { name: "นางสาว วชิรญาณ์ ขุนรักษ์", photo: m11.url },
  { name: "นาย สุวพัฒน์ ฝอยทอง", photo: m12.url },
  { name: "นาย วีราทร แก้วชื่น", photo: m13.url },
  { name: "นาย กรวุฒิ ตะลึงสัตย์", photo: m14.url },
  { name: "นาย ปกรณ์เกียรติ สุทธิบูลย์", photo: m15.url },
  { name: "นางสาว อามีดะห์ อิสลาม", photo: m16.url },
  { name: "นาย ณัฐพล ทองมี", photo: m17.url },
  { name: "นางสาว จันทิมา บรรจงเมือง", photo: m18.url },
];

/** สมาชิกพรรคทั้งหมด 18 คน = หัวหน้า 1 + รองหัวหน้า 2 + สมาชิก 15 */
export const MEMBER_SLOTS = roster.length;

const pad = (n: number) => String(n).padStart(2, "0");

export const members: Member[] = roster.map((entry, i) => {
  const no = pad(i + 4); // เริ่มที่ 04 ต่อจากทีมนำ 01-03
  return {
    slug: `member-${no}`,
    no,
    name: entry.name,
    position: "สมาชิกพรรค",
    photo: entry.photo,
  };
});

export const TOTAL_MEMBERS = MEMBER_SLOTS + 3;

export function getMember(slug: string) {
  return members.find((m) => m.slug === slug);
}
