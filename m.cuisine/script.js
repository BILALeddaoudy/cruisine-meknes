const CONFIG = {
    // Contact Information
    instagram: 'https://www.instagram.com/CUISI_NESMODERNESMEKNES',
    whatsapp: 'https://wa.me/212660102943',
    tiktok: '', // Add your TikTok URL when ready
    
    // Translations
    translations: {
        fr: {
            nav: {
                home: 'Accueil',
                about: 'À propos',
                services: 'Services',
                gallery: 'Galerie',
                contact: 'Contact'
            },
            hero: {
                title: 'DESIGN D\'INTÉRIEUR MODERNE',
                subtitle: 'Transformez vos espaces en œuvres d\'art à Meknès',
                cta1: 'Découvrir nos services',
                cta2: 'Nous contacter'
            },
            about: {
                title: 'DESIGN D\'INTÉRIEUR MODERNE',
                subtitle: 'Transformez vos cuisines et chambres',
                description: 'Nous offrons un service de design d\'intérieur spécialisé dans la transformation de cuisines et de chambres en espaces élégants et modernes. Notre service comprend des consultations personnalisées, la création de designs et la mise en œuvre pratique d\'esthétiques modernes.'
            },
            services: {
                title: 'NOS SERVICES',
                service1: {
                    title: 'Consultation Personnalisée',
                    description: 'Nous travaillons en étroite collaboration avec nos clients pour sélectionner le mobilier moderne, les finitions, les schémas de couleurs et les agencements.'
                },
                service2: {
                    title: 'Design & Planification',
                    description: 'Conseils d\'experts sur l\'éclairage, la planification spatiale et les tendances du design pour une sensation fraîche et moderne.'
                },
                service3: {
                    title: 'Réalisation Complète',
                    description: 'Nous supervisons l\'ensemble du processus, de la conceptualisation à l\'installation finale, en offrant un look contemporain haut de gamme.'
                }
            },
            gallery: {
                title: 'NOS RÉALISATIONS'
            },
            contact: {
                title: 'CONTACTEZ-NOUS',
                phone: 'Téléphone',
                email: 'Email',
                address: 'Adresse',
                social: 'Suivez-nous',
                addressText: 'Meknès, Maroc'
            },
            copyright: 'Tous droits réservés.'
        },
        ar: {
            nav: {
                home: 'الرئيسية',
                about: 'من نحن',
                services: 'الخدمات',
                gallery: 'المعرض',
                contact: 'اتصل بنا'
            },
            hero: {
                title: 'التصميم الداخلي الحديث',
                subtitle: 'حوّل مساحاتك إلى تحف فنية في مكناس',
                cta1: 'اكتشف خدماتنا',
                cta2: 'اتصل بنا'
            },
            about: {
                title: 'التصميم الداخلي الحديث',
                subtitle: 'حوّل مطابخك وغرفك',
                description: 'نقدم خدمة تصميم داخلي متخصصة في تحويل المطابخ والغرف إلى مساحات أنيقة وعصرية. تشمل خدمتنا استشارات شخصية وإنشاء التصاميم والتنفيذ العملي للجماليات الحديثة.'
            },
            services: {
                title: 'خدماتنا',
                service1: {
                    title: 'استشارة شخصية',
                    description: 'نعمل بشكل وثيق مع عملائنا لاختيار الأثاث الحديث والتشطيبات وأنظمة الألوان والتخطيطات.'
                },
                service2: {
                    title: 'التصميم والتخطيط',
                    description: 'إرشادات الخبراء حول الإضاءة والتخطيط المكاني واتجاهات التصميم للحصول على إحساس حديث ومنعش.'
                },
                service3: {
                    title: 'التنفيذ الكامل',
                    description: 'نشرف على العملية بأكملها، من الفكرة إلى التركيب النهائي، مع تقديم مظهر معاصر راقي.'
                }
            },
            gallery: {
                title: 'أعمالنا'
            },
            contact: {
                title: 'اتصل بنا',
                phone: 'الهاتف',
                email: 'البريد الإلكتروني',
                address: 'العنوان',
                social: 'تابعنا',
                addressText: 'مكناس، المغرب'
            },
            copyright: 'جميع الحقوق محفوظة.'
        }
    }
};

