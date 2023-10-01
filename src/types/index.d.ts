export type SiteConfig = {
    name: string
    description: string
    url: string
    ogImage: string
  }

  export type NavItem = {
    title: string
    href: string
    disabled?: boolean
  }

  export type MainNavItem = NavItem

  export type MainConfig = {
    mainNav: MainNavItem[]
  }