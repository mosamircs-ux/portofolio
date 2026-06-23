/* ==========================================================================
   Global Configuration & State
   ========================================================================== */
const TYPING_ROLES = [
    "Full-Stack Web Applications.",
    "Scalable API Backends.",
    "Responsive User Interfaces.",
    "Modern Developer Tools."
];

// Mock File Explorer Contents for VSCode Simulator
const IDE_FILES = {
    "app-js": {
        filename: "app.js",
        icon: "fab fa-js text-yellow",
        language: "JavaScript",
        lines: 16,
        code: `<span class="syntax-keyword">import</span> express <span class="syntax-keyword">from</span> <span class="syntax-string">'express'</span>;
<span class="syntax-keyword">import</span> { database } <span class="syntax-keyword">from</span> <span class="syntax-string">'./config/db.js'</span>;

<span class="syntax-keyword">const</span> <span class="syntax-variable">app</span> = <span class="syntax-function">express</span>();
<span class="syntax-keyword">const</span> <span class="syntax-variable">PORT</span> = <span class="syntax-variable">process</span>.<span class="syntax-variable">env</span>.<span class="syntax-variable">PORT</span> || <span class="syntax-number">5000</span>;

<span class="syntax-comment">// Express Middleware Configuration</span>
<span class="syntax-variable">app</span>.<span class="syntax-function">use</span>(<span class="syntax-variable">express</span>.<span class="syntax-function">json</span>());

<span class="syntax-comment">// Fetch dynamic system telemetry metrics</span>
<span class="syntax-variable">app</span>.<span class="syntax-function">get</span>(<span class="syntax-string">'/api/telemetry'</span>, <span class="syntax-keyword">async</span> (<span class="syntax-variable">req</span>, <span class="syntax-variable">res</span>) => {
    <span class="syntax-keyword">const</span> <span class="syntax-variable">stats</span> = <span class="syntax-keyword">await</span> <span class="syntax-variable">database</span>.<span class="syntax-function">getTelemetryLogs</span>();
    <span class="syntax-variable">res</span>.<span class="syntax-function">status</span>(<span class="syntax-number">200</span>).<span class="syntax-function">json</span>({ <span class="syntax-variable">status</span>: <span class="syntax-string">'success'</span>, <span class="syntax-variable">data</span>: <span class="syntax-variable">stats</span> });
});

<span class="syntax-variable">app</span>.<span class="syntax-function">listen</span>(<span class="syntax-variable">PORT</span>, () => {
    <span class="syntax-variable">console</span>.<span class="syntax-function">log</span>(<span class="syntax-string">\`Server running on port \${PORT}\`</span>);
});`
    },
    "server-py": {
        filename: "server.py",
        icon: "fab fa-python text-blue",
        language: "Python",
        lines: 15,
        code: `<span class="syntax-keyword">from</span> fastapi <span class="syntax-keyword">import</span> FastAPI, HTTPException
<span class="syntax-keyword">from</span> pydantic <span class="syntax-keyword">import</span> BaseModel
<span class="syntax-keyword">import</span> uvicorn

<span class="syntax-variable">app</span> = FastAPI(title=<span class="syntax-string">"AI Inference API"</span>)

<span class="syntax-keyword">class</span> <span class="syntax-class">InferenceRequest</span>(BaseModel):
    prompt: <span class="syntax-string">str</span>
    max_tokens: <span class="syntax-string">int</span> = <span class="syntax-number">128</span>

<span class="syntax-comment"># AI Model Inference Route</span>
@app.post(<span class="syntax-string">"/v1/inference"</span>)
<span class="syntax-keyword">async def</span> <span class="syntax-function">run_inference</span>(payload: InferenceRequest):
    <span class="syntax-keyword">if not</span> <span class="syntax-variable">payload</span>.<span class="syntax-variable">prompt</span>:
        <span class="syntax-keyword">raise</span> HTTPException(status_code=<span class="syntax-number">400</span>, detail=<span class="syntax-string">"Prompt is required"</span>)
    <span class="syntax-keyword">return</span> {<span class="syntax-string">"prediction"</span>: <span class="syntax-string">"AI Engine process: Success"</span>, <span class="syntax-string">"tokens"</span>: <span class="syntax-number">42</span>}

<span class="syntax-keyword">if</span> __name__ == <span class="syntax-string">"__main__"</span>:
    uvicorn.run(app, host=<span class="syntax-string">"0.0.0.0"</span>, port=<span class="syntax-number">8000</span>)`
    },
    "algorithm-cpp": {
        filename: "algorithm.cpp",
        icon: "fas fa-file-code text-cyan",
        language: "C++",
        lines: 18,
        code: `#include <span class="syntax-string">&lt;iostream&gt;</span>
#include <span class="syntax-string">&lt;vector&gt;</span>
#include <span class="syntax-string">&lt;algorithm&gt;</span>

<span class="syntax-comment">// Fast binary search algorithm utility</span>
<span class="syntax-keyword">int</span> <span class="syntax-function">binarySearch</span>(const std::vector&lt;<span class="syntax-keyword">int</span>&gt;&amp; arr, <span class="syntax-keyword">int</span> target) {
    <span class="syntax-keyword">int</span> left = <span class="syntax-number">0</span>;
    <span class="syntax-keyword">int</span> right = arr.size() - <span class="syntax-number">1</span>;
    
    <span class="syntax-keyword">while</span> (left &lt;= right) {
        <span class="syntax-keyword">int</span> mid = left + (right - left) / <span class="syntax-number">2</span>;
        <span class="syntax-keyword">if</span> (arr[mid] == target) <span class="syntax-keyword">return</span> mid;
        <span class="syntax-keyword">if</span> (arr[mid] &lt; target) left = mid + <span class="syntax-number">1</span>;
        <span class="syntax-keyword">else</span> right = mid - <span class="syntax-number">1</span>;
    }
    <span class="syntax-keyword">return</span> -<span class="syntax-number">1</span>; <span class="syntax-comment">// Not found</span>
}`
    },
    "styles-css": {
        filename: "styles.css",
        icon: "fab fa-css3-alt text-cyan",
        language: "CSS",
        lines: 12,
        code: `<span class="syntax-comment">/* Glassmorphism Backdrop Effects */</span>
<span class="syntax-class">.glass-card</span> {
    <span class="syntax-attr">background</span>: <span class="syntax-string">rgba(30, 41, 59, 0.4)</span>;
    <span class="syntax-attr">border</span>: <span class="syntax-string">1px solid rgba(255, 255, 255, 0.08)</span>;
    <span class="syntax-attr">border-radius</span>: <span class="syntax-string">12px</span>;
    <span class="syntax-attr">backdrop-filter</span>: <span class="syntax-string">blur(8px)</span>;
    <span class="syntax-attr">-webkit-backdrop-filter</span>: <span class="syntax-string">blur(8px)</span>;
    <span class="syntax-attr">box-shadow</span>: <span class="syntax-string">0 8px 32px 0 rgba(0, 0, 0, 0.3)</span>;
    <span class="syntax-attr">transition</span>: <span class="syntax-string">all 0.3s ease</span>;
}`
    },
    "readme-md": {
        filename: "README.md",
        icon: "fab fa-markdown text-blue",
        language: "Markdown",
        lines: 10,
        code: `<span class="syntax-comment"># Professional Developer Portfolio</span>

A high-performance modern developer portfolio showcasing full-stack capabilities, API integrations, and code assets.

<span class="syntax-keyword">## 🚀 Features</span>
- Animated Canvas background.
- VSCode-like File Explorer and Code Viewport.
- Dynamic integration with GitHub public repos API.
- Fully mobile-responsive layout.
- Saved user Theme configuration.`
    }
};

