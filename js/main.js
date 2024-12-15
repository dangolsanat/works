const projects = [
    {
        id: 1,
        title: "23-81 31st St, Astoria",
        description: "12 stories Mixed-Used Building in Astoria, Queens",
        images: ["js/images/project1-1.jpg", 
                "js/images/project1-2.jpg", 
                "js/images/project1-3.jpg", 
                "js/images/project1-4.jpg", 
                "js/images/project1-5.jpg", 
                "js/images/project1-6.jpg",
                "js/images/project1-7.jpg",
                "js/images/project1-8.jpg",
                "js/images/project1-9.jpg",
                "js/images/project1-10.jpg",
                "js/images/project1-11.jpg",

        ]
    },
    {
        id: 2,
        title: "550 Madison Ave, NY ",
        description: "550 Madison Ave, NY",
        images: ["js/images/project2-1.jpg", 
                 "js/images/project2-2.jpg",
                 "js/images/project2-3.jpg",
                 "js/images/project2-4.jpg",
                 "js/images/project2-5.jpg",

        ]
    },
    {
        id: 3,
        title: "NYPD Fence Project by Borinquen Gallo",
        description: "Art installation for Borinquen Gallo",
        images: ["js/images/Project3-1.jpeg",
                "js/images/Project3-2.jpg",
                "js/images/Project3-3.jpeg",
                "js/images/Project3-4.jpeg",
                "js/images/Project3-5.jpeg",
                "js/images/Project3-6.jpeg",

            ]
    }
];

 
 document.addEventListener('DOMContentLoaded', () => {
    const menuLinks = document.querySelectorAll('.menu-link');
    const sections = document.querySelectorAll('.section');
    const worksHeader = document.querySelector('.works-header');
    const worksSubmenu = document.querySelector('.works-submenu');
    const projectContent = document.getElementById('project-content');
    
    // Populate works submenu
    projects.forEach(project => {
        const link = document.createElement('a');
        link.href = '#';
        link.className = 'menu-link';
        link.textContent = project.title;
        link.addEventListener('click', (e) => {
            e.preventDefault();
            showProject(project);
        });
        worksSubmenu.appendChild(link);
    });
 
    // Handle menu clicks
    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = e.target.getAttribute('data-section');
            if (section) {
                showSection(section);
            }
        });
    });
        // Update sun icon styles
        const sunIcon = document.getElementById('sun-icon');
        if (sunIcon) {
            sunIcon.style.stroke = '#E2D4BB';
            sunIcon.style.strokeWidth = '2';
        }

    // Toggle works submenu
    worksHeader.addEventListener('click', () => {
        worksSubmenu.classList.toggle('visible');
        const chevron = worksHeader.querySelector('.chevron');
        chevron.textContent = worksSubmenu.classList.contains('visible') ? '▲' : '▼';
    });
 
    // Show project with scroll to top and active states
    function showProject(project) {
        sections.forEach(section => section.classList.remove('active'));
        document.getElementById('project').classList.add('active');
 
        // Update active states
        document.querySelectorAll('.menu-link').forEach(link => {
            link.classList.remove('active');
        });
        document.querySelectorAll('.works-submenu .menu-link').forEach(link => {
            if (link.textContent === project.title) {
                link.classList.add('active');
            }
        });
        
        projectContent.innerHTML = '';
        project.images.forEach(image => {
            const img = document.createElement('img');
            img.src = image;
            img.alt = project.title;
            img.className = 'project-image';
            projectContent.appendChild(img);
        });
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        const description = document.createElement('p');
        description.textContent = project.description;
        projectContent.appendChild(description);
    }
 
    // Show section
    function showSection(sectionId) {
        sections.forEach(section => section.classList.remove('active'));
        document.getElementById(sectionId).classList.add('active');
        menuLinks.forEach(link => link.classList.remove('active'));
        document.querySelector(`[data-section="${sectionId}"]`).classList.add('active');
    }
 
    // Handle resume download
    const downloadButton = document.querySelector('.download-button');
    if (downloadButton) {
        downloadButton.addEventListener('click', () => {
            const link = document.createElement('a');
            link.href = '/your-repo-name/js/images/resume.pdf';
            link.download = 'resume.pdf';
            link.click();
        });
    }
 });