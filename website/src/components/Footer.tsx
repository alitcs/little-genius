import { Link } from "wouter";
import { routes, site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-forest-900/10">
      <div className="shell flex flex-col items-center gap-4 py-10 text-center text-sm text-ink-soft">
        <p className="font-serif text-lg italic text-forest-600">Le petit génie</p>
        <p>
          {site.address.street}, {site.address.city} ·{" "}
          <a href={site.phoneHref} className="hover:text-forest-800">{site.phone}</a>
        </p>
        <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          <Link href={routes.team} className="hover:text-forest-800">Our team</Link>
          <Link href={routes.hours} className="hover:text-forest-800">Hours</Link>
          <Link href={routes.location} className="hover:text-forest-800">Location</Link>
          <Link href={routes.faq} className="hover:text-forest-800">FAQ</Link>
          <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-forest-800">Instagram</a>
          <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-forest-800">Facebook</a>
        </nav>
        <p>&copy; {new Date().getFullYear()} Little Genius Island</p>
      </div>
    </footer>
  );
}