// Fallback GitHub Repositories (if username loading fails or rate limited)
const FALLBACK_REPOS = [
    {
        name: "tailors-delivery",
        description: "A custom logistics and courier delivery platform tailored for fashion, apparel dispatching, and regional delivery tracking.",
        stargazers_count: 0,
        forks_count: 0,
        language: "JavaScript",
        html_url: "https://github.com/mosamircs-ux/tailors-delivery"
    },
    {
        name: "smart-hospital",
        description: "A comprehensive healthcare management dashboard tracking patient admissions, medical charts, and doctor schedules in real-time.",
        stargazers_count: 0,
        forks_count: 0,
        language: "JavaScript",
        html_url: "https://github.com/mosamircs-ux/smart-hospital"
    },
    {
        name: "novel-ai",
        description: "An interactive story planning and content generation assistant utilizing large language models to structure narratives.",
        stargazers_count: 0,
        forks_count: 0,
        language: "TypeScript",
        html_url: "https://github.com/mosamircs-ux/novel-ai"
    },
    {
        name: "all-in-one-next-cloud-local",
        description: "📦 The official Nextcloud installation method. Provides easy deployment and maintenance.",
        stargazers_count: 0,
        forks_count: 0,
        language: "Shell",
        html_url: "https://github.com/mosamircs-ux/all-in-one-next-cloud-local"
    }
];

