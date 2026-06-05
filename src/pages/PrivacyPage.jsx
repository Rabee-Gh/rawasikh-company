import { Helmet } from 'react-helmet-async';

const sections = [
    {
        title: 'أولاً: أحكام عامة',
        content: 'تلتزم شركة رواسخ الأعمال (المشار إليها بـ "الشركة" أو "نحن")، بصفتها المالك والمشغل الحصري للموقع الإلكتروني المطور والمتاح عبر النطاق المعتمد rawasikhbusiness.com تحت الهوية التجارية RBC Solutions، بحماية خصوصية وسرية البيانات الشخصية والتجارية لكافة زوار وعملاء الموقع. تم إعداد هذه السياسة وفقاً للمتطلبات التنظيمية الواردة في نظام حماية البيانات الشخصية الصادر في المملكة العربية السعودية ولوائحه التنفيذية.',
        bullets: null,
    },
    {
        title: 'ثانياً: مسوغات وطبيعة البيانات المجموعة',
        content: 'نقوم بجمع البيانات التي تفصح عنها بمحض إرادتك واختيارك عند تعبئة نماذج التواصل أو طلب الخدمات عبر الموقع، وتشمل:',
        bullets: [
            'البيانات التعريفية: الاسم الكامل، اسم المنشأة أو الكيان التجاري، والمنصب الوظيفي.',
            'بيانات الاتصال: رقم الهاتف المعتمد، والبريد الإلكتروني.',
            'البيانات التشغيلية والاستثمارية: تفاصيل وطبيعة الخدمة المطلوبة، أو الأفكار والمفاهيم التجارية المراد مناقشتها وتطويرها.',
            'البيانات التقنية التلقائية: قد يقوم الموقع بجمع بيانات تقنية غير معرفة بالهوية بشكل تلقائي عبر ملفات تعريف الارتباط (Cookies)، مثل عنوان بروتوكول الإنترنت (IP) ونوع نظام التشغيل، لغايات تحسين الأداء التقني وتجربة المستخدم.',
        ],
    },
    {
        title: 'ثالثاً: أغراض معالجة البيانات',
        content: 'ينحصر استخدام ومعالجة البيانات المجموعة في الأغراض النظامية والتشغيلية التالية:',
        bullets: [
            'التواصل المباشر مع مقدم الطلب للرد على الاستفسارات ومناقشة تفاصيل التعاون المقترح.',
            'تقييم المتطلبات لتقديم الحلول والخدمات التشغيلية، وهندسة الكفاءة، ونظم الأتمتة والحلول الرقمية الملائمة للنشاط المعني.',
            'غايات التوثيق الداخلي، وتحسين جودة الخدمات الرقمية المقدمة عبر الموقع.',
        ],
    },
    {
        title: 'رابعاً: ضمانات السرية ومشاركة البيانات مع الغير',
        content: 'تتعهد شركة رواسخ الأعمال التزاماً قانونياً مطلقاً بعدم بيع، أو تأجير، أو إتاحة، أو تسريب، أو مشاركة أي من بياناتك الشخصية أو تفاصيل مشاريعك وأفكارك الاستثمارية والتجارية لأي أطراف خارجية أو جهات تسويقية دون الحصول على موافقتك الصريحة والخطية المسبقة. يقتصر الإفصاح عن البيانات للغير في الحالات الاستثنائية التي توجبها الأنظمة واللوائح النافذة في المملكة العربية السعودية، أو استجابةً لأمر قضائي أو قرار ملزم صادر عن الجهات الحكومية أو الرقابية المختصة.',
        bullets: null,
    },
    {
        title: 'خامساً: التدابير الأمنية لحفظ البيانات',
        content: 'تطبق الشركة معايير أمنية وتقنية وإدارية صارمة ومحدثة (بما في ذلك بروتوكولات التشفير والجدران النارية الآمنة) لضمان حماية البيانات من مخاطر الفقدان، أو الاختراق، أو التعديل، أو الوصول غير المصرح به من قبل أي جهة كانت.',
        bullets: null,
    },
    {
        title: 'سادساً: حقوق صاحب البيانات',
        content: 'بموجب الأنظمة المرعية في المملكة العربية السعودية، يحق لك ممارسة الحقوق التالية عبر قنوات التواصل الرسمية المتاحة في الموقع:',
        bullets: [
            'الحق في العلم والاطلاع على طبيعة البيانات المخزنة لدينا والغرض منها.',
            'الحق في طلب تصحيح، أو تحديث، أو إكمال أي بيانات غير دقيقة أو ناقصة.',
            'الحق في طلب إتلاف وحذف بياناتك الشخصية والتجارية نهائياً من أنظمتنا وقواعد بياناتنا التقنية ما لم تكن هناك عقود أو متطلبات نظامية قائمة توجب الاحتفاظ بها.',
        ],
    },
];

export default function PrivacyPage() {
    return (
        <div className="pt-20">
            <Helmet>
                <title>سياسة الخصوصية | RBC Solutions</title>
                <meta name="description" content="سياسة الخصوصية وسرية البيانات لشركة رواسخ الأعمال — RBC Solutions. حماية بياناتك وفق نظام حماية البيانات الشخصية في المملكة العربية السعودية." />
                <link rel="canonical" href="https://rawasikhbusiness.com/privacy" />
            </Helmet>

            {/* Hero */}
            <section className="relative py-20 sm:py-24 bg-gradient-to-br from-[#F0FDFB] to-white overflow-hidden">
                <div className="hero-blob w-[350px] h-[350px] bg-[#00BFA5] top-[-80px] right-[-80px]" />
                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="section-label mx-auto mb-5 reveal">وثيقة قانونية</div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1A2332] mb-4 reveal">
                        سياسة <span className="text-gradient-teal">الخصوصية</span> وسرية البيانات
                    </h1>
                    <div className="teal-divider reveal" />
                    <p className="text-[#718096] text-sm mt-5 reveal">
                        آخر تحديث: 6 أبريل 2026 — شركة رواسخ الأعمال | RBC Solutions
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-10">
                        {sections.map((sec, i) => (
                            <div key={i} className="card p-7 reveal" style={{ transitionDelay: `${i * 0.06}s` }}>
                                <h2 className="text-lg font-black text-[#1A2332] mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-[#E0F7F4] text-[#00BFA5] flex items-center justify-center text-sm font-black flex-shrink-0">
                                        {i + 1}
                                    </span>
                                    {sec.title}
                                </h2>
                                <p className="text-[#4A5568] text-sm leading-relaxed mb-4">{sec.content}</p>
                                {sec.bullets && (
                                    <ul className="space-y-2">
                                        {sec.bullets.map((b, j) => (
                                            <li key={j} className="flex items-start gap-3 text-sm text-[#4A5568]">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#00BFA5] flex-shrink-0 mt-2" />
                                                {b}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Contact note */}
                    <div className="mt-10 bg-[#E0F7F4] border border-[#00BFA5]/20 rounded-2xl p-6 text-center reveal">
                        <p className="text-[#00897B] text-sm font-semibold mb-1">للاستفسار عن سياسة الخصوصية</p>
                        <p className="text-[#4A5568] text-sm">تواصل معنا عبر البريد الإلكتروني: <span className="text-[#00BFA5] font-semibold">info@rawasikhbusiness.com</span></p>
                    </div>
                </div>
            </section>
        </div>
    );
}
