import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageTransition from "@/components/PageTransition";
import { blogPosts, blogCategories } from "@/data/blogPosts";

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = blogPosts
    .filter((p) => activeCategory === "All" || p.category === activeCategory)
    .filter((p) =>
      searchQuery === "" ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
    );

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <SEOHead
          title="Blog — Insights on Digital Marketing & Events"
          description="Expert insights on digital marketing, event management, branding, and video production in Nepal. Stay ahead with NexShift's blog."
          canonical="/blog"
          breadcrumbs={[{ name: "Home", url: "/" }, { name: "Blog", url: "/blog" }]}
        />
        <Navbar />
        <Breadcrumbs items={[{ label: "Blog" }]} />

        <section className="pt-8 pb-20">
          <div className="container mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mb-16">
              <p className="text-sm tracking-[0.25em] uppercase text-primary font-medium mb-4">Our Blog</p>
              <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Insights & <span className="text-gradient-primary">Ideas</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Expert perspectives on digital marketing, event management, branding, and creative production.
              </p>
            </motion.div>

            {/* Search + Filters */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <div className="relative flex-1 max-w-md">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-card border border-border rounded-xl pl-11 pr-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {blogCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      activeCategory === cat
                        ? "bg-gradient-primary text-primary-foreground"
                        : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((post, i) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-card rounded-2xl border border-border overflow-hidden group hover:border-primary/30 transition-all"
                >
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-4xl font-heading font-bold text-primary/30">{post.category.charAt(0)}</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">{post.category}</span>
                      <span className="flex items-center gap-1"><Calendar size={12} />{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                      <span className="flex items-center gap-1"><Clock size={12} />{post.readTime}</span>
                    </div>
                    <h2 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded">#{tag}</span>
                      ))}
                    </div>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all"
                    >
                      Read More <ArrowRight size={14} />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>

            {filtered.length === 0 && (
              <p className="text-center text-muted-foreground py-20">No articles found matching your search.</p>
            )}
          </div>
        </section>

        <Footer />
        <WhatsAppButton />
      </div>
    </PageTransition>
  );
};

export default BlogPage;
