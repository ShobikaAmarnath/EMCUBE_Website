const servicesItems = [

    { name: 'What is JD Edwards?', category: 'Oracle JD Edwards' },
    { name: 'Key Benefits', category: 'Oracle JD Edwards' },
    { name: 'JD Edwards Implementation', category: 'Oracle JD Edwards' },
    { name: 'Support & Managed Services', category: 'Oracle JD Edwards' },
    { name: 'Orchestrator & Automation', category: 'Oracle JD Edwards' },
    { name: 'JD Edwards Mobile Access', category: 'Oracle JD Edwards' },
    { name: 'Technical (CNC) Services', category: 'Oracle JD Edwards' },

    { name: 'What is Oracle EPM?', category: 'Oracle EPM / CPM' },
    { name: 'Key Benefits', category: 'Oracle EPM / CPM' },
    { name: 'Planning & Budgeting', category: 'Oracle EPM / CPM' },
    { name: 'Financial Close & Consolidation', category: 'Oracle EPM / CPM' },
    { name: 'Account Reconciliation', category: 'Oracle EPM / CPM' },
    { name: 'Narrative & Regulatory Reporting', category: 'Oracle EPM / CPM' },
    { name: 'Data Management & Integration', category: 'Oracle EPM / CPM' },

    { name: 'What is NetSuite?', category: 'NetSuite' },
    { name: 'Key Benefits', category: 'NetSuite' },
    { name: 'NetSuite Implementation', category: 'NetSuite' },
    { name: 'Support & Customization', category: 'NetSuite' },
    { name: 'Industry-Specific Solutions', category: 'NetSuite' },
    { name: 'NetSuite Mobile Access', category: 'NetSuite' },
    { name: 'Planning & Reconciliation', category: 'NetSuite' },

    { name: 'What is Cloud Infrastructure?', category: 'Cloud / Infrastructure' },
    { name: 'Key Benefits', category: 'Cloud / Infrastructure' },
    { name: 'Cloud Consulting & Strategy', category: 'Cloud / Infrastructure' },
    { name: 'Migration to Oracle Cloud (OCI)', category: 'Cloud / Infrastructure' },
    { name: 'Infrastructure Management', category: 'Cloud / Infrastructure' },
    { name: 'DevOps & Automation', category: 'Cloud / Infrastructure' },
    { name: 'Multi-Cloud Environments', category: 'Cloud / Infrastructure' },

    { name: 'What is Enterprise Mobility?', category: 'Mobility Services' },
    { name: 'Key Benefits', category: 'Mobility Services' },
    { name: 'Mobile App Development', category: 'Mobility Services' },
    { name: 'JD Edwards & NetSuite Mobile Apps', category: 'Mobility Services' },
    { name: 'Field Service Mobility', category: 'Mobility Services' },
    { name: 'App Modernization & Integration', category: 'Mobility Services' },

    { name: 'What is Oracle BI?', category: 'Oracle BI' },
    { name: 'Key Benefits', category: 'Oracle BI' },
    { name: 'Oracle Analytics Cloud (OAC)', category: 'Oracle BI' },
    { name: 'BI Publisher & OBIEE Reports', category: 'Oracle BI' },
    { name: 'Data Visualization & Dashboards', category: 'Oracle BI' },
    { name: 'Self-Service BI', category: 'Oracle BI' },

    { name: 'What is Oracle Database?', category: 'Oracle Database' },
    { name: 'Key Benefits', category: 'Oracle Database' },
    { name: 'Installation & Support', category: 'Oracle Database' },
    { name: 'Database Tuning', category: 'Oracle Database' },
    { name: 'Backup & Recovery', category: 'Oracle Database' },
    { name: 'Oracle Autonomous DB', category: 'Oracle Database' },
    { name: 'Health Check & Optimization', category: 'Oracle Database' }


  ];

  const servicesByCategory = [
    {
      category: 'Oracle JD Edwards',
      href: '/services/jd-edwards',
      items: [
        'What is JD Edwards?',
        'Key Benefits',
        'JD Edwards Consulting',
        'JD Edwards Managed Services',
        'JD Edwards Upgrade',
        'JD Edwards Implementation',
        'Lift, Shift & Manage',
        'JD Edwards Orchestrator',
        'JD Edwards Integrations',
        'Smart Help'
      ],
    },
    {
      category: 'Oracle EPM / CPM',
      href: '/services/oracle-epm',
      items: [
        'What is Oracle EPM?',
        'Key Benefits',
        'Planning & Budgeting',
        'Financial Close & Consolidation',
        'Account Reconciliation',
        'Narrative & Regulatory Reporting',
        'Data Management & Integration',
      ],
    },
    {
      category: 'NetSuite',
      href: '/services/netsuite',
      items: [
        'What is NetSuite?',
        'Key Benefits',
        'NetSuite Implementation',
        'Support & Customization',
        'Industry-Specific Solutions',
        'NetSuite Mobile Access',
        'Planning & Reconciliation',
      ],
    },
    {
      category: 'Cloud / Infrastructure',
      href: '/services/cloud',
      items: [
        'What is Cloud Infrastructure?',
        'Key Benefits',
        'Cloud Consulting & Strategy',
        'Migration to Oracle Cloud (OCI)',
        'Infrastructure Management',
        'DevOps & Automation',
        'Multi-Cloud Environments',
      ],
    },
    {
      category: 'Mobility Services',
      href: '/services/mobility',
      items: [
        'What is Enterprise Mobility?',
        'Key Benefits',
        'Mobile App Development',
        'JD Edwards & NetSuite Mobile Apps',
        'Field Service Mobility',
        'App Modernization & Integration',
      ],
    },
    {
      category: 'Oracle BI',
      href: '/services/oracle-bi',
      items: [
        'What is Oracle BI?',
        'Key Benefits',
        'Oracle Analytics Cloud (OAC)',
        'BI Publisher & OBIEE Reports',
        'Data Visualization & Dashboards',
        'Self-Service BI',
      ],
    },
    {
      category: 'Oracle Database',
      href: '/services/oracle-database',
      items: [
        'What is Oracle Database?',
        'Key Benefits',
        'Installation & Support',
        'Database Tuning',
        'Backup & Recovery',
        'Oracle Autonomous DB',
        'Health Check & Optimization',
      ],
    },
  ];

