"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heart, Calendar, Users, MapPin, Gift, Plane, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Zeitplan & Checklisten", href: "/timeline", icon: Calendar },
  { name: "Budget", href: "/budget", icon: Gift },
  { name: "Locations", href: "/venues", icon: MapPin },
  { name: "Dienstleister", href: "/vendors", icon: Users },
  { name: "Hochzeitsmode", href: "/attire", icon: Heart },
  { name: "Flitterwochen", href: "/honeymoon", icon: Plane },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Heart className="h-8 w-8 text-pink-500" />
              <span className="ml-2 text-xl font-bold text-gray-900">Hochzeits-Planung24</span>
            </Link>
          </div>
          
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                <div className="flex items-center space-x-1">
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </div>
              </Link>
            ))}
            <Button variant="default">Anmelden</Button>
          </div>

          <div className="flex lg:hidden">
            <Button
              variant="ghost"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        <div
          className={cn(
            "lg:hidden",
            mobileMenuOpen ? "block" : "hidden"
          )}
        >
          <div className="space-y-1 pb-3 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              >
                <div className="flex items-center space-x-2">
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </div>
              </Link>
            ))}
            <div className="px-3 py-2">
              <Button className="w-full">Anmelden</Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}