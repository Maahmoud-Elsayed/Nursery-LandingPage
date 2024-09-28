export const links = [
  {
    name: "home",
    hash: "#home",
  },
  {
    name: "aboutUs",
    hash: "#about",
  },
  {
    name: "services",
    hash: "#services",
  },
  {
    name: "features",
    hash: "#features",
  },
  {
    name: "contactUs",
    hash: "#contact",
  },
] as const;

export const branches = {
  ar: [
    {
      city: "فروع العين",
      branches: [
        "حضانة الدانة - زاخر",
        "حضانة الدانة - الطوية",
        "حضانة الدانة - الصاروج",
      ],
    },
    {
      city: "فروع دبي",
      branches: ["حضانة الدانة - ند الحمر"],
    },
    {
      city: "فروع الشارقة",
      branches: ["حضانة الدانة - خورفكان "],
    },
    {
      city: "فروع ابوظيي",
      branches: [
        "حضانة الدانة - خليفه أ",
        "حضانة الدانة - محمد بين زايد",
        "حضانة الدانة - المشرف",
        "حضانة الدانة - الشهامه",
        "حضانة الدانة - شخبوط",
        "حضانة الدانة - الشامخة",
      ],
    },
  ],
  en: [
    {
      city: "Al Ain Branches",
      branches: [
        "Al Dana Nursery - Zakher",
        "Al Dana Nursery - Al Towayya",
        "Al Dana Nursery - Al Sarooj",
      ],
    },
    {
      city: "Dubai Branches",
      branches: ["Al Dana Nursery - Nad Al Hammar"],
    },
    {
      city: "Sharjah Branches",
      branches: ["Al Dana Nursery - Khor Fakkan"],
    },
    {
      city: "Abu Dhabi Branches",
      branches: [
        "Al Dana Nursery - Khalifa A",
        "Al Dana Nursery - Mohammed Bin Zayed",
        "Al Dana Nursery - Al Mushrif",
        "Al Dana Nursery - Al Shahama",
        "Al Dana Nursery - Shakhbout",
        "Al Dana Nursery - Al Shamkha",
      ],
    },
  ],
} as const;
