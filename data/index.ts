import type { NavItem, Seminar, ServiceItem, SkillsByCategory, SocialLink, StatItem, TeachingExperience, WebApp } from "@/types"
import { Bot, Code, Github, GraduationCap, Instagram, Linkedin, Twitter } from "lucide-react"

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
    period: "2025年6月",
    students: "20+",
    description: "MCPの解説、活用方法紹介",
    type: "toC",
  },
]

export const upcomingSeminars: Seminar[] = [
  {
    title: "ChatGPT5解説、活用方法紹介",
    date: "2025年10月末日",
    time: "20:00 - 21:00",
    venue: "オンライン",
    capacity: "100名",
    price: "無料",
    status: "募集中",
  },
]

export const skills: SkillsByCategory = {
  frontend: [
    { name: "HTML/CSS", level: 3 },
    { name: "JavaScript", level: 4 },
    { name: "TypeScript", level: 3 },
    { name: "React/Next.js", level: 3 },
    { name: "Sass", level: 2 },
    { name: "Tailwind CSS", level: 2 },
  ],
  backend: [
    { name: "Node.js", level: 3 },
    { name: "Python", level: 2 },
    { name: "REST API/Graph API", level: 3 },
    { name: "PostgreSQL", level: 2 },
    { name: "MySQL", level: 2 },
    { name: "MongoDB", level: 3 },
    { name: "Supabase", level: 2 },
    { name: "Dify", level: 3 },
  ],
  infra: [
    { name: "Git", level: 3 },
    { name: "GitHub", level: 3 },
    { name: "GitLab", level: 3 },
    { name: "Vercel", level: 2 },
    { name: "Docker", level: 2 },
    { name: "Azure", level: 3 },
    { name: "GCP", level: 1 },
    { name: "AWS", level: 1 },
  ],
}

export const stats: StatItem[] = [
  { value: "3+", label: "年の開発経験", description: "Web開発・システム構築" },
  { value: "100+", label: "名の指導実績", description: "AI活用・プログラミング研修" },
  { value: "10+", label: "回のセミナー開催", description: "ChatGPT・AI活用セミナー" },
  { value: "5+", label: "件のプロジェクト", description: "Webアプリ・業務システム" },
]

export const services: ServiceItem[] = [
  {
    title: "Web開発",
    description: "Next.js / React を中心に、要件定義から設計・実装・運用まで対応。モダンな技術スタックで高品質なWebアプリケーションを構築します。",
    icon: Code,
  },
  {
    title: "AI導入支援",
    description: "企業のAI活用をサポート。ChatGPT / Dify 等を活用した業務効率化や、AIツールの選定・導入コンサルティングを行います。",
    icon: Bot,
  },
  {
    title: "セミナー・研修",
    description: "企業・個人向けにAI活用セミナーや技術研修を開催。実践的なハンズオン形式で、すぐに業務に活かせるスキルを提供します。",
    icon: GraduationCap,
  },
]

export const navItems: NavItem[] = [
  { label: "サービス", href: "#services" },
  { label: "実績", href: "#portfolio" },
  { label: "スキル", href: "#skills" },
  { label: "講師実績", href: "#teaching" },
  { label: "お問い合わせ", href: "#contact" },
]
