export interface ProfileType {
  _id?: string
  name: string
  title: string
  shortBio: string
  bio: string
  currentWork: string
  email: string
  phone: string
  location: string
  experience?: string
  education?: string
  roles: string[]
  image?: string
  aboutImage?: string
  createdAt?: Date
  updatedAt?: Date
}

export interface SkillType {
  _id?: string
  name: string
  level: number
  category: string
  createdAt?: Date
  updatedAt?: Date
}

export interface ProjectType {
  _id?: string
  title: string
  description: string
  image?: string
  tags: string[]
  category: string
  demoUrl?: string
  githubUrl?: string
  featured: boolean
  createdAt?: Date
  updatedAt?: Date
}

export interface ExperienceType {
  _id?: string
  jobTitle: string
  company: string
  description: string
  startDate: string
  endDate?: string
  technologies: string[]
  createdAt?: Date
  updatedAt?: Date
}

export interface BlogPostType {
  _id?: string
  title: string
  slug: string
  content: string
  excerpt: string
  image?: string
  tags: string[]
  published: boolean
  createdAt?: Date
  updatedAt?: Date
}

export interface ContactMessageType {
  _id?: string
  name: string
  email: string
  subject: string
  message: string
  read: boolean
  createdAt?: Date
}

export interface SocialLinkType {
  _id?: string
  name: string
  url: string
  icon: string
  createdAt?: Date
  updatedAt?: Date
}

export interface DashboardStatsType {
  skillsCount: number
  projectsCount: number
  experiencesCount: number
  messagesCount: number
  visitorCount: number
}