// Language colors dictionary
const LANGUAGE_COLORS = {
    "JavaScript": "#f1e05a",
    "Python": "#3572A5",
    "C++": "#f34b7d",
    "HTML": "#e34c26",
    "CSS": "#563d7c",
    "TypeScript": "#3178c6",
    "Shell": "#89e051"
};

/* ==========================================================================
   Core Particle Canvas Animation
   ========================================================================== */
function initParticleCanvas() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouse = { x: null, y: null, radius: 100 };

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Track mouse coordinates
    window.addEventListener('mousemove', (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
    });
    window.addEventListener('mouseleave', () => {
        mouse.x = null;
        mouse.y = null;
    });

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1;
            this.speedX = (Math.random() - 0.5) * 0.6;
            this.speedY = (Math.random() - 0.5) * 0.6;
            this.color = getComputedStyle(document.body).getPropertyValue('--accent-primary').trim();
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            // Bounce on borders
            if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX;
            if (this.y > canvas.height || this.y < 0) this.speedY = -this.speedY;

            // Mouse interact effect (push away slightly)
            if (mouse.x && mouse.y) {
                let dx = this.x - mouse.x;
                let dy = this.y - mouse.y;
                let dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < mouse.radius) {
                    let force = (mouse.radius - dist) / mouse.radius;
                    let angle = Math.atan2(dy, dx);
                    this.x += Math.cos(angle) * force * 2;
                    this.y += Math.sin(angle) * force * 2;
                }
            }
        }

        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();
        }
    }

    // Initialize particles array based on screen width
    const particleCount = Math.min(Math.floor((canvas.width * canvas.height) / 15000), 100);
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    // Connect line calculation
    function drawLines() {
        let accentSec = getComputedStyle(document.body).getPropertyValue('--accent-secondary').trim();
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                let dx = particles[i].x - particles[j].x;
                let dy = particles[i].y - particles[j].y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 110) {
                    let opacity = (1 - distance / 110) * 0.15;
                    ctx.strokeStyle = accentSec;
                    ctx.globalAlpha = opacity;
                    ctx.lineWidth = 0.8;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                    ctx.globalAlpha = 1.0; // Reset
                }
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Dynamic color update check in case theme changed
        let themePrimaryColor = getComputedStyle(document.body).getPropertyValue('--accent-primary').trim();

        particles.forEach(p => {
            p.color = themePrimaryColor;
            p.update();
            p.draw();
        });

        drawLines();
        requestAnimationFrame(animate);
    }
    animate();
}

/* ==========================================================================
   Dynamic Typing Animation
   ========================================================================== */
function initTypingAnimation() {
    const textElement = document.getElementById('typing-text');
    if (!textElement) return;

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentRole = TYPING_ROLES[roleIndex];
        
        if (isDeleting) {
            textElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            textElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }

        let typingSpeed = 100;
        if (isDeleting) {
            typingSpeed /= 2; // Delete faster
        }

        if (!isDeleting && charIndex === currentRole.length) {
            typingSpeed = 2000; // Pause at full word
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % TYPING_ROLES.length;
            typingSpeed = 500; // Pause before typing next
        }

        setTimeout(type, typingSpeed);
    }
    
    // Start loop
    setTimeout(type, 1000);
}

/* ==========================================================================
   Active Scroll Navigation Highlighter
   ========================================================================== */
function initScrollHighlighter() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 150;
            const sectionId = current.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

/* ==========================================================================
   Interactive VSCode IDE Simulator
   ========================================================================== */
