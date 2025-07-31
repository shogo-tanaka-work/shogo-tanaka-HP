import { Clock, Users } from "lucide-react"
import { Card } from "@/components/ui/card"
import { teachingExperience } from "@/data"

export function TeachingSection() {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-bold text-white mb-4 text-center">講師実績</h2>
      <div className="space-y-4">
        {teachingExperience.map((experience, index) => (
          <Card
            key={index}
            className="border transition-all duration-300 hover:shadow-lg backdrop-blur-sm"
            style={{
              backgroundColor: "rgba(51, 51, 51, 0.6)",
              borderColor: "rgba(212, 175, 55, 0.2)",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
            }}
          >
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h3 className="font-semibold text-white text-sm mb-1">{experience.title}</h3>
                  <p className="text-xs mb-1" style={{ color: "#D4AF37" }}>
                    {experience.organization}
                  </p>
                </div>
                <span
                  className="px-2 py-1 text-xs rounded-full font-medium"
                  style={{
                    backgroundColor: experience.type === "toB" ? "rgba(212, 175, 55, 0.2)" : "rgba(255, 215, 0, 0.2)",
                    color: "#D4AF37",
                    border: "1px solid rgba(212, 175, 55, 0.3)",
                  }}
                >
                  {experience.type}
                </span>
              </div>
              <p className="text-gray-400 text-xs mb-2 leading-relaxed">{experience.description}</p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center space-x-3">
                  <span className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{experience.period}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Users className="w-3 h-3" />
                    <span>{experience.students}名指導</span>
                  </span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
