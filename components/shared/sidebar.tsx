import { ChevronRight } from "lucide-react"

export default function Sidebar() {
  return (
    <aside className="w-64 border-r border-gray-200 hidden md:block p-6">
      <nav className="space-y-1">
        <div className="flex items-center justify-between py-1 hover:text-gray-600 cursor-pointer">
          <span>Woman's Fashion</span>
          <ChevronRight className="h-5 w-5" />
        </div>
        <div className="flex items-center justify-between py-1 hover:text-gray-600 cursor-pointer">
          <span>Men's Fashion</span>
          <ChevronRight className="h-5 w-5" />
        </div>
        <div className="py-1 hover:text-gray-600 cursor-pointer">
          <span>Electronics</span>
        </div>
        <div className="py-1 hover:text-gray-600 cursor-pointer">
          <span>Home & Lifestyle</span>
        </div>
        <div className="py-1 hover:text-gray-600 cursor-pointer">
          <span>Medicine</span>
        </div>
        <div className="py-1 hover:text-gray-600 cursor-pointer">
          <span>Sports & Outdoor</span>
        </div>
        <div className="py-1 hover:text-gray-600 cursor-pointer">
          <span>Baby's & Toys</span>
        </div>
        <div className="py-1 hover:text-gray-600 cursor-pointer">
          <span>Groceries & Pets</span>
        </div>
        <div className="py-1 hover:text-gray-600 cursor-pointer">
          <span>Health & Beauty</span>
        </div>
      </nav>
    </aside>
  )
}
