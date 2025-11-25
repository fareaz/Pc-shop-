export default function Footer() {
  return (
    <footer className="bg-white border-t text-black ">
      <div className="container mx-auto px-4 py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          <div>
            <div className="text-xl font-semibold">PC Shop</div>
            <p className="mt-2 text-sm text-gray-600">
              Quality PC parts, fair prices, and friendly support — build your dream rig.
            </p>

            <div className="mt-4 flex items-center gap-3">
           
              <a href="#" aria-label="Twitter" className="p-2 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22 5.92c-.7.31-1.45.52-2.24.62a3.88 3.88 0 0 0 1.7-2.15 7.7 7.7 0 0 1-2.45.94 3.86 3.86 0 0 0-6.58 3.52A10.95 10.95 0 0 1 3.15 4.9a3.86 3.86 0 0 0 1.2 5.15c-.57-.02-1.11-.17-1.58-.43v.04c0 1.88 1.33 3.45 3.1 3.8a3.9 3.9 0 0 1-1.57.06c.44 1.37 1.72 2.37 3.24 2.4A7.73 7.73 0 0 1 2 19.54a10.9 10.9 0 0 0 5.92 1.73c7.1 0 11-5.9 11-11v-.5c.75-.55 1.4-1.25 1.92-2.04a7.7 7.7 0 0 1-2.84.78z"/>
                </svg>
              </a>

              <a href="#" aria-label="Facebook" className="p-2 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2.2v-2.9h2.2V9.1c0-2.2 1.3-3.4 3.2-3.4.9 0 1.8.16 1.8.16v2h-1c-1 0-1.3.63-1.3 1.3v1.6h2.3l-.37 2.9h-1.9v7A10 10 0 0 0 22 12z"/>
                </svg>
              </a>

              <a href="#" aria-label="Instagram" className="p-2 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.5A4.5 4.5 0 1 0 16.5 13 4.5 4.5 0 0 0 12 8.5zm6.2-2.7a1.1 1.1 0 1 0 1.1 1.1 1.1 1.1 0 0 0-1.1-1.1zM12 10a2 2 0 1 1-2 2 2 2 0 0 1 2-2z"/>
                </svg>
              </a>
            </div>
          </div>


          <div>
            <h4 className="font-medium">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="/products" className="hover:text-blue-600">Products</a></li>
              <li><a href="/about" className="hover:text-blue-600">About Us</a></li>
              <li><a href="/contact" className="hover:text-blue-600">Contact</a></li>
              <li><a href="/faq" className="hover:text-blue-600">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium">Support</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="/shipping" className="hover:text-blue-600">Shipping Info</a></li>
              <li><a href="/returns" className="hover:text-blue-600">Returns</a></li>
              <li><a href="/warranty" className="hover:text-blue-600">Warranty</a></li>
              <li><a href="/privacy" className="hover:text-blue-600">Privacy Policy</a></li>
            </ul>
          </div>

          
        </div>

    
        <div className="mt-8 border-t pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
          <div>© {new Date().getFullYear()} PC Shop — All rights reserved.</div>
          <div className="mt-3 md:mt-0 flex items-center gap-4">
            <a href="/terms" className="hover:text-blue-600">Terms</a>
            <a href="/sitemap.xml" className="hover:text-blue-600">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
