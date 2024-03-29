import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
      resources:{
          en: {
              translations: {
                "Overview dashboard": "Overview dashboard",
              }
          },
          ar: {
              translations: {
                "Hi, welcome back!":   "مرحبا ، مرحبا بكم مرة أخرى!",
                "Your web analytics dashboard template":"قالب لوحة تحليلات الويب الخاصة بك",
                "Email":"البريد الإلكتروني",
                "Print":"طباعة",
                "Add User":"إضافة مستخدم",
                "Sales":"مبيعات",
                "Since last month":"منذ الشهر الماضي",
                "Affiliate":"انضم",
                "Show overview":"عرض نظرة عامة",
                "jan":"كانون الثاني",
                "Download Report":"قم بتنزيل التقرير",
                "Today Earnings":"الأرباح اليوم",
                "avg":"معدل",
                "sales":"مبيعات",
                "Product Sold":"بيع المنتج",
                "Today Orders":"بيع المنتج",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore":"أبجد هوز دولور الجلوس اماتأبجد هوز دولور الجلوس اماتأبجد هوز دولور الجلوس اماتأبجد هوز دولور الجلوس اماتأبجد هوز دولور الجلوس امات",
                "Learn More":"أنا أعرف أكثر",
                "Sales Revenue":"إيرادات المبيعات",
                "last 8 months":"آخر 8 أشهر",
                "Purchase History":"تاريخ الشراء",
                "Customer":"زبون",
                "Project":"مشروع",
                "Amount":"كمية",
                "Payment on hold":"الدفع في الانتظار",
                "Completed":"منجز",
                "Victor Watkins":"فيكتور واتكينز",
                "Angular Admin":"الزاوي الادارية",
                "Email verified":"تم التحقق من البريد الإلكتروني",
                "One page html":"صفحة واحدة أتش تي أم أل",
                "Declined":"رفض",
                "Harry Holloway":"هاري هولواي",
                "Payment on process":"الدفع على العملية",
                "VueJs Application":"تطبيق VueJs",
                "View all order history":"عرض كل سجل الطلبات",
                "Lorem ipsum dolor sitadipiscing elit, sed amet do eiusmod tempor we find a new solution":"لوريم إبسوم دولور سيتا لوريم إبسوم دولور سيتا لوريم إبسوم دولور سيتا لوريم إبسوم دولور سيتا",
                "Villa called Archagel":"فيلا تسمى أرغيل",
                "St, San Diego, CA ":"سانت ، سان دييغو ، كاليفورنيا",
                "mo":"مو",
                "Luxury villa in Hermo":"فيلا فاخرة في هيرمو",
                "Glendale, CA":"جلينديل ، كاليفورنيا",
                "House on the Clarita":"منزل في كلاريتا",
                "To do Task List":"للقيام قائمة المهام",
                "Add":"حفظ",
                "Recent Customers":"زبائن الجدد",
                "All contacts":"كل الاتصالات",
                "Cecelia Cooper":"سيسيليا كوبر",
                "Ada Burgess":"آدا بورغيس",
                "Dollie Lynch":"دوللي لينش",
                "Business Survey":"مسح الأعمال",
                "Jan":"كانون الثاني",
                "Dec":"ديسمبر",
                "Red Chair":"كرسي أحمر",
                "Home Decoration":"ديكور المنزل",
                "Gray Sofa":"أريكة رمادية",
                "Monday":"الإثنين",
                "October":"شهر اكتوبر",
                "Precipitation":"ترسيب",
                "Humidity":"رطوبة",
                "Wind":"ريح",
                "Clear Sky":"سماء صافية",
                "London, UK":"لندن، المملكة المتحدة",
                "TODAY":"اليوم",
                "MON":"الإثنين",
                "TUE":"الثلاثاء",
                "WED":"الأربعاء",
                "THU":"الخميس",
                "FRI":"يوم الجمعة",
                "SAT":"يوم السبت",
                "SUN":"الأحد",
                "Contact":"مكالمة",
                "Helpdesk":"مكتب المساعدة",
                "Chat with us":"دردش معنا",
                "It's awesome when we find a new solution":"انه لشيء رائع عندما نجد حلا جديدا",
                "ago":"منذ",
                "Report has been updated":"تم تحديث التقرير",
                "Analytics dashboard has been created#Slack":"تم إنشاء لوحة التحكم في التحليلات # سلاك",
                "Pending invoices":"فواتير تحتاج إلى الموافقة عليها",
                "Isabel Cross":"إيزابيل كروس",
                "Track Invoice":"تتبع الفاتورة",
                "Payment History":"تاريخ الدفع",
                "Carrie Parker":"كاري باركر",
                "Apr":"أبريل",
                "Mar":"مارس",
                "Browser stats":"احصائيات المتصفح",
                "opera mini":"أوبرا ميني",
                "Safari":"رحلات السفاري",
                "Chrome":"معدن الكروم",
                "Firefox":"ثعلب النار",
                "Explorer":"مستكشف",
                "Activity":"نشاط",
                "Wordpress":"وورد",
                "Margin":"حافة",
                "See Details":"انظر التفاصيل",
                "hr":"ساعة",
                "PM":"مساء",
                "Don Bennett":"دون بينيت",
                "km":"كيلومتر",
                "AM":"صباح",


                
                

                "Main":                         "الرئيسي",
                "Dashboard":                    "لوحة القيادة",
                "Widgets":                      "الحاجيات",
                "UI Elements":                  "عناصر واجهة المستخدم",
                "UI Features":                  "ميزات واجهة المستخدم",
                "Basic UI Elements":            "العناصر الأساسية",
                "Accordions":                   "أكورديون",
                "Buttons":                      "زر",
                "Badges":                       "شارات",
                "Breadcrumbs":                  "فتات الخبز",
                "Form Elements":                        "نماذج",
                "Data Representation":          "شرح البيانات",
                "Dropdowns":                    "قائِمة مُنْسَدِلة",
                "Modals":                       "الحوار",
                "Progress bar":                 "شريط التقدم",
                "Pagination":                   "ترقيم الصفحات",
                "Tabs":                         "علامات التبويب",
                "Typography":                   "الاسلوب والظهور",
                "Tooltips":                     "تلميح",
                "Advanced UI":                  "واجهة المستخدم المتقدمة",
                "Clipboard":                    "الحافظة",
                "Context menu":                 "قائمة السياق",
                "Sliders":                      "الانزلاق",
                "Carousel":                     "دائري",
                "Loaders":                      "رافعاتs",
                "Form elements":                "نماذج",
                "Basic Elements":               "عناصر النموذج",
                "Advanced Elements":            "العناصر المتقدمة",
                "Validation":                   "التحقق من صحة",
                "Wizard":                       "ساحر",
                "Editors":                      "المحررين",
                "Text Editor":                 "محرري النصوص",
                "Code Editor":                 "محرري الكود",
                "Charts":                       "الرسوم البيانية",
                "Tables":                       "الطاولةs",
                "Basic Table":                  "الجداول الأساسية",
                "Data Table":                   "جداول البيانات",
                "Sortable Table": "جدول قابل للفرز",
                "Popups":                       "يظهر فجأةs",
                "Notifications":                "إخطارات",
                "Icons":                        "الرموز",
                "Maps":                         "خرائط",
                "Sample Pages":                  "صفحات عينة",
                "User Pages":                   "صفحات المستخدم",
                "User Listing": "قائمة المستخدم",
                "Login":                        "تسجيل الدخول",
                "Login 2":                      " تسجيل الدخول 2 ",
                "Register":                     "سجل",
                "Register 2":                   " سجل 2 ",
                "Lockscreen":                   " قفل الشاشة ",
                "Error Pages":                  "صفحات خطأ",
                "General Pages":                "الصفحات العامة",
                "Blank Page":                   " صفحة فارغة ",
                "Profile":                      "الملف الشخصي ",
                "FAQ":"تعليمات",  
                "FAQ 2":                        " أسئلة مكررة 2 ",
                "News Grid":                    " شبكة الأخبار ",
                "Timeline":                     " الجدول الزمني ",
                "Search Results":               " نتائج البحث ",
                "Chats":                         " دردشة",
                "Tickets":                      " تذاكر ",
                "Gallery":                      " صالة عرض",
                "Todo List":                    "قوائم المهام",
                "E-commerce":                   "التجارة الإلكترونية",
                "Invoice":                      " فاتورة ",
                "Pricing":                " جدول التسعير ",
                "Apps":                 "تطبيقات",
                "E-mail":                       "البريد الإلكتروني",
                "Kanban Board" :"كانبان بورد",
                "Calendar":                     "التقويم",
                "Help":                         "مساعدة",
                "Documentation":                "توثيق",
                "Henry Klein":                  "هنري كلاين",
                "Take Tour":                    "خذ جولة",
                "Logout":                      "تسجيل خروج",
                "Gold Member": "عضو ذهبي",
                "Tree View":"عرض الشجرة",
                "Landing Page":"الصفحة المقصودة",
                "Product Catalogue":"بيان المنتج",
                "Project List":"قائمة المشروع",
                "Orders": "طلب",
                "Navigation":"قائمة طعام",
                "Account settings": "إعدادت الحساب",
                "Change Password":"تغيير كلمة السر",
                "To-do list":"حضر قائمة",
                "Richard V.Welsh":"ريتشارد ف. ولش",
                "Manager":"مدير",
                "New Project":"مشروع جديد",
                "French":"فرنسي",
                "Spain":"إسبانيا",
                "Latin":"لاتينية",
                "Japanese":"اليابانية",
                "Request":"طلب",
                "Invoices":"الفواتير",
                "Suport needed for user":"سوبورت ضروري للمستخدم",
                "Invoice for order is mailed":"يتم إرسال فاتورة الطلب عبر البريد",
                "New project will start tomorrow":"سيبدأ مشروع جديد غدا",
                "See all activity":"رؤية كل النشاط",
                "Dany Miles":"داني مايلز",
                "commented on your photo":"التعليق على صورتك",
                "James":"يوحنا",
                "posted a photo on your wall":"نشر صورة على الحائط الخاص بك",
                "Alex":"اليكس",
                "just mentioned you in his post":"لقد ذكرت لك للتو في المكتب",
                "View all activities":"عرض جميع الأنشطة",
                "Docs":"مستندات",


                "Reports":"تقارير",
                "PDF":"بي دي إف",
                "doc":"وثيقة",
                "Projects":"وثيقة",
                "View Project":"عرض المشاريع",
                "Edit Project":"تحرير المشاريع",
                "English":"الإنجليزية",
                "Arabic":"عربى",
                "User Options":"خيارات المستخدم",
                "Actions":"عمل",
                "Lock Account":"قفل الحساب",
                "Messages":"رسائل",
                "Mark send you a message":"مارك يرسل لك رسالة",
                "Minutes ago":"منذ 1 دقيقة",
                "Cregh send you a message":"إنشاء نرسل لك رسالة",
                "Profile picture updated":"تحديث صورة ملفك الشخصي",
                "Update dashboard" : "تحديث لوحة القيادة",
                "new messages":"4 رسائل جديدة",
                "Event today":"حدث اليوم",
                "Just a reminder that you have an event today":"مجرد تذكير بأن لديك حدث اليوم",
                "Launch Admin":"تشغيل المسؤول",
                "New admin wow":"مشرف جديد واو!",
                "See all notifications":"اطلع على جميع الإشعارات",
                "Inbox" : "صندوق الوارد",
                "All rights reserved":"كل الحقوق محفوظة",
                "Hand-crafted":"الحرف اليدوية",
                "made with":"مصنوع من",
                "Copyright":"حقوق التأليف والنشر",
                "Settings":"الإعدادات",
                "Advanced settings":"إعدادات متقدمة",
                "Create New Project":"إنشاء مشروع جديد",
                "Software Development": "تطوير البرمجيات",
                "UI Development": "تطوير واجهة المستخدم",
                "Software Testing":"اختبار البرمجيات",
                "See all projects": "رؤية جميع المشاريع",
                "Manage Accounts":"ادارة الحساب",
                "Check Inbox":"تحقق من بريدك الوارد",
                "Sign Out":"خروج",
                "Score":"أحرز هدفا",
                "Schedule" : "الطاولة",
                "New": "جديد",
                "You have":"عندك",
                "Application Error": "خطأ في تطبيق",
                "Just now":"الان فقط",
                "View all": "عرض الكل",
                "Private message":"رسالة خاصة",
                "New user registration":"تسجيل مستخدم جديد",
                "days ago":"أيام مضت",
                "unread mails":"رسائل غير مقروءة",
                "Marian Garner":"ماريان غارنر",
                "The meeting is cancelled":"تم الغاء الاجتماع",
                "David Grey":"ديفيد جراي",
                "Travis Jenkins":"ترافيس جنكينز",
                "new notifications":"إخطارات جديدة",
                "Activity Log":"سجل الأنشطة",

                "Creating component page":"إنشاء صفحة المكون",
                "build a js based app":"بناء التطبيق على أساس JS",
                "Meeting with Alisa":"مقابلة مع اليسا",
                "Call Sarah Graves":"استدعاء سارة القبور",
                "FRIENDS":"اصحاب",
                "See All":"عرض الكل",
                "Thomas Douglas":"توماس دوغلاس",
                "Available":"متاح",
                "Catherine":"كاثرين",
                "min":"دقيق",
                "Daniel Russell":"دانيال راسل",
                "James Richardson":"جيمس ريتشاردسون",
                "Madeline Kennedy":"مادلين كينيدي",
                "Sarah Graves":"مقابر سارة",
                "Feb": "شهر فبراير"

            }
          }
      },
      fallbackLng: "en",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;