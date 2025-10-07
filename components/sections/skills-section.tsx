import { Card } from "@/components/ui/card"
import { skills } from "@/data"

const LevelDots = ({ level }: { level: number }) => {
  const dots = Array.from({ length: 5 })
  return (
    <div className="flex gap-1">
      {dots.map((_, i) => (
        <span
          key={i}
          className={`inline-block w-2 h-2 rounded-full border ${i < level ? "bg-yellow-500 border-yellow-500" : "bg-transparent"}`}
          style={{ borderColor: "rgba(212, 175, 55, 0.5)" }}
        />
      ))}
    </div>
  )
}

export function SkillsSection() {
  const categories = [
    { key: "frontend", title: "フロントエンド" },
    { key: "backend", title: "バックエンド" },
    { key: "infra", title: "インフラ" },
  ] as const

  return (
    <div className="mb-8">
      <h2 className="text-lg font-bold text-white mb-4 text-center">スキル</h2>
      <div className="space-y-4">
        {categories.map((cat) => (
          <Card
            key={cat.key}
            className="border backdrop-blur-sm"
            style={{
              backgroundColor: "rgba(51, 51, 51, 0.6)",
              borderColor: "rgba(212, 175, 55, 0.2)",
            }}
          >
            <div className="p-4">
              <h3 className="font-semibold text-white text-sm mb-3">{cat.title}</h3>
              <div className="space-y-2">
                {skills[cat.key].map((s, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs text-gray-300">
                    <span className="mr-3">{s.name}</span>
                    <LevelDots level={s.level} />
                  </div>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

