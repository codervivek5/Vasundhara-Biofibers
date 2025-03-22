import React, { useState } from "react";
import { Calendar, Tag, ChevronRight, Search } from "lucide-react";

// Sample news data - replace with your actual news items
const newsData = [
  {
    id: 1,
    title: "Vasundhara Biofibers Receives Sustainability Innovation Award",
    excerpt: "Our eco-friendly manufacturing process has been recognized for its minimal environmental impact and sustainable approach.",
    content: "We are proud to announce that Vasundhara Biofibers has been honored with the prestigious Sustainability Innovation Award for our groundbreaking eco-friendly manufacturing process. This recognition highlights our commitment to creating high-quality biofibers while minimizing environmental impact. The award committee specifically noted our water conservation techniques and zero-waste approach as industry-leading practices.",
    image: "/src/assets/images/news/award.jpg",
    date: "March 15, 2025",
    category: "Awards",
    tags: ["Sustainability", "Innovation", "Recognition"]
  },
  {
    id: 2,
    title: "New Research Partnership with IIT Delhi Announced",
    excerpt: "Vasundhara Biofibers collaborates with IIT Delhi on advanced biodegradable textile materials research.",
    content: "We're excited to announce our new research partnership with the Indian Institute of Technology Delhi. This collaboration will focus on developing next-generation biodegradable textile materials using our proprietary fiber technology. The research team will explore applications in medical textiles, sustainable fashion, and industrial materials. This partnership represents a significant step forward in our mission to revolutionize the biofiber industry through scientific innovation.",
    image: "/src/assets/images/news/research.jpg",
    date: "February 28, 2025",
    category: "Partnerships",
    tags: ["Research", "Innovation", "Education"]
  },
  {
    id: 3,
    title: "Vasundhara Expands Production Capacity with New Facility",
    excerpt: "Our new state-of-the-art manufacturing facility increases production capacity by 200%.",
    content: "Vasundhara Biofibers is proud to announce the opening of our new state-of-the-art manufacturing facility. This expansion increases our production capacity by 200% while maintaining our commitment to sustainable manufacturing practices. The new facility features advanced water recycling systems, solar power generation, and automated quality control processes. This expansion will help us meet growing demand for our eco-friendly biofiber products in both domestic and international markets.",
    image: "/src/assets/images/news/facility.jpg",
    date: "January 10, 2025",
    category: "Company News",
    tags: ["Expansion", "Manufacturing", "Sustainability"]
  },
  {
    id: 4,
    title: "Launching New Biodegradable Packaging Product Line",
    excerpt: "Introducing our new range of fully biodegradable packaging solutions for consumer goods and food industries.",
    content: "Today marks the official launch of our new biodegradable packaging product line, designed specifically for consumer goods and food industries. These innovative packaging solutions decompose completely within 180 days in standard composting conditions, leaving no microplastics or harmful residues. The product line includes food containers, protective packaging materials, and retail packaging solutions. Early adopters include several national food chains and consumer product manufacturers committed to reducing plastic waste.",
    image: "/src/assets/images/news/packaging.jpg",
    date: "December 5, 2024",
    category: "Product Launch",
    tags: ["Innovation", "Products", "Sustainability"]
  },
];

// Get unique categories from news data
const categories = ["All", ...new Set(newsData.map(item => item.category))];

const NewsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedNewsId, setExpandedNewsId] = useState(null);

  // Filter news based on category and search query
  const filteredNews = newsData.filter(news => {
    const matchesCategory = activeCategory === "All" || news.category === activeCategory;
    const matchesSearch = news.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         news.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleNewsExpansion = (id) => {
    setExpandedNewsId(expandedNewsId === id ? null : id);
  };

  return (
    <div className="bg-gradient-to-b from-white to-green-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">Latest News</h1>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest news, innovations, and announcements from Vasundhara Biofibers.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
          {/* Category filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-green-700 text-white"
                    : "bg-green-100 text-green-800 hover:bg-green-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search news..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {filteredNews.length > 0 ? (
            filteredNews.map((news) => (
              <div
                key={news.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                {/* News Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                    onError={(e) => {
                      e.target.src = "/api/placeholder/600/300";
                      e.target.alt = "News image placeholder";
                    }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-700 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {news.category}
                    </span>
                  </div>
                </div>

                {/* News Content */}
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar size={16} className="mr-1" />
                    <span>{news.date}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-3">{news.title}</h3>

                  <p className="text-gray-600 mb-4">
                    {expandedNewsId === news.id ? news.content : news.excerpt}
                  </p>

                  <button
                    onClick={() => toggleNewsExpansion(news.id)}
                    className="inline-flex items-center text-green-700 font-medium hover:text-green-800 transition-colors"
                  >
                    {expandedNewsId === news.id ? "Read less" : "Read more"}
                    <ChevronRight size={16} className="ml-1" />
                  </button>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {news.tags.map((tag, index) => (
                      <div key={index} className="flex items-center text-xs text-gray-500">
                        <Tag size={12} className="mr-1" />
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">No news articles found. Try a different search or category.</p>
            </div>
          )}
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-green-800 text-white rounded-lg p-8 shadow-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="mb-6">
              Get the latest updates on our innovations, events, and industry insights delivered directly to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-lg flex-grow max-w-md text-gray-800 focus:ring focus:ring-green-300 outline-none"
                required
              />
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-400 text-green-900 font-semibold px-6 py-3 rounded-lg transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm mt-4 text-green-200">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;