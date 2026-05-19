"use client"

import { useEffect, useState } from "react"

type StatusType = "closed" | "opening-soon" | "open" | "closing-soon"

interface StatusConfig {
  label: string
  dotColor: string
}

const statusConfigs: Record<StatusType, StatusConfig> = {
  "closed": {
    label: "Cerrado Ahora",
    dotColor: "bg-red-500",
  },
  "opening-soon": {
    label: "Abre Pronto",
    dotColor: "bg-yellow-500",
  },
  "open": {
    label: "Abierto Ahora",
    dotColor: "bg-green-500",
  },
  "closing-soon": {
    label: "Cierra Pronto",
    dotColor: "bg-yellow-500",
  },
}

function getStatus(): StatusType {
  const now = new Date()
  // Get Argentina time (UTC-3)
  const argentinaTime = new Date(now.toLocaleString("en-US", { timeZone: "America/Argentina/Buenos_Aires" }))
  const hour = argentinaTime.getHours()

  if (hour >= 0 && hour < 11) {
    return "closed"
  } else if (hour >= 11 && hour < 12) {
    return "opening-soon"
  } else if (hour >= 12 && hour < 23) {
    return "open"
  } else {
    return "closing-soon"
  }
}

export function StatusBadge() {
  const [status, setStatus] = useState<StatusType>("open")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setStatus(getStatus())
    
    // Update status every minute
    const interval = setInterval(() => {
      setStatus(getStatus())
    }, 60000)

    return () => clearInterval(interval)
  }, [])

  const statusConfig = statusConfigs[status]

  if (!mounted) {
    return (
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted/80 backdrop-blur-sm rounded-full text-sm text-muted-foreground border border-border/50">
        <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
        Abierto Ahora · Lun a Dom 12 a 00hs
      </div>
    )
  }

  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted/80 backdrop-blur-sm rounded-full text-sm text-muted-foreground border border-border/50">
      <span className={`w-2 h-2 rounded-full animate-pulse ${statusConfig.dotColor}`} />
      {statusConfig.label} · Lun a Dom 12 a 00hs
    </div>
  )
}