// ============================================
// STATE MANAGEMENT
// ============================================

let currentLanguage = 'fr';
let currentSlide = 0;
const slidesPerView = {
    mobile: 1,
    tablet: 2,
    desktop: 3
};

// ============================================
// LANGUAGE SWITCHING
// ============================================

function toggleLanguage() {
    currentLanguage = currentLanguage === 'fr' ? 'ar' : 'fr';
    updateLanguage();
}

function updateLanguage() {
    const t = CONFIG.translations[currentLanguage];
    
    // Update HTML lang and dir attributes
    document.documentElement.lang = currentLanguage;
    document.body.className = currentLanguage === 'ar' ? 'rtl' : '';
    
    // Update language toggle button
    document.getElementById('languageToggle').textContent = currentLanguage === 'fr' ? 'AR' : 'FR';
    
    // Update all translatable elements
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        const keys = key.split('.');
        let value = t;
        
        for (const k of keys) {
            value = value[k];
        }
        
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = value;
        } else {
            element.textContent = value;
        }
    });
    
    // Update copyright text
    document.getElementById('copyrightText').textContent = 
        `© 2025 Cuisine Meknes. ${t.copyright}`;
}

// ============================================
// MOBILE MENU
// ============================================

function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    const menuIcon = document.getElementById('menuIcon');
    const closeIcon = document.getElementById('closeIcon');
    
    mobileNav.classList.toggle('hidden');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
}

function closeMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    const menuIcon = document.getElementById('menuIcon');
    const closeIcon = document.getElementById('closeIcon');
    
    mobileNav.classList.add('hidden');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
}

// ============================================
// SMOOTH SCROLLING
// ============================================

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Add smooth scrolling to all anchor links
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
});

// ============================================
// CAROUSEL
// ============================================

function getSlidesPerView() {
    const width = window.innerWidth;
    if (width >= 1024) return slidesPerView.desktop;
    if (width >= 768) return slidesPerView.tablet;
    return slidesPerView.mobile;
}

function updateCarousel() {
    const track = document.getElementById('carouselTrack');
    const items = track.children;
    const totalSlides = items.length;
    const perView = getSlidesPerView();
    const maxSlide = totalSlides - perView;
    
    // Keep current slide in bounds
    if (currentSlide > maxSlide) {
        currentSlide = maxSlide;
    }
    if (currentSlide < 0) {
        currentSlide = 0;
    }
    
    const slideWidth = 100 / perView;
    const translateX = -(currentSlide * slideWidth);
    track.style.transform = `translateX(${translateX}%)`;
}

function nextSlide() {
    const track = document.getElementById('carouselTrack');
    const totalSlides = track.children.length;
    const perView = getSlidesPerView();
    const maxSlide = totalSlides - perView;
    
    if (currentSlide < maxSlide) {
        currentSlide++;
        updateCarousel();
    }
}

function previousSlide() {
    if (currentSlide > 0) {
        currentSlide--;
        updateCarousel();
    }
}

// Handle window resize
let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        updateCarousel();
    }, 250);
});

// ============================================
// SOCIAL MEDIA HANDLERS
// ============================================

function handleInstagramClick() {
    window.open(CONFIG.instagram, '_blank');
}

function handleWhatsAppClick() {
    window.open(CONFIG.whatsapp, '_blank');
}

function handleTikTokClick() {
    if (CONFIG.tiktok) {
        window.open(CONFIG.tiktok, '_blank');
    } else {
        alert('TikTok link will be added soon!');
    }
}

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize language
    updateLanguage();
    
    // Initialize carousel
    updateCarousel();
    
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
});
