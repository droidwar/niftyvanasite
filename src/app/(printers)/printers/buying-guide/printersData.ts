import { Printer } from "@/types/index";

export const printers: Printer[] = [
  {
      id: 1,
      name: 'Prusa i3 MK3S+',
      buildSize: [250, 250, 250], // Assuming cubic build size
      materialSupported: ['PLA'],
      price: 749,
      layerResolution: 0.05,
      connectivity: 'USB',
      heatedBed: true,
      speed: 200,
  },
  {
      id: 2,
      name: 'Ender 3 V2',
      buildSize: [220, 220, 220],
      materialSupported: ['PLA'],
      price: 279,
      layerResolution: 0.1,
      connectivity: 'SD Card',
      heatedBed: true,
      speed: 180
  },
  //... similar updates for other printers
  {
      id: 3,
      name: 'Ultimaker S3',
      buildSize: [230, 230, 230],
      materialSupported: ['PLA'],
      price: 3950,
      layerResolution: 0.025,
      connectivity: 'Wi-Fi',
      heatedBed: true,
      speed: 24
  },
  {
      id: 4,
      name: 'Anycubic Photon Mono',
      buildSize: [130, 130, 130],
      materialSupported: ['Resin'],
      price: 269,
      layerResolution: 0.05,
      connectivity: 'USB',
      heatedBed: false,
      speed: 50
  },
  {
    id: 5,
    name: 'Bibo Dual Extruder',
    buildSize: [214, 214, 214],
    materialSupported: ['PLA'],
    price: 839,
    layerResolution: 0.05,
    connectivity: 'Wi-Fi',
    heatedBed: true,
    speed: 110
  },
  {
      id: 6,
      name: 'Artillery Sidewinder X1',
      buildSize: [300, 300, 300],
      materialSupported: ['PLA'],
      price: 449,
      layerResolution: 0.05,
      connectivity: 'USB',
      heatedBed: true,
      speed: 150
  },
  {
      id: 7,
      name: 'FlashForge Creator Pro',
      buildSize: [227, 227, 227],
      materialSupported: ['ABS'],
      price: 699,
      layerResolution: 0.1,
      connectivity: 'SD Card',
      heatedBed: true,
      speed: 100
  },
  {
      id: 8,
      name: 'LulzBot TAZ 6',
      buildSize: [280, 280, 280],
      materialSupported: ['PLA'],
      price: 2500,
      layerResolution: 0.075,
      connectivity: 'USB',
      heatedBed: true,
      speed: 200
  },
  {
      id: 9,
      name: 'Dremel Digilab 3D45',
      buildSize: [255, 255, 255],
      materialSupported: ['PETG'],
      price: 1799,
      layerResolution: 0.05,
      connectivity: 'Wi-Fi',
      heatedBed: true,
      speed: 150
  },
  {
      id: 10,
      name: 'Qidi Tech X-Max',
      buildSize: [300, 300, 300],
      materialSupported: ['PLA'],
      price: 1099,
      layerResolution: 0.05,
      connectivity: 'USB',
      heatedBed: true,
      speed: 150
  },
  {
    id: 11,
    name: "Bambu ONE",
    buildSize: [200, 200, 250],
    materialSupported: ["PLA", "PETG", "ABS"],
    price: 1800,
    heatedBed: true,
    layerResolution: 0.05,
    speed: 500,
    connectivity: "Wi-Fi"  // added connectivity option
  },
  {
      id: 12,
      name: "Bambu Mini",
      buildSize: [150, 150, 150],
      materialSupported: ["PLA"],
      price: 900,
      heatedBed: true,
      layerResolution: 0.05,
      speed: 500,
      connectivity: "Bluetooth"  // added connectivity option
  }
];