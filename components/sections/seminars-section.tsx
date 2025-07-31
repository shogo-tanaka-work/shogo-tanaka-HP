import { Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { upcomingSeminars } from "@/data"

export function SeminarsSection() {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-bold text-white mb-4 text-center">開催予定セミナー</h2>
      <div className="space-y-4">
        {upcomingSeminars.map((seminar, index) => (
          <Card
            key={index}
            className="border transition-all duration-300 hover:shadow-lg backdrop-blur-sm overflow-hidden"
            style={{
              backgroundColor: "rgba(51, 51, 51, 0.6)",
              borderColor: "rgba(212, 175, 55, 0.2)",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
            }}
          >
            <div className="relative w-full h-32">
              <Image src="/placeholder.svg?height=128&width=400" alt={seminar.title} fill className="object-cover" />
              <div className="absolute top-2 right-2">
                <span
                  className={`px-2 py-1 text-xs rounded-full font-medium ${
                    seminar.status === "残り5席"
                      ? "bg-red-900/80 text-red-200 border border-red-400/50"
                      : "bg-green-900/80 text-green-200 border border-green-400/50"
                  }`}
                >
                  {seminar.status}
                </span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-white text-sm mb-2">{seminar.title}</h3>
              <div className="space-y-1 text-xs text-gray-400 mb-3">
                <div className="flex items-center space-x-4">
                  <span className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{seminar.date}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{seminar.time}</span>
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span>{seminar.venue}</span>
                    <span>{seminar.capacity}</span>
                  </div>
                  <span className="font-medium" style={{ color: "#D4AF37" }}>
                    {seminar.price}
                  </span>
                </div>
              </div>
              <Button
                size="sm"
                className="w-full text-xs font-medium transition-all duration-200"
                style={{
                  background: "linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)",
                  color: "#2b2b2b",
                  border: "none",
                }}
              >
                詳細・申込み
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
