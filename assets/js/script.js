// Project data - All 13 DockerOps projects
const projects = [
  {
    id: 1,
    title: "Docker Fundamentals",
    description: "Basic Docker commands and container lifecycle management",
    url: "https://github.com/vedanschi/DockerOps/tree/main/1.Docker%20Intro",
    technologies: ["Docker", "Linux", "CLI"]
  },
  {
    id: 2,
    title: "Streamlit Dev Environment",
    description: "Containerized Streamlit app for data visualization",
    url: "http://localhost:8501/",
    technologies: ["Python", "Streamlit", "Docker"]
  },
  {
    id: 3,
    title: "Titanic Survival Predictor",
    description: "ML model deployment with Streamlit in Docker",
    url: "https://github.com/vedanschi/DockerOps/tree/main/3.Titanic%20Survival%20Predictor%20Containerized%20Streamlit%20App",
    technologies: ["Python", "ML", "Streamlit"]
  },
  {
    id: 4,
    title: "MySQL Containerization",
    description: "Containerized MySQL database with persistent storage",
    url: "https://github.com/vedanschi/DockerOps/tree/main/4.%20Containerized%20MySQL%20Agile%20%26%20Efficient%20%F0%9F%90%AC",
    technologies: ["MySQL", "Database", "Docker"]
  },
  {
    id: 5,
    title: "Volume Persistence",
    description: "Implementing bind mounts for persistent data storage",
    url: "https://github.com/vedanschi/DockerOps/tree/main/5.%20Docker%20Volume%20Persistence_%20Bind%20Mounts%20with%20Linux%20Containers",
    technologies: ["Storage", "Linux", "Volumes"]
  },
  {
    id: 6,
    title: "Docker Networking",
    description: "Bridge networks for container communication",
    url: "https://github.com/vedanschi/DockerOps/tree/main/6.%20Docker%20Bridge_%20Balancing%20Isolation%20%26%20Connectivity",
    technologies: ["Networking", "Bridge", "DNS"]
  },
  {
    id: 7,
    title: "Streamlit & PostgreSQL",
    description: "Full-stack app with Streamlit frontend and PostgreSQL",
    url: "https://github.com/vedanschi/DockerOps/tree/main/7.%20Streamlit%20%26%20PostgreSQL%2C%20Docked",
    technologies: ["PostgreSQL", "Full-stack", "Python"]
  },
  {
    id: 8,
    title: "Evidently AI Monitoring",
    description: "ML model monitoring and drift detection",
    url: "https://github.com/vedanschi/DockerOps/tree/main/8.%20Evidently%20AI%20Sets%20Sail%20in%20Docker",
    technologies: ["AI", "Monitoring", "Data Drift"]
  },
  {
    id: 9,
    title: "Minikube on Windows",
    description: "Local Kubernetes cluster setup on Windows",
    url: "https://github.com/vedanschi/DockerOps/tree/main/9.%20Minikube%20with%20Docker%20on%20Windows",
    technologies: ["Kubernetes", "Minikube", "Windows"]
  },
  {
    id: 10,
    title: "AWS EC2 Deployment",
    description: "Deploying Docker containers on AWS EC2",
    url: "https://github.com/vedanschi/DockerOps/tree/main/10.%20Deploying%20a%20Streamlit%20App%20in%20Docker%20on%20AWS%20EC2",
    technologies: ["AWS", "EC2", "Cloud"]
  },
  {
    id: 11,
    title: "Kubernetes Orchestration",
    description: "Microservices orchestration with Minikube",
    url: "https://github.com/vedanschi/DockerOps/tree/main/11.Microservices%20Orchestration%20with%20Minikube%20and%20Kubernetes",
    technologies: ["K8s", "Orchestration", "Microservices"]
  },
  {
    id: 12,
    title: "Docker Swarm",
    description: "Microservices architecture using Docker Swarm",
    url: "https://github.com/vedanschi/DockerOps/tree/main/12.%20Microservices%20Architecture%20using%20Docker%20Swarm",
    technologies: ["Swarm", "Microservices", "Load Balancing"]
  },
  {
    id: 13,
    title: "Packer on Windows",
    description: "Automated AMI creation with Packer",
    url: "https://github.com/vedanschi/DockerOps/tree/main/13.%20Bakery%20Foundation%20Example%20on%20Windows",
    technologies: ["Packer", "AWS", "Windows"]
  }
];

// DOM Elements
const projectContainer = document.querySelector('.projects-container');
const searchInput = document.getElementById('searchInput');

// Render projects
function renderProjects(projectsToRender) {
  projectContainer.innerHTML = '';
  
  projectsToRender.forEach((project, index) => {
    const techBadges = project.technologies.map(tech => 
      `<span class="tech-badge">${tech}</span>`
    ).join('');
    
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.style.animationDelay = `${index * 0.1 + 0.1}s`;
    projectCard.innerHTML = `
      <div class="project-content">
        <h3>${project.id}. ${project.title}</h3>
        <p>${project.description}</p>
        <div>${techBadges}</div>
      </div>
    `;
    
    projectCard.addEventListener('click', () => {
      window.open(project.url, '_blank');
    });
    
    projectContainer.appendChild(projectCard);
  });
}

// Search functionality
searchInput.addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const filteredProjects = projects.filter(project => 
    project.title.toLowerCase().includes(searchTerm) ||
    project.description.toLowerCase().includes(searchTerm) ||
    project.technologies.some(tech => tech.toLowerCase().includes(searchTerm))
  );
  renderProjects(filteredProjects);
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderProjects(projects);
  
  // Add animation to cards as they appear in viewport
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.project-card').forEach(card => {
    observer.observe(card);
  });
});

// Add cool hover effect to tech badges
document.addEventListener('mouseover', (e) => {
  if (e.target.classList.contains('tech-badge')) {
    e.target.style.transform = 'scale(1.1)';
    e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
  }
});

document.addEventListener('mouseout', (e) => {
  if (e.target.classList.contains('tech-badge')) {
    e.target.style.transform = '';
    e.target.style.boxShadow = '';
  }
});
