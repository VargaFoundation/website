import { useParams, Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { getProjectById } from "@/data/projects"
import { Github, ExternalLink, Eye, Star, GitBranch, Users, Calendar, Code, Download, ArrowLeft, CheckCircle, Terminal, Book } from "lucide-react"

export default function ProjectDetail() {
    const { id } = useParams<{ id: string }>()

    if (!id) {
        return <div>Project ID not found</div>
    }

    const project = getProjectById(id)

    if (!project) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-mono font-bold text-black mb-4">Projet non trouvé</h1>
                    <p className="text-gray-600 font-mono mb-8">Le projet demandé n'existe pas.</p>
                    <Link to="/projects">
                        <Button className="btn-primary font-mono">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Retour aux projets
                        </Button>
                    </Link>
                </div>
            </div>
        )
    }

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'stable': return 'text-green-600 bg-green-100'
            case 'beta': return 'text-blue-600 bg-blue-100'
            case 'alpha': return 'text-orange-600 bg-orange-100'
            default: return 'text-gray-600 bg-gray-100'
        }
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="section-padding bg-white">
                <div className="container mx-auto container-padding">
                    <div className="max-w-6xl mx-auto">
                        {/* Breadcrumb */}
                        <div className="flex items-center mb-8 font-mono text-sm">
                            <Link to="/projects" className="text-gray-600 hover:text-black">projets</Link>
                            <span className="mx-2 text-gray-400">/</span>
                            <span className="text-black">{project.name.toLowerCase()}</span>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-12">
                            <div className="lg:col-span-2">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-black text-white flex items-center justify-center mr-4">
                                        <Code className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h1 className="text-4xl md:text-5xl text-display text-black leading-none">
                                            {project.name}
                                        </h1>
                                        <div className={`inline-flex items-center px-3 py-1 font-mono text-sm mt-2 ${getStatusColor(project.status)}`}>
                                            {project.status}
                                        </div>
                                    </div>
                                </div>

                                <p className="text-lg text-gray-600 font-mono mb-8">
                                    {project.description}
                                </p>

                                <p className="text-gray-700 font-mono text-sm mb-8 leading-relaxed">
                                    {project.longDescription}
                                </p>

                                {/* Screenshots */}
                                {project.screenshots && (
                                    <div className="mb-12">
                                        <h3 className="text-2xl font-mono font-bold text-black mb-6">aperçu</h3>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            {project.screenshots.map((screenshot, index) => (
                                                <img
                                                    key={index}
                                                    src={screenshot}
                                                    alt={`${project.name} screenshot ${index + 1}`}
                                                    className="w-full h-48 object-cover border border-gray-200"
                                                />
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Features */}
                                <div className="mb-12">
                                    <h3 className="text-2xl font-mono font-bold text-black mb-6">fonctionnalités</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {project.features.map((feature, index) => (
                                            <div key={index} className="flex items-start">
                                                <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                                                <span className="font-mono text-sm text-gray-700">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar */}
                            <div className="space-y-8">
                                {/* Project Stats */}
                                <div className="bg-gray-50 border border-gray-200 p-6">
                                    <h3 className="font-mono font-bold text-black mb-4">statistiques</h3>
                                    <div className="space-y-3 font-mono text-sm">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <Star className="w-4 h-4 text-yellow-500 mr-2" />
                                                <span className="text-gray-600">stars</span>
                                            </div>
                                            <span className="text-black font-bold">{project.stars}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <GitBranch className="w-4 h-4 text-gray-600 mr-2" />
                                                <span className="text-gray-600">forks</span>
                                            </div>
                                            <span className="text-black font-bold">{project.forks}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <Users className="w-4 h-4 text-gray-600 mr-2" />
                                                <span className="text-gray-600">contributeurs</span>
                                            </div>
                                            <span className="text-black font-bold">{project.contributors}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <Calendar className="w-4 h-4 text-gray-600 mr-2" />
                                                <span className="text-gray-600">dernière maj</span>
                                            </div>
                                            <span className="text-black font-bold">{new Date(project.lastUpdate).toLocaleDateString()}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <Code className="w-4 h-4 text-gray-600 mr-2" />
                                                <span className="text-gray-600">langage</span>
                                            </div>
                                            <span className="text-black font-bold">{project.language}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Links */}
                                <div className="bg-gray-50 border border-gray-200 p-6">
                                    <h3 className="font-mono font-bold text-black mb-4">liens</h3>
                                    <div className="space-y-3">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center text-gray-700 hover:text-black transition-colors font-mono text-sm"
                                        >
                                            <Github className="w-4 h-4 mr-3" />
                                            code source
                                        </a>
                                        {project.demo && (
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center text-gray-700 hover:text-black transition-colors font-mono text-sm"
                                            >
                                                <Eye className="w-4 h-4 mr-3" />
                                                démonstration
                                            </a>
                                        )}
                                        {project.docs && (
                                            <a
                                                href={project.docs}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center text-gray-700 hover:text-black transition-colors font-mono text-sm"
                                            >
                                                <Book className="w-4 h-4 mr-3" />
                                                documentation
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Quick Actions */}
                                <div className="space-y-3">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                                        <Button className="w-full btn-primary font-mono">
                                            <Github className="mr-2 h-4 w-4" />
                                            voir sur github
                                        </Button>
                                    </a>
                                    {project.demo && (
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                            <Button className="w-full btn-secondary font-mono">
                                                <Eye className="mr-2 h-4 w-4" />
                                                essayer la démo
                                            </Button>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Installation Section */}
            <div className="section-padding bg-gray-50 border-t border-gray-200">
                <div className="container mx-auto container-padding">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-mono font-bold text-black mb-8">installation</h2>

                        <div className="mb-8">
                            <h3 className="text-lg font-mono font-bold text-black mb-4">prérequis</h3>
                            <ul className="space-y-2">
                                {project.installation.requirements.map((req, index) => (
                                    <li key={index} className="flex items-center text-gray-700 font-mono text-sm">
                                        <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                                        {req}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-mono font-bold text-black mb-4">étapes d'installation</h3>
                            <div className="bg-black text-white font-mono p-6">
                                <div className="bg-gray-800 text-gray-300 px-4 py-2 -mx-6 -mt-6 mb-4 text-xs border-b border-gray-700">
                                    terminal
                                </div>
                                {project.installation.steps.map((step, index) => (
                                    <div key={index} className="mb-2">
                                        <span className="text-gray-400">$ </span>
                                        <span className="text-white">{step}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Usage Section */}
            <div className="section-padding bg-white border-t border-gray-200">
                <div className="container mx-auto container-padding">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-mono font-bold text-black mb-8">utilisation</h2>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-lg font-mono font-bold text-black mb-4">exemple de base</h3>
                                <div className="bg-black text-white font-mono p-6">
                                    <div className="bg-gray-800 text-gray-300 px-4 py-2 -mx-6 -mt-6 mb-4 text-xs border-b border-gray-700">
                                        {project.language.toLowerCase()}
                                    </div>
                                    <pre className="text-sm whitespace-pre-wrap">{project.usage.basicExample}</pre>
                                </div>
                            </div>

                            {project.usage.advancedExample && (
                                <div>
                                    <h3 className="text-lg font-mono font-bold text-black mb-4">exemple avancé</h3>
                                    <div className="bg-black text-white font-mono p-6">
                                        <div className="bg-gray-800 text-gray-300 px-4 py-2 -mx-6 -mt-6 mb-4 text-xs border-b border-gray-700">
                                            {project.language.toLowerCase()}
                                        </div>
                                        <pre className="text-sm whitespace-pre-wrap">{project.usage.advancedExample}</pre>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Roadmap Section */}
            {project.roadmap && (
                <div className="section-padding bg-gray-50 border-t border-gray-200">
                    <div className="container mx-auto container-padding">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-mono font-bold text-black mb-8">feuille de route</h2>

                            <div className="space-y-6">
                                {project.roadmap.map((milestone, index) => (
                                    <div key={index} className="bg-white border border-gray-200 p-6">
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="text-lg font-mono font-bold text-black">version {milestone.version}</h3>
                                            <div className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 font-mono text-sm">
                                                {milestone.timeline}
                                            </div>
                                        </div>
                                        <ul className="space-y-2">
                                            {milestone.features.map((feature, featureIndex) => (
                                                <li key={featureIndex} className="flex items-center text-gray-700 font-mono text-sm">
                                                    <div className="w-2 h-2 bg-black mr-3"></div>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Back to Projects */}
            <div className="section-padding bg-white border-t border-gray-200">
                <div className="container mx-auto container-padding">
                    <div className="max-w-4xl mx-auto text-center">
                        <Link to="/projects">
                            <Button className="btn-secondary font-mono">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                retour aux projets
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}