function initIDESimulator() {
    const fileItems = document.querySelectorAll('.file-tree .file');
    const tabTitle = document.getElementById('tab-filename');
    const tabIcon = document.getElementById('tab-icon');
    const codeViewport = document.getElementById('editor-code-body');
    const lineNumbersContainer = document.getElementById('editor-line-numbers');

    if (!codeViewport || !lineNumbersContainer) return;

    function loadFile(fileKey) {
        const fileData = IDE_FILES[fileKey];
        if (!fileData) return;

        // Active files state update
        fileItems.forEach(item => {
            if (item.getAttribute('data-file') === fileKey) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });

        // Tab Updates
        tabTitle.textContent = fileData.filename;
        tabIcon.className = fileData.icon;

        // Line Numbers Build
        let numbersHTML = "";
        for (let i = 1; i <= fileData.lines; i++) {
            numbersHTML += `${i}\n`;
        }
        lineNumbersContainer.textContent = numbersHTML;

        // Viewport Inject
        codeViewport.innerHTML = fileData.code;
        
        // Status Bar language update
        const statusItemLang = document.querySelector('.ide-statusbar .status-right .status-item:nth-child(2)');
        if (statusItemLang) {
            statusItemLang.textContent = fileData.language;
        }
    }

    // Click events
    fileItems.forEach(item => {
        item.addEventListener('click', () => {
            const fileKey = item.getAttribute('data-file');
            loadFile(fileKey);
        });
    });

    // Load default app-js file
    loadFile("app-js");
}

/* ==========================================================================
   Dynamic GitHub Repositories Fetcher
   ========================================================================== */
async function fetchGitHubRepos(username) {
    const loader = document.getElementById('github-loader');
    const container = document.getElementById('repos-container');
    const statusMsg = document.getElementById('api-status-msg');

    if (!container) return;

    // Loading State
    if (loader) loader.style.display = 'flex';
    container.innerHTML = '';
    
    if (statusMsg) {
        statusMsg.textContent = "Connecting to GitHub API...";
        statusMsg.style.color = "var(--text-muted)";
    }

    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
        
        if (!response.ok) {
            throw new Error(`GitHub API returned status code ${response.status}`);
        }

        const data = await response.json();
        
        if (loader) loader.style.display = 'none';
        if (statusMsg) {
            statusMsg.textContent = "Connected. Showing live data.";
            statusMsg.style.color = "var(--color-green)";
        }

        if (data.length === 0) {
            container.innerHTML = `<div class="glass-card w-100 text-center"><p>No public repositories found for user '${username}'.</p></div>`;
            return;
        }

        renderRepos(data, container);

    } catch (error) {
        console.warn("Failed fetching from GitHub API. Launching mock repositories fallback. Reason: ", error.message);
        
        if (loader) loader.style.display = 'none';
        if (statusMsg) {
            statusMsg.textContent = "Rate limited or offline. Displaying sandbox fallback repositories.";
            statusMsg.style.color = "var(--color-orange)";
        }

        renderRepos(FALLBACK_REPOS, container);
    }
}

