// ===================================================
// КОНТЕНТ САЙТА — РЕДАКТИРУЙТЕ ЗДЕСЬ
// Все данные сайта собраны в одном файле для удобства.
// Чтобы добавить новый выпуск, гостя или члена команды —
// просто добавьте новый объект в соответствующий массив.
// ===================================================

export interface Episode {
  id: string;
  title: string;
  guestName: string;
  guestRole: string;
  description: string;
  thumbnailUrl: string;
  youtubeUrl: string;
  featured?: boolean;
}

export interface Guest {
  id: string;
  name: string;
  achievement: string;
  photoUrl?: string;
  episodeUrl?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  photoUrl?: string;
}

export interface Stat {
  value: string;
  label: string;
}

// ===== СТАТИСТИКА =====
export const stats: Stat[] = [
  { value: "31", label: "выпуск" },
  { value: "Дважды в месяц", label: "новые эпизоды" },
  { value: "30+", label: "гостей" },
  { value: "Школьники", label: "активная аудитория" },
];

// ===== ВЫПУСКИ =====
// Первый выпуск с featured: true будет показан как главный
export const episodes: Episode[] = [
  {
    id: "ep-31",
    title: "История поступление в Harvard",
    guestName: "Шадияр Лес",
    guestRole: "Учитель английского языка и выпускник Harvard",
    description: "В выпуске он рассказал, как проходил его процесс поступления, с какими трудностями столкнулся и как получил стипендию Болашак. Также он поделился опытом учебы в Гарварде: как устроен образовательный процесс, какие требования предъявляются к студентам и чем отличается обучение от привычной системы.",
    thumbnailUrl: "/public/previews/ep-31.jpg",
    youtubeUrl: "https://youtu.be/fuKUg21XHi8?si=9mmojS4WB0XzBOuO",
    featured: true,
  },
  {
    id: "ep-30",
    title: "Как сделать физику интересной?",
    guestName: "Хайдар Мурзахметов",
    guestRole: "Учитель и популизатор физики",
    description: "Он выстраивает обучение так, чтобы физика была понятной и интересной: объясняет сложные законы через наглядные примеры, эксперименты и практические ситуации. Активно популяризирует физику в интернете - пишет песни про физические законы, снимает скетчи и опыты, показывая, что наука может быть живой, доступной и увлекательной.",
    thumbnailUrl: "/public/previews/ep-30.jpg",
    youtubeUrl: "https://youtu.be/9jpgfmhVWLQ?si=SHyEJY2OtlCcYBFd",
  },
  {
    id: "ep-29",
    title: "Про олимпиадную математику в Казахстане и ректорство",
    guestName: "Асылбек Исахов",
    guestRole: "Президент Казахско-Американского университета",
    description: "Он много лет работает с сильнейшими школьниками страны, отвечает за подготовку национальной команды, а также делится опытом управленческой работы в роли ректора университета. В выпуске говорим о роли тимлидера, системе отбора и подготовки олимпиадников, ответственности за результат и управлении университетом.",
    thumbnailUrl: "/public/previews/ep-29.jpg",
    youtubeUrl: "https://youtu.be/gbsmYJXOanY?si=SOR4HoykxR7sQupe",
  },
  {
    id: "ep-28",
    title: "Как поступить в топовые вузы Гонконга",
    guestName: "Ли-Цун-Е Никита",
    guestRole: "Студент The Chinese University of Hong Kong (CUHK)",
    description: "В этом выпуске Duckcast × Pink Coded гостем стала Никита Ли-Цун-Е. Он — студент The Chinese University of Hong Kong (CUHK) по направлению Biomedical Engineering и student ambassador университета. Никита — выпускник РФМШ, получивший офферы со стипендиями от ведущих университетов Гонконга. В разговоре он делится личным опытом поступления. Рассказывает о системе стипендий, обучении и жизни в одном из сильнейших вузов Азии. Также он рассуждает о выборе университета, возможностях зарубежного образования и начале нового этапа для школьников, которые только планируют свой путь.",
    thumbnailUrl: "/public/previews/ep-28.jpg",
    youtubeUrl: "https://youtu.be/YdX-e3fdK6M?si=w9iWg-yktnKOz3Tm",
  },
  {
    id: "ep-27",
    title: "National Science Battles: the story",
    guestName: "National Science Battles: the story",
    guestRole: "Самый масштабный научный турнир Центральной Азии",
    description: "С 28.11 по 01.12 в Baiterek School of Science and Technology прошёл самый масштабный научный турнир Центральной Азии — объединение Almaty Math Battles, Almaty Physics Battles и National Chemistry Battles. В данном выпуске мы показали как прошел этот турнир, как проходила к нему подготовка и какой тяжелый труд стоит за этим всем. Также мы взяли интервью у членов орг.комитета чтобы они рассказали о турнире побольше. ",
    thumbnailUrl: "/public/previews/ep-27.jpg",
    youtubeUrl: "https://youtu.be/Mx_z5EPx2fA?si=IpmOH3YAr00-qvOR",
  },
  {
    id: "ep-26",
    title: "",
    guestName: "Асан Табылды ",
    guestRole: "Основатель проекта Icarus",
    description: "Гость выпуска — Асан Табылды, основатель проектов Icarus, победитель соревнования по ракетостроению от National Space Society (NSS) и участник международной конференции по развитию космоса в США. В интервью обсуждаем частную космонавтику, развитие аэрокосмических технологий и будущее ракетостроения. Надеемся,  что данный ролик будет для вас полезным и увлекательным.",
    thumbnailUrl: "/public/previews/ep-25.jpg",
    youtubeUrl: "https://youtu.be/GhdndESHDqY?si=fDfT7AKPnOn5W4X6",
  },
];

