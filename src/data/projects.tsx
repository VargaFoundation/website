import {BarChart, Brain, Code, Database, Shield, Users} from "lucide-react";

const projects = [
    {
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
        docs: "https://docs.varga.foundation"
    },
    {
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
        docs: "https://docs.varga.foundation"
    },
    {
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
        docs: "https://docs.varga.foundation"
    },
    {
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
        docs: "https://docs.varga.foundation"
    },
    {
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
        docs: "https://docs.varga.foundation"
    }
]

export default projects;
