document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.mobile-menu li');
    
    const darkGradient = (x, y) => `
        radial-gradient(
            circle at ${x}% ${y}%,
            rgba(97, 139, 237, 0.9) 0%,
            rgba(97, 183, 219, 0.7) 30%,
            rgba(66, 109, 194, 0.5) 60%,
            rgba(52, 69, 150, 0.5) 70%,
            rgba(40, 46, 113, 0.5) 90%,
            transparent 100%
        )
    `;
    
    const lightGradient = (x, y) => `
    radial-gradient(
        circle at ${x}% ${y}%,
        rgba(41, 53, 89, 0.90) 0%,
        rgba(31, 43, 112, 0.85) 30%,
        rgba(37, 49, 122, 0.80) 40%,
        rgba(33, 45, 133, 0.75) 60%,
        rgba(39, 51, 143, 0.70) 80%,
        transparent 100%
    )
`;
    
    menuItems.forEach(item => {
        const gradientBg = document.createElement('div');
        gradientBg.className = 'gradient-bg';
        item.appendChild(gradientBg);
        
        item.addEventListener('mousemove', (e) => {
            const rect = item.getBoundingClientRect();
            const x = Math.max(0, Math.min(100, (e.clientX - rect.left) / rect.width * 100));
            const y = Math.max(0, Math.min(100, (e.clientY - rect.top) / rect.height * 100));
            
            const isLightMode = document.body.classList.contains('light-mode');
            gradientBg.style.background = isLightMode ? lightGradient(x, y) : darkGradient(x, y);
            gradientBg.style.opacity = '1';
        });
        
        item.addEventListener('mouseenter', () => {
            gradientBg.style.opacity = '1';
        });
        
        item.addEventListener('mouseleave', () => {
            gradientBg.style.opacity = '0';
        });
    });
    
    // Watch for theme changes
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.attributeName === 'class') {
                const isLightMode = document.body.classList.contains('light-mode');
                menuItems.forEach(item => {
                    const gradientBg = item.querySelector('.gradient-bg');
                    if (gradientBg) {
                        gradientBg.style.opacity = '0';
                    }
                });
            }
        });
    });
    
    observer.observe(document.body, {
        attributes: true,
        attributeFilter: ['class']
    });
});