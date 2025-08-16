import Image from "next/image"

export function ProfileSection() {
  return (
    <div className="text-center mb-8">
      <div className="relative w-24 h-24 mx-auto mb-4">
        <Image
          src="/assets/images/placeholders/placeholder.svg?height=96&width=96"
          alt="Profile Photo"
          width={96}
          height={96}
          className="rounded-full object-cover border-4 shadow-lg"
          style={{ borderColor: "#D4AF37", boxShadow: "0 10px 25px rgba(212, 175, 55, 0.2)" }}
        />
      </div>
      <h1 className="text-2xl font-bold text-white mb-2">(編集中)</h1>
      <h1 className="text-2xl font-bold text-white mb-2">田中 省伍</h1>
      <p className="text-sm mb-3 font-medium" style={{ color: "#D4AF37" }}>
        システムエンジニア & AI講師
      </p>
      <p className="text-gray-300 text-xs leading-relaxed px-0">
        Webアプリケーション開発とAI技術指導やAI導入支援を専門としています。
        <br />
        企業・個人向けにAI活用セミナーやレッスンも開催中。
      </p>
    </div>
  )
}
