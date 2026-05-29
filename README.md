# RBC Solutions — الموقع الرسمي

موقع شركة **RBC Solutions**، شركة تشغيلية متكاملة تمتلك وتدير محفظة من العلامات التجارية الرائدة في قطاع الأغذية والمشروبات والحلول الرقمية الذكية.

---

## التقنيات المستخدمة

| التقنية | الاستخدام |
|---|---|
| React 18 | واجهة المستخدم |
| Vite | أداة البناء |
| Tailwind CSS 3 | التنسيق |
| React Router v6 | التنقل بين الصفحات |
| Framer Motion | الأنيميشن |
| Lucide React | الأيقونات |
| React Helmet Async | SEO |
| IBM Plex Sans Arabic | الخط |

---

## هيكل المشروع

```
rbc-solutions/
├── public/
│   └── logo.jpg              # الشعار للـ favicon والـ meta tags
├── src/
│   ├── assets/
│   │   ├── images.js         # ملف مركزي لاستيراد الصور
│   │   └── *.jpg             # صور الشعارات
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── WhatsAppButton.jsx
│   │   └── ScrollToTopButton.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── BrandsPage.jsx
│   │   ├── ServicesPage.jsx
│   │   ├── ContactPage.jsx
│   │   └── NotFoundPage.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env                      # متغيرات البيئة (لا ترفعه على GitHub)
├── .env.example              # نموذج متغيرات البيئة
└── index.html
```

---

## التشغيل المحلي

```bash
# 1. تثبيت الحزم
npm install

# 2. إنشاء ملف البيئة
cp .env.example .env
# ثم عدّل القيم في .env

# 3. تشغيل السيرفر المحلي
npm run dev
```

الموقع سيعمل على: `http://localhost:5173`

---

## البناء للإنتاج

```bash
npm run build
```

الملفات ستكون في مجلد `dist/`

---

## متغيرات البيئة

أنشئ ملف `.env` في جذر المشروع:

```env
VITE_PHONE=+966XXXXXXXXX
VITE_EMAIL=info@example.com
VITE_WHATSAPP=966XXXXXXXXX
VITE_ADDRESS=العنوان هنا
VITE_WORK_HOURS=أوقات العمل هنا
```

---

## الألوان الرئيسية

| اللون | الكود | الاستخدام |
|---|---|---|
| فيروزي | `#00BFA5` | اللون الأساسي للشركة |
| برتقالي | `#E8621A` | علامة شفزار |
| داكن | `#1A2332` | النصوص الرئيسية |

---

## الرفع على Vercel

1. ارفع المشروع على GitHub
2. اربط الـ repo بـ [Vercel](https://vercel.com)
3. اضبط `Root Directory` على `rbc-solutions`
4. أضف متغيرات البيئة في إعدادات Vercel
5. انشر 🚀
