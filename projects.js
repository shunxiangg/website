// projects.js
const projectsData = [
    {
        id: "retro-website",
        title: "Retro website",
        subtitle: "FED_Assg1",
        description: `Welcome to my imaginative retro-inspired website! This project brings to life the classic web design of the late '90s and early 2000s, showcasing vibrant colors and nostalgic, old-school elements.
        Features include:
        - Vintage Color Scheme - Brings out the feeling of old-school design with bold and vibrant hues.
        - Retro Fonts - Uses vintage typography that evokes nostalgia, creating a cohesive retro look.
        - Interactive Elements - Includes engaging buttons, animations and a spinning retro disk.
        - Vintage items: Old items, Music, img, etc
        - Retro Fonts: Classic fonts that give the website an authentic retro feel.
        - Vintage Color Scheme: Some vintage colors.
        - -Interactive Elements: Fun and engaging interactive elements.
        - Animation Emelemts: Fun animations.
        - Add to Cart: Total amount increases when item is added to cart
        - Background Music: ALERT - music may be loud
        - Volume Slider: Adjust volume to user liking
        - Clickable Gallery: When songs in the gallery are clicked song will be played
        - Responsive Design - Currently, the design is optimized for desktop. Future versions will include responsiveness for mobile devices.
        - Songs & Videos - Short songs and videos are able to be pushed`,
        images: [
            "potfolio_IMG/FED_Assg1.png",
            "potfolio_IMG/FED_Assg1_about.png",
            "potfolio_IMG//FED_Assg1_upcomingShow.png",
            "potfolio_IMG/FED_Assg1_gallery.png",
            "potfolio_IMG/FED_Assg1_contact.png"
        ],
        technologies: ["html", "css", "javascript"],
        demoLink: "https://shunxiangg.github.io/FED_10270399D_AngShunXiang_Assg1_website/",
        githubLink: "https://github.com/shunxiangg/FED_10270399D_AngShunXiang_Assg1_website"
    },
    {
        id: "EVA-website",
        title: "EVA website",
        subtitle: "FED_Assg2",
        description: `EVA is an innovative online platform for buying and selling both new and second-hand goods. 
        Designed to create an engaging shopping experience, 
        it allows users to enjoy shopping while unlocking rewards, 
        competing for the best deals, exploring a user-friendly interface, 
        and taking quizzes to discover products that suit their needs. 
        This platform enhances online shopping with a fun, interactive approach. 
        EVA utilizes RestDB (RestDatabase) to store product information and manage user accounts, 
        including purchase history, personal listings, and advertisements.

        EVA Platform Features
        
        - Discount Offers: Users can unlock exclusive discounts by engaging with interactive platform features and competing for the best deals.  

        2. User Account Management  
        - Account Creation: Users can register to buy and sell items, earn rewards, and redeem vouchers.  
        - Profile Management: Allows users to update profile details, including contact information and passwords.  
        - Order History: Users can track past purchases, view order statuses, and check rewards history.  
        - Purchase Preferences: Users can set preferences for product categories, price range, and item condition to personalize their shopping experience.  

        3. Listing Management  
        - Create Listings: Sellers can upload photos, add descriptions, and categorize their items.  
        - Sell Multiple Items: Enables sellers to manage and list multiple products simultaneously.  

        4. Search & Browsing  
        - Search Functionality: Users can search for items using keywords and filter results by category, price range, and item condition.  
        - Category Browsing: Provides an easy way to explore categories such as electronics, clothing, and furniture.  

        5. Communication & Transactions  
        - Chat Feature (Implementation Attempted, Not Yet Functional): A direct messaging system for buyers and sellers to discuss product details and negotiate offers.  

        6. Feedback & Support  
        - Feedback Submission: Users can submit feedback or report issues to improve the platform.  
        - Review Chatbot: Collects user feedback and automatically sends an email containing the user's input and contact details for support.  

        7. Additional Features 
        - Transaction History: Users can access a record of their past purchases, sales, and reviews.  
        - Ad Listings: Sellers can pay to feature their listings or post advertisements for better visibility.  
        - Personalized Recommendations: The platform suggests products based on user preferences and browsing activity.  

        8. Feedback System Testing  
        - Test Email Capture  
        - Verify Feedback Storage 
        - Check Conversation History 
        - Test Admin Notification System`,
        images: [
            "potfolio_IMG/EVA_index_top.png",
            "potfolio_IMG/EVA_signup.png",
            "potfolio_IMG/EVA_home_loading.png",
            "potfolio_IMG/EVA_home.png",
            "potfolio_IMG/EVA_browse.png",
            "potfolio_IMG/EVA_sell_nolisting.png",
            "potfolio_IMG/EVA_sell_item.png",
            "potfolio_IMG/EVA_cart.png"
        ],
        technologies: ["html", "css", "javascript"],
        demoLink: "https://shunxiangg.github.io/FED_EVA_website/",
        githubLink: "https://github.com/shunxiangg/FED_EVA_website"
    
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('.modal-container');
    const modalClose = document.querySelector('.modal-close');
    const projectCards = document.querySelectorAll('.project-card');
    let currentImageIndex = 0;

    // Close modal when clicking the close button
    modalClose.addEventListener('click', () => {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    });

    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    });

    // Show modal when clicking a project card
    projectCards.forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const projectId = card.dataset.projectId;
            const project = projectsData.find(p => p.id === projectId);
            
            if (project) {
                currentImageIndex = 0;
                showProjectModal(project);
            }
        });
    });

    function showProjectModal(project) {
        // Update modal content
        const modalContent = `
            <div class="modal-header">
                <h2>${project.title}</h2>
                <p>${project.subtitle}</p>
            </div>
            <div class="modal-links">
                <a href="${project.demoLink}" class="btn" target="_blank">Live Demo</a>
                <a href="${project.githubLink}" class="btn" target="_blank">GitHub</a>
            </div>

            <div class="modal-close">&times;</div>
            <div class="modal-image-container">
                <div class="modal-image">
                    <button class="carousel-btn prev-btn">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                    <img src="${project.images[currentImageIndex]}" alt="${project.title}">
                    <button class="carousel-btn next-btn">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                </div>
                <div class="image-indicators">
                    ${project.images.map((_, index) => `
                        <button class="indicator${index === currentImageIndex ? ' active' : ''}" data-index="${index}"></button>
                    `).join('')}
                </div>
            </div>
          
            <div class="modal-body">
                <div class="modal-description">
                    <h3>Project Description</h3>
                    <p>${project.description.replace(/\n/g, '<br>')}</p>
                </div>
                <div class="modal-details">
                    <div class="modal-tech">
                        <h4>Technologies Used</h4>
                        <ul>
                            ${project.technologies.map(tech => `<li>${tech}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        `;

        // Replace the entire modal content
        const modalContentElement = document.querySelector('.modal-content');
        modalContentElement.innerHTML = modalContent;

        // Re-add event listeners
        const newModalClose = modalContentElement.querySelector('.modal-close');
        newModalClose.addEventListener('click', () => {
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
        });

        // Add carousel navigation
        const prevBtn = modalContentElement.querySelector('.prev-btn');
        const nextBtn = modalContentElement.querySelector('.next-btn');
        const indicators = modalContentElement.querySelectorAll('.indicator');
        const modalImg = modalContentElement.querySelector('.modal-image img');

        function updateImage() {
            modalImg.src = project.images[currentImageIndex];
            // Update indicators
            indicators.forEach((ind, index) => {
                ind.classList.toggle('active', index === currentImageIndex);
            });
        }

        prevBtn.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex - 1 + project.images.length) % project.images.length;
            updateImage();
        });

        nextBtn.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex + 1) % project.images.length;
            updateImage();
        });

        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                currentImageIndex = index;
                updateImage();
            });
        });

        // Show modal
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
});