// ===== ГОСТИ =====
export const guests: Guest[] = [
  { id: "g1", name: "Асылбек Исахов", achievement: "Президент Казахско-Американского университета", photoUrl: "/public/guests/asylbek.jpg", episodeUrl: "https://youtu.be/gbsmYJXOanY?si=3bm4b0RezP1fc9U2" },
  { id: "g2", name: "Евгений Солоницын", achievement: "Учитель математики из Forbes Kazakhstan 30 under 30", photoUrl: "/public/guests/evgeniy.jpg", episodeUrl: "https://youtu.be/0kwgs6tlkCk?si=IrMEQQcu6BHnzy7a" },
  { id: "g3", name: "Юркевич Мирон", achievement: "Четырехкратный серебряный призер IMO", photoUrl: "/public/guests/miron.jpg", episodeUrl: "https://youtu.be/SD0AeJ4xUl0?si=wsZeLxo3O0Tg0SRa" },
  { id: "g4", name: "Алмаз Кунгожин", achievement: "Заместитель председателя НАО «Республиканская физико-математическая школа»", photoUrl: "/public/guests/almas.jpg", episodeUrl: "https://youtu.be/M8DzbWQOKuY?si=fkPbrLFXqP1FApbb" },
  { id: "g5", name: "Галымжан Жылгелдиев", achievement: "Тренер олимпийского чемпиона - Елдоса Сметова", photoUrl: "/public/guests/galymzhan.jpg", episodeUrl: "https://youtu.be/rxjfXUY7QxI?si=Sr1TMvnJSBBnOhHM" },
  { id: "g6", name: "Өтеу Қуаныш", achievement: "Организатор олимпиад по ИИ", photoUrl: "/public/guests/kuanysh.jpg", episodeUrl: "https://youtu.be/Ina6lsPFRsg?si=LPQ8kL4ZPYl5ui9G" },
  { id: "g7", name: "Алихан Серикулы", achievement: "Поступил в Brown University", photoUrl: "/public/guests/alikhan.jpg", episodeUrl: "https://youtu.be/v2UEbAi_wPE?si=CnCa2hxwxykSWEQ_" },
  { id: "g8", name: "Которова Вера", achievement: "Олимпиадница по математике, победитель Texhnovation", photoUrl: "/public/guests/vera.jpg", episodeUrl: "https://youtu.be/wyHfq8CDBmk?si=QqjrETXzYPjN2f6y" },
];

// ===== КОМАНДА =====
export const team: TeamMember[] = [
  {
    id: "t1",
    name: "Беремкулова Дайне",
    role: "Founder / Ведущий",
    description: "Придумала DuckCast и ведёт каждый выпуск. Ученица РФМШ Алматы. Instagram: @hydckkz",
    photoUrl: "/public/team/daine.png",
  },
  {
    id: "t2",
    name: "Абдиров Омар",
    role: "Co-founder / Текстовик",
    description: "Отвечает за сценарий, освещение, камеру и подготавливает помещение для выпуска. Ученик РФМШ Алматы.",
    photoUrl: "/public/team/omar.jpg",
  },
  {
    id: "t3",
    name: "Оразбек Темір",
    role: "Монтажёр выпусков",
    description: "Монтирует выпуски для канала. Ученик РФМШ Алматы.",
    photoUrl: "/public/team/temir.jpg",
  },
  {
    id: "t4",
    name: "Джаманкараева Сафия",
    role: "Глава SMM",
    description: "Отвечает за инстаграм аккаунт duckcast. Ученица РФМШ Алматы.",
    photoUrl: "/public/team/sofia.jpg",
  },
  {
    id: "t5",
    name: "Тоинбаева Нури",
    role: "SMM / Монтажер reels",
    description: "Монтирует рилсы для инстаграмма. Ученица НИШ Медеу г.Алматы",
    photoUrl: "/public/team/nuri.jpg",
  },
  {
    id: "t6",
    name: "Дүйсенғали Нұрислам",
    role: "Монтажер reels / Разработчик сайта",
    description: "Монтирует рилсы для инстаграмма, разработал сайт для duckcast. Ученик РФМШ Алматы. Instagram: @nurislam.forbes",
    photoUrl: "/public/team/nurislam.jpg",
  },
];

// ===== ССЫЛКИ =====
export const socialLinks = {
  instagram: "https://www.instagram.com/duckcast_/",
  youtube: "https://www.youtube.com/@Duckcast-1-i4r",
  contact: "https://wa.me/77082200206",
};

// ===== ТЕКСТЫ =====
export const siteTexts = {
  heroTitle: "Показываем, что за каждым успехом стоит своя уникальная история.",  // Мы рассказываем истории тех, кто добился большего.
  heroSubtitle: "DuckСast - это команда школьников, создающая интервью с людьми разных сфер, чтобы вдохновлять зрителей и показывать реальные возможности развития.",  // DuckCast — интервью с теми, кто уже прошёл путь.
  whyTitle: "Почему стоит прийти к нам ?",
  whyReasons: [
    "Мы работаем с аудиторией школьников и будущих лидеров",
    "Мы раскрываем личный путь, а не просто достижения",
    "Мы создаём качественный видеопродакшн",
    "Мы вдохновляем молодых зрителей",
  ],
  collaborationTitle: "Хотите стать гостем DuckCast?",
  collaborationText: "Если вы хотите рассказать свою историю и вдохновить новое поколение — свяжитесь с нами.",
};
