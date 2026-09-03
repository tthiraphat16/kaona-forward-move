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

const names: string[] = [
  "นางสาว วิรัลพัชร จันทพันธ์",
  "นาย โอฬาร พุทธรัตน์",
  "นาย ธีรภัทร ร่างมณี",
  "นางสาว กฤติญา แจ้งแก้ว",
  "นางสาว ธัมมาวดี ผลอินทร์",
  "นางสาว จิราพัชร จุลนวล",
  "นางสาว ธัญวรัตน์ นันทชัยพิทักษ์",
  "นางสาว วชิรญาณ์ ขุนรักษ์",
  "นาย สุวพัฒน์ ฝอยทอง",
  "นาย วีราทร แก้วชื่น",
  "นาย กรวุฒิ ตะลึงสัตย์",
  "นาย ปกรณ์เกียรติ สุทธิบูลย์",
  "นางสาว อามีดะห์ อิสลาม",
];

/** สมาชิกพรรคทั้งหมด 18 คน = หัวหน้า 1 + รองหัวหน้า 2 + สมาชิก 15 */
export const MEMBER_SLOTS = 15;

const pad = (n: number) => String(n).padStart(2, "0");

export const members: Member[] = Array.from({ length: MEMBER_SLOTS }, (_, i) => {
  const name = names[i];
  const no = pad(i + 4); // เริ่มที่ 04 ต่อจากทีมนำ 01-03
  if (!name) {
    return {
      slug: `member-${no}`,
      no,
      name: "รอประกาศรายชื่อ",
      position: "สมาชิกพรรค",
      placeholder: true,
    };
  }
  return {
    slug: `member-${no}`,
    no,
    name,
    position: "สมาชิกพรรค",
  };
});

export const TOTAL_MEMBERS = MEMBER_SLOTS + 3;

export function getMember(slug: string) {
  return members.find((m) => m.slug === slug);
}
