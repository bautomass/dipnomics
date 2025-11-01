import Link from "next/link";
import { Twitter, Github, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              DIPNOMICS
            </h3>
            <p className="text-sm text-muted-foreground">
              Professional trading platform with AI-powered predictions
            </p>
          </div>
          
          <div>
            <h4 className="mb-4 font-semibold">Features</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/auto-trade" className="text-muted-foreground hover:text-foreground">
                  Auto Trading
                </Link>
              </li>
              <li>
                <Link href="/manual-trade" className="text-muted-foreground hover:text-foreground">
                  Manual Trading
                </Link>
              </li>
              <li>
                <Link href="/market" className="text-muted-foreground hover:text-foreground">
                  Market Data
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-muted-foreground hover:text-foreground">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4 font-semibold">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4 font-semibold">Connect</h4>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          ? 2024 Dipnomics? | All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
