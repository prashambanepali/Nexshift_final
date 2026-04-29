import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, ArrowRight, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageTransition from "@/components/PageTransition";
import { blogPosts } from "@/data/blogPosts";

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const related = blogPosts.filter((p) => p.slug !== slug && (p.category === post.category || p.tags.some((t) => post.tags.includes(t)))).slice(0, 2);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": post.date,
    "author": { "@type": "Organization", "name": "NexShift Media & Events" },
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <SEOHead
          title={post.title}
          description={post.excerpt}
          canonical={`/blog/${post.slug}`}
          type="article"
          jsonLd={articleSchema}
          breadcrumbs={[
            { name: "Home", url: "/" },
            { name: "Blog", url: "/blog" },
            { name: post.title, url: `/blog/${post.slug}` },
          ]}
        />
        <Navbar />
        <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: post.title }]} />

        <article className="pt-8 pb-20">
          <div className="container mx-auto px-6 max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">{post.category}</span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight text-foreground">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-10 pb-8 border-b border-border">
                <span className="flex items-center gap-1.5"><User size={14} />{post.author}</span>
                <span className="flex items-center gap-1.5"><Calendar size={14} />{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                <span className="flex items-center gap-1.5"><Clock size={14} />{post.readTime}</span>
              </div>

              {/* Content */}
              <div className="prose prose-invert prose-lg max-w-none">
                {post.content.split("\n\n").map((block, i) => {
                  if (block.startsWith("## ")) return <h2 key={i} className="font-heading text-2xl font-bold text-foreground mt-10 mb-4">{block.replace("## ", "")}</h2>;
                  if (block.startsWith("### ")) return <h3 key={i} className="font-heading text-xl font-bold text-foreground mt-8 mb-3">{block.replace("### ", "")}</h3>;
                  if (block.startsWith("- ")) return (
                    <ul key={i} className="space-y-2 my-4">
                      {block.split("\n").map((line, j) => (
                        <li key={j} className="text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1.5">•</span>
                          {line.replace("- ", "")}
                        </li>
                      ))}
                    </ul>
                  );
                  return <p key={i} className="text-muted-foreground leading-relaxed mb-4">{block}</p>;
                })}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-border">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-sm bg-muted text-muted-foreground px-3 py-1 rounded-full">#{tag}</span>
                ))}
              </div>
            </motion.div>

            {/* Related */}
            {related.length > 0 && (
              <div className="mt-16">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-6">Related Articles</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {related.map((r) => (
                    <Link key={r.slug} to={`/blog/${r.slug}`} className="bg-card rounded-xl border border-border p-6 hover:border-primary/30 transition-all group">
                      <span className="text-xs text-primary font-medium">{r.category}</span>
                      <h4 className="font-heading font-bold text-foreground mt-1 mb-2 group-hover:text-primary transition-colors">{r.title}</h4>
                      <p className="text-sm text-muted-foreground line-clamp-2">{r.excerpt}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Back */}
            <div className="mt-12">
              <Link to="/blog" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                <ArrowLeft size={16} /> Back to Blog
              </Link>
            </div>
          </div>
        </article>

        <Footer />
        <WhatsAppButton />
      </div>
    </PageTransition>
  );
};

export default BlogPostPage;
