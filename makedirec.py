import os

dirs = [
    "public",
    "src",
    "src/assets",
    "src/components",
    "src/components/ui",
    "src/data",
    "src/hooks",
    "src/lib",
    "src/pages",
    "src/test",
]

files = [

    # public
    "public/favicon.ico",
    "public/placeholder.svg",
    "public/robots.txt",
    "public/sitemap.xml",

    # assets
    "src/assets/hero-bg.jpg",

    # components
    "src/components/AboutSection.tsx",
    "src/components/AboutSnapshot.tsx",
    "src/components/Breadcrumbs.tsx",
    "src/components/ClientsSection.tsx",
    "src/components/ContactSection.tsx",
    "src/components/CTASection.tsx",
    "src/components/Footer.tsx",
    "src/components/HeroSection.tsx",
    "src/components/Navbar.tsx",
    "src/components/NavLink.tsx",
    "src/components/PageTransition.tsx",
    "src/components/ParallaxSection.tsx",
    "src/components/PortfolioSection.tsx",
    "src/components/SEOHead.tsx",
    "src/components/ServicesPillars.tsx",
    "src/components/ServicesSection.tsx",
    "src/components/TestimonialsSection.tsx",
    "src/components/WhatsAppButton.tsx",

    # UI components
    "src/components/ui/accordion.tsx",
    "src/components/ui/alert-dialog.tsx",
    "src/components/ui/alert.tsx",
    "src/components/ui/aspect-ratio.tsx",
    "src/components/ui/avatar.tsx",
    "src/components/ui/badge.tsx",
    "src/components/ui/breadcrumb.tsx",
    "src/components/ui/button.tsx",
    "src/components/ui/calendar.tsx",
    "src/components/ui/card.tsx",
    "src/components/ui/carousel.tsx",
    "src/components/ui/chart.tsx",
    "src/components/ui/checkbox.tsx",
    "src/components/ui/collapsible.tsx",
    "src/components/ui/command.tsx",
    "src/components/ui/context-menu.tsx",
    "src/components/ui/dialog.tsx",
    "src/components/ui/drawer.tsx",
    "src/components/ui/dropdown-menu.tsx",
    "src/components/ui/form.tsx",
    "src/components/ui/hover-card.tsx",
    "src/components/ui/input.tsx",
    "src/components/ui/input-otp.tsx",
    "src/components/ui/label.tsx",
    "src/components/ui/menubar.tsx",
    "src/components/ui/navigation-menu.tsx",
    "src/components/ui/pagination.tsx",
    "src/components/ui/popover.tsx",
    "src/components/ui/progress.tsx",
    "src/components/ui/radio-group.tsx",
    "src/components/ui/resizable.tsx",
    "src/components/ui/scroll-area.tsx",
    "src/components/ui/select.tsx",
    "src/components/ui/separator.tsx",
    "src/components/ui/sheet.tsx",
    "src/components/ui/sidebar.tsx",
    "src/components/ui/skeleton.tsx",
    "src/components/ui/slider.tsx",
    "src/components/ui/sonner.tsx",
    "src/components/ui/switch.tsx",
    "src/components/ui/table.tsx",
    "src/components/ui/tabs.tsx",
    "src/components/ui/textarea.tsx",
    "src/components/ui/textarea.tsx",
    "src/components/ui/toast.tsx",
    "src/components/ui/toaster.tsx",
    "src/components/ui/toggle-group.tsx",
    "src/components/ui/toggle.tsx",
    "src/components/ui/tooltip.tsx",
    "src/components/ui/use-toast.ts",

    # data
    "src/data/blogPosts.ts",

    # hooks
    "src/hooks/use-mobile.tsx",
    "src/hooks/use-toast.ts",

    # lib
    "src/lib/utils.ts",

    # pages
    "src/pages/About.tsx",
    "src/pages/Blog.tsx",
    "src/pages/BlogPost.tsx",
    "src/pages/Contact.tsx",
    "src/pages/Index.tsx",
    "src/pages/NotFound.tsx",
    "src/pages/Portfolio.tsx",
    "src/pages/Services.tsx",

    # test
    "src/test/example.test.ts",
    "src/test/setup.ts",

    # src root
    "src/App.css",
    "src/App.tsx",
    "src/index.css",
    "src/main.tsx",
    "src/vite-env.d.ts",

    # root
    ".gitignore",
    "components.json",
    "eslint.config.js",
    "index.html",
    "package.json",
    "postcss.config.js"
]

for d in dirs:
    os.makedirs(d, exist_ok=True)

for f in files:
    os.makedirs(os.path.dirname(f) if os.path.dirname(f) else ".", exist_ok=True)
    with open(f, "w") as file:
        pass

print("✅ Full project structure created successfully!")