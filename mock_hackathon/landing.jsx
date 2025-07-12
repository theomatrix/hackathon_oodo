import React from "react";
// Optional: If you want Lucide icons, run: npm install lucide-react
import { Check, Zap, Shield, Users, BarChart3, Star, ArrowRight, Menu, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold">Skill Swap</span>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-sm font-medium">Features</a>
            <a href="#testimonials" className="text-sm font-medium">Testimonials</a>
            <a href="#contact" className="text-sm font-medium">Contact</a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="hidden md:inline-flex border px-4 py-2 rounded">Sign In</button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Get Started</button>
            <button className="md:hidden border px-2 py-2 rounded">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main>
        <section className="py-20">
          <div className="container px-4">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div>
                <span className="inline-block bg-gray-200 px-3 py-1 rounded-full mb-4">
                  🚀 New: AI-Powered Skill Matching
                </span>
                <h1 className="text-4xl font-bold mb-4">Exchange Skills, Grow Together</h1>
                <p className="mb-6 max-w-lg">
                  Connect with professionals worldwide to trade skills, learn new expertise, and advance your career.
                </p>
                <div className="flex gap-4">
                  <button className="bg-blue-500 text-white px-6 py-3 rounded flex items-center">
                    Join Skill Swap <ArrowRight className="ml-2" />
                  </button>
                  <button className="border px-6 py-3 rounded">Browse Skills</button>
                </div>
                <div className="flex space-x-4 mt-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Free to join</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Connect instantly</span>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="https://via.placeholder.com/800x600"
                  alt="Skill Swap Dashboard"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* More sections like Features, Testimonials... just keep replacing Cards with divs */}
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-12">
        <div className="container px-4">
          <p className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Skill Swap. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
