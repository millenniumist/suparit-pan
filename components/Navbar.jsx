import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu"
import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-50 bg-[#0D0D0D]/80 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <NavigationMenu>
          <NavigationMenuList className="gap-6">
            <NavigationMenuItem>
              <Link href="#home" className="text-white hover:text-[#FFB800] transition-colors">
                Home
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#projects" className="text-white hover:text-[#FFB800] transition-colors">
                Projects
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#skills" className="text-white hover:text-[#FFB800] transition-colors">
                Skills
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#contact" className="text-white hover:text-[#FFB800] transition-colors">
                Contact
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  )
}
