export type PolicyCategory =
  | "การเรียน"
  | "สวัสดิการ"
  | "กิจกรรม"
  | "เทคโนโลยี"
  | "กีฬา"
  | "สิ่งแวดล้อม"
  | "โรงอาหาร"
  | "ชีวิตนักเรียน";

export interface Policy {
  id: string;
  title: string;
  categoryTh: PolicyCategory;
  categoryEn: string;
  summary: string;
  featured?: boolean;
}

export const POLICY_COUNT = 57;

/** Highlight policies shown on the home page. Full list lands in the /policies phase. */
export const featuredPolicies: Policy[] = [
  {
    id: "01",
    title: "APP MNS SCHOOL",
    categoryTh: "เทคโนโลยี",
    categoryEn: "TECHNOLOGY",
    summary: "รวมตารางเรียน ประกาศ และบริการของโรงเรียนไว้ในแอปเดียว",
    featured: true,
  },
  {
    id: "02",
    title: "สภาเซฟโซน",
    categoryTh: "ชีวิตนักเรียน",
    categoryEn: "LIFE AT SCHOOL",
    summary: "ช่องทางรับเรื่องร้องเรียนที่ปลอดภัยและรักษาความลับของนักเรียน",
    featured: true,
  },
  {
    id: "03",
    title: "MNS MARKET",
    categoryTh: "กิจกรรม",
    categoryEn: "ACTIVITIES",
    summary: "ตลาดนัดนักเรียน พื้นที่ให้ทุกคนได้ลองเป็นผู้ประกอบการจริง",
    featured: true,
  },
  {
    id: "04",
    title: "Co-Working Space",
    categoryTh: "การเรียน",
    categoryEn: "LEARNING",
    summary: "พื้นที่นั่งทำงานกลุ่มในโรงเรียน พร้อมปลั๊กไฟและ Wi-Fi",
    featured: true,
  },
  {
    id: "05",
    title: "Lost & Found",
    categoryTh: "สวัสดิการ",
    categoryEn: "WELFARE",
    summary: "ระบบของหายได้คืน ตรวจสอบออนไลน์ได้ทุกเวลา",
    featured: true,
  },
  {
    id: "06",
    title: "ธนาคารขยะ",
    categoryTh: "สิ่งแวดล้อม",
    categoryEn: "ENVIRONMENT",
    summary: "เปลี่ยนขยะรีไซเคิลเป็นแต้มและทุนกิจกรรมของห้องเรียน",
    featured: true,
  },
];
