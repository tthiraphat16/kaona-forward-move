export interface Member {
  slug: string;
  no: string;
  name: string;
  nickname?: string;
  position: string;
  positionEn: string;
  classroom: string;
  program: string;
  photo?: string;
  quote?: string;
  duties: string[];
  works: string[];
}

/**
 * ข้อมูลตัวอย่าง (mock-up) — รอข้อมูลจริงและรูปของสมาชิกแต่ละคน
 */
export const members: Member[] = [
  {
    slug: "secretary",
    no: "04",
    name: "นาย ธนกฤต ใจกล้า",
    nickname: "กฤต",
    position: "เลขาธิการพรรค",
    positionEn: "SECRETARY GENERAL",
    classroom: "ม.5/2",
    program: "วิทย์-คณิต",
    quote: "งานที่ดีเริ่มจากการจดบันทึกและติดตามอย่างจริงจัง",
    duties: ["ดูแลเอกสารและบันทึกการประชุมของพรรค", "ประสานงานระหว่างฝ่ายต่าง ๆ"],
    works: ["เลขานุการคณะสีประจำปีการศึกษา 2568", "ทีมงานจัดค่ายวิชาการโรงเรียน"],
  },
  {
    slug: "treasurer",
    no: "05",
    name: "นางสาว ปิยะฉัตร แก้วมณี",
    nickname: "ฝ้าย",
    position: "เหรัญญิกพรรค",
    positionEn: "TREASURER",
    classroom: "ม.5/4",
    program: "ศิลป์-คำนวณ",
    quote: "โปร่งใสทุกบาท ตรวจสอบได้ทุกโครงการ",
    duties: ["ดูแลงบประมาณและรายงานการใช้จ่ายของพรรค", "จัดทำรายงานการเงินให้นักเรียนตรวจสอบได้"],
    works: ["เหรัญญิกชุมนุมธุรกิจจำลอง", "รางวัลรองชนะเลิศ โครงงานคณิตศาสตร์ระดับโรงเรียน"],
  },
  {
    slug: "policy",
    no: "06",
    name: "นาย ศุภกร ทองอยู่",
    nickname: "บอส",
    position: "หัวหน้าฝ่ายนโยบาย",
    positionEn: "HEAD OF POLICY",
    classroom: "ม.5/1",
    program: "วิทย์-คณิต",
    quote: "นโยบายต้องมาจากปัญหาจริง ไม่ใช่จากความรู้สึก",
    duties: ["รวบรวมปัญหาจากนักเรียนมาออกแบบนโยบาย", "ติดตามความคืบหน้าของนโยบายทั้ง 57 ข้อ"],
    works: ["ทีมวิจัยสำรวจความคิดเห็นนักเรียน 2568", "เหรียญทอง โครงงานวิทยาศาสตร์ระดับเขต"],
  },
  {
    slug: "communication",
    no: "07",
    name: "นางสาว อริสา พรหมทอง",
    nickname: "มายด์",
    position: "หัวหน้าฝ่ายสื่อสาร",
    positionEn: "HEAD OF COMMUNICATION",
    classroom: "ม.4/3",
    program: "ศิลป์-ภาษา",
    quote: "ข่าวสารที่ดีต้องถึงนักเรียนทุกคน ไม่ใช่แค่บางกลุ่ม",
    duties: ["ดูแลเพจและช่องทางสื่อสารของพรรค", "รายงานความคืบหน้าให้นักเรียนรับรู้ทุกเดือน"],
    works: ["พิธีกรงานกิจกรรมโรงเรียน", "ทีมถ่ายภาพและตัดต่อวิดีโอกีฬาสี"],
  },
  {
    slug: "activity",
    no: "08",
    name: "นาย กันตพงศ์ ชูศรี",
    nickname: "กัน",
    position: "หัวหน้าฝ่ายกิจกรรม",
    positionEn: "HEAD OF ACTIVITIES",
    classroom: "ม.4/5",
    program: "วิทย์-คณิต",
    quote: "กิจกรรมที่ดีคือกิจกรรมที่ทุกคนได้ร่วมสนุก",
    duties: ["วางแผนและจัดกิจกรรมของสภานักเรียน", "ดูแลอาสาสมัครนักเรียนในแต่ละงาน"],
    works: ["ประธานชุมนุมนันทนาการ", "ทีมจัดงานลอยกระทงโรงเรียน 2568"],
  },
  {
    slug: "welfare",
    no: "09",
    name: "นางสาว ณัฐธิดา บุญช่วย",
    nickname: "ใบเฟิร์น",
    position: "หัวหน้าฝ่ายสวัสดิการ",
    positionEn: "HEAD OF WELFARE",
    classroom: "ม.5/5",
    program: "ศิลป์-ไทยสังคม",
    quote: "โรงเรียนที่ดีต้องเริ่มจากคุณภาพชีวิตที่ดีของนักเรียน",
    duties: ["ดูแลเรื่องน้ำดื่ม ห้องน้ำ และโรงอาหาร", "รับเรื่องร้องเรียนด้านสวัสดิการ"],
    works: ["อาสาสมัครห้องพยาบาลโรงเรียน", "ทีมโครงการธนาคารขยะ"],
  },
];

export function getMember(slug: string) {
  return members.find((m) => m.slug === slug);
}
