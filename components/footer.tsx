import { Heart } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <Heart className="h-6 w-6 text-pink-500" />
              <span className="ml-2 text-lg font-bold">Hochzeits-Planung24</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">
              Ihr digitaler Begleiter für die perfekte Hochzeit
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Planung</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/timeline" className="text-sm text-gray-600 hover:text-gray-900">
                  Zeitplan
                </Link>
              </li>
              <li>
                <Link href="/budget" className="text-sm text-gray-600 hover:text-gray-900">
                  Budget
                </Link>
              </li>
              <li>
                <Link href="/checklist" className="text-sm text-gray-600 hover:text-gray-900">
                  Checklisten
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900">Inspiration</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/blog" className="text-sm text-gray-600 hover:text-gray-900">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-sm text-gray-600 hover:text-gray-900">
                  Bildergalerie
                </Link>
              </li>
              <li>
                <Link href="/traditions" className="text-sm text-gray-600 hover:text-gray-900">
                  Traditionen
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900">Rechtliches</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/impressum" className="text-sm text-gray-600 hover:text-gray-900">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-sm text-gray-600 hover:text-gray-900">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="/agb" className="text-sm text-gray-600 hover:text-gray-900">
                  AGB
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t pt-8">
          <p className="text-sm text-gray-600 text-center">
            © {new Date().getFullYear()} Hochzeits-Planung24. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}