import Image from "next/image"

export function ProfileSection() {
  return (
    <div className="text-center mb-8">
      <div className="relative w-24 h-24 mx-auto mb-4">
        <Image
          src="/assets/images/0038f.jpg"
          alt="Profile Photo"
          fill
          className="rounded-full object-cover border-4 shadow-lg"
          style={{ 
            borderColor: "#D4AF37", 
            boxShadow: "0 10px 25px rgba(212, 175, 55, 0.2)",
            objectPosition: "center 25%"
          }}
        />
      </div>
      <h1 className="text-2xl font-bold text-white mb-1">田中 省伍</h1>
      <p className="text-sm mb-1 font-medium" style={{ color: "#D4AF37" }}>
        システムエンジニア & AI講師
      </p>
    </div>
  )
}
