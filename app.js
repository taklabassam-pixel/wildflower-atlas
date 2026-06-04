// ⚡ عند تحميل الصفحة بالكامل، ابدأ برص بطاقات الزهور البرية
document.addEventListener('DOMContentLoaded', () => {
    renderFlowerCards();
});

/**
 * 🖼️ دالة بناء ورص بطاقات الزهور في شبكة العرض (Grid)
 */
function renderFlowerCards() {
    const galleryGrid = document.getElementById('galleryGrid');
    
    // تأمين الحاوية في حال عدم وجودها في الـ HTML
    if (!galleryGrid) return;

    // توليد كود الـ HTML لكل بطاقة زهرة برية بذكاء
    galleryGrid.innerHTML = flowersData.map(flower => `
        <div class="flower-card" onclick="openFlowerModal(${flower.id})">
            <div class="card-image-wrap">
                <img src="${flower.image}" alt="${flower.name_ar}" loading="lazy">
            </div>
            <div class="card-body">
                <h3 class="flower-title">${flower.name_ar}</h3>
                <span class="flower-season-tag">📅 ${flower.season.split('(')[0].trim()}</span>
            </div>
        </div>
    `).join('');
}

/**
 * 🌌 دالة فتح النافذة المنبثقة وحقن تفاصيل الزهرة المحددة
 * @param {number} id معرّف الزهرة الفريد
 */
function openFlowerModal(id) {
    const flower = flowersData.find(f => f.id === id);
    if (!flower) return;

    // حقن البيانات داخل عناصر النافذة المنبثقة
    document.getElementById('modalImg').src = flower.image;
    document.getElementById('modalImg').alt = flower.name_ar;
    document.getElementById('modalName').innerText = flower.name_ar;
    document.getElementById('modalScientific').innerText = flower.scientific_name;
    document.getElementById('modalSeason').innerText = `📅 الموسم: ${flower.season}`;
    document.getElementById('modalEnv').innerText = `📍 البيئة: ${flower.environment}`;
    document.getElementById('modalStory').innerText = flower.story;

    // إظهار النافذة بحركة انسيابية
    const modal = document.getElementById('flowerModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // منع تمرير الصفحة الخلفية أثناء فتح النافذة
}

/**
 * ❌ دالة إغلاق النافذة المنبثقة
 */
function toggleModal(show) {
    const modal = document.getElementById('flowerModal');
    if (show) {
        modal.classList.add('active');
    } else {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto'; // إعادة التمرير الطبيعي للصفحة
    }
}

/**
 * 🛡️ دالة لتأمين الإغلاق عند الضغط خارج صندوق المحتوى الأبيض
 */
function closeModal(event) {
    const modalContent = document.querySelector('.modal-content');
    // إذا ضغط المستخدم على الخلفية الشفافة وليس على الصندوق الأبيض، أغلق النافذة
    if (event.target === event.currentTarget) {
        toggleModal(false);
    }
}

