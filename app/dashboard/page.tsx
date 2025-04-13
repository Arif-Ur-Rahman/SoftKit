"use client"
import { useState } from "react"
import { Search, Heart, ShoppingCart, ChevronRight } from "lucide-react"
import Link from "next/link"
import Sidebar from "../../components/shared/sidebar"

export default function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0)

  const handleDotClick = (index: number) => {
    setActiveSlide(index)
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Announcement Bar */}
      <div className="bg-black text-white py-2 px-20 text-center flex justify-between items-center">
        <div className="flex-1"></div>
        <div className="flex-1 text-center">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <span className="font-semibold underline ml-1">ShopNow</span>
        </div>
        <div className="flex-1 flex justify-end">
          <div className="flex items-center">
            <span>English</span>
            <ChevronRight className="h-4 w-4 rotate-90" />
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="border-b border-gray-200 py-4 px-20">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            Exclusive
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-gray-600">
              Home
            </Link>
            <Link href="/contact" className="hover:text-gray-600">
              Contact
            </Link>
            <Link href="/about" className="hover:text-gray-600">
              About
            </Link>
            <Link href="/signup" className="hover:text-gray-600">
              Sign Up
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="bg-gray-100 rounded-md py-2 px-4 pr-10 w-64 focus:outline-none"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-500" />
            </div>
            <button className="p-2">
              <Heart className="h-6 w-6" />
            </button>
            <button className="p-2">
              <ShoppingCart className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <div className="flex flex-1 pl-15">
        {/* Sidebar Component */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-4 pr-20">
          <div className="relative bg-black text-white rounded-0 overflow-hidden">
            <div className="p-12 md:p-16 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 z-10">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 mr-3">
                    <svg viewBox="0 0 1024 1024" className="w-full h-full">
                      <path
                        d="M747.4 535.7c-.4-68.2 30.5-119.6 92.9-157.5-34.9-50-87.7-77.5-157.3-82.8-65.9-5.2-138 38.4-164.4 38.4-27.9 0-91.7-36.6-141.9-36.6C273.1 298.8 163 379.8 163 544.6c0 48.7 8.9 99 26.7 150.8 23.8 68.2 109.6 235.3 199.1 232.6 46.8-1.1 79.9-33.2 140.8-33.2 59.1 0 89.7 33.2 141.9 33.2 90.3-1.3 167.9-153.2 190.5-221.6-121.1-57.1-114.6-167.2-114.6-170.7zm-105.1-305c50.7-60.2 46.1-115 44.6-134.7-44.8 2.6-96.6 30.5-126.1 64.8-32.5 36.8-51.6 82.3-47.5 133.6 48.4 3.7 92.6-21.2 129-63.7z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <span className="text-xl">iPhone 14 Series</span>
                </div>
                <h2 className="text-5xl font-bold mb-6">
                  Up to 10%
                  <br />
                  off Voucher
                </h2>
                <div className="flex items-center">
                  <span className="underline font-semibold mr-2">Shop Now</span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                  >
                    <path
                      d="M4 12H20M20 12L14 6M20 12L14 18"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0">
                <img src="/placeholder.svg?height=400&width=400" alt="iPhone 14" className="w-full max-w-md mx-auto" />
              </div>
            </div>

            {/* Slider Dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {[0, 1, 2, 3, 4].map((index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-2.5 h-2.5 rounded-full ${activeSlide === index ? "bg-red-500" : "bg-gray-400"}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