const services = [
  {
    id: 1,
    title: "JD Edwards EnterpriseOne Implementation",
    category: "jd",
    description: "End-to-end JD Edwards implementation tailored to enterprise needs.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: "🚀",
    link: "/services/jd-edwards"
  },
  {
    id: 2,
    title: "Oracle EPM Cloud Migration",
    category: "epm",
    description: "Seamless Oracle EPM/CPM cloud migration with business continuity.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: "☁️",
    link: "/services/oracle-epm"
  },
  {
    id: 3,
    title: "NetSuite ERP Implementation",
    category: "net",
    description: "Comprehensive NetSuite deployment for small to mid-size enterprises.",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: "🛠️",
    link: "/services/netsuite"
  },
  {
    id: 4,
    title: "Cloud Infrastructure Setup",
    category: "cloud",
    description: "Robust cloud infrastructure planning, provisioning, and deployment.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: "💻",
    link: "/services/cloud-infrastructure"
  },
  {
    id: 5,
    title: "Enterprise Mobility Services",
    category: "mobility",
    description: "Mobile-first strategy for apps, management, and workforce enablement.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: "📚",
    link: "/services/mobility"
  },
  {
    id: 6,
    title: "Oracle Business Intelligence",
    category: "bi",
    description: "BI dashboards and reporting solutions with Oracle technology.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: "🔒",
    link: "/services/oracle-bi"
  },
  {
    id: 7,
    title: "Oracle Database Optimization",
    category: "database",
    description: "Performance tuning, high availability, and scaling Oracle databases.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: "📊",
    link: "/services/oracle-database"
  },
  {
    id: 8,
    title: "JD Edwards Consulting",
    category: "jd",
    description: "Strategic consulting to optimize your JD Edwards investment, covering best practices, customizations, and roadmaps.",
    image: "https://images.unsplash.com/photo-1605902711622-cfb43c44367f?auto=format&fit=crop&w=800&q=80",
    icon: "🧠",
  },
  {
    id: 9,
    title: "JD Edwards Managed Services",
    category: "jd",
    description: "Proactive monitoring, maintenance, and support to ensure your JD Edwards systems operate at peak performance.",
    image: "https://images.unsplash.com/photo-1581090700227-1e8e00eeecef?auto=format&fit=crop&w=800&q=80",
    icon: "🛠️",
  },
  {
    id: 10,
    title: "JD Edwards Upgrade",
    category: "jd",
    description: "Seamlessly upgrade to the latest JD Edwards release with minimal disruption and enhanced capabilities.",
    image: "https://images.unsplash.com/photo-1612832020924-d673dbbf109c?auto=format&fit=crop&w=800&q=80",
    icon: "⬆️",
  },
  {
    id: 11,
    title: "JD Edwards Implementation",
    category: "jd",
    description: "Comprehensive end-to-end implementation services tailored to your business needs and industry requirements.",
    image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92a4f?auto=format&fit=crop&w=800&q=80",
    icon: "🚀",
  },
  {
    id: 12,
    title: "Planning & Budgeting",
    category: "epm",
    description: "Streamline financial planning and budgeting with driver-based forecasting, scenario modeling, and collaboration tools.",
    image: "https://images.unsplash.com/photo-1581091012184-7bbedf7c61f9?auto=format&fit=crop&w=800&q=80",
    icon: "📊",
  },
  {
    id: 13,
    title: "Financial Close & Consolidation",
    category: "epm",
    description: "Accelerate your close process with automated consolidation, intercompany eliminations, and audit-ready reporting.",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=800&q=80",
    icon: "🧾",
  },
  {
    id: 14,
    title: "Account Reconciliation",
    category: "epm",
    description: "Automate and standardize account reconciliation to reduce risk, improve accuracy, and ensure compliance.",
    image: "https://images.unsplash.com/photo-1565372191519-3efca5d3c979?auto=format&fit=crop&w=800&q=80",
    icon: "🧮",
  },
  {
    id: 15,
    title: "Narrative & Regulatory Reporting",
    category: "epm",
    description: "Deliver accurate and compliant financial reports with narrative context and regulatory alignment.",
    image: "https://images.unsplash.com/photo-1616627986265-930d660baf2b?auto=format&fit=crop&w=800&q=80",
    icon: "📄",
  },
  {
    id: 16,
    title: "Data Management & Integration",
    category: "epm",
    description: "Seamlessly integrate and manage financial data across systems to drive trusted reporting and analytics.",
    image: "https://images.unsplash.com/photo-1611928485735-8d0720c00694?auto=format&fit=crop&w=800&q=80",
    icon: "🔀",
  },
{
    id: 17,
    title: "NetSuite Implementation",
    category: "net",
    description: "End-to-end NetSuite ERP implementation tailored to your business needs for finance, CRM, and operations.",
    image: "https://images.unsplash.com/photo-1590650046871-92c887180603?auto=format&fit=crop&w=800&q=80",
    icon: "🧩",
  },
  {
    id: 18,
    title: "Support & Customization",
    category: "net",
    description: "Ongoing support and custom module development to enhance your NetSuite experience.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80",
    icon: "🛠️",
  },
  {
    id: 19,
    title: "Industry-Specific Solutions",
    category: "net",
    description: "Deploy tailored NetSuite solutions for industries like retail, manufacturing, and SaaS.",
    image: "https://images.unsplash.com/photo-1581092789910-6a2b70b8b8d5?auto=format&fit=crop&w=800&q=80",
    icon: "🏭",
  },
  {
    id: 20,
    title: "NetSuite Mobile Access",
    category: "net",
    description: "Access NetSuite on-the-go with responsive mobile applications and real-time data.",
    image: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=800&q=80",
    icon: "📱",
  },
  {
    id: 21,
    title: "Planning & Reconciliation",
    category: "net",
    description: "Integrate planning, budgeting, and account reconciliation directly within NetSuite.",
    image: "https://images.unsplash.com/photo-1588776814546-ec7f58bde1eb?auto=format&fit=crop&w=800&q=80",
    icon: "📘",
  },
{
    id: 22,
    title: "Cloud Consulting & Strategy",
    category: "cloud",
    description: "Develop a tailored cloud roadmap aligned with your business goals using Oracle Cloud best practices.",
    image: "https://images.unsplash.com/photo-1611928485735-8d0720c00694?auto=format&fit=crop&w=800&q=80",
    icon: "🧠",
  },
  {
    id: 23,
    title: "Migration to Oracle Cloud (OCI)",
    category: "cloud",
    description: "Seamlessly migrate workloads to Oracle Cloud Infrastructure with minimal disruption.",
    image: "https://images.unsplash.com/photo-1581090700227-1c802d05a5d7?auto=format&fit=crop&w=800&q=80",
    icon: "🚚",
  },
  {
    id: 24,
    title: "Infrastructure Management",
    category: "cloud",
    description: "Monitor and optimize your Oracle Cloud infrastructure for performance, availability, and cost.",
    image: "https://images.unsplash.com/photo-1605902711622-cfb43c4437c1?auto=format&fit=crop&w=800&q=80",
    icon: "🖥️",
  },
  {
    id: 25,
    title: "DevOps & Automation",
    category: "cloud",
    description: "Automate deployments and operations with DevOps tools and CI/CD pipelines in cloud environments.",
    image: "https://images.unsplash.com/photo-1618641986557-b6b6f236176f?auto=format&fit=crop&w=800&q=80",
    icon: "⚙️",
  },
  {
    id: 26,
    title: "Multi-Cloud Environments",
    category: "cloud",
    description: "Design and manage multi-cloud strategies spanning Oracle Cloud, AWS, Azure, and more.",
    image: "https://images.unsplash.com/photo-1504615755583-2916b52192d7?auto=format&fit=crop&w=800&q=80",
    icon: "🌐",
  },
  {
    id: 27,
    title: "Mobile App Development",
    category: "mobility",
    description: "Custom mobile apps designed for enterprise needs, delivering seamless user experience across platforms.",
    image: "https://images.unsplash.com/photo-1603899121485-7c41e6f1fadd?auto=format&fit=crop&w=800&q=80",
    icon: "📱",
  },
  {
    id: 28,
    title: "JD Edwards & NetSuite Mobile Apps",
    category: "mobility",
    description: "Extend JD Edwards and NetSuite capabilities with responsive and secure mobile applications.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    icon: "📲",
  },
  {
    id: 29,
    title: "Field Service Mobility",
    category: "mobility",
    description: "Enable field teams with real-time access to work orders, data entry, and communication tools.",
    image: "https://images.unsplash.com/photo-1611241893603-3bffcc0439d9?auto=format&fit=crop&w=800&q=80",
    icon: "🛠️",
  },
  {
    id: 30,
    title: "App Modernization & Integration",
    category: "mobility",
    description: "Modernize legacy mobile apps and integrate them with cloud, ERP, and third-party systems.",
    image: "https://images.unsplash.com/photo-1616401784897-d7c97d700399?auto=format&fit=crop&w=800&q=80",
    icon: "🔄",
  },
  {
    id: 31,
    title: "Oracle Analytics Cloud (OAC)",
    category: "bi",
    description: "Deploy and manage Oracle Analytics Cloud for real-time data analysis and predictive insights.",
    image: "https://images.unsplash.com/photo-1607083206173-8bded7f3187e?auto=format&fit=crop&w=800&q=80",
    icon: "☁️",
  },
  {
    id: 32,
    title: "BI Publisher & OBIEE Reports",
    category: "bi",
    description: "Design and deliver enterprise reports using BI Publisher and Oracle Business Intelligence tools.",
    image: "https://images.unsplash.com/photo-1604475907982-9c8d254b8f5a?auto=format&fit=crop&w=800&q=80",
    icon: "📄",
  },
  {
    id: 33,
    title: "Data Visualization & Dashboards",
    category: "bi",
    description: "Create compelling dashboards and interactive visualizations for data-driven decisions.",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80",
    icon: "📊",
  },
  {
    id: 34,
    title: "Self-Service BI",
    category: "bi",
    description: "Empower users to generate insights independently through intuitive self-service BI tools.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    icon: "🧠",
  },
  {
    id: 35,
    title: "Installation & Support",
    category: "database",
    description: "Complete Oracle Database installation, configuration, and ongoing technical support.",
    image: "https://images.unsplash.com/photo-1612178992431-8b4e7d23b4e7?auto=format&fit=crop&w=800&q=80",
    icon: "🖥️",
  },
  {
    id: 36,
    title: "Database Tuning",
    category: "database",
    description: "Optimize database performance through indexing, query tuning, and load balancing.",
    image: "https://images.unsplash.com/photo-1581091870620-bdc69b54b7e4?auto=format&fit=crop&w=800&q=80",
    icon: "⚙️",
  },
  {
    id: 37,
    title: "Backup & Recovery",
    category: "database",
    description: "Implement robust backup and disaster recovery strategies for data integrity and availability.",
    image: "https://images.unsplash.com/photo-1581090700227-1c802d05a5d7?auto=format&fit=crop&w=800&q=80",
    icon: "💾",
  },
  {
    id: 38,
    title: "Oracle Autonomous DB",
    category: "database",
    description: "Deploy and manage Oracle Autonomous Database with AI-driven maintenance and tuning.",
    image: "https://images.unsplash.com/photo-1624274571230-3f74c4d71e87?auto=format&fit=crop&w=800&q=80",
    icon: "🤖",
  },
  {
    id: 39,
    title: "Health Check & Optimization",
    category: "database",
    description: "Conduct periodic health checks and fine-tune your Oracle Database for performance and reliability.",
    image: "https://images.unsplash.com/photo-1520409364226-24159a8f5c83?auto=format&fit=crop&w=800&q=80",
    icon: "🔍",
  }
];

const categories = [
    { id: 'all', name: 'All Services', icon: '🌟' },
    { id: 'jd', name: 'Oracle JD Edwards', icon: '🚀' },
    { id: 'epm', name: 'Oracle EPM / CPM', icon: '☁️' },
    { id: 'net', name: 'Net Suite', icon: '🛠️' },
    { id: 'cloud', name: 'Cloud / Infrastructure', icon: '💻' },
    { id: 'mobility', name: 'Mobility Services', icon: '📚' },
    { id: 'bi', name: 'Oracle BI', icon: '🔒' },
    { id: 'database', name: 'Oracle Database', icon: '📊' }
  ];

const categoryToBaseLink = {};
services.forEach(service => {
  if (service.id <= 7) {
    categoryToBaseLink[service.category] = service.link; // e.g., { jd: "/services/jd-edwards" }
  }
});

const updatedServices = services.map(service => {
  if (service.id <= 7) return service; 
  const baseLink = categoryToBaseLink[service.category];
  const anchor = service.title
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, ''); 

  return {
    ...service,
    link: `${baseLink}#${anchor}`
  };
});


export { servicesByCategory, servicesItems, updatedServices, categories };