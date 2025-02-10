import main from "@/app/page";

export default function Footer(){
    return(
      <>
      
      <footer className="bg-white text-black py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Section 1 */}
        <div>
          <h3 className="text-xl font-bold mb-4">About Us</h3>
          <p className="text-sm">
            We are a team dedicated to providing the best products and services
            to our customers. Your satisfaction is our priority.
          </p>
        </div>
        {/* Section 2 */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-400">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">Products</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">About</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">Contact</a>
            </li>
          </ul>
        </div>
        {/* Section 3 */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li>Email: support@example.com</li>
            <li>Phone: +123 456 7890</li>
            <li>Address: 123 Street, City, Country</li>
          </ul>
        </div>
        {/* Section 4 */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400">Facebook</a>
            <a href="#" className="hover:text-gray-400">Twitter</a>
            <a href="#" className="hover:text-gray-400">Instagram</a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-8">
        &copy; {new Date().getFullYear()} My Website. All rights reserved.
      </div>
    </footer>
 
      </>
    )
}