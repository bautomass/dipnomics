import Link from "next/link";
import { Twitter, Github, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold text-gray-900">
              DIPNOMICS
            </h3>
            <p className="text-sm text-gray-600">
              Professional trading platform with AI-powered predictions
            </p>
          </div>
          
          <div>
            <h4 className="mb-4 font-semibold text-gray-900">Features</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/auto-trade" className="text-gray-600 hover:text-gray-900">
                  Auto Trading
                </Link>
              </li>
              <li>
                <Link href="/manual-trade" className="text-gray-600 hover:text-gray-900">
                  Manual Trading
                </Link>
              </li>
              <li>
                <Link href="/market" className="text-gray-600 hover:text-gray-900">
                  Market Data
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-600 hover:text-gray-900">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4 font-semibold text-gray-900">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-gray-900">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-gray-900">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4 font-semibold text-gray-900">Connect</h4>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
          ? 2024 Dipnomics? | All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
