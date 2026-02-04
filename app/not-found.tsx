import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-muted">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">
        Página no encontrada
      </h2>
      <p className="text-muted-foreground mb-8 max-w-md">
        La página que buscas no existe o fue movida.
      </p>

      <Link href="/">
        <Button className="bg-primary text-primary-foreground">
          Volver al inicio
        </Button>
      </Link>
    </div>
  )
}
