"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"

interface BidFormProps {
  currentBid: number
}

export default function BidForm({ currentBid }: BidFormProps) {
  const [open, setOpen] = useState(false)
  const [bidAmount, setBidAmount] = useState((currentBid + 500).toString())
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulación de envío de puja al servidor
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: "¡Puja realizada con éxito!",
        description: `Has pujado $${Number.parseInt(bidAmount).toLocaleString()} por este vehículo.`,
      })

      setOpen(false)
    } catch (error) {
      toast({
        title: "Error al realizar la puja",
        description: "Por favor, inténtalo de nuevo más tarde.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Hacer Puja</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Realizar una Puja</DialogTitle>
          <DialogDescription>
            Ingresa el monto de tu puja. La puja mínima es de ${(currentBid + 500).toLocaleString()}.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="bid-amount">Monto de la Puja ($)</Label>
              <Input
                id="bid-amount"
                type="number"
                value={bidAmount}
                onChange={(e) => setBidAmount(e.target.value)}
                min={currentBid + 500}
                step={100}
                required
              />
            </div>
            <div className="text-sm text-muted-foreground">
              <p>Información importante:</p>
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>Las pujas son vinculantes y no pueden ser retiradas</li>
                <li>Si ganas, deberás completar la compra en 3 días</li>
                <li>Se aplica una comisión del 5% al precio final</li>
              </ul>
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancelar
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Procesando..." : "Confirmar Puja"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
