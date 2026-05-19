"use client"

import { useEffect, useState } from "react"

type StatusType = "closed" | "opening-soon" | "open" | "closing-soon"

interface StatusConfig {
  label: string
  color: string
  bgColor: string
}

const statusConfigs: Record<StatusType, StatusConfig> = {
  "closed": {
    label: "Cerrado Ahora",
    color: "bg-red-500",
    bgColor: "bg-red-500/20",
  },
  "opening-soon": {
    label: "Abre Pronto",
    color: "bg-yellow-500",
    bgColor: "bg-yellow-500/20",
  },
  "open": {
    label: "Abierto Ahora",
    color: "bg-green-500",
    bgColor: "bg-green-500/20",
  },
  "closing-soon": {
    label: "Cierra Pronto",
    color: "bg-yellow-500",
    bgColor: "bg-yellow-500/20",
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

interface BrosLogoProps {
  size?: "sm" | "md" | "lg"
  showStatus?: boolean
}

export function BrosLogo({ size = "md", showStatus = false }: BrosLogoProps) {
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

  const sizeClasses = {
    sm: "w-10 h-10",
    md: "w-14 h-14 md:w-16 md:h-16",
    lg: "w-20 h-20",
  }

  const textSizeClasses = {
    sm: "text-sm",
    md: "text-base md:text-lg",
    lg: "text-xl",
  }

  const statusConfig = statusConfigs[status]

  return (
    <div className="flex items-center gap-3">
      {/* Logo Circle */}
      <div className={`${sizeClasses[size]} rounded-full bg-primary flex items-center justify-center`}>
        <span className={`text-secondary font-[var(--font-display)] ${textSizeClasses[size]} font-bold tracking-tight italic text-center`}>
          BROS
        </span>
      </div>

      {/* Status Badge */}
      {showStatus && mounted && (
        <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${statusConfig.bgColor}`}>
          <span className={`w-2 h-2 rounded-full ${statusConfig.color} animate-pulse`} />
          <span className="text-xs font-medium text-foreground whitespace-nowrap">
            {statusConfig.label}
          </span>
        </div>
      )}
    </div>
  )
}
