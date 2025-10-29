import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-4">İlkSepet</h3>
            <p className="text-sm">
              Smart software, fast delivery. From e-commerce to enterprise automation, live systems in weeks.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/solutions" className="hover:text-white">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/legal/terms" className="hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/commercial-agreement" className="hover:text-white">
                  Commercial Agreement
                </Link>
              </li>
              <li>
                <Link href="/legal/dpa" className="hover:text-white">
                  Data Processing Agreement
                </Link>
              </li>
              <li>
                <Link href="/legal/sub-processors" className="hover:text-white">
                  Subprocessors
                </Link>
              </li>
              <li>
                <Link href="/legal/report-abuse" className="hover:text-white">
                  Report Abuse
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/status" className="hover:text-white">
                  Status
                </Link>
              </li>
              <li>
                <a href="mailto:info@ilksepet.com" className="hover:text-white">
                  info@ilksepet.com
                </a>
              </li>
              <li>
                <a href="tel:+12136341961" className="hover:text-white">
                  +1 (213) 634-1961
                </a>
              </li>
            </ul>
            <div className="mt-4 text-sm">
              <p className="mb-1">İlksepet LLC</p>
              <p className="text-gray-400">
                30 N Gould St Ste N<br />
                Sheridan, WY 82801, USA
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} İlksepet LLC. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex items-center space-x-4 text-sm">
              <span className="text-gray-400">Powered by</span>
              <span className="text-gray-500">Vercel</span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-500">Supabase</span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-500">Stripe</span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-500">DeepSeek</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

