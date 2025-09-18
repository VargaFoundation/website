import {Brain, Database, LucideIcon, Shield} from "lucide-react";

export interface Project {
    id: string
    name: string
    description: string
    longDescription: string
    category: string
    language: string
    stars: number
    forks: number
    contributors: number
    lastUpdate: string
    status: 'stable' | 'beta' | 'alpha'
    icon: LucideIcon
    features: string[]
    github: string
    demo?: string
    docs?: string
    screenshots?: string[]
    installation: {
        requirements: string[]
        steps: string[]
    }
    usage: {
        basicExample: string
        advancedExample?: string
    }
    roadmap?: {
        version: string
        features: string[]
        timeline: string
    }[]
}

const projects: Project[] = [
    {
        id: "nexberos",
        name: "nexberos",
        featured: true,
        description: "un bridge Kerberos pour Kubernetes permettant de s'authentifier sur des clusters Hadoop à partir d'un Pod Kubernetes",
        category: "devops",
        language: "Python",
        stars: 1,
        forks: 0,
        contributors: 1,
        lastUpdate: "2025-09-18",
        status: "beta",
        icon: Database,
        features: [
            "hadoop",
            "kerberos",
            "kubernetes"
        ],
        github: "https://github.com/vargafoundation/nexberos",
        demo: "https://demo.varga.foundation",
        docs: "https://docs.varga.foundation",
        installation: {
            requirements: [
                'Python 3.8+',
                'Docker',
                'Kubernetes (optionnel)',
                '4GB RAM minimum'
            ],
            steps: [
                'git clone https://github.com/vargafoundation/nexberos',
                'cd nexberos',
                'docker-compose up -d'
            ]
        },
        usage: {
            basicExample: ``
        },
        roadmap: [
            {
                version: '1.0',
                features: [
                    'support natif pour Kerberos'
                ],
                timeline: 'Q4 2025'
            }
        ]
    },
    {
        id: "avix",
        name: "avix",
        featured: true,
        description: "une solution permettant de déployer n’importe quel traitement (Python, Java…) sur n’importe quelle infrastructure (cloud, on premise, edge…)",
        category: "devops",
        language: "Java",
        stars: 1,
        forks: 0,
        contributors: 1,
        lastUpdate: "2025-09-18",
        status: "beta",
        icon: Brain,
        features: [
            "déploiement automatisé",
            "monitoring des modèles",
            "versioning des modèles",
            "a/b testing intégré"
        ],
        github: "https://github.com/vargafoundation/avix",
        demo: "https://demo.varga.foundation",
        docs: "https://docs.varga.foundation",
        installation: {
            requirements: [
                'Java 17+',
                'Docker',
                'Kubernetes (optionnel)',
                '4GB RAM minimum'
            ],
            steps: [
                'git clone https://github.com/vargafoundation/avix',
                'cd avix'
            ]
        },
        usage: {
            basicExample: ``
        },
        roadmap: [
        ]
    },
    {
        id: "velith",
        name: "velith",
        featured: true,
        description: "une spécification industrielle définissant un agrément entre un producteur et un consommateur de données afin de garantir la conformité des données pour les parties",
        category: "governance",
        language: "YAML",
        stars: 1,
        forks: 0,
        contributors: 1,
        lastUpdate: "2025-09-18",
        status: "beta",
        icon: Shield,
        features: [
            "contrôle qualité",
            "conformité rgpd"
        ],
        github: "https://github.com/vargafoundation/velith",
        demo: "https://demo.varga.foundation",
        docs: "https://docs.varga.foundation",
        installation: {
            requirements: [
                'Java 17+',
                'Docker',
                'Kubernetes (optionnel)',
                '4GB RAM minimum'
            ],
            steps: [
                'git clone https://github.com/vargafoundation/velith',
                'cd velith'
            ]
        },
        usage: {
            basicExample: ``
        },
        roadmap: [
        ]
    },
    {
        id: "kryon",
        name: "kryon",
        featured: true,
        description: "une solution permettant de challenger un jeu de données par rapport à une spécification Velith",
        category: "data processing",
        language: "Java",
        stars: 1,
        forks: 0,
        contributors: 1,
        lastUpdate: "2025-09-18",
        status: "beta",
        icon: Database,
        features: [
            "contrôle qualité",
            "conformité rgpd"
        ],
        github: "https://github.com/vargafoundation/kryon",
        demo: "https://demo.varga.foundation",
        docs: "https://docs.varga.foundation",
        installation: {
            requirements: [
                'Java 17+',
                'Docker',
                'Kubernetes (optionnel)',
                '4GB RAM minimum'
            ],
            steps: [
                'git clone https://github.com/vargafoundation/kryon',
                'cd kryon'
            ]
        },
        usage: {
            basicExample: ``
        },
        roadmap: [
        ]
    },
    {
        id: "rivio",
        name: "rivio",
        featured: false,
        description: "un adapteur Hadoop permettant de lancer des traitements sur Kubernetes, basé sur la rétro-ingénieurie du protocole HRPC, avec pour objectif de faciliter la migration de projets « legacy » Hadoop vers Kubernetes",
        category: "kubernetes",
        language: "Java",
        stars: 1,
        forks: 0,
        contributors: 1,
        lastUpdate: "2025-09-18",
        status: "beta",
        icon: Database,
        features: [
            "hadoop",
            "kubernetes"
        ],
        github: "https://github.com/vargafoundation/rivio",
        demo: "https://demo.varga.foundation",
        docs: "https://docs.varga.foundation",
        installation: {
            requirements: [
                'Java 17+',
                'Docker',
                'Kubernetes (optionnel)',
                '4GB RAM minimum'
            ],
            steps: [
                'git clone https://github.com/vargafoundation/rivio',
                'cd rivio'
            ]
        },
        usage: {
            basicExample: ``
        },
        roadmap: [
        ]
    }
]

export default projects;

export function getProjectById(id: string): Project | undefined {
    return projects.find(project => project.id === id)
}

export function getProjectsByCategory(category: string): Project[] {
    return projects.filter(project => project.category === category)
}