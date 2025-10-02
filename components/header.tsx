"use client"

import { useState } from "react"
import Link from "next/link"
import { Car, Menu } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center gap-2 mr-6">
          <Image 
          id="ignitionBLogo"
          src="/ignitionb-logo-wp.png" 
          alt="ignitionb driving school logo"
          width={100} 
          height={100} />
        </Link>
        <nav className="hidden md:flex gap-6 flex-1">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-red-600">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-red-600">
            About
          </Link>
          <Link href="/services" className="text-sm font-medium transition-colors hover:text-red-600">
            Services
          </Link>
          <Link href="/faq" className="text-sm font-medium transition-colors hover:text-red-600">
            FAQ
          </Link>
        </nav>
        <div className="hidden md:flex items-center gap-6 ml-auto">
          <Button asChild className="bg-red-600 hover:bg-red-700">
            <Link href="https://wa.me/62895331302535?text=Greetings%20I%20would%20like%20to%20enquire%20about%20your%20services">Book a Lesson</Link>
          </Button>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden ml-auto">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="flex flex-col gap-6 mt-6">
              <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                <Car className="h-6 w-6 text-red-600" />
                <span className="font-bold text-xl">IgnitionB</span>
              </Link>
              <nav className="flex flex-col gap-4">
                <Link
                  href="/"
                  className="text-lg font-medium transition-colors hover:text-red-600"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-lg font-medium transition-colors hover:text-red-600"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/services"
                  className="text-lg font-medium transition-colors hover:text-red-600"
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/faq"
                  className="text-lg font-medium transition-colors hover:text-red-600"
                  onClick={() => setIsOpen(false)}
                >
                  FAQ
                </Link>
                <Link
                  href="/contact"
                  className="text-lg font-medium transition-colors hover:text-red-600"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </nav>
              <div className="flex flex-col gap-4 mt-auto">
                <Button asChild className="w-full bg-red-600 hover:bg-red-700" onClick={() => setIsOpen(false)}>
                  <Link href="https://wa.me/62895331302535?text=Greetings%20I%20would%20like%20to%20enquire%20about%20your%20services">Book a Lesson</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
