import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { Calendar, Clock, ArrowRight, User, Tag } from "lucide-react"

export default function Blog() {
  const featuredPost = {
    id: 1,
    title: "building real-time data pipelines at scale",
    excerpt: "how we process 10M+ events per second with varga.foundation. lessons learned from production deployments.",
    content: "In this comprehensive guide, we'll explore how to build and scale real-time data pipelines using varga.foundation...",
    author: "alex.chen",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "engineering",
    image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg",
    featured: true
  }

  const blogPosts = [
    {
      id: 2,
      title: "kubernetes deployment best practices",
      excerpt: "production-ready kubernetes configurations for varga.foundation. security, monitoring, and scaling tips.",
      author: "marie.dubois",
      date: "2024-01-12",
      readTime: "6 min read",
      category: "devops",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg"
    },
    {
      id: 3,
      title: "data governance with open source tools",
      excerpt: "implementing gdpr compliance and data lineage tracking. complete guide to data governance.",
      author: "thomas.martin",
      date: "2024-01-10",
      readTime: "12 min read",
      category: "governance",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg"
    },
    {
      id: 4,
      title: "migrating from proprietary platforms",
      excerpt: "step-by-step migration guide from snowflake, databricks, and other proprietary solutions.",
      author: "sophie.lambert",
      date: "2024-01-08",
      readTime: "10 min read",
      category: "migration",
      image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg"
    },
    {
      id: 5,
      title: "monitoring data quality in production",
      excerpt: "automated data quality checks and alerting. prevent bad data from reaching your analytics.",
      author: "david.kim",
      date: "2024-01-05",
      readTime: "7 min read",
      category: "monitoring",
      image: "https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg"
    },
    {
      id: 6,
      title: "cost optimization strategies",
      excerpt: "reduce infrastructure costs by 60% with smart resource management and auto-scaling.",
      author: "lisa.wang",
      date: "2024-01-03",
      readTime: "9 min read",
      category: "optimization",
      image: "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg"
    }
  ]

  const categories = [
    { name: "all", count: 6 },
    { name: "engineering", count: 2 },
    { name: "devops", count: 1 },
    { name: "governance", count: 1 },
    { name: "migration", count: 1 },
    { name: "monitoring", count: 1 }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-3 py-1 border border-gray-300 text-gray-700 text-sm font-mono mb-12">
              <div className="w-1 h-1 bg-black mr-2"></div>
              engineering insights
            </div>

            <h1 className="text-6xl md:text-7xl text-display mb-12 text-black leading-none">
              blog
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 text-body mb-16 max-w-3xl mx-auto">
              technical deep-dives, best practices, and lessons learned.
              <br />
              from the team building varga.foundation.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Post */}
      <div className="section-padding bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-2xl font-mono font-bold text-black mb-8">featured</h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="inline-flex items-center px-2 py-1 bg-black text-white font-mono text-xs">
                    {featuredPost.category}
                  </div>
                  <div className="flex items-center text-gray-600 font-mono text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(featuredPost.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center text-gray-600 font-mono text-sm">
                    <Clock className="w-4 h-4 mr-2" />
                    {featuredPost.readTime}
                  </div>
                </div>
                
                <h3 className="text-3xl font-mono font-bold text-black mb-4">
                  {featuredPost.title}
                </h3>
                
                <p className="text-gray-600 font-mono text-sm mb-6">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-200 flex items-center justify-center mr-3 font-mono text-xs">
                      {featuredPost.author.split('.')[0][0].toUpperCase()}{featuredPost.author.split('.')[1][0].toUpperCase()}
                    </div>
                    <span className="font-mono text-sm text-black">{featuredPost.author}</span>
                  </div>
                  
                  <Button className="btn-primary font-mono">
                    read more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-64 object-cover border border-gray-200"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Filter */}
      <div className="section-padding bg-white border-t border-gray-200">
        <div className="container mx-auto container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-4 mb-12">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 font-mono text-sm border transition-colors ${
                    index === 0 
                      ? 'bg-black text-white border-black' 
                      : 'bg-white text-gray-700 border-gray-300 hover:border-black hover:text-black'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* Blog Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article key={index} className="bg-white border border-gray-200 hover:border-black transition-colors">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover border-b border-gray-200"
                  />
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 font-mono text-xs">
                        {post.category}
                      </div>
                      <div className="flex items-center text-gray-500 font-mono text-xs">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-mono font-bold text-black mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 font-mono text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-gray-200 flex items-center justify-center mr-2 font-mono text-xs">
                          {post.author.split('.')[0][0].toUpperCase()}{post.author.split('.')[1][0].toUpperCase()}
                        </div>
                        <div>
                          <div className="font-mono text-xs text-black">{post.author}</div>
                          <div className="font-mono text-xs text-gray-500">
                            {new Date(post.date).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                      
                      <Button className="btn-secondary text-xs font-mono px-3 py-1">
                        read
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button className="btn-secondary font-mono">
                load more posts
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="section-padding bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto container-padding">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl text-display mb-8 text-black">
              stay updated
            </h2>
            <p className="text-lg text-gray-600 mb-8 font-mono">
              get the latest posts delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 bg-white text-black placeholder-gray-400 border border-gray-300 focus:outline-none focus:border-black transition-colors font-mono text-sm"
              />
              <Button className="btn-primary font-mono px-6 py-3">
                subscribe
              </Button>
            </div>
            
            <p className="text-xs text-gray-500 font-mono mt-4">
              no spam. unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}