function renderRepos(repos, container) {
    repos.forEach(repo => {
        const lang = repo.language || "Unknown";
        const langColor = LANGUAGE_COLORS[lang] || "#cccccc";
        
        const cardHTML = `
            <div class="repo-card glass-card">
                <div>
                    <div class="repo-header">
                        <i class="fab fa-github repo-icon"></i>
                        <span class="repo-stars"><i class="fas fa-star"></i> ${repo.stargazers_count}</span>
                    </div>
                    <h4>${repo.name}</h4>
                    <p class="repo-desc">${repo.description || 'No description provided.'}</p>
                </div>
                <div class="repo-footer">
                    <span class="repo-lang">
                        <span class="lang-dot" style="background-color: ${langColor}"></span>
                        ${lang}
                    </span>
                    <a href="${repo.html_url}" target="_blank" rel="noopener" class="repo-link">
                        Code <i class="fas fa-arrow-up-right-from-square"></i>
                    </a>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', cardHTML);
    });
}

/* ==========================================================================
   Hamburger Mobile Menu
   ========================================================================== */
function initMobileMenu() {
    const burger = document.getElementById('mobile-menu-btn');
    const closeBtn = document.getElementById('close-mobile-nav');
    const menu = document.getElementById('mobile-nav');
    const links = document.querySelectorAll('.mobile-link');

    if (!burger || !menu) return;

    function openMenu() {
        menu.classList.add('open');
        document.body.style.overflow = 'hidden'; // Stop scrolling
    }

    function closeMenu() {
        menu.classList.remove('open');
        document.body.style.overflow = '';
    }

    burger.addEventListener('click', openMenu);
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    
    links.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
}

/* ==========================================================================
   Light / Dark Theme Management
   ========================================================================== */
function initThemeToggle() {
    const toggleBtn = document.getElementById('theme-toggle');
    if (!toggleBtn) return;

    const icon = toggleBtn.querySelector('i');
    
    // Check saved local storage state or media query
    const savedTheme = localStorage.getItem('theme');
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

    if (savedTheme === 'light' || (!savedTheme && prefersLight)) {
        document.body.classList.add('light-theme');
        if (icon) {
            icon.className = 'fas fa-moon';
        }
    } else {
        document.body.classList.remove('light-theme');
        if (icon) {
            icon.className = 'fas fa-sun';
        }
    }

    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        const isLight = document.body.classList.contains('light-theme');
        
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
        
        if (icon) {
            icon.className = isLight ? 'fas fa-moon' : 'fas fa-sun';
        }
    });
}

/* ==========================================================================
   Contact Form Processing
   ========================================================================== */
function initContactForm() {
    const form = document.getElementById('contact-form');
    const feedback = document.getElementById('form-feedback');

    if (!form || !feedback) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        // Simple validation checks
        if (!name || !email || !subject || !message) {
            feedback.className = "form-feedback-message error";
            feedback.textContent = "Please fill in all fields.";
            feedback.style.display = 'block';
            return;
        }

        // Show sending state
        feedback.className = "form-feedback-message success";
        feedback.textContent = "Sending your message...";
        feedback.style.display = 'block';

        // Submit form asynchronously using FormSubmit AJAX Endpoint
        fetch("https://formsubmit.co/ajax/mohamedsamir12101996@gmail.com", {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                name: name,
                email: email,
                _subject: subject,
                message: message,
                _captcha: "false"
            })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("API returned status code " + response.status);
            }
            return response.json();
        })
        .then(data => {
            // Update feedback on success
            feedback.className = "form-feedback-message success";
            feedback.innerHTML = `
                Thank you! Your message was sent successfully directly to my inbox.
                <span style="display: block; margin-top: 5px; font-size: 0.8em; opacity: 0.85; border-top: 1px solid rgba(34, 197, 94, 0.2); padding-top: 4px;">
                    (Note: First-time form activation requires clicking the verification email sent by FormSubmit).
                </span>
            `;
            form.reset();
        })
        .catch(error => {
            console.error("FormSubmit API Error: ", error);
            feedback.className = "form-feedback-message error";
            feedback.innerHTML = `
                Something went wrong. You can send manually instead: 
                <a href="mailto:mohamedsamir12101996@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}" style="text-decoration: underline; color: inherit; font-weight: bold; margin-left: 4px;">Launch Mail Client</a>
            `;
        });
        
        // Hide feedback after 12 seconds
        setTimeout(() => {
            feedback.style.display = 'none';
        }, 12000);
    });
}

/* ==========================================================================
   Initialization on DOM Load
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    initParticleCanvas();
    initTypingAnimation();
    initScrollHighlighter();
    initIDESimulator();
    initMobileMenu();
    initContactForm();

    // Default Repo Load (using username specified in index.html input)
    const usernameInput = document.getElementById('username-input');
    const loadBtn = document.getElementById('fetch-repos-btn');

    if (usernameInput) {
        fetchGitHubRepos(usernameInput.value);

        if (loadBtn) {
            loadBtn.addEventListener('click', () => {
                const user = usernameInput.value.trim();
                if (user) {
                    fetchGitHubRepos(user);
                }
            });
        }

        // Enter key listeners
        usernameInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const user = usernameInput.value.trim();
                if (user) {
                    fetchGitHubRepos(user);
                }
            }
        });
    }
});
