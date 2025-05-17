import Link from "next/link"
import { Search, SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import AuctionCard from "@/components/auction-card"
import MobileNav from "@/components/mobile-nav"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="sticky top-0 z-10 bg-white border-b">
        <div className="container flex items-center justify-between h-14 px-4">
          <Link href="/" className="text-xl font-bold">
            MarketCarWorld
          </Link>
          <MobileNav />
        </div>
      </header>

      <main className="flex-1">
        <section className="container px-4 py-6">
          <div className="flex items-center gap-2 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Buscar autos..." className="pl-8 h-10" />
            </div>
            <Button variant="outline" size="icon" className="h-10 w-10">
              <SlidersHorizontal className="h-4 w-4" />
              <span className="sr-only">Filtrar</span>
            </Button>
          </div>

          <h1 className="text-2xl font-bold mb-4">Subastas Destacadas</h1>
          <div className="grid gap-4">
            <AuctionCard
              id="1"
              title="2020 Tesla Model 3"
              image="/placeholder.svg?height=200&width=300"
              currentBid={32500}
              timeLeft="2 días"
              bids={18}
            />
            <AuctionCard
              id="2"
              title="2019 BMW M4 Competition"
              image="/placeholder.svg?height=200&width=300"
              currentBid={45750}
              timeLeft="4 horas"
              bids={32}
              featured={true}
            />
            <AuctionCard
              id="3"
              title="2018 Porsche 911 Carrera"
              image="/placeholder.svg?height=200&width=300"
              currentBid={78900}
              timeLeft="1 día"
              bids={24}
            />
          </div>
        </section>

        <section className="container px-4 py-6 border-t">
          <h2 className="text-xl font-bold mb-4">Terminan Pronto</h2>
          <div className="grid gap-4">
            <AuctionCard
              id="4"
              title="2017 Audi RS7"
              image="/placeholder.svg?height=200&width=300"
              currentBid={39200}
              timeLeft="1 hora"
              bids={27}
            />
            <AuctionCard
              id="5"
              title="2021 Ford Mustang GT"
              image="/placeholder.svg?height=200&width=300"
              currentBid={41500}
              timeLeft="3 horas"
              bids={15}
            />
          </div>
        </section>
      </main>

      <nav className="sticky bottom-0 border-t bg-white">
        <div className="container grid grid-cols-3 h-16">
          <Link href="/" className="flex flex-col items-center justify-center text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span className="text-xs mt-1">Inicio</span>
          </Link>
          <Link href="/search" className="flex flex-col items-center justify-center text-muted-foreground">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <span className="text-xs mt-1">Buscar</span>
          </Link>
          <Link href="/profile" className="flex flex-col items-center justify-center text-muted-foreground">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span className="text-xs mt-1">Perfil</span>
          </Link>
        </div>
      </nav>
    </div>
  )
}
