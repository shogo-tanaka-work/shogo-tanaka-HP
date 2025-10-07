export interface SocialLink {
  name: string
  url: string
  icon: any
}

export interface WebApp {
  title: string
  description: string
  technologies: string[]
  image: string
  url: string
}

export interface TeachingExperience {
  title: string
  organization: string
  period: string
  students: string
  description: string
  type: "toB" | "toC"
  url?: string
}

export interface Seminar {
  title: string
  date: string
  time: string
  venue: string
  capacity: string
  price: string
  status: string
}

export interface SkillItem {
  name: string
  level: 1 | 2 | 3 | 4 | 5
}

export interface SkillsByCategory {
  frontend: SkillItem[]
  backend: SkillItem[]
  infra: SkillItem[]
}
