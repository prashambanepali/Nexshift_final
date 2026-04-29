import { Link } from "react-router-dom";

const footerLinks = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Digital Marketing", href: "/services#digital-marketing" },
      { label: "Event Management", href: "/services#event-management" },
      { label: "Photography & Video", href: "/services#photo-video" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link to="/" className="font-heading text-2xl font-bold mb-4 block">
              <span className="text-gradient-primary">Nex</span>
              <span className="text-foreground">Shift</span>
            </Link>
            <p className="text-muted-foreground max-w-sm mb-6">
              Nepal's creative powerhouse. We specialize in digital marketing, 
              event management, and cinematic visual production.
            </p>
            <div className="flex gap-4">
              {["Instagram", "Facebook", "LinkedIn", "YouTube"].map((s) => (
                <a key={s} href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">{s}</a>
              ))}
            </div>
          </div>
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="font-heading font-semibold text-foreground mb-4">{group.title}</h4>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© 2026 NexShift Media & Events. All rights reserved.</p>
          <p className="text-sm text-muted-foreground">Kathmandu, Nepal · hello@nexshiftmedia.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
