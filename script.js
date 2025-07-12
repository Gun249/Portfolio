// โค้ดสำหรับ Hamburger Menu (ของเดิม)
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    // ป้องกันไม่ให้ปิดเมนูเมื่อคลิกปุ่มสลับภาษา
    if (!n.hasAttribute('onclick')) {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }
}));


// 1. สร้าง Object เก็บคำแปลทั้งหมด
const translations = {
    en: {
        navAbout: "About me",
        navProjects: "Projects",
        navContact: "Contact me",
        heroTitle: "Gunthorn Siricharoenwat",
        heroViewProjects: "View Projects",
        aboutTitle: "About Me",
        aboutText: "Hello My name is Gunthorn Siricharoenwat (Nickname: Gun). <br>I’m currently a 4th-year student at Bangkok University, majoring in Computer Science under the School of Technology and Innovation. I have a strong interest in backend development, particularly in API design and database management. I’m passionate about learning new technologies and committed to growing as a backend developer who can contribute to building scalable and efficient systems.",
        eduTitle: "Education",
        eduSchool1: "Benjamin School",
        eduMajor1: "English-Mathematics Program",
        eduGpa1: "GPA: 2.85",
        eduSchool2: "Bangkok University",
        eduMajor2: "Computer Science",
        eduDate2: "2022 - Present",
        eduGpa2: "GPA: 3.70",
        skillsTitle: "My Skills",
        softSkillsTitle: "My Soft Skills",
        skillTeamwork: "Teamwork",
        skillPunctuality: "Punctuality",
        skillSelfLearning: "Self-learning",
        skillAdaptability: "Adaptability",
        projectsTitle: "Projects",
        project1Title: "DamAlert",
        project1Desc: "A real-time monitoring system for dam water levels to provide timely alerts for evacuation and flood preparedness.",
        project2Title: "CookMate",
        project2Desc: "CookMate is a sophisticated mobile application designed to provide users with an engaging and intuitive platform for learning, creating, and sharing diverse recipes.",
        project3Title: "AI-Righthere",
        project3Desc: "AI-righthere is an intelligent agent designed to analyze the emotional tone of users' diary entries. By using Natural Language Processing (NLP) and sentiment analysis techniques, the system can detect the user's emotional states—such as happiness, sadness, stress, or anxiety—from their written reflections. This allows the platform to provide personalized feedback, track emotional trends over time, and offer support to promote mental well-being.",
        project3Role: "My position is Backend dev",
        viewOnGithub: "View on GitHub",
        contactTitle: "Contact me",
        copyrightText: `© ${new Date().getFullYear()} Gunthorn. All rights reserved.`
    },
    th: {
        navAbout: "เกี่ยวกับฉัน",
        navProjects: "ผลงาน",
        navContact: "ติดต่อฉัน",
        heroTitle: "กันต์ธร ศิริเจริญวัฒน์",
        heroViewProjects: "ดูผลงาน",
        aboutTitle: "เกี่ยวกับฉัน",
        aboutText: "สวัสดีครับ ผมชื่อกันต์ธร ศิริเจริญวัฒน์ (ชื่อเล่น: กันต์) <br>ปัจจุบันเป็นนักศึกษาชั้นปีที่ 4 ที่มหาวิทยาลัยกรุงเทพ สาขาวิทยาการคอมพิวเตอร์ คณะเทคโนโลยีสารสนเทศและนวัตกรรม มีความสนใจในการพัฒนา Backend โดยเฉพาะการออกแบบ API และการจัดการฐานข้อมูล มีความกระตือรือร้นในการเรียนรู้เทคโนโลยีใหม่ๆ และมุ่งมั่นที่จะเติบโตในสายงาน Backend เพื่อสร้างระบบที่มีประสิทธิภาพและขยายขนาดได้",
        eduTitle: "การศึกษา",
        eduSchool1: "โรงเรียนเบญจมินทร์",
        eduMajor1: "แผนการเรียนอังกฤษ-คณิตศาสตร์",
        eduGpa1: "เกรดเฉลี่ย: 2.85",
        eduSchool2: "มหาวิทยาลัยกรุงเทพ",
        eduMajor2: "สาขาวิทยาการคอมพิวเตอร์",
        eduDate2: "2565 - ปัจจุบัน",
        eduGpa2: "เกรดเฉลี่ย: 3.70",
        skillsTitle: "ทักษะของฉัน",
        softSkillsTitle: "ทักษะด้านสังคม",
        skillTeamwork: "การทำงานเป็นทีม",
        skillPunctuality: "ตรงต่อเวลา",
        skillSelfLearning: "เรียนรู้ด้วยตนเอง",
        skillAdaptability: "ปรับตัว",
        projectsTitle: "ผลงาน",
        project1Title: "DamAlert",
        project1Desc: "ระบบตรวจสอบระดับน้ำในเขื่อนแบบเรียลไทม์ เพื่อแจ้งเตือนการอพยพและเตรียมความพร้อมรับมือน้ำท่วม",
        project2Title: "CookMate",
        project2Desc: "แอปพลิเคชันมือถือสำหรับเรียนรู้ สร้าง และแบ่งปันสูตรอาหารที่หลากหลาย พร้อมแพลตฟอร์มที่ใช้งานง่ายและน่าสนใจ",
        project3Title: "AI-righthere",
        project3Desc: "AI-righthere คือเอเจนต์อัจฉริยะที่ถูกออกแบบมาเพื่อวิเคราะห์โทนอารมณ์จากข้อความที่ผู้ใช้บันทึกลงในไดอารี่ โดยใช้เทคนิคการประมวลผลภาษาธรรมชาติ (Natural Language Processing - NLP) และการวิเคราะห์ความรู้สึก (Sentiment Analysis) ระบบสามารถตรวจจับสภาวะอารมณ์ของผู้ใช้ เช่น ความสุข ความเศร้า ความเครียด หรือความวิตกกังวล จากข้อความที่เขียนขึ้นได้ ซึ่งช่วยให้แพลตฟอร์มสามารถให้คำแนะนำเฉพาะบุคคล ติดตามแนวโน้มทางอารมณ์ในระยะยาว และสนับสนุนสุขภาวะทางใจของผู้ใช้ได้อย่างมีประสิทธิภาพ",
        project3Role: "ตำแหน่ง: Backend Developer",
        viewOnGithub: "ดูบน GitHub",
        contactTitle: "ติดต่อฉัน",
        copyrightText: `© ${new Date().getFullYear()} กันต์ธร. สงวนลิขสิทธิ์`
    }
};

// 2. สร้างฟังก์ชันสำหรับเปลี่ยนภาษา
function setLanguage(language) {
    // หา elements ทั้งหมดที่มี data-key
    document.querySelectorAll('[data-key]').forEach(elem => {
        const key = elem.dataset.key;
        if (translations[language] && translations[language][key]) {
            // ใช้ innerHTML เพื่อให้แท็ก <br> ทำงานได้
            elem.innerHTML = translations[language][key];
        }
    });
    // บันทึกภาษาที่เลือกลงใน localStorage เพื่อให้จำค่าได้
    localStorage.setItem('language', language);
}

// 3. ตรวจสอบว่าเคยเลือกภาษาไว้หรือไม่ ตอนเปิดหน้าเว็บ
document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('language') || 'en'; // ถ้าไม่มีให้ใช้ 'en' เป็นค่าเริ่มต้น
    setLanguage(savedLanguage);
});

// ===== END: โค้ดสำหรับสลับภาษา =====