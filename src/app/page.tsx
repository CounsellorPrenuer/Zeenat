import Image from 'next/image';
import Packages from '@/components/Packages';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-br from-orange-100 to-rose-100 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-teal-800 mb-6">Arwaada Bright Minds</h1>
        <p className="text-xl md:text-2xl text-teal-600 mb-8 font-medium">RIGHT GUIDANCE, RIGHT SKILLS, RIGHT FUTURE</p>
        <p className="max-w-2xl mx-auto text-lg text-slate-700 leading-relaxed">
          At Arwaada Bright Mind, we help students and working professionals understand their potential, make informed career choices, and learn with confidence.
        </p>
      </section>

      {/* About Founder */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-rose-500 mb-12">About the Founder</h2>
          <div className="bg-rose-50 p-8 rounded-3xl shadow-sm border border-rose-100 flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 rounded-2xl overflow-hidden bg-rose-200 relative border-4 border-white shadow-md">
              <Image src="/zeenat.jpg" alt="Zeenat" fill className="object-cover" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-rose-700 mb-4">Zeenat</h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Zeenat is a seasoned education professional with over two decades of experience in academic leadership, student mentoring, curriculum management, and school administration across CBSE and preschool education. Known for her structured approach, empathetic counseling style, and commitment to student success, she has consistently guided learners toward academic excellence and personal growth.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Her counseling journey stems from extensive experience working closely with students and parents to address academic challenges, improve performance, and support informed educational and career decisions. She believes in creating a positive and engaging learning environment that empowers students to build confidence, discover their strengths, and achieve their fullest potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-4 bg-teal-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-teal-700 mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-teal-100">
              <h3 className="text-2xl font-bold text-teal-600 mb-4">AI Career Navigation</h3>
              <p className="text-slate-600 mb-4">Psychometric & AI-assisted Career Exploration for deeper self-understanding and clarity for tomorrow.</p>
              <p className="text-slate-600">We guide you to discover the right academic and career pathways.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-teal-100">
              <h3 className="text-2xl font-bold text-teal-600 mb-4">Online Tutoring</h3>
              <p className="text-slate-600 mb-4">Designed to strengthen concepts and improve academic performance. Special focus on academically weak students.</p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>All subjects for class 1 to 5th (all boards)</li>
                <li>Maths & Science for class 6th, 7th and 8th</li>
                <li>Mode: Online</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-20 px-4 bg-orange-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-orange-600 mb-12">Mentoria Packages</h2>
          <Packages />
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-teal-700 mb-12">Testimonials</h2>
          <div className="bg-teal-50 p-8 rounded-3xl italic text-slate-600">
            "More testimonials coming soon as we continue to guide bright minds!"
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 bg-rose-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-rose-600 mb-12">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-rose-100">
              <h3 className="text-2xl font-semibold text-rose-700 mb-6">Get in Touch</h3>
              <p className="text-lg text-slate-700 mb-4"><strong>Phone / WhatsApp:</strong> +91 9899271800</p>
              <p className="text-lg text-slate-700 mb-4"><strong>Email:</strong> zeeniali786@gmail.com</p>
              <div className="flex space-x-6 mt-8 pt-6 border-t border-rose-50">
                <a href="https://www.instagram.com/arwaada.3112?igsh=MXkwZ2IycDgxNmlocQ==&utm_source=ig_contact_invite" target="_blank" rel="noreferrer" className="text-rose-500 hover:text-rose-600 font-medium">Instagram</a>
                <a href="https://www.linkedin.com/in/zeenat-b4449718?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="text-blue-600 hover:text-blue-700 font-medium">LinkedIn</a>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-rose-100">
              <h3 className="text-2xl font-semibold text-rose-700 mb-6">Send a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                  <input type="text" id="name" className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent placeholder:text-slate-400 text-slate-700" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                  <input type="email" id="email" className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent placeholder:text-slate-400 text-slate-700" placeholder="Your email" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent placeholder:text-slate-400 text-slate-700 resize-none" placeholder="How can we help you?"></textarea>
                </div>
                <button type="button" className="w-full bg-rose-500 text-white font-medium py-3 rounded-xl hover:bg-rose-600 transition-colors">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
