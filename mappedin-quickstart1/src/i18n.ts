import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      Contact: "Contact",
      Home: "Home",
      Setting: "Setting",
      Mode: "Mode",
      FontSize: "Font Size",
      Language: "Language",
      Apply: "Apply",
      Light: "Light",
      Dark: "Dark",
      Default: "Default",
      Medium: "Medium",
      Large: "Large",
      SettingsTitle: "Settings",
      To: "To: Search destination...",
      From: "From: Search starting point...",
      GetDirections: "Get Directions",
      EmergencyExit: "Emergency Exit",
      "Main Reception": "Main Reception",
      Reception: "Reception",
      EnableStackMap: "Enable Stack Map",
      DisableStackMap: "Disable Stack Map",
      "Entrance(surgical centre)": "Entrance(surgical centre)",
      Entrance: "Entrance",
      "Module 2a": "Module 2a",
      "Module 2": "Module 2",
      "Module 3": "Module 3",
      "Module 1": "Module 1",
      "Module 4": "Module 4",
      "Module 5": "Module 5",
      "Module 6": "Module 6",
      "Module 7a": "Module 7a",
      "Module 7": "Module 7",
      "Module 8": "Module 8",
      "Module 9": "Module 9",
      "Module 10": "Module 10",
      "Module 11": "Module 11",
      Lifts: "Lifts",
      Toilets: "Toilets",
      "Male Toilets": "Male Toilets",
      "Female Toilets": "Female Toilets",
      "Module 2b": "Module 2b",
      Staircase: "Stairs",
      "Unisex Toilets": "Unisex Toilets",
      "Male/Female Toilets": "Male/Female Toilets",
      "Breast Screening": "Breast Screening",
      Lightwell: "Lightwell",
      "Busy Pod": "Busy Pod",
      Plant: "Plant",
      Ward: "Ward",
      "Inward Goods": "Inward Goods",
      "Manukau SuperClinic": "Manukau SuperClinic",
      "MSC Incentre (Dialysis Unit)": "MSC Incentre (Dialysis Unit)",
      "Corridor to Manukau SuperClinic": "Corridor to Manukau SuperClinic",
      "Clinical Photography": "Clinical Photography",
      Cafe: "Cafe",
      "Surgical Theatres & Recovery": "Surgical Theatres & Recovery",
      "Renal Unit/Rito Dialysis Centre": "Renal Unit/ Rito Dialysis Centre",
    },
  },

  mi: {
    translation: {
      Contact: "Whakapā",
      Home: "Kāinga",
      Settings: "Tautuhinga",
      Mode: "Aratau",
      FontSize: "Rahi Momotuhi",
      Language: "Reo",
      Apply: "Whakamahia",
      Light: "Māama",
      Dark: "Pōuri",
      Default: "Taunoa",
      Medium: "Waenga",
      Large: "Rahi",
      SettingsTitle: "Tautuhinga",
      To: "Ki: Rapu waahi...",
      From: "Mai: Rapu waahi timatanga...",
      GetDirections: "Tikina nga Tohutohu",
      EmergencyExit: "Putanga Whawhati Tata",
      "Main Reception": "Whakatau Matua",
      Reception: "Tari",
      EnableStackMap: "Whakahohe Mapi Papa",
      DisableStackMap: "Mono Mapi Papa",
      "Entrance(surgical centre)": "Tīmatanga (pōkairua)",
      Entrance: "Tīmatanga",
      "Module 2a": "Mōtū 2a",
      "Module 2": "Wāhanga 2",
      "Module 3": "Wāhanga 3",
      "Module 1": "Wāhanga 1",
      "Module 4": "Wāhanga 4",
      "Module 5": "Wāhanga 5",
      "Module 6": "Wāhanga 6",
      "Module 7a": "Wāhanga 7a",
      "Module 7": "Wāhanga 7",
      "Module 8": "Wāhanga 8",
      "Module 9": "Wāhanga 9",
      "Module 10": "Wāhanga 10",
      "Module 11": "Wāhanga 11",
      Lifts: "Hiko",
      Toilets: "Wharepaku",
      "Male Toilets": "Wharepaku Tāne",
      "Module 2b": "Wāhanga 2b",
      Staircase: "Arawhata",
      "Unisex Toilets": "Wharepaku Tāne/Wahine",
      "Male/Female Toilets": "Wharepaku Tāne/Wahine",
      "Female Toilets": "Ngā Whareiti Wāhine",
      "Breast Screening": "Tātari Ū",
      Lightwell: "Puna Marama",
      "Busy Pod": "Kōpana Mahi",
      Plant: "Whakato",
      Ward: "Parirau",
      "Inward Goods": "Taonga Urunga",
      "Manukau SuperClinic": "Manukau Haumanu Nui",
      "MSC Incentre (Dialysis Unit)": "MSC Incentre (Wāhanga Whakarerekē Toto)",
      "Corridor to Manukau SuperClinic": "Arapiki ki Manukau Haumanu Nui",
      "Clinical Photography": "Whakaahua Haumanu",
      Cafe: "Kawhe",
      "Surgical Theatres & Recovery":
        "Ngā Whare Tapere Mahi Hāparapara me te Whakaoranga",
      "Renal Unit/Rito Dialysis Centre":
        "Wāhanga Tātari Toto/Rito Dialysis Centre",
    },
  },

  cn: {
    translation: {
      Contact: "联系方式",
      Home: "主页",
      Settings: "设置",
      Mode: "模式",
      FontSize: "字体大小",
      Language: "语言",
      Apply: "应用",
      Light: "浅色",
      Dark: "深色",
      Default: "默认",
      Medium: "中",
      Large: "大",
      SettingsTitle: "设置",
      To: "到: 搜索目的地...",
      From: "从: 搜索起点...",
      GetDirections: "获取方向",
      EmergencyExit: "紧急出口",
      "Main Reception": "主接待处",
      Reception: "接待处",
      EnableStackMap: "启用叠加地图",
      DisableStackMap: "禁用叠加地图",
      "Entrance(surgical centre)": "入口(外科中心)",
      Entrance: "入口",
      "Module 2a": "模块 2a",
      "Module 2": "模块 2",
      "Module 3": "模块 3",
      "Module 1": "模块 1",
      "Module 4": "模块 4",
      "Module 5": "模块 5",
      "Module 6": "模块 6",
      "Module 7a": "模块 7a",
      "Module 7": "模块 7",
      "Module 8": "模块 8",
      "Module 9": "模块 9",
      "Module 10": "模块 10",
      "Module 11": "模块 11",
      Staircase: "楼梯",
      Lifts: "电梯",
      Toilets: "厕所",
      "Male Toilets": "男厕",
      "Female Toilets": "女厕",
      "Module 2b": "模块 2b",
      Stairs: "楼梯",
      "Unisex Toilets": "男女共用厕所",
      "Male/Female Toilets": "男女厕所",
      "Breast Screening": "乳房筛查",
      Lightwell: "天井",
      "Busy Pod": "忙碌舱",
      Plant: "植物",
      Ward: "病房",
      "Inward Goods": "入库货物",
      "Manukau SuperClinic": "Manukau超级诊所",
      "MSC Incentre (Dialysis Unit)": "MSC 中心（透析单元）",
      "Corridor to Manukau SuperClinic": "通往Manukau超级诊所的走廊",
      "Clinical Photography": "临床摄影",
      Cafe: "咖啡馆",
      "Surgical Theatres & Recovery": "手术室与康复",
      "Renal Unit/Rito Dialysis Centre": "肾脏科/ Rito 透析中心",
    },
  },

  tw: {
    translation: {
      Contact: "聯絡方式",
      Home: "主頁",
      Settings: "設置",
      Mode: "模式",
      FontSize: "字型大小",
      Language: "語言",
      Apply: "應用",
      Light: "淺色",
      Dark: "深色",
      Default: "預設",
      Medium: "中",
      Large: "大",
      SettingsTitle: "設置",
      To: "到: 搜索目的地...",
      From: "從: 搜索起點...",
      GetDirections: "獲取方向",
      EmergencyExit: "緊急出口",
      "Main Reception": "主接待處",
      Reception: "接待處",
      EnableStackMap: "啟用疊加地圖",
      DisableStackMap: "禁用疊加地圖",
      "Entrance(surgical centre)": "入口（手术中心）",
      Entrance: "入口",
      "Module 2a": "模組 2a",
      "Module 2": "模組 2",
      "Module 3": "模組 3",
      "Module 1": "模組 1",
      "Module 4": "模組 4",
      "Module 5": "模組 5",
      "Module 6": "模組 6",
      "Module 7a": "模組 7a",
      "Module 8": "模組 8",
      "Module 7": "模組 7",
      "Module 9": "模組 9",
      "Module 10": "模組 10",
      "Module 11": "模組 11",
      Staircase: "樓梯",
      Lifts: "電梯",
      Toilets: "廁所",
      "Male Toilets": "男廁",
      "Female Toilets": "女廁",
      "Module 2b": "模組 2b",
      "Unisex Toilets": "男女共用廁所",
      "Male/Female Toilets": "男女廁所",
      "Breast Screening": "乳房篩檢",
      Lightwell: "天井",
      "Busy Pod": "忙碌艙",
      Plant: "植物",
      Ward: "病房",
      "Inward Goods": "入庫貨物",
      "Manukau SuperClinic": "Manukau超級診所",
      "MSC Incentre (Dialysis Unit)": "MSC 中心（透析單位）",
      "Corridor to Manukau SuperClinic": "通往Manukau超級診所的走廊",
      "Clinical Photography": "臨床攝影",
      Cafe: "咖啡館",
      "Surgical Theatres & Recovery": "手術室與康復",
      "Renal Unit/Rito Dialysis Centre": "腎臟科/ Rito 透析中心",
    },
  },

  vi: {
    translation: {
      Contact: "Liên hệ",
      Home: "Trang chủ",
      Settings: "Cài đặt",
      Mode: "Chế độ",
      FontSize: "Kích thước phông chữ",
      Language: "Ngôn ngữ",
      Apply: "Áp dụng",
      Light: "Sáng",
      Dark: "Tối",
      Default: "Mặc định",
      Medium: "Trung bình",
      Large: "Lớn",
      SettingsTitle: "Cài đặt",
      To: "Đến: Tìm điểm đến...",
      From: "Từ: Tìm điểm xuất phát...",
      GetDirections: "Nhận chỉ đường",
      EmergencyExit: "Lối Thoát Hiểm",
      "Main Reception": "Lễ tân chính",
      Reception: "Tiếp Tân",
      EnableStackMap: "Bật Bản Đồ Xếp Chồng",
      DisableStackMap: "Tắt Bản Đồ Xếp Chồng",
      "Entrance(surgical centre)": "Lối vào (trung tâm phẫu thuật)",
      Entrance: "Lối vào",
      "Module 2a": "Mô-đun 2a",
      "Module 2": "Mô-đun 2",
      "Module 3": "Mô-đun 3",
      "Module 1": "Mô-đun 1",
      "Module 4": "Mô-đun 4",
      "Module 5": "Mô-đun 5",
      "Module 6": "Mô-đun 6",
      "Module 7a": "Mô-đun 7a",
      "Module 7": "Mô-đun 7",
      "Module 8": "Mô-đun 8",
      "Module 9": "Mô-đun 9",
      "Module 10": "Mô-đun 10",
      "Module 11": "Mô-đun 11",
      Staircase: "Cầu thang",
      Lifts: "Thang máy",
      Toilets: "Nhà vệ sinh",
      "Male Toilets": "Nhà vệ sinh Nam",
      "Module 2b": "Mô-đun 2b",
      "Unisex Toilets": "Nhà vệ sinh Nam/Nữ",
      "Male/Female Toilets": "Nhà vệ sinh Nam/Nữ",
      "Female Toilets": "Nhà vệ sinh nữ",
      "Breast Screening": "Khám vú",
      Lightwell: "Giếng trời",
      "Busy Pod": "Pod bận rộn",
      Plant: "Cây trồng",
      Ward: "Phòng bệnh",
      "Inward Goods": "Hàng hóa nhập khẩu",
      "Manukau SuperClinic": "Phòng khám Manukau",
      "MSC Incentre (Dialysis Unit)": "MSC Trung tâm (Đơn vị lọc máu)",
      "Corridor to Manukau SuperClinic": "Hành lang đến Phòng khám Manukau",
      "Clinical Photography": "Nhiếp ảnh lâm sàng",
      Cafe: "Quán cà phê",
      "Surgical Theatres & Recovery": "Phòng mổ và phục hồi",
      "Renal Unit/Rito Dialysis Centre": "Đơn vị Thận/ Trung tâm lọc máu Rito",
    },
  },

  sm: {
    translation: {
      Contact: "Fa'afeso'ota'i",
      Home: "Aiga",
      Settings: "Seti",
      Mode: "Faiga",
      FontSize: "Tele o le mataitusi",
      Language: "Gagana",
      Apply: "Fa'atino",
      Light: "Malamalama",
      Dark: "Pogisa",
      Default: "Fa'aletonu",
      Medium: "Feololo",
      Large: "Tele",
      SettingsTitle: "Seti",
      To: "I: Saili nofoaga...",
      From: "Mai: Saili nofoaga amata...",
      GetDirections: "Maua Faatonuga",
      EmergencyExit: "Ala Faafuasei",
      "Main Reception": "Talifala Autu",
      Reception: "Talia'iga",
      EnableStackMap: "Faʻaola Mapi Faʻaopoopo",
      DisableStackMap: "Faʻamuta Mapi Faʻaopoopo",
      "Entrance(surgical centre)": "Ulufale (nofoaga taotoga)",
      Entrance: "Ulufale",
      "Module 2a": "Module 2a",
      "Module 2": "Module 2",
      "Module 3": "Module 3",
      "Module 1": "Module 1",
      "Module 4": "Module 4",
      "Module 5": "Module 5",
      "Module 6": "Module 6",
      "Module 7a": "Module 7a",
      "Module 7": "Module 7",
      "Module 8": "Module 8",
      "Module 9": "Module 9",
      "Module 10": "Module 10",
      "Module 11": "Module 11",
      Staircase: "Ala Savali",
      Lifts: "Si'isi'i",
      Toilets: "Faleta'ele",
      "Male Toilets": "Faleta'ele Tāne",
      "Module 2b": "Module 2b",
      "Unisex Toilets": "Faleta'ele Tāne/Wahine",
      "Male/Female Toilets": "Faleta'ele Tāne/Wahine",
      "Female Toilets": "Faleta'ele Tama'ita'i",
      "Breast Screening": "Su'esu'ega Ova",
      Lightwell: "Puna Malamalama",
      "Busy Pod": "Pod Galue",
      Plant: "La'au",
      Ward: "Fale",
      "Inward Goods": "Oloa Ulufale",
      "Manukau SuperClinic": "Manukau Falema'i Tele",
      "MSC Incentre (Dialysis Unit)": "MSC Incentre (Vaega Ta'amilo)",
      "Corridor to Manukau SuperClinic": "Ala i Manukau Falema'i Tele",
      "Clinical Photography": "Pueata Foma'i",
      Cafe: "Fale Kofe",
      "Surgical Theatres & Recovery": "Falema'i Tipitipi ma Toe Fa'aleleia",
      "Renal Unit/Rito Dialysis Centre":
        "Vaega Togafitiga Reni/Rito Dialysis Centre",
    },
  },

  to: {
    translation: {
      Contact: "Fetu'utaki",
      Home: "ʻApi",
      Settings: "Ngaahi Seti",
      Mode: "Taimi",
      FontSize: "Lahi ʻo e ngaahi tohi fakamatala",
      Language: "Lea",
      Apply: "Fakalele",
      Light: "Maama",
      Dark: "Pōuli",
      Default: "Angamaheni",
      Medium: "Falahi",
      Large: "Lahi",
      SettingsTitle: "Ngaahi Seti",
      To: "Ki he: Fekumi ki he feitu'u...",
      From: "Mei he: Fekumi ki he feitu'u kamata...",
      GetDirections: "Ma'u e ngaahi Fokotu'utu'u",
      EmergencyExit: "Hala Fa'atu'utu'unga",
      "Main Reception": "Talifala Puleʻanga",
      Reception: "Talitali",
      EnableStackMap: "Fakamamā Mapu fakaʻaonga",
      DisableStackMap: "Taʻeʻasi Mapu fakaʻaonga",
      "Entrance(surgical centre)": "Huʻu (ngaahi taokete)",
      Entrance: "Huʻu",
      "Module 2a": "Module 2a",
      "Module 2": "Module 2",
      "Module 3": "Module 3",
      "Module 1": "Module 1",
      "Module 4": "Module 4",
      "Module 5": "Module 5",
      "Module 6": "Module 6",
      "Module 7a ": "Module 7a",
      "Module 7": "Module 7",
      "Module 8": "Module 8",
      "Module 9": "Module 9",
      "Module 10": "Module 10",
      "Module 11": "Module 11",
      Staircase: "Fakaikiiki Hala",
      Lifts: "Ngaahi Si'i",
      Toilets: "Ngaahi Faleta'ele",
      "Male Toilets": "Ngaahi Faleta'ele Tangata",
      "Female Toilets": "Faleta'ele Fefine",
      "Module 2b": "Module 2b",
      "Unisex Toilets": "Ngaahi Faleta'ele Tangata/Fefine",
      "Male/Female Toilets": "Ngaahi Faleta'ele Tangata/Fefine",
      "Breast Screening": "Ngaahi Sivi Tītaha",
      Lightwell: "Tā Puha",
      "Busy Pod": "Ngaahi Potoa Toho",
      Plant: "Akau",
      Ward: "Falepuna",
      "Inward Goods": "Ngaahi Koloa Hū",
      "Manukau SuperClinic": "Manukau Falema'i Lalahi",
      "MSC Incentre (Dialysis Unit)": "MSC Incentre (Vaega Loto'a)",
      "Corridor to Manukau SuperClinic": "Hala ki he Manukau Falema'i Lalahi",
      "Clinical Photography": "Tohitohi Fakafaito'o",
      Cafe: "Falekai Kofe",
      "Surgical Theatres & Recovery": "Ngaahi Lokesi Tipitipi & Fakafoki",
      "Renal Unit/Rito Dialysis Centre": "Vaega Reni/Rito Dialysis Centre",
    },
  },

  pa: {
    translation: {
      Contact: "ਸੰਪਰਕ ਕਰੋ",
      Home: "ਘਰ",
      Settings: "ਸੈਟਿੰਗਜ਼",
      Mode: "ਮੋਡ",
      FontSize: "ਫੋਂਟ ਸਾਈਜ਼",
      Language: "ਭਾਸ਼ਾ",
      Apply: "ਲਾਗੂ ਕਰੋ",
      Light: "ਹਲਕਾ",
      Dark: "ਗੂੜਾ",
      Default: "ਡਿਫ਼ਾਲਟ",
      Medium: "ਦਰਮਿਆਨਾ",
      Large: "ਵੱਡਾ",
      SettingsTitle: "ਸੈਟਿੰਗਜ਼",
      To: "ਨੂੰ: ਗੰਟਵਿਓ ਖੋਜੋ...",
      From: "ਤੋਂ: ਸ਼ੁਰੂਆਤੀ ਬਿੰਦੂ ਖੋਜੋ...",
      GetDirections: "ਦਿਸ਼ਾਵਾਂ ਪ੍ਰਾਪਤ ਕਰੋ",
      EmergencyExit: "ਐਮਰਜੈਂਸੀ ਐਗਜ਼ਿਟ",
      "Main Reception": "ਮੁੱਖ ਸਵਾਗਤ",
      Reception: "ਰਿਸੈਪਸ਼ਨ",
      EnableStackMap: "ਸਟੈਕ ਮੈਪ ਨੂੰ ਐਨਬਲ ਕਰੋ",
      DisableStackMap: "ਸਟੈਕ ਮੈਪ ਨੂੰ ਅਯੋਗ ਕਰੋ",
      "Entrance(surgical centre)": "ਦਾਖਲਾ (ਸਰਜਰੀ ਸੈਂਟਰ)",
      Entrance: "ਦਾਖਲਾ",
      "Module 2a": "ਮੋਡਿਊਲ 2a",
      "Module 2": "ਮੋਡਿਊਲ 2",
      "Module 3": "ਮੋਡਿਊਲ 3",
      "Module 1": "ਮੋਡਿਊਲ 1",
      "Module 4": "ਮੋਡਿਊਲ 4",
      "Module 5": "ਮੋਡਿਊਲ 5",
      "Module 6": "ਮੋਡਿਊਲ 6",
      "Module 7a": "ਮੋਡੀਊਲ 7a",
      "Module 7": "ਮੋਡੀਊਲ 7",
      "Module 8": "ਮੋਡੀਊਲ 8",
      "Module 9": "ਮੋਡੀਊਲ 9",
      "Module 10": "ਮੋਡੀਊਲ 10",
      "Module 11": "ਮੋਡੀਊਲ 11",
      Staircase: "ਸੀੜ੍ਹੀਆਂ",
      Lifts: "ਲਿਫਟਾਂ",
      Toilets: "ਟੌਇਲਟ",
      "Male Toilets": "ਪੁਰਸ਼ ਟੌਇਲਟ",
      "Module 2b": "ਮੋਡੀਊਲ 2b",
      "Unisex Toilets": "ਯੂਨੀਸੈਕਸ ਟੌਇਲਟ",
      "Male/Female Toilets": "ਪੁਰਸ਼/ਮਹਿਲਾ ਟੌਇਲਟ",
      "Female Toilets": "ਇਸਤਰੀ ਲਘੂਸ਼ੰਕਾ ਘਰ",
      "Breast Screening": "ਛਾਤੀ ਦੀ ਸਕ੍ਰੀਨਿੰਗ",
      Lightwell: "ਲਾਈਟਵੈਲ",
      "Busy Pod": "ਬਿਜ਼ੀ ਪੋਡ",
      Plant: "ਪੌਦਾ",
      Ward: "ਵਾਰਡ",
      "Inward Goods": "ਅੰਦਰਲੇ ਸਮਾਨ",
      "Manukau SuperClinic": "ਮਨੂਕੌ ਸੂਪਰਕਲਿਨਿਕ",
      "MSC Incentre (Dialysis Unit)": "ਐਮਐਸਸੀ ਇੰਸੈਂਟਰ (ਡਾਇਲਿਸਿਸ ਯੂਨਿਟ)",
      "Corridor to Manukau SuperClinic": "ਮਨੂਕੌ ਸੂਪਰਕਲਿਨਿਕ ਲਈ ਕਰੀਡੋਰ",
      "Clinical Photography": "ਕਲੀਨੀਕਲ ਫੋਟੋਗ੍ਰਾਫੀ",
      Cafe: "ਕੈਫੇ",
      "Surgical Theatres & Recovery": "ਸਰਜਿਕਲ ਥੀਏਟਰ ਅਤੇ ਰਿਕਵਰੀ",
      "Renal Unit/Rito Dialysis Centre": "ਰੈਨਲ ਯੂਨਿਟ/ਰਿਤੋ ਡਾਇਲਿਸਿਸ ਸੈਂਟਰ",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    debug: true, //debug
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
