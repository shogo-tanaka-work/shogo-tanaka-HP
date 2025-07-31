import { Instagram, Twitter, Youtube, Github, Mail, Globe } from "lucide-react"
import type { SocialLink, WebApp, TeachingExperience, Seminar } from "@/types"

export const socialLinks: SocialLink[] = [
  {
    name: "Website",
    url: "#",
    icon: Globe,
  },
  {
    name: "Twitter",
    url: "#",
    icon: Twitter,
  },
  {
    name: "Instagram",
    url: "#",
    icon: Instagram,
  },
  {
    name: "YouTube",
    url: "#",
    icon: Youtube,
  },
  {
    name: "GitHub",
    url: "#",
    icon: Github,
  },
  {
    name: "Contact",
    url: "#",
    icon: Mail,
  },
]

export const webApps: WebApp[] = [
  {
    title: "ECサイト管理システム",
    description: "商品管理・在庫管理・売上分析機能を備えたECサイト",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    image: "/placeholder.svg?height=60&width=60",
    url: "#",
  },
  {
    title: "タスク管理アプリ",
    description: "チーム向けのリアルタイムタスク管理・進捗追跡システム",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    image: "/placeholder.svg?height=60&width=60",
    url: "#",
  },
  {
    title: "予約管理システム",
    description: "美容院・クリニック向けの予約・顧客管理システム",
    technologies: ["Vue.js", "Express", "MySQL", "Stripe"],
    image: "/placeholder.svg?height=60&width=60",
    url: "#",
  },
  {
    title: "データ分析ダッシュボード",
    description: "売上・アクセス解析のリアルタイム可視化ツール",
    technologies: ["React", "D3.js", "Python", "FastAPI"],
    image: "/placeholder.svg?height=60&width=60",
    url: "#",
  },
]

export const teachingExperience: TeachingExperience[] = [
  {
    title: "AI基礎コース講師",
    organization: "TechAI Academy",
    period: "2023年4月 - 現在",
    students: "200+",
    description: "機械学習・深層学習の基礎から実践まで幅広く指導",
    type: "toB",
  },
  {
    title: "ChatGPT活用セミナー",
    organization: "ビジネスAI研修センター",
    period: "2023年6月 - 現在",
    students: "150+",
    description: "企業向けChatGPT導入・活用方法の研修",
    type: "toB",
  },
  {
    title: "プログラミング入門講座",
    organization: "市民向けITスクール",
    period: "2022年10月 - 現在",
    students: "300+",
    description: "初心者向けWeb開発・AI入門講座",
    type: "toC",
  },
]

export const upcomingSeminars: Seminar[] = [
  {
    title: "生成AI活用術 - ビジネス現場での実践方法",
    date: "2024年2月15日",
    time: "14:00 - 16:00",
    venue: "オンライン",
    capacity: "50名",
    price: "¥5,000",
    status: "募集中",
  },
  {
    title: "ChatGPT×Excel自動化セミナー",
    date: "2024年2月28日",
    time: "19:00 - 21:00",
    venue: "東京会場",
    capacity: "30名",
    price: "¥8,000",
    status: "残り5席",
  },
  {
    title: "AI時代のキャリア戦略セミナー",
    date: "2024年3月10日",
    time: "10:00 - 12:00",
    venue: "オンライン",
    capacity: "100名",
    price: "¥3,000",
    status: "募集中",
  },
]
