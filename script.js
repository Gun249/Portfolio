// โค้ดสำหรับ Hamburger Menu (ของเดิม)
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    // ป้องกันไม่ให้ปิดเมนูเมื่อคลิกปุ่มสลับภาษาหรือปุ่มสลับธีม
    if (!n.hasAttribute('onclick') && !n.closest('.theme-toggle')) {
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
        aboutText: "Hello My name is Gunthorn Siricharoenwat (Nickname: Gun). <br>I’m currently a 4th-year student at Bangkok University, majoring in Computer Science under the School of Technology and Innovation. I have interest in backend development, particularly in API design and database management. I’m passionate about learning new technologies and committed to growing as a backend developer who can contribute to building scalable and efficient systems.",
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
        project1Desc: "DamAlert is a dam monitoring project. I developed the backend system of this project, which handles data integration from the Royal Irrigation Department’s API to fetch dam water levels and dam locations across Thailand. Additionally, I integrated the OpenWeather API to retrieve rainfall data for monitoring precipitation levels. The system also supports map features on the website to visualize dam locations and weather information.",
        project2Title: "CookMate",
        project2Desc: "CookMate is a recipe management application.I was responsible for developing the backend system, including user authentication, database integration, and features for adding, editing, and saving favorite recipes.",
        project3Title: "Righthere",
        project3Desc: "RightHere is a diary application with built-in AI that analyzes users’ emotions when they log their entries. I was responsible for developing and training the emotion analysis and recommendation AI system. The project used two models: <br><br> 1. The first model is a custom-trained model for assessing user emotions based on their diary entries. <br><br> 2. The second model is Gemini, which has been fine-tuned to provide appropriate and natural emotional advice.",
        project4Title: "Task Manager",
        project4Desc: "Task Manager is a project management tool that allows team leaders to input project details. The system then generates subtasks and related questions for team members. After team members submit their answers, the system analyzes their responses to identify suitable roles and matches them with the appropriate tasks. <br><br> I was responsible for developing the AI system, which consists of two main components: <br><br> The Gemini model, which performs two key functions: <br><br> 1.Analyzes project input from team leaders to generate subtasks and questions <br><br> 2.Analyzes team members’ responses to determine their most suitable roles <br><br> A second AI model that I developed and trained using a Siamese Neural Network, which matches each member’s role with the most appropriate task based on the project context",
        viewOnGithub: "View on GitHub",
        contactTitle: "Contact me",
        copyrightText: `© ${new Date().getFullYear()} Gunthorn. All rights reserved.`,
        navExperience: "Experience",
                experienceTitle: "Experience",
        expCompany1: "Chatrium Grand Bangkok",
        expRole1: "IT Support Intern",
        expDate1: "May 2025 - August 2025",
        expDesc1: `
            <li>Provided computer-related support to users within the hotel, including guests and staff.</li>
            <li>Installed and maintained the hotel's internal computer systems.</li>
            <li>Offered guidance and assistance to users regarding technical issues.</li>
            <li>Developed Python code to automate Excel.</li>
            <li>Developed internal hotel projects, such as a meeting room booking system and a website chatbot for general inquiries.</li>
        `,
    },
    th: {
        navAbout: "เกี่ยวกับฉัน",
        navProjects: "ผลงาน",
        navExperience: "ประสบการณ์",
        navContact: "ติดต่อฉัน",
        heroTitle: "กันต์ธร ศิริเจริญวัฒน์",
        heroViewProjects: "ดูผลงาน",
        aboutTitle: "เกี่ยวกับฉัน",
        aboutText: "สวัสดีครับ ผมชื่อกันต์ธร ศิริเจริญวัฒน์ (ชื่อเล่น: กันต์) <br>ปัจจุบันเป็นนักศึกษาชั้นปีที่ 4 ที่มหาวิทยาลัยกรุงเทพ สาขาวิทยาการคอมพิวเตอร์ คณะเทคโนโลยีสารสนเทศและนวัตกรรม มีความสนใจในการพัฒนา Backend โดยเฉพาะการออกแบบ API และการจัดการฐานข้อมูล ชอบในการเรียนรู้เทคโนโลยีใหม่ๆ และมุ่งมั่นที่จะเติบโตในสายงาน Backend เพื่อสร้างระบบที่มีประสิทธิภาพและขยายขนาดได้",
        eduTitle: "การศึกษา",
        eduSchool1: "โรงเรียนเบญจมินทร์",
        eduMajor1: "แผนการเรียนอังกฤษ-คณิตศาสตร์",
        eduGpa1: "เกรดเฉลี่ย: 2.85",
        eduSchool2: "มหาวิทยาลัยกรุงเทพ",
        eduMajor2: "สาขาวิทยาการคอมพิวเตอร์",
        eduDate2: "2565 - ปัจจุบัน",
        eduGpa2: "เกรดเฉลี่ย: 3.70",
        skillTeamwork: "การทำงานเป็นทีม",
        skillPunctuality: "ตรงต่อเวลา",
        skillSelfLearning: "เรียนรู้ด้วยตนเอง",
        skillAdaptability: "ปรับตัว",
        projectsTitle: "ผลงาน",
        project1Title: "DamAlert",
        project1Desc: "DamAlert เป็นโปรเจกต์สำหรับติดตามสถานการณ์เขื่อนในประเทศไทย ผมรับผิดชอบในการพัฒนาระบบหลังบ้านของโปรเจกต์นี้ โดยเชื่อมต่อกับ API ของกรมชลประทานเพื่อดึงข้อมูลระดับน้ำและตำแหน่งของเขื่อนต่างๆ ทั่วประเทศ รวมถึงเชื่อมต่อกับ OpenWeather API เพื่อดึงข้อมูลปริมาณน้ำฝนที่ตกในพื้นที่รอบเขื่ออน ระบบยังรองรับการแสดงผลข้อมูลเหล่านี้บนแผนที่ในเว็บไซต์ เพื่อให้ผู้ใช้งานสามารถติดตามสถานการณ์น้ำได้อย่างสะดวกและเข้าใจง่าย",
        project2Title: "CookMate",
        project2Desc: "CookMate เป็นแอปพลิเคชันสำหรับจดและจัดการสูตรอาหาร ผมรับผิดชอบในการพัฒนาระบบหลังบ้านของแอป โดยดูแลในส่วนของระบบยืนยันตัวตน (Authentication), การเชื่อมต่อและจัดการฐานข้อมูล รวมถึงฟีเจอร์สำหรับเพิ่ม แก้ไข และจัดเก็บสูตรอาหารที่ผู้ใช้ชื่นชอบ (Favorites)",
        project3Title: "AI-righthere",
        project3Desc: "RightHere เป็นแอปพลิเคชันสำหรับจดไดอารี่ที่มี AI คอยวิเคราะห์อารมณ์ของผู้ใช้ในขณะบันทึก ผมรับผิดชอบในการพัฒนาและฝึกสอนโมเดล AI สำหรับวิเคราะห์อารมณ์และให้คำแนะนำ โดยใช้โมเดล 2 แบบ ได้แก่ <br><br> 1. โมเดลแรกเป็นโมเดลที่ผมเทรนขึ้นมาเองสำหรับการประเมินอารมณ์ของผู้ใช้ <br><br> 2. โมเดลที่สองคือ Gemini ซึ่งผ่านการ Fine-tune เพื่อให้เหมาะสมกับการให้คำแนะนำด้านอารมณ์อย่างเหมาะสมและเป็นธรรมชาติ",
        project4Title : "Task Manager",
        project4Desc : "Task Manager เป็นเครื่องมือสำหรับการจัดการโปรเจกต์ที่ช่วยให้หัวหน้าทีมสามารถป้อนรายละเอียดโปรเจกต์ ระบบจะสร้างงานย่อยและคำถามที่เกี่ยวข้องสำหรับสมาชิกทีม หลังจากที่สมาชิกทีมตอบคำถาม ระบบจะวิเคราะห์คำตอบเพื่อหาบทบาทที่เหมาะสมที่สุดและจับคู่กับงานที่เหมาะสม <br><br> ผมรับผิดชอบในการพัฒนาระบบ AI ซึ่งประกอบด้วย 2 ส่วนหลัก ได้แก่ <br><br> โมเดล Gemini ที่ทำหน้าที่ 2 อย่างคือ <br><br> 1. วิเคราะห์ข้อมูลโปรเจกต์จากหัวหน้าทีมเพื่อสร้างงานย่อยและคำถาม <br><br> 2. วิเคราะห์คำตอบของสมาชิกทีมเพื่อหาบทบาทที่เหมาะสมที่สุด <br><br> โมเดล AI ที่ผมพัฒนาและฝึกสอนโดยใช้ Siamese Neural Network เพื่อจับคู่บทบาทของสมาชิกกับงานที่เหมาะสมที่สุดตามบริบทของโปรเจกต์",
        viewOnGithub: "ดูบน GitHub",
        contactTitle: "ติดต่อฉัน",
        copyrightText: `© ${new Date().getFullYear()} กันต์ธร. สงวนลิขสิทธิ์`,
        experienceTitle: "ประสบการณ์",
        expCompany1: "Chatrium Grand Bangkok",
        expRole1: "IT Support Intern",
        expDate1: "พฤษภาคม ปี 2025 - สิงหาคม 2025 ",
        expDesc1: `
            <li>Support ผู้ใช้งานภายในโรงแรมที่เกี่ยวกับคอมพิวเตอร์ เช่น ลูกค้า พนักงานในโรงแรม</li>
            <li>ติดตั้งและดูแลระบบคอมพิวเตอร์ภายในโรงแรม</li>
            <li>ให้คำแนะนำและช่วยเหลือผู้ใช้งานเกี่ยวกับปัญหาทางเทคนิค</li>
            <li>ได้พัฒนา Code Python สำหรับ Automate Excel</li>
            <li>ได้พัฒนาโปรเจคต่างๆภายในโรงแรมเช่น Project ระบบจองห้องประชุม , Chatbot สำหรับคอยตอบปัญหาทั่วไปกับข้อมูลทั่วไปในหน้าเว็บไซต์</li>
        `,
        skillsTitle: "ทักษะทางเทคนิค",
        softSkillsTitle: "ทักษะส่วนบุคคล"
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
    // เริ่มต้นธีม
    initializeTheme();
    
    // เริ่มต้นภาษา
    const savedLanguage = localStorage.getItem('language') || 'en'; // ถ้าไม่มีให้ใช้ 'en' เป็นค่าเริ่มต้น
    setLanguage(savedLanguage);
});

// ===== END: โค้ดสำหรับสลับภาษา =====

// ===== Theme Toggle Functionality =====
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    const themeIcon = document.getElementById('theme-icon');
    
    document.documentElement.setAttribute('data-theme', newTheme);
    
    // เปลี่ยนไอคอน
    if (newTheme === 'dark') {
        themeIcon.className = 'fas fa-sun';
    } else {
        themeIcon.className = 'fas fa-moon';
    }
    
    // บันทึกธีมลงใน localStorage
    localStorage.setItem('theme', newTheme);
}

// ตรวจสอบธีมที่บันทึกไว้เมื่อโหลดหน้า
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const themeIcon = document.getElementById('theme-icon');
    
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    if (savedTheme === 'dark') {
        themeIcon.className = 'fas fa-sun';
    } else {
        themeIcon.className = 'fas fa-moon';
    }
}

// ===== END: Theme Toggle Functionality =====