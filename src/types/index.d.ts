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
    buildSize: [number, number, number];          // in mm
    materialSupported: Array<string>; // Add or remove materials as needed
    price: number;              // in USD or any other currency
    layerResolution: number;   // in mm, e.g., 0.1
    connectivity: Array<string>;
    heatedBed: boolean;
    speed: number;              // in mm/s
    extrusion: number;
    maxBedTemp: number;
    maxHotendTemp: number;
    nozzle: string;
    nozzleDiameter: number;
    motionSystem: string;
    technology: string;
    enclosed: boolean;
  };