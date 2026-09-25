const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const startTag = '<!-- ==========Banner Section Starts Here========== -->';
const endTag = '<!-- ==========Footer Section Starts Here========== -->';

const startIndex = html.indexOf(startTag);
const endIndex = html.indexOf(endTag);

if (startIndex !== -1 && endIndex !== -1) {
    const newHtml = `
    <div class="home-v2">
        <!-- 1. TOP HERO SECTION -->
        <section class="home-hero-v2 position-relative d-flex align-items-center">
            <!-- Background Slider -->
            <div id="homeHeroSlider" class="carousel slide carousel-fade position-absolute w-100 h-100 top-0 start-0 z-0" data-bs-ride="carousel" data-bs-pause="false" data-bs-interval="4000">
                <div class="carousel-inner w-100 h-100">
                    <div class="carousel-item active w-100 h-100 home-hero-slide-v2" style="background-image: url('assets/images/banner/bg/banner1.webp');"></div>
                    <div class="carousel-item w-100 h-100 home-hero-slide-v2" style="background-image: url('assets/images/banner/bg/banner2.webp');"></div>
                </div>
                <!-- Minimal indicators -->
                <div class="carousel-indicators home-hero-indicators-v2 mb-4">
                    <button type="button" data-bs-target="#homeHeroSlider" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#homeHeroSlider" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
            </div>
            
            <!-- Dark Overlay -->
            <div class="home-hero-overlay-v2 position-absolute w-100 h-100 top-0 start-0 z-1"></div>

            <!-- Content -->
            <div class="container position-relative z-2">
                <div class="row">
                    <div class="col-lg-7 home-hero-content-v2" data-aos="fade-up">
                        <span class="home-hero-eyebrow-v2">MSMEA KERALA</span>
                        <h1 class="home-hero-title-v2">Empowering MSMEs.<br>Enabling Entrepreneurs.</h1>
                        <p class="home-hero-desc-v2">
                            Micro, Small Medium Entrepreneurs Association (MSMEA) supports entrepreneurs in Kerala through business networking, financial awareness, market access, technology adoption and institutional support.
                        </p>
                        <div class="home-hero-actions-v2 mt-4">
                            <a href="#" class="home-hero-cta-v2 text-decoration-none">Join MSMEA</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 2. INTRODUCTION / ABOUT MSMEA -->
        <section class="about-preview-v2 py-5 bg-light">
            <div class="container">
                <div class="row align-items-center g-5">
                    <div class="col-lg-6" data-aos="fade-right">
                        <span class="section-eyebrow-v2">ABOUT MSMEA</span>
                        <h2 class="section-title-v2 mb-4">Building a Stronger MSME Ecosystem</h2>
                        <p class="section-text-v2 text-muted mb-3">
                            The Micro Small Medium Entrepreneurs Association (MSMEA) is an entrepreneur-driven organisation established in Thiruvananthapuram to represent, support and empower Micro, Small and Medium Enterprises.
                        </p>
                        <p class="section-text-v2 text-muted mb-3">
                            MSMEA works to create a stronger ecosystem where entrepreneurs can access knowledge, meaningful business connections, financial awareness, market opportunities and institutional support.
                        </p>
                        <p class="section-text-v2 text-muted mb-4">
                            Our goal is to help entrepreneurs navigate challenges, discover opportunities and build sustainable businesses.
                        </p>
                        <a href="about.html" class="lab-btn outline-btn-v2">Learn More About MSMEA</a>
                    </div>
                    <div class="col-lg-6 position-relative" data-aos="fade-left">
                        <img src="assets/images/about/04.jpg" alt="About MSMEA" class="img-fluid rounded shadow w-100">
                        <div class="about-stat-v2 shadow-sm">
                            <h4 class="mb-0 text-primary">Empowering</h4>
                            <span class="text-dark">Kerala Entrepreneurs</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 3. WHAT MSMEA HELPS WITH -->
        <section class="services-v2 py-5">
            <div class="container">
                <div class="text-center mb-5" data-aos="fade-up">
                    <span class="section-eyebrow-v2">WHAT WE DO</span>
                    <h2 class="section-title-v2">Practical Support for Growing Businesses</h2>
                    <p class="text-muted mx-auto max-w-700">MSMEA focuses on practical areas that directly influence the growth, resilience and competitiveness of MSMEs.</p>
                </div>
                <div class="row g-4">
                    <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="0">
                        <div class="service-card-v2 h-100 p-4 rounded bg-white shadow-sm border border-light">
                            <span class="service-num-v2 text-muted fs-5 fw-bold mb-3 d-block">01</span>
                            <h4 class="service-title-v2 h5 mb-3">Access to Finance</h4>
                            <p class="text-muted mb-0 small">Helping entrepreneurs improve awareness and communication around financing opportunities and financial support systems.</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100">
                        <div class="service-card-v2 h-100 p-4 rounded bg-white shadow-sm border border-light">
                            <span class="service-num-v2 text-muted fs-5 fw-bold mb-3 d-block">02</span>
                            <h4 class="service-title-v2 h5 mb-3">Business Networking</h4>
                            <p class="text-muted mb-0 small">Creating meaningful connections between entrepreneurs, professionals, institutions and potential partners.</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="200">
                        <div class="service-card-v2 h-100 p-4 rounded bg-white shadow-sm border border-light">
                            <span class="service-num-v2 text-muted fs-5 fw-bold mb-3 d-block">03</span>
                            <h4 class="service-title-v2 h5 mb-3">Market Access</h4>
                            <p class="text-muted mb-0 small">Supporting entrepreneurs in discovering opportunities, strengthening visibility and expanding their business reach.</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="300">
                        <div class="service-card-v2 h-100 p-4 rounded bg-white shadow-sm border border-light">
                            <span class="service-num-v2 text-muted fs-5 fw-bold mb-3 d-block">04</span>
                            <h4 class="service-title-v2 h5 mb-3">Technology Adoption</h4>
                            <p class="text-muted mb-0 small">Encouraging businesses to understand and adopt relevant technologies for efficiency and growth.</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="400">
                        <div class="service-card-v2 h-100 p-4 rounded bg-white shadow-sm border border-light">
                            <span class="service-num-v2 text-muted fs-5 fw-bold mb-3 d-block">05</span>
                            <h4 class="service-title-v2 h5 mb-3">Knowledge & Capacity Building</h4>
                            <p class="text-muted mb-0 small">Promoting learning, awareness and practical knowledge across business, finance, technology and compliance.</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="500">
                        <div class="service-card-v2 h-100 p-4 rounded bg-white shadow-sm border border-light">
                            <span class="service-num-v2 text-muted fs-5 fw-bold mb-3 d-block">06</span>
                            <h4 class="service-title-v2 h5 mb-3">Institutional Support</h4>
                            <p class="text-muted mb-0 small">Helping entrepreneurs better understand government schemes, policies, regulations and support systems.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 4. WHY MSMEA -->
        <section class="why-msmea-v2 py-5 bg-light">
            <div class="container">
                <div class="row align-items-center g-5">
                    <div class="col-lg-5 order-2 order-lg-1" data-aos="fade-right">
                        <img src="assets/images/about/05.jpg" alt="Why MSMEA" class="img-fluid rounded shadow-sm w-100">
                    </div>
                    <div class="col-lg-7 order-1 order-lg-2" data-aos="fade-left">
                        <h2 class="section-title-v2 mb-5">Why MSMEA Matters to Entrepreneurs</h2>
                        <div class="why-list-v2">
                            <div class="why-item-v2 d-flex mb-4">
                                <div class="why-num-v2 text-primary me-3 fs-5 fw-bold">01</div>
                                <div>
                                    <h5 class="mb-2">Listen to Entrepreneurs</h5>
                                    <p class="text-muted small mb-0">We understand the practical challenges faced by business owners.</p>
                                </div>
                            </div>
                            <div class="why-item-v2 d-flex mb-4">
                                <div class="why-num-v2 text-primary me-3 fs-5 fw-bold">02</div>
                                <div>
                                    <h5 class="mb-2">Connect Opportunities</h5>
                                    <p class="text-muted small mb-0">We help create meaningful connections between entrepreneurs, institutions and potential partners.</p>
                                </div>
                            </div>
                            <div class="why-item-v2 d-flex mb-4">
                                <div class="why-num-v2 text-primary me-3 fs-5 fw-bold">03</div>
                                <div>
                                    <h5 class="mb-2">Share Knowledge</h5>
                                    <p class="text-muted small mb-0">We promote awareness of finance, regulations, technology, markets and business developments.</p>
                                </div>
                            </div>
                            <div class="why-item-v2 d-flex">
                                <div class="why-num-v2 text-primary me-3 fs-5 fw-bold">04</div>
                                <div>
                                    <h5 class="mb-2">Support Growth</h5>
                                    <p class="text-muted small mb-0">We work toward an ecosystem where MSMEs can become stronger, more sustainable and future-ready.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 5. FUTURE-READY MSMEs -->
        <section class="future-ready-v2 py-5 text-white">
            <div class="container position-relative z-index-1">
                <div class="row align-items-center">
                    <div class="col-lg-6 mb-5 mb-lg-0" data-aos="fade-right">
                        <span class="section-eyebrow-v2 text-white-50">FUTURE-READY MSMEs</span>
                        <h2 class="section-title-v2 text-white mb-4">Helping Entrepreneurs Navigate a Changing Business Environment</h2>
                        <p class="text-white-75 mb-3">
                            Business regulations, government policies, taxation systems, compliance requirements and technology are constantly changing. For a small or medium entrepreneur, keeping pace with these changes can often be challenging.
                        </p>
                        <p class="text-white-75 mb-4">
                            MSMEA promotes awareness and knowledge sharing around developments that directly affect businesses, helping entrepreneurs understand change and respond with greater confidence.
                        </p>
                        <a href="#" class="lab-btn primary-btn-v2 bg-white text-dark border-0">Discover Our Approach</a>
                    </div>
                    <div class="col-lg-6" data-aos="fade-left">
                        <div class="progression-v2 d-flex flex-column gap-3 ms-lg-5">
                            <div class="progression-item-v2 p-3 rounded bg-white bg-opacity-10 d-flex align-items-center">
                                <i class="fa-solid fa-briefcase me-3 fs-4 text-white-50"></i> <span class="fs-5 fw-medium">Business</span>
                            </div>
                            <div class="progression-item-v2 p-3 rounded bg-white bg-opacity-10 d-flex align-items-center">
                                <i class="fa-solid fa-scale-balanced me-3 fs-4 text-white-50"></i> <span class="fs-5 fw-medium">Regulations</span>
                            </div>
                            <div class="progression-item-v2 p-3 rounded bg-white bg-opacity-10 d-flex align-items-center">
                                <i class="fa-solid fa-chart-line me-3 fs-4 text-white-50"></i> <span class="fs-5 fw-medium">Finance</span>
                            </div>
                            <div class="progression-item-v2 p-3 rounded bg-white bg-opacity-10 d-flex align-items-center">
                                <i class="fa-solid fa-microchip me-3 fs-4 text-white-50"></i> <span class="fs-5 fw-medium">Technology</span>
                            </div>
                            <div class="progression-item-v2 p-3 rounded bg-white bg-opacity-10 d-flex align-items-center">
                                <i class="fa-solid fa-lightbulb me-3 fs-4 text-white-50"></i> <span class="fs-5 fw-medium">Knowledge</span>
                            </div>
                            <div class="progression-item-v2 p-3 rounded bg-white bg-opacity-10 d-flex align-items-center bg-primary border border-primary">
                                <i class="fa-solid fa-arrow-trend-up me-3 fs-4 text-white"></i> <span class="fs-5 fw-bold text-white">Growth</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 6. OUR FOCUS AREAS -->
        <section class="focus-areas-v2 py-5 bg-light">
            <div class="container text-center">
                <h2 class="section-title-v2 mb-5" data-aos="fade-up">Supporting Every Stage of the Entrepreneurial Journey</h2>
                
                <div class="timeline-v2 d-flex flex-column flex-lg-row justify-content-between align-items-center align-items-lg-start position-relative">
                    <div class="timeline-line-v2 d-none d-lg-block position-absolute"></div>
                    
                    <div class="timeline-item-v2 text-center mb-4 mb-lg-0" data-aos="zoom-in" data-aos-delay="0">
                        <div class="timeline-icon-v2 bg-white shadow-sm rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3 position-relative z-index-1">
                            <i class="fa-solid fa-rocket text-primary fs-4"></i>
                        </div>
                        <h6 class="mb-1 fw-bold">START</h6>
                        <p class="small text-muted mb-0">Idea &<br>Entrepreneurship</p>
                    </div>
                    
                    <div class="timeline-item-v2 text-center mb-4 mb-lg-0" data-aos="zoom-in" data-aos-delay="100">
                        <div class="timeline-icon-v2 bg-white shadow-sm rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3 position-relative z-index-1">
                            <i class="fa-solid fa-hammer text-primary fs-4"></i>
                        </div>
                        <h6 class="mb-1 fw-bold">BUILD</h6>
                        <p class="small text-muted mb-0">Business<br>Foundations</p>
                    </div>
                    
                    <div class="timeline-item-v2 text-center mb-4 mb-lg-0" data-aos="zoom-in" data-aos-delay="200">
                        <div class="timeline-icon-v2 bg-white shadow-sm rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3 position-relative z-index-1">
                            <i class="fa-solid fa-users text-primary fs-4"></i>
                        </div>
                        <h6 class="mb-1 fw-bold">CONNECT</h6>
                        <p class="small text-muted mb-0">Networking &<br>Partnerships</p>
                    </div>

                    <div class="timeline-item-v2 text-center mb-4 mb-lg-0" data-aos="zoom-in" data-aos-delay="300">
                        <div class="timeline-icon-v2 bg-white shadow-sm rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3 position-relative z-index-1">
                            <i class="fa-solid fa-arrow-trend-up text-primary fs-4"></i>
                        </div>
                        <h6 class="mb-1 fw-bold">GROW</h6>
                        <p class="small text-muted mb-0">Markets &<br>Opportunities</p>
                    </div>

                    <div class="timeline-item-v2 text-center mb-4 mb-lg-0" data-aos="zoom-in" data-aos-delay="400">
                        <div class="timeline-icon-v2 bg-white shadow-sm rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3 position-relative z-index-1">
                            <i class="fa-solid fa-laptop-code text-primary fs-4"></i>
                        </div>
                        <h6 class="mb-1 fw-bold">ADAPT</h6>
                        <p class="small text-muted mb-0">Technology &<br>Change</p>
                    </div>

                    <div class="timeline-item-v2 text-center mb-4 mb-lg-0" data-aos="zoom-in" data-aos-delay="500">
                        <div class="timeline-icon-v2 bg-white shadow-sm rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3 position-relative z-index-1">
                            <i class="fa-solid fa-seedling text-primary fs-4"></i>
                        </div>
                        <h6 class="mb-1 fw-bold">SUSTAIN</h6>
                        <p class="small text-muted mb-0">Long-Term<br>Growth</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- 7. MSMEA COMMUNITY / NETWORK -->
        <section class="network-v2 py-5">
            <div class="container text-center">
                <div class="mb-5 mx-auto max-w-700" data-aos="fade-up">
                    <h2 class="section-title-v2 mb-4">A Network Built Around Entrepreneurs</h2>
                    <p class="text-muted">
                        Strong business relationships can create new opportunities. MSMEA provides a platform for entrepreneurs to connect with fellow business owners, professionals, institutions and potential partners.
                    </p>
                </div>
                
                <div class="row justify-content-center g-4 mb-5">
                    <div class="col-md-4" data-aos="fade-up" data-aos-delay="0">
                        <div class="network-block-v2 p-4 bg-light rounded text-center h-100">
                            <i class="fa-solid fa-user-tie fs-1 text-primary mb-3"></i>
                            <h5 class="mb-0">Entrepreneurs</h5>
                        </div>
                    </div>
                    <div class="col-md-4" data-aos="fade-up" data-aos-delay="100">
                        <div class="network-block-v2 p-4 bg-light rounded text-center h-100">
                            <i class="fa-solid fa-user-doctor fs-1 text-primary mb-3"></i>
                            <h5 class="mb-0">Professionals</h5>
                        </div>
                    </div>
                    <div class="col-md-4" data-aos="fade-up" data-aos-delay="200">
                        <div class="network-block-v2 p-4 bg-light rounded text-center h-100">
                            <i class="fa-solid fa-building-columns fs-1 text-primary mb-3"></i>
                            <h5 class="mb-0">Institutions & Partners</h5>
                        </div>
                    </div>
                </div>
                
                <a href="#" class="lab-btn primary-btn-v2" data-aos="fade-up">Become Part of the Network</a>
            </div>
        </section>

        <!-- 8. OUR VISION -->
        <section class="vision-v2 py-5 text-white text-center position-relative">
            <div class="container position-relative z-index-1">
                <span class="section-eyebrow-v2 text-white-50" data-aos="fade-up">OUR VISION</span>
                <h2 class="vision-title-v2 text-white my-4 mx-auto" data-aos="fade-up" data-aos-delay="100">To Build a Strong, Connected and Future-Ready MSME Community</h2>
                <p class="vision-text-v2 text-white-75 mx-auto max-w-700" data-aos="fade-up" data-aos-delay="200">
                    Where every entrepreneur has access to finance, technology, markets, information and institutional support required to grow sustainably.
                </p>
            </div>
            <div class="vision-bg-pattern position-absolute w-100 h-100 top-0 start-0 opacity-10"></div>
        </section>

        <!-- 9. CALL TO ACTION -->
        <section class="cta-v2 py-5 bg-light text-center">
            <div class="container" data-aos="zoom-in">
                <h2 class="section-title-v2 mb-4">Your Business Journey Starts With Connection.</h2>
                <p class="text-muted mx-auto max-w-700 mb-5">
                    Together, we can make entrepreneurship easier, enterprises stronger and the MSME sector more powerful.
                </p>
                <div class="d-flex gap-3 justify-content-center flex-wrap">
                    <a href="#" class="lab-btn primary-btn-v2">Join MSMEA</a>
                    <a href="contact.html" class="lab-btn outline-btn-v2">Contact Us</a>
                </div>
            </div>
        </section>
    </div>
    
    ` + endTag;
    
    html = html.substring(0, startIndex) + newHtml + html.substring(endIndex + endTag.length);
    
    if (!html.includes('home-modern.css')) {
        html = html.replace('<link rel="stylesheet" href="assets/css/styles.css">', '<link rel="stylesheet" href="assets/css/styles.css">\n    <link rel="stylesheet" href="assets/css/home-modern.css">');
    }

    fs.writeFileSync('index.html', html, 'utf8');
    console.log('Successfully restored 9-section design');
} else {
    console.log('Tags not found.');
}
