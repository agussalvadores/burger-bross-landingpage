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

  const badgeSizes = {
    sm: {
      box: "h-7 min-w-[2.75rem] px-2 border-2",
      text: "text-[0.65rem]",
    },
    md: {
      box: "h-10 min-w-[4.25rem] px-3 border-[3px]",
      text: "text-xl md:text-2xl",
    },
    lg: {
      box: "h-14 min-w-[5.75rem] px-4 border-[3px]",
      text: "text-3xl md:text-4xl",
    },
  }

  const badge = badgeSizes[size]
  const statusConfig = statusConfigs[status]

  return (
    <div className="flex items-center gap-3">
      <div className="-rotate-[12deg] py-1">
        <div
          className={`${badge.box} bg-primary border-secondary flex items-center justify-center box-border`}
        >
          <span
            className={`${badge.text} text-secondary font-[var(--font-display)] font-bold leading-none tracking-[0.08em] translate-y-[0.04em] select-none`}
          >
            BROS
          </span>
        </div>
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
