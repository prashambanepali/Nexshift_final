import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

const Breadcrumbs = ({ items }: { items: BreadcrumbItem[] }) => {
  return (
    <nav aria-label="Breadcrumb" className="container mx-auto px-6 pt-24 pb-4">
      <ol className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
        <li>
          <Link to="/" className="hover:text-primary transition-colors flex items-center gap-1">
            <Home size={14} />
            Home
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2">
            <ChevronRight size={14} className="text-muted-foreground/50" />
            {item.href && i < items.length - 1 ? (
              <Link to={item.href} className="hover:text-primary transition-colors">{item.label}</Link>
            ) : (
              <span className="text-foreground font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
