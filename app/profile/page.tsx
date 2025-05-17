import Link from "next/link"
import Image from "next/image"
import { Settings, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProfilePage() {
  // En una aplicación real, obtendrías los datos del usuario desde una base de datos
  const user = {
    name: "Carlos Rodríguez",
    email: "carlos@ejemplo.com",
    joinedDate: "Marzo 2023",
    avatar: "/placeholder.svg?height=100&width=100",
    activeBids: [
      {
        id: "1",
        title: "2020 Tesla Model 3",
        image: "/placeholder.svg?height=80&width=120",
        currentBid: 32500,
        yourBid: 32000,
        timeLeft: "2 días",
        outbid: true,
      },
      {
        id: "2",
        title: "2019 BMW M4 Competition",
        image: "/placeholder.svg?height=80&width=120",
        currentBid: 45750,
        yourBid: 45750,
        timeLeft: "4 horas",
        outbid: false,
      },
    ],
    wonAuctions: [
      {
        id: "3",
        title: "2018 Honda Civic Type R",
        image: "/placeholder.svg?height=80&width=120",
        finalPrice: 28500,
        date: "15/04/2023",
        status: "Pagado",
      },
    ],
    purchaseHistory: [
      {
        id: "3",
        title: "2018 Honda Civic Type R",
        image: "/placeholder.svg?height=80&width=120",
        price: 28500,
        date: "20/04/2023",
        status: "Entregado",
      },
    ],
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="sticky top-0 z-10 bg-white border-b">
        <div className="container flex items-center justify-between h-14 px-4">
          <h1 className="text-xl font-bold">Perfil</h1>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
              <span className="sr-only">Configuración</span>
            </Button>
            <Button variant="ghost" size="icon">
              <LogOut className="h-5 w-5" />
              <span className="sr-only">Cerrar sesión</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="container px-4 py-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative h-16 w-16 rounded-full overflow-hidden">
              <Image src={user.avatar || "/placeholder.svg"} alt={user.name} fill className="object-cover" />
            </div>
            <div>
              <h2 className="font-bold text-xl">{user.name}</h2>
              <p className="text-sm text-muted-foreground">Miembro desde {user.joinedDate}</p>
            </div>
          </div>

          <Tabs defaultValue="active-bids">
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="active-bids">Pujas Activas</TabsTrigger>
              <TabsTrigger value="won">Ganadas</TabsTrigger>
              <TabsTrigger value="purchases">Compras</TabsTrigger>
            </TabsList>

            <TabsContent value="active-bids">
              {user.activeBids.length > 0 ? (
                <div className="space-y-4">
                  {user.activeBids.map((bid) => (
                    <Card key={bid.id}>
                      <CardContent className="p-4">
                        <Link href={`/auction/${bid.id}`} className="flex gap-3">
                          <div className="relative h-20 w-28 flex-shrink-0">
                            <Image
                              src={bid.image || "/placeholder.svg"}
                              alt={bid.title}
                              fill
                              className="object-cover rounded-md"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold line-clamp-1">{bid.title}</h3>
                            <div className="grid grid-cols-2 gap-1 mt-1">
                              <div>
                                <p className="text-xs text-muted-foreground">Tu puja</p>
                                <p className="font-medium">${bid.yourBid.toLocaleString()}</p>
                              </div>
                              <div>
                                <p className="text-xs text-muted-foreground">Puja actual</p>
                                <p className="font-medium">${bid.currentBid.toLocaleString()}</p>
                              </div>
                            </div>
                            <div className="flex justify-between items-center mt-2">
                              <span className="text-sm">{bid.timeLeft} restantes</span>
                              {bid.outbid ? (
                                <span className="text-sm text-red-500 font-medium">Superado</span>
                              ) : (
                                <span className="text-sm text-green-500 font-medium">Puja más alta</span>
                              )}
                            </div>
                          </div>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">No tienes pujas activas</p>
                  <Button asChild className="mt-4">
                    <Link href="/">Explorar subastas</Link>
                  </Button>
                </div>
              )}
            </TabsContent>

            <TabsContent value="won">
              {user.wonAuctions.length > 0 ? (
                <div className="space-y-4">
                  {user.wonAuctions.map((auction) => (
                    <Card key={auction.id}>
                      <CardContent className="p-4">
                        <Link href={`/auction/${auction.id}`} className="flex gap-3">
                          <div className="relative h-20 w-28 flex-shrink-0">
                            <Image
                              src={auction.image || "/placeholder.svg"}
                              alt={auction.title}
                              fill
                              className="object-cover rounded-md"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold line-clamp-1">{auction.title}</h3>
                            <div className="mt-1">
                              <p className="text-xs text-muted-foreground">Precio final</p>
                              <p className="font-medium">${auction.finalPrice.toLocaleString()}</p>
                            </div>
                            <div className="flex justify-between items-center mt-2">
                              <span className="text-sm">Ganada el {auction.date}</span>
                              <span className="text-sm font-medium">{auction.status}</span>
                            </div>
                          </div>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">No has ganado ninguna subasta todavía</p>
                  <Button asChild className="mt-4">
                    <Link href="/">Explorar subastas</Link>
                  </Button>
                </div>
              )}
            </TabsContent>

            <TabsContent value="purchases">
              {user.purchaseHistory.length > 0 ? (
                <div className="space-y-4">
                  {user.purchaseHistory.map((purchase) => (
                    <Card key={purchase.id}>
                      <CardContent className="p-4">
                        <div className="flex gap-3">
                          <div className="relative h-20 w-28 flex-shrink-0">
                            <Image
                              src={purchase.image || "/placeholder.svg"}
                              alt={purchase.title}
                              fill
                              className="object-cover rounded-md"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold line-clamp-1">{purchase.title}</h3>
                            <div className="mt-1">
                              <p className="text-xs text-muted-foreground">Precio</p>
                              <p className="font-medium">${purchase.price.toLocaleString()}</p>
                            </div>
                            <div className="flex justify-between items-center mt-2">
                              <span className="text-sm">Comprado el {purchase.date}</span>
                              <span className="text-sm font-medium">{purchase.status}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">No tienes historial de compras</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <nav className="sticky bottom-0 border-t bg-white">
        <div className="container grid grid-cols-3 h-16">
          <Link href="/" className="flex flex-col items-center justify-center text-muted-foreground">
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
          <Link href="/profile" className="flex flex-col items-center justify-center text-primary">
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
