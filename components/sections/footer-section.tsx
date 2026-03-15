import { socialLinks } from "@/data"
import Link from "next/link"

export function FooterSection() {
  return (
    <footer className="border-t border-gray-200 py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <p className="text-lg font-bold text-foreground mb-2">shogoworks</p>
            <p className="text-sm text-muted-foreground">
              Web開発 × AI で、
              <br />
              ビジネスの課題を解決する
            </p>
          </div>

          {/* Site Links */}
          <div>
            <p className="text-sm font-medium text-foreground mb-3">Site</p>
            <div className="flex flex-col gap-2">
              <Link
                href="/about"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </Link>
              <Link
                href="/portfolio"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Portfolio
              </Link>
              <Link
                href="/skills"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Skills
              </Link>
              <Link
                href="/contact"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <p className="text-sm font-medium text-foreground mb-3">Legal</p>
            <div className="flex flex-col gap-2">
              <Link
                href="/terms-of-service"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                利用規約
              </Link>
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                プライバシーポリシー
              </Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="text-sm font-medium text-foreground mb-3">SNS</p>
            <div className="flex gap-3">
              {socialLinks.map((link) => {
                const IconComponent = link.icon
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={link.name}
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} shogoworks. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
