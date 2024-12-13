import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Gift, Users, MapPin, Heart, Plane } from "lucide-react";
import Link from "next/link";

const features = [
  {
    name: "Zeitplan & Checklisten",
    description: "Behalten Sie den Überblick über alle wichtigen Termine und Aufgaben",
    icon: Calendar,
    href: "/timeline",
  },
  {
    name: "Budgetplanung",
    description: "Verwalten Sie Ihr Budget und behalten Sie alle Ausgaben im Blick",
    icon: Gift,
    href: "/budget",
  },
  {
    name: "Location-Suche",
    description: "Finden Sie die perfekte Location für Ihre Traumhochzeit",
    icon: MapPin,
    href: "/venues",
  },
  {
    name: "Dienstleister-Verzeichnis",
    description: "Entdecken Sie die besten Dienstleister in Ihrer Region",
    icon: Users,
    href: "/vendors",
  },
  {
    name: "Hochzeitsmode",
    description: "Inspiration und Tipps für das perfekte Hochzeitsoutfit",
    icon: Heart,
    href: "/attire",
  },
  {
    name: "Flitterwochen",
    description: "Planen Sie Ihre perfekte Hochzeitsreise",
    icon: Plane,
    href: "/honeymoon",
  },
];

export default function Home() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <div className="relative isolate">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-pink-100 to-pink-300 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Ihre perfekte Hochzeit beginnt hier
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Planen Sie Ihre Traumhochzeit mit unserem digitalen Hochzeitsplaner. Von der ersten Idee bis zum großen Tag - wir begleiten Sie bei jedem Schritt.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg">Jetzt kostenlos starten</Button>
              <Button variant="outline" size="lg">
                Mehr erfahren
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Alles für Ihre Hochzeitsplanung
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Nutzen Sie unsere umfangreichen Tools und Ressourcen für eine stressfreie Hochzeitsplanung.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.name} className="p-6 hover:shadow-lg transition-shadow">
                <Link href={feature.href}>
                  <div className="flex flex-col items-start">
                    <div className="rounded-lg bg-pink-50 p-3">
                      <feature.icon className="h-6 w-6 text-pink-500" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-gray-900">
                      {feature.name}
                    </h3>
                    <p className="mt-2 text-gray-600">{feature.description}</p>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}