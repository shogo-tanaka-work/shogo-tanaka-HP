import type { Seminar, SocialLink, TeachingExperience, WebApp, SkillsByCategory } from "@/types"
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
    description: "筋トレ記録・分析アプリ",
    technologies: ["TypeScript", "Material UI", "PostgreSQL"],
    image: "/assets/images/placeholders/placeholder.svg?height=60&width=60",
    url: "https://gosho-techplay.com/workout/top",
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
    url: "https://example.com/seminar/chatgpt"
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

export const skills: SkillsByCategory = {
  frontend: [
    { name: "React/Next.js", level: 4 },
    { name: "TypeScript", level: 4 },
    { name: "Tailwind CSS", level: 4 },
  ],
  backend: [
    { name: "Node.js", level: 3 },
    { name: "REST/GraphQL", level: 3 },
    { name: "PostgreSQL", level: 3 },
  ],
  infra: [
    { name: "Vercel", level: 4 },
    { name: "Docker", level: 2 },
    { name: "AWS", level: 2 },
  ],
}
