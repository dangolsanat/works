const projects = [
    {
        id: 1,
        title: "Residential Complex",
        description: "Modern apartment complex design with sustainable features",
        images: ["/images/project1-1.jpg", "/images/project1-1.jpg"]
    },
    {
        id: 2,
        title: "Urban Planning",
        description: "City center revitalization project",
        images: ["js/images/project1-1.jpg", "js/images/project1-2.jpg"]
    },
    {
        id: 3,
        title: "Commercial Space",
        description: "Mixed-use retail and office development",
        images: ["js/images/project1-1.jpg", "js/images/project1-2.jpg"]
    },
    {
        id: 4,
        title: "Cultural Center",
        description: "Community arts and events venue",
        images: ["js/images/project1-1.jpg", "js/images/project1-2.jpg"]
    },
    {
        id: 5,
        title: "Green Building",
        description: "Eco-friendly office building with LEED certification",
        images: ["js/images/project1-1.jpg", "js/images/project1-2.jpg"]
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
        worksSubmenu.style.listStyle = 'none';
        worksSubmenu.style.margin = '1rem 0';
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

    worksHeader.style.cursor = 'pointer';
    worksHeader.classList.add('menu-link');


    // Toggle works submenu
    worksHeader.addEventListener('click', () => {

        worksSubmenu.classList.toggle('visible');
        const chevron = worksHeader.querySelector('.chevron');
        chevron.textContent = worksSubmenu.classList.contains('visible') ? '▲' : '▼';

    });
    // Update sun icon styles
    const sunIcon = document.getElementById('sun-icon');
    if (sunIcon) {
        sunIcon.style.stroke = '#E2D4BB';
        sunIcon.style.strokeWidth = '2';
    }
    // Show project
    function showProject(project) {
        sections.forEach(section => section.classList.remove('active'));
        document.getElementById('project').classList.add('active');
        
        projectContent.innerHTML = '';
        project.images.forEach(image => {
            const img = document.createElement('img');
            img.src = image;
            img.alt = project.title;
            img.className = 'project-image';
            projectContent.appendChild(img);
        });
        
        const description = document.createElement('p');
        description.textContent = project.description;
        projectContent.appendChild(description);
    }
    // Modified project display function with scroll
    function showProject(project) {
        sections.forEach(section => section.classList.remove('active'));
        document.getElementById('project').classList.add('active');
        
        projectContent.innerHTML = '';
        project.images.forEach(image => {
            const img = document.createElement('img');
            img.src = image;
            img.alt = project.title;
            img.className = 'project-image';
            projectContent.appendChild(img);
        });
        
        // Scroll to top
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
            link.href = '/resume.pdf';
            link.download = 'resume.pdf';
            link.click();
        });
    }
});