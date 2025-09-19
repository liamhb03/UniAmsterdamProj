(function() {
    // Create container for the carousel
    const container = document.createElement('div');
    container.id = 'carousel-root';
    document.body.appendChild(container);

    // Inject CSS
    const style = document.createElement('style');
    style.textContent = `
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: white;
        }

        #carousel-root {
            display: flex;
            justify-content: center;
            padding: 20px;
            margin: 0 auto;
        }

        .carousel-container {
            /* Desktop dimensions - smaller */
            width: 320px;
            height: 580px;
            background: white;
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
            overflow: hidden;
            position: relative;
        }

        .carousel-wrapper {
            width: 500%;
            height: 100%;
            display: flex;
            transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .slide {
            width: 20%;
            height: 100%;
            position: relative;
            display: flex;
            flex-direction: column;
            padding: 30px 25px;
            background-size: cover;
            background-position: center;
        }

        /* Slide 1 - Cover */
        .slide-1 {
            background: linear-gradient(135deg, rgba(34, 139, 34, 0.7), rgba(0, 100, 0, 0.7)), 
                        url('https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=375&q=80');
        }

        .slide-1 .logo {
            position: absolute;
            top: 15px;
            left: 110px;
            width: 80px;
            height: auto;
        }

        .slide-1 h1 {
            color: white;
            font-size: 24px;
            font-weight: 800;
            text-align: center;
            margin-bottom: 8px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        .slide-1 .subtitle {
            color: rgba(255, 255, 255, 0.9);
            font-size: 14px;
            text-align: center;
            margin-bottom: 30px;
        }

        .transparency-badge {
            background: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(10px);
            border-radius: 12px;
            padding: 18px;
            margin-bottom: 25px;
            border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .transparency-badge h2 {
            color: white;
            font-size: 16px;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .impact-stats {
            color: white;
            line-height: 1.6;
        }

        .impact-stats div {
            margin-bottom: 6px;
            font-size: 13px;
        }

        .highlight {
            background: rgba(255, 255, 255, 0.2);
            padding: 12px;
            border-radius: 8px;
            text-align: center;
            color: white;
            font-weight: bold;
            margin-top: 15px;
            font-size: 14px;
        }

        .swipe-indicator {
            position: absolute;
            bottom: 15px;
            right: 25px;
            color: white;
            font-size: 11px;
            display: flex;
            align-items: center;
            gap: 5px;
        }

        /* Slide 2 - 83% Promise */
        .slide-2 {
            background: linear-gradient(135deg, rgba(0, 150, 136, 0.7), rgba(76, 175, 80, 0.7)),
                        url('https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=375&q=80');
            justify-content: center;
            align-items: center;
            text-align: center;
        }

        .pie-chart {
            width: 160px;
            height: 160px;
            border-radius: 50%;
            background: conic-gradient(#4CAF50 0deg 298.8deg, #81C784 298.8deg 360deg);
            margin: 15px auto;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .pie-chart::before {
            content: "83%";
            font-size: 30px;
            font-weight: bold;
            color: white;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }

        .slide-2 h1 {
            color: white;
            font-size: 20px;
            font-weight: 800;
            margin-bottom: 25px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        .breakdown {
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(10px);
            border-radius: 12px;
            padding: 18px;
            margin-top: 15px;
            border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .breakdown-item {
            color: white;
            margin-bottom: 12px;
            font-size: 12px;
            text-align: left;
        }

        .breakdown-item strong {
            font-size: 14px;
        }

        .hashtag {
            color: rgba(255, 255, 255, 0.8);
            font-size: 12px;
            margin-top: 15px;
            font-style: italic;
        }

        /* Slide 3 - Money Breakdown */
        .slide-3 {
            background: linear-gradient(135deg, rgba(63, 81, 181, 0.7), rgba(103, 58, 183, 0.7)),
                        url('https://images.unsplash.com/photo-1473448912268-2022ce9509d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=375&q=80');
        }

        .slide-3 h1 {
            color: white;
            font-size: 20px;
            font-weight: 800;
            text-align: center;
            margin-bottom: 25px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        .euro-breakdown {
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(10px);
            border-radius: 12px;
            padding: 18px;
            border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .breakdown-section {
            margin-bottom: 15px;
            padding: 12px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 8px;
            border-left: 4px solid #FFD700;
        }

        .breakdown-section h3 {
            color: white;
            font-size: 14px;
            margin-bottom: 4px;
        }

        .breakdown-section p {
            color: rgba(255, 255, 255, 0.8);
            font-size: 11px;
            line-height: 1.3;
        }

        .real-impact {
            text-align: center;
            color: white;
            font-weight: bold;
            margin-top: 15px;
            font-size: 12px;
        }

        /* Slide 4 - Scale Vision */
        .slide-4 {
            background: linear-gradient(135deg, rgba(233, 30, 99, 0.7), rgba(156, 39, 176, 0.7)),
                        url('https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=375&q=80');
        }

        .slide-4 h1 {
            color: white;
            font-size: 20px;
            font-weight: 800;
            text-align: center;
            margin-bottom: 25px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        .scale-comparison {
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(10px);
            border-radius: 12px;
            padding: 18px;
            margin-bottom: 15px;
            border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .scale-item {
            color: white;
            margin-bottom: 8px;
            font-size: 13px;
        }

        .scale-result {
            text-align: center;
            color: white;
            font-size: 16px;
            font-weight: bold;
            margin: 15px 0;
        }

        .tracking-features {
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(10px);
            border-radius: 12px;
            padding: 18px;
            border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .tracking-features h2 {
            color: white;
            font-size: 14px;
            margin-bottom: 12px;
        }

        .feature-item {
            color: white;
            margin-bottom: 6px;
            font-size: 11px;
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .trust-message {
            text-align: center;
            color: white;
            font-weight: bold;
            margin-top: 15px;
            font-size: 12px;
        }

        /* Slide 5 - Call to Action */
        .slide-5 {
            background: linear-gradient(135deg, rgba(255, 152, 0, 0.7), rgba(255, 193, 7, 0.7)),
                        url('https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=375&q=80');
        }

        .slide-5 h1 {
            color: white;
            font-size: 20px;
            font-weight: 800;
            text-align: center;
            margin-bottom: 25px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        .trust-signals {
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(10px);
            border-radius: 12px;
            padding: 18px;
            margin-bottom: 18px;
            border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .trust-item {
            color: white;
            margin-bottom: 8px;
            font-size: 12px;
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .member-count {
            text-align: center;
            color: white;
            font-size: 14px;
            margin: 15px 0;
            line-height: 1.4;
        }

        .cta-button {
            background: rgba(255, 255, 255, 0.2);
            border: 2px solid white;
            color: white;
            padding: 12px 25px;
            border-radius: 20px;
            font-size: 14px;
            font-weight: bold;
            text-align: center;
            margin: 15px 0;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .cta-button:hover {
            background: white;
            color: #FF9800;
        }

        .website-link {
            text-align: center;
            color: white;
            font-size: 16px;
            font-weight: bold;
            margin-top: 8px;
        }

        /* Navigation */
        .nav-dots {
            position: absolute;
            bottom: 15px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 8px;
            z-index: 100;
        }

        .nav-dot {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .nav-dot.active {
            background: white;
            transform: scale(1.2);
        }

        .nav-arrows {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background: rgba(255, 255, 255, 0.2);
            border: none;
            color: white;
            font-size: 18px;
            width: 35px;
            height: 35px;
            border-radius: 50%;
            cursor: pointer;
            transition: all 0.3s ease;
            z-index: 100;
        }

        .nav-arrows:hover {
            background: rgba(255, 255, 255, 0.3);
        }

        .prev-arrow {
            left: 8px;
        }

        .next-arrow {
            right: 8px;
        }

        /* Animations */
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes pulse {
            0%, 100% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.05);
            }
        }

        @keyframes slideInLeft {
            from {
                opacity: 0;
                transform: translateX(-50px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        @keyframes slideInRight {
            from {
                opacity: 0;
                transform: translateX(50px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        @keyframes rotateIn {
            from {
                opacity: 0;
                transform: rotate(-180deg) scale(0.5);
            }
            to {
                opacity: 1;
                transform: rotate(0deg) scale(1);
            }
        }

        .slide.active .transparency-badge {
            animation: slideInLeft 0.8s ease-out 0.2s both;
        }

        .slide.active .highlight {
            animation: slideInRight 0.8s ease-out 0.4s both;
        }

        .slide.active .pie-chart {
            animation: rotateIn 1s ease-out 0.3s both;
        }

        .slide.active .breakdown {
            animation: fadeInUp 0.8s ease-out 0.5s both;
        }

        .slide.active .euro-breakdown .breakdown-section:nth-child(1) {
            animation: slideInLeft 0.6s ease-out 0.2s both;
        }

        .slide.active .euro-breakdown .breakdown-section:nth-child(2) {
            animation: slideInRight 0.6s ease-out 0.4s both;
        }

        .slide.active .euro-breakdown .breakdown-section:nth-child(3) {
            animation: slideInLeft 0.6s ease-out 0.6s both;
        }

        .slide.active .euro-breakdown .breakdown-section:nth-child(4) {
            animation: slideInRight 0.6s ease-out 0.8s both;
        }

        .slide.active .scale-comparison {
            animation: pulse 2s ease-in-out infinite;
        }

        .slide.active .tracking-features .feature-item {
            animation: fadeInUp 0.5s ease-out calc(var(--delay, 0) * 0.1s) both;
        }

        .slide.active .trust-signals .trust-item {
            animation: slideInLeft 0.5s ease-out calc(var(--delay, 0) * 0.1s) both;
        }

        .cta-button {
            animation: pulse 2s ease-in-out infinite;
        }

        /* Hover effects */
        .nav-arrows:hover {
            background: rgba(255, 255, 255, 0.4);
            transform: translateY(-50%) scale(1.1);
        }

        .nav-dot:hover {
            transform: scale(1.3);
            background: rgba(255, 255, 255, 0.8);
        }

        .breakdown-section:hover {
            transform: translateX(5px);
            background: rgba(255, 255, 255, 0.2);
        }

        .trust-item:hover {
            transform: translateX(5px);
        }

        /* Loading animation for pie chart */
        @keyframes fillPie {
            from {
                background: conic-gradient(#4CAF50 0deg 0deg, #81C784 0deg 360deg);
            }
            to {
                background: conic-gradient(#4CAF50 0deg 298.8deg, #81C784 298.8deg 360deg);
            }
        }

        .slide.active .pie-chart {
            animation: rotateIn 1s ease-out 0.3s both, fillPie 2s ease-out 1s both;
        }

        /* Mobile Responsive Styles */
        @media (max-width: 768px) {
            body {
                padding: 15px;
            }
            
            .carousel-container {
                width: 300px; /* Fixed width for mobile */
                max-width: 300px;
                height: 600px;
                margin: 0 auto;
            }
            
            .slide {
                padding: 20px 15px;
            }
            
            .slide-1 h1 {
                font-size: 20px;
                margin-top: 65px;
            }
            
            .slide-1 .logo {
                left: 50%;
                transform: translateX(-50%);
                width: 70px;
            }
            
            .transparency-badge {
                padding: 15px;
                margin-bottom: 20px;
            }
            
            .transparency-badge h2 {
                font-size: 14px;
                margin-bottom: 10px;
            }
            
            .impact-stats div {
                font-size: 11px;
                margin-bottom: 5px;
            }
            
            .pie-chart {
                width: 140px;
                height: 140px;
            }
            
            .pie-chart::before {
                font-size: 26px;
            }
            
            .nav-arrows {
                width: 35px;
                height: 35px;
                font-size: 18px;
            }
            
            .nav-dot {
                width: 6px;
                height: 6px;
            }
        }

        /* Very small mobile devices */
        @media (max-width: 480px) {
            body {
                padding: 10px;
            }
            
            .carousel-container {
                width: 300px; /* Still 300px for very small screens */
                max-width: 300px;
                height: 580px;
                border-radius: 15px;
            }
            
            .slide {
                padding: 18px 12px;
            }
            
            .slide-1 h1 {
                font-size: 18px;
                margin-top: 55px;
            }
            
            .transparency-badge {
                padding: 12px;
                margin-bottom: 15px;
            }
            
            .transparency-badge h2 {
                font-size: 13px;
                margin-bottom: 8px;
            }
            
            .impact-stats div {
                font-size: 10px;
                margin-bottom: 4px;
            }
            
            .pie-chart {
                width: 120px;
                height: 120px;
            }
            
            .pie-chart::before {
                font-size: 22px;
            }
            
            .breakdown-section {
                padding: 10px;
                margin-bottom: 12px;
            }
            
            .breakdown-section h3 {
                font-size: 12px;
            }
            
            .breakdown-section p {
                font-size: 10px;
            }
        }

        /* Large desktop screens */
        @media (min-width: 1200px) {
            .carousel-container {
                width: 350px; /* Slightly larger on big screens */
                height: 620px;
            }
        }
    `;
    document.head.appendChild(style);

    // Inject HTML
    container.innerHTML = `
        <div class="carousel-container">
            <div class="carousel-wrapper" id="carouselWrapper">
                <!-- Slide 1: Cover -->
                <div class="slide slide-1">
                    <img class="logo" src="https://assets.uon.earth/page/S4E/assets/img/profile-sail4earth.png" alt="Uon.Earth Logo">
                    <h1 style="margin-top:80px;">100% FINANCIAL TRANSPARENCY</h1>
                    <p class="subtitle">See exactly where your money goes</p>
                    
                    <div class="transparency-badge">
                        <h2>💚 TRANSPARENCY BY DESIGN</h2>
                        <div class="impact-stats">
                            <div>👥 <strong>2,847</strong> Active Members</div>
                            <div>💰 <strong>€34,164</strong> Pilot Revenue This Quarter</div>
                            <div>🌱 <strong>28,470</strong> UONs Issued</div>
                            <div>🎯 <strong>83%</strong> Direct to Conservation</div>
                        </div>
                    </div>
                    
                    <div class="highlight">
                        Swipe to see the full breakdown →
                    </div>
                    
                    <div class="swipe-indicator">
                        Swipe → 
                    </div>
                </div>

                <!-- Slide 2: 83% Promise -->
                <div class="slide slide-2">
                    <h1>🎯 THE 83% PROMISE</h1>
                    
                    <p style="color: white; margin-bottom: 20px; font-size: 14px;">Every €1.20 you contribute:</p>
                    
                    <div class="pie-chart"></div>
                    
                    <div class="breakdown">
                        <div class="breakdown-item">
                            <strong>83% → CONSERVATION 🌳</strong><br>
                            Directly funds nature protection
                        </div>
                        <div class="breakdown-item">
                            <strong>17% → OPERATIONS + TAXES 💼</strong><br>
                            Keeps the platform running
                        </div>
                        <div class="breakdown-item">
                            <strong>0% → PROFITS ❌</strong><br>
                            Zero dividends, ever.
                        </div>
                    </div>
                    
                    <div class="hashtag">#TransparencyMatters</div>
                </div>

                <!-- Slide 3: Detailed Breakdown -->
                <div class="slide slide-3">
                    <h1>💰 WHERE EVERY €1.20 GOES</h1>
                    
                    <div class="euro-breakdown">
                        <div class="breakdown-section">
                            <h3>90¢ → Established Conservation NGOs (75%)</h3>
                            <p>Major nature protection organizations</p>
                        </div>
                        
                        <div class="breakdown-section">
                            <h3>10¢ → Grassroots Conservation (8.3%)</h3>
                            <p>Local groundwork & field projects</p>
                        </div>
                        
                        <div class="breakdown-section">
                            <h3>3¢ → Governance & Oversight (2.5%)</h3>
                            <p>Ensuring transparency & accountability</p>
                        </div>
                        
                        <div class="breakdown-section">
                            <h3>17¢ → Platform Operations (14.2%)</h3>
                            <p>Tech infrastructure & zero dividends</p>
                        </div>
                    </div>
                    
                    <div class="real-impact">Real impact, real numbers 📊</div>
                </div>

                <!-- Slide 4: Scale Vision -->
                <div class="slide slide-4">
                    <h1>🚀 IMAGINE AT SCALE</h1>
                    
                    <div class="scale-comparison">
                        <div class="scale-item"><strong>Current:</strong> 2,847 Members</div>
                        <div class="scale-item"><strong>Vision:</strong> 100 Million Members</div>
                    </div>
                    
                    <div class="scale-result">= Billions for Conservation 🌍</div>
                    
                    <div class="tracking-features">
                        <h2>📊 TRACK IT LIVE:</h2>
                        <div class="feature-item">✅ Real-time impact counter</div>
                        <div class="feature-item">✅ Live member count</div>
                        <div class="feature-item">✅ UONs issued tracker</div>
                        <div class="feature-item">✅ Quarterly reports</div>
                    </div>
                    
                    <div class="trust-message">
                        No trust required - <br>
                        just transparent data 📈
                    </div>
                </div>

                <!-- Slide 5: Call to Action -->
                <div class="slide slide-5">
                    <h1>🌱 READY TO MAKE IMPACT?</h1>
                    
                    <div class="trust-signals">
                        <div class="trust-item">✓ IUCN Member Organization</div>
                        <div class="trust-item">✓ Quarterly Financial Reports</div>
                        <div class="trust-item">✓ Live Impact Tracking</div>
                        <div class="trust-item">✓ Zero Hidden Fees</div>
                        <div class="trust-item">✓ Capped Returns Policy</div>
                    </div>
                    
                    <div class="member-count">
                        Join <strong>2,847</strong> members creating<br>
                        real change with full transparency
                    </div>
                    
                    <div class="cta-button">👆 Link in bio</div>
                    
                    <div class="website-link">Visit: Uon.Earth</div>
                </div>
            </div>

            <!-- Navigation -->
            <button class="nav-arrows prev-arrow" onclick="previousSlide()">‹</button>
            <button class="nav-arrows next-arrow" onclick="nextSlide()">›</button>
            
            <div class="nav-dots">
                <div class="nav-dot active" onclick="goToSlide(0)"></div>
                <div class="nav-dot" onclick="goToSlide(1)"></div>
                <div class="nav-dot" onclick="goToSlide(2)"></div>
                <div class="nav-dot" onclick="goToSlide(3)"></div>
                <div class="nav-dot" onclick="goToSlide(4)"></div>
            </div>
        </div>
    `;

    // JavaScript for carousel functionality
    let currentSlide = 0;
    const totalSlides = 5;
    const carouselWrapper = container.querySelector('#carouselWrapper');
    const navDots = container.querySelectorAll('.nav-dot');

    window.nextSlide = function() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    };

    window.previousSlide = function() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateCarousel();
    };

    window.goToSlide = function(slideIndex) {
        currentSlide = slideIndex;
        updateCarousel();
    };

    function updateCarousel() {
        const translateX = -currentSlide * 20; // 20% per slide
        carouselWrapper.style.transform = `translateX(${translateX}%)`;
        
        // Update nav dots
        navDots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });

        // Update active slide for animations
        const slides = container.querySelectorAll('.slide');
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentSlide);
        });

        // Add animation delays for list items
        const currentSlideElement = slides[currentSlide];
        const featureItems = currentSlideElement.querySelectorAll('.feature-item');
        const trustItems = currentSlideElement.querySelectorAll('.trust-item');
        
        featureItems.forEach((item, index) => {
            item.style.setProperty('--delay', index);
        });
        
        trustItems.forEach((item, index) => {
            item.style.setProperty('--delay', index);
        });
    }

    // Touch/swipe support
    let startX = 0;
    let endX = 0;

    carouselWrapper.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    carouselWrapper.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].clientX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = startX - endX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextSlide();
            } else {
                previousSlide();
            }
        }
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            previousSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    });

    // Initialize carousel
    updateCarousel();
})();
