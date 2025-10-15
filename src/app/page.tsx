import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Twitter, Instagram, Facebook, Globe } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Left Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-sm hover:text-gray-600 transition-colors">Home</a>
              <a href="#" className="text-sm hover:text-gray-600 transition-colors">About me</a>
              <a href="#" className="text-sm hover:text-gray-600 transition-colors">Research</a>
              <a href="#" className="text-sm hover:text-gray-600 transition-colors">Media</a>
              <a href="#" className="text-sm hover:text-gray-600 transition-colors">Resume</a>
            </div>

            {/* Center Logo */}
            <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
              <h1 className="text-xl font-serif">Daniel Di Martino</h1>
            </div>

            {/* Right Icons and Button */}
            <div className="flex items-center space-x-2 md:space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black text-white hover:bg-gray-800 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black text-white hover:bg-gray-800 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black text-white hover:bg-gray-800 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <button className="hidden md:flex items-center space-x-2 text-sm">
                <Globe className="w-4 h-4" />
                <span>English</span>
              </button>
              <Button className="rounded-full bg-white text-black border-2 border-black hover:bg-black hover:text-white transition-colors text-sm px-6">
                Contact me
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[600px] mt-20 flex items-center justify-start bg-cover bg-center" style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("https://ext.same-assets.com/2921472579/826237163.webp")'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-white max-w-2xl">
            <h1 className="text-6xl font-serif mb-4">Daniel Di Martino</h1>
            <p className="text-xl mb-8">Speaker & Economist from Venezuela living in America</p>
            <Button className="rounded-full bg-white text-black hover:bg-gray-100 px-8 py-6 text-lg">
              Contact me
            </Button>
          </div>
        </div>
      </section>

      {/* Speaker Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-serif text-center mb-16">Speaker</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://ext.same-assets.com/2921472579/2996177710.webp"
                alt="Daniel speaking"
                className="rounded-lg w-full object-cover"
              />
            </div>
            <div>
              <p className="text-lg mb-6">
                Daniel speaks at events all over the United States connecting his personal story growing up in Venezuela with our reality, discussing topics like:
              </p>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>How Socialism destroyed his home of Venezuela</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>The importance of free enterprise for our prosperity</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>How high skilled immigration is key for U.S. supremacy</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Why gratitude is the antidote to Western political troubles</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Foreign policy and why freedom is worth defending</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Economist Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-serif mb-16">Economist</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6">
                His research focuses on few issues as part of his doctoral studies in economics and publications for the Manhattan Institute and other institutions:
              </p>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>High skilled immigration</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Immigrant self-selection and induced selection</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Occupational choice and upgrading among immigrants</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>The impact of immigrant legalization policies</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>The role of national origin in the economic consequences of immigration</span>
                </li>
              </ul>
            </div>
            <div>
              <img
                src="https://ext.same-assets.com/2921472579/3859988823.webp"
                alt="Daniel at event"
                className="rounded-lg w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* As seen on Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif italic text-center mb-16">As seen on</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center opacity-60">
            <img src="https://ext.same-assets.com/2921472579/3456070486.webp" alt="Fox News" className="h-12 object-contain" />
            <img src="https://ext.same-assets.com/2921472579/2782627961.webp" alt="Free the People" className="h-12 object-contain" />
            <img src="https://ext.same-assets.com/2921472579/1104170096.webp" alt="SiriusXM" className="h-12 object-contain" />
            <img src="https://ext.same-assets.com/2921472579/840452249.webp" alt="i24 News" className="h-12 object-contain" />
            <img src="https://ext.same-assets.com/2921472579/2509445768.webp" alt="CNN" className="h-12 object-contain" />
            <img src="https://ext.same-assets.com/2921472579/2484857154.webp" alt="Telemundo" className="h-12 object-contain" />
            <img src="https://ext.same-assets.com/2921472579/2799811373.webp" alt="Newsmax" className="h-12 object-contain" />
          </div>
        </div>
      </section>

      {/* About Daniel Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-serif mb-16">About Daniel</h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 text-lg">
              <p>
                <strong>Daniel is a speaker and economist focused on immigration policy.</strong> Daniel graduated with a BA in Quantitative Economics from Indiana University in Indianapolis, obtained an M.A. and M.Phil. in Economics at Columbia University and is completing his PhD there. He is a <strong>fellow at the Manhattan Institute</strong>, a board of advisors member at Young America's Foundation, and a member of the New Jersey advisory committee to the U.S. Commission on Civil Rights. To teach young Americans about the importance of preserving their liberties, Daniel <strong>founded the Dissident Project</strong>, connecting high schools with immigrants who fled tyrannies around the world.
              </p>
              <p>
                <strong>Daniel grew up in Venezuela</strong> and experienced firsthand the terrible consequences of socialism. Since he came to America, <strong>he dedicated himself to explaining how socialism destroyed his native country and how it harms the world</strong>. He has appeared dozens of times on national TV, and he speaks regularly at college campuses and events all over the country. He has been awarded prizes for his advocacy and research by the Fund for American Studies, the Young Republicans National Federation, the Institute for Humane Studies, the Manhattan Institute, and the Jobs Creators Network.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://ext.same-assets.com/2921472579/3054735936.webp"
                alt="Daniel Di Martino"
                className="rounded-full w-80 h-80 object-cover mb-8"
              />
              <Button className="rounded-full bg-black text-white hover:bg-gray-800 px-12 py-6 text-lg">
                More About Daniel
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="relative py-32 bg-cover bg-center" style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://ext.same-assets.com/2921472579/402582024.webp")'}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-white text-3xl md:text-4xl font-serif italic">
            "If socialism ever comes to America, it will be through votes, not bullets"
          </blockquote>
          <p className="text-white text-xl mt-6">- Daniel Di Martino</p>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="relative h-32 bg-gray-50">
        <svg className="absolute top-0 w-full h-32" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#000000" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,106.7C1248,96,1344,96,1392,96L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>

      {/* Affiliations Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-serif text-center mb-20">Affiliations</h2>

          {/* The Dissident Project */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20 bg-gray-50 rounded-3xl overflow-hidden">
            <div className="p-12 text-black">
              <h3 className="text-3xl font-serif mb-6">The Dissident Project</h3>
              <p className="text-lg mb-8">
                Daniel founded the Dissident Project, a nonprofit speakers bureau that connects immigrants who fled tyrannical regimes with American high schoolers at no cost to them.
              </p>
              <div className="flex items-center space-x-6">
                <img src="https://ext.same-assets.com/2921472579/3283398825.webp" alt="Dissident Project Logo" className="h-16" />
                <Button className="rounded-full border-2 border-black bg-white text-black hover:bg-black hover:text-white">
                  Visit web
                </Button>
              </div>
            </div>
            <div>
              <img src="https://ext.same-assets.com/2921472579/2664689544.webp" alt="Dissident Project" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Manhattan Institute */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20 bg-gray-50 rounded-3xl overflow-hidden">
            <div>
              <img src="https://ext.same-assets.com/2921472579/3466801359.webp" alt="Manhattan Institute" className="w-full h-full object-cover" />
            </div>
            <div className="p-12 text-black">
              <h3 className="text-3xl font-serif mb-6">Manhattan Institute</h3>
              <p className="text-lg mb-8">
                He's a fellow at the Manhattan Institute, a think tank dedicated to advancing opportunity, individual liberty, and the rule of law in America and its great cities.
              </p>
              <div className="flex items-center space-x-6">
                <img src="https://ext.same-assets.com/2921472579/1114079432.webp" alt="Manhattan Institute Logo" className="h-16" />
                <Button className="rounded-full border-2 border-black bg-white text-black hover:bg-black hover:text-white">
                  Visit web
                </Button>
              </div>
            </div>
          </div>

          {/* Young America's Foundation */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20 bg-gray-50 rounded-3xl overflow-hidden">
            <div className="p-12 text-black">
              <h3 className="text-3xl font-serif mb-6">Young America's Foundation</h3>
              <p className="text-lg mb-8">
                He speaks for and is part of a board of advisors at YAF, the leading organization for young conservatives. They are over 60 years old and are present in more than 2,000 college campuses, and now high schools and middle schools, helping students promote their conservative views.
              </p>
              <div className="flex items-center space-x-6">
                <img src="https://ext.same-assets.com/2921472579/2441082769.gif" alt="YAF Logo" className="h-16" />
                <Button className="rounded-full border-2 border-black bg-white text-black hover:bg-black hover:text-white">
                  Visit web
                </Button>
              </div>
            </div>
            <div>
              <img src="https://ext.same-assets.com/2921472579/3577902874.webp" alt="Young America's Foundation" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* U.S. Commission on Civil Rights */}
          <div className="grid md:grid-cols-2 gap-12 items-center bg-gray-50 rounded-3xl overflow-hidden">
            <div>
              <img src="https://ext.same-assets.com/2921472579/1564204722.webp" alt="Civil Rights" className="w-full h-full object-cover" />
            </div>
            <div className="p-12 text-black">
              <h3 className="text-3xl font-serif mb-6">U.S. Commission on Civil Rights</h3>
              <p className="text-lg mb-8">
                Daniel is one of the 12 advisory committee members for the state of New Jersey to the federal U.S. Commission on Civil Rights, which advises congress on a range of issues related to civil rights, liberties, and the constitution.
              </p>
              <Button className="rounded-full border-2 border-black bg-white text-black hover:bg-black hover:text-white">
                Visit web
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="relative h-32 bg-white">
        <svg className="absolute top-0 w-full h-32" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#000000" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,106.7C1248,96,1344,96,1392,96L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>

      {/* Contact Section */}
      <section className="py-20 bg-gray-100" id="contact">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-serif text-center mb-16">Contact</h2>
          <form className="bg-white p-12 rounded-2xl shadow-lg space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-500 mb-1">First Name</label>
                  <Input className="rounded-full bg-gray-100 border-0" />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Last Name</label>
                  <Input className="rounded-full bg-gray-100 border-0" />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Phone</label>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Country</label>
                  <Input className="rounded-full bg-gray-100 border-0" defaultValue="Venezuela" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs text-gray-500 mb-1">Number</label>
                  <Input className="rounded-full bg-gray-100 border-0" placeholder="+58" />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email <span className="text-red-600">(required)</span></label>
              <Input type="email" className="rounded-full bg-gray-100 border-0" placeholder="Email" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Subject <span className="text-gray-500">(required)</span></label>
              <Input className="rounded-full bg-gray-100 border-0" placeholder="Subject" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <Textarea className="rounded-2xl bg-gray-100 border-0 min-h-[150px]" />
            </div>

            <div className="flex justify-end">
              <Button className="rounded-full bg-black text-white hover:bg-gray-800 px-12 py-6 text-lg">
                Send
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-8 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <p className="text-sm">© 2024 Daniel Di Martino. All rights reserved.</p>
            <div className="flex items-center space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black text-white hover:bg-gray-800 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black text-white hover:bg-gray-800 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black text-white hover:bg-gray-800 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
