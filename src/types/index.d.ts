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

  export type Printer = {
    id: number;
    name: string;
    buildSize: number;          // in mm
    material: 'PLA' | 'ABS' | 'PETG' | 'Resin' | 'Other'; // Add or remove materials as needed
    price: number;              // in USD or any other currency
    layerResolution: number;   // in mm, e.g., 0.1
    connectivity: 'USB' | 'Wi-Fi' | 'Ethernet' | 'SD Card' | 'Other';
    heatedBed: boolean;
    speed: number;              // in mm/s
    // You can add any other properties here
  };