import type { Seminar, SocialLink, TeachingExperience, WebApp } from "@/types"
import { Github, Instagram, Linkedin, Twitter } from "lucide-react"

export const socialLinks: SocialLink[] = [
  {
    name: "X",
    url: "https://x.com/shogo_works",
    icon: Twitter,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/shogoworks/?next=%2F",
    icon: Instagram,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/shogoworks/",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    url: "https://github.com/shogo-tanaka-work",
    icon: Github,
  },
]

export const webApps: WebApp[] = [
  {
    title: "筋トレ記録・分析アプリ",
    description: "商品管理・在庫管理・売上分析機能を備えたECサイト",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    image: "/assets/images/placeholders/placeholder.svg?height=60&width=60",
    url: "#",
  },
]

export const teachingExperience: TeachingExperience[] = [
  {
    title: "AI講師（業務活用）",
    organization: "byTech",
    period: "2025年5月 - 現在",
    students: "30+",
    description: "AI活用の基礎から実践まで幅広く指導",
    type: "toC",
  },
  {
    title: "ChatGPT活用セミナー",
    organization: "オンライン",
    period: "2025年5月 - 現在",
    students: "50+",
    description: "ChatGPT導入・活用方法の研修",
    type: "toC",
  },
  {
    title: "MCP入門セミナー",
    organization: "オンライン",
    period: "2025年6月 - 現在",
    students: "30+",
    description: "MCPの解説、活用方法紹介",
    type: "toC",
  },
]

export const upcomingSeminars: Seminar[] = [
  {
    title: "ChatGPT5解説、活用方法紹介",
    date: "2025年8月19日",
    time: "20:00 - 21:00",
    venue: "オンライン",
    capacity: "100名",
    price: "無料",
    status: "募集中",
  },
]
