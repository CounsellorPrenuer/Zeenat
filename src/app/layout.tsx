import type { Metadata } from 'next';
import './globals.css';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Arwaada Bright Minds',
  description: 'Right Guidance, Right Skills, Right Future',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-orange-50 text-slate-800 antialiased">
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <a href="#" className="flex items-center">
                  <Image src="/logo.png" alt="Arwaada Bright Minds" width={150} height={50} className="object-contain max-h-12 w-auto" />
                </a>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <a href="#home" className="text-slate-600 hover:text-teal-600">Home</a>
                <a href="#about" className="text-slate-600 hover:text-teal-600">About Founder</a>
                <a href="#services" className="text-slate-600 hover:text-teal-600">Services</a>
                <a href="#packages" className="text-slate-600 hover:text-teal-600">Mentoria Packages</a>
                <a href="#testimonials" className="text-slate-600 hover:text-teal-600">Testimonials</a>
                <a href="#contact" className="bg-teal-500 text-white px-4 py-2 rounded-full hover:bg-teal-600">Contact Us</a>
              </div>
            </div>
          </div>
        </nav>
        {children}
        <footer className="bg-teal-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="mb-4">© 2026 Arwaada Bright Minds. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
