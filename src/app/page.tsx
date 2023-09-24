"use client"

import Footer from '@/components/footer'
import Header from '@/components/header'
import Image from 'next/image'
// Import images for each printer type
import FDMImage from '../images/fdm-printer.jpg';
import SLAImage from '../images/fdm-printer.jpg';
import SLSImage from '../images/fdm-printer.jpg';
import PolyJetImage from '../images/fdm-printer.jpg';

export default function Home() {
  return (
    <div>
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Welcome to Niftyvana</h1>
          <p className="mt-4 text-lg">
            Your Source for 3D Printing Knowledge and Insights
          </p>
          <button className="mt-8 bg-white text-blue-700 py-2 px-6 rounded-full font-semibold hover:bg-blue-100 hover:text-blue-900 transition duration-300">
            Get Started
          </button>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center">Types of 3D Printers</h2>
          <p className="mt-4">
            3D printers come in various types, each with its own unique
            technology and applications. Here are some common types:
          </p>
          <div className="grid grid-cols-2 gap-6 mt-8">
            {/* FDM Printer */}
            <div className="flex flex-col items-center">
              <Image src={FDMImage} alt="Fused Deposition Modeling (FDM) Printer" className="w-32 h-32 rounded-full mb-4" />
              <strong className="text-lg">FDM Printer</strong>
              <p className="text-sm text-gray-600">
                Widely used for prototyping and hobbyist projects. It extrudes
                melted plastic filament to create objects layer by layer.
              </p>
            </div>

            {/* SLA Printer */}
            <div className="flex flex-col items-center">
              <Image src={SLAImage} alt="Stereolithography (SLA) Printer" className="w-32 h-32 rounded-full mb-4" />
              <strong className="text-lg">SLA Printer</strong>
              <p className="text-sm text-gray-600">
                Common in jewelry and dental industries. Uses liquid resin cured
                with UV light for high-resolution models.
              </p>
            </div>

            {/* SLS Printer */}
            <div className="flex flex-col items-center">
              <Image src={SLSImage} alt="Selective Laser Sintering (SLS) Printer" className="w-32 h-32 rounded-full mb-4" />
              <strong className="text-lg">SLS Printer</strong>
              <p className="text-sm text-gray-600">
                Versatile in material choice. Uses laser to sinter powdered
                materials (plastics or metals) into objects.
              </p>
            </div>

            {/* PolyJet Printer */}
            <div className="flex flex-col items-center">
              <Image src={PolyJetImage} alt="PolyJet Printing Printer" className="w-32 h-32 rounded-full mb-4" />
              <strong className="text-lg">PolyJet Printer</strong>
              <p className="text-sm text-gray-600">
                Produces full-color, multi-material models with fine details.
                Jetted layers of liquid photopolymer are cured with UV light.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold">3D Printing Materials</h2>
          <p className="mt-4">
            The choice of materials in 3D printing is crucial to the quality
            and properties of your prints. Here are some common materials used
            in 3D printing:
          </p>
          <ul className="list-disc ml-6 mt-4">
            <li>
              <strong>PLA (Polylactic Acid):</strong> PLA is a biodegradable
              thermoplastic and one of the most commonly used materials for 3D
              printing. It is known for its ease of use and minimal warping.
            </li>
            <li>
              <strong>ABS (Acrylonitrile Butadiene Styrene):</strong> ABS is
              known for its durability and resistance to high temperatures. It is
              commonly used in functional prototypes.
            </li>
            <li>
              <strong>PETG (Polyethylene Terephthalate Glycol):</strong> PETG
              combines the best properties of both PLA and ABS. It is
              easy-to-print and has good strength and durability.
            </li>
            <li>
              <strong>TPU (Thermoplastic Polyurethane):</strong> TPU is a
              flexible filament used for creating elastic and rubber-like
              objects. It is popular in the production of flexible parts.
            </li>
          </ul>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold">3D Printing Applications</h2>
          <p className="mt-4">
            3D printing is versatile and finds applications in various fields.
            Here are some common areas where 3D printing is utilized:
          </p>
          <ul className="list-disc ml-6 mt-4">
            <li>
              <strong>Product Prototyping:</strong> Many industries use 3D
              printing for rapid prototyping to test and refine product designs.
            </li>
            <li>
              <strong>Medical and Healthcare:</strong> 3D printing is used for
              creating customized implants, prosthetics, and even
              patient-specific models for surgical planning.
            </li>
            <li>
              <strong>Art and Sculpture:</strong> Artists and sculptors use 3D
              printing to bring their creative visions to life in new and
              innovative ways.
            </li>
            <li>
              <strong>Engineering and Aerospace:</strong> Aerospace companies
              employ 3D printing for lightweight, complex components in
              aircraft and spacecraft.
            </li>
          </ul>
        </div>
      </section>

      {/* Other Content Sections */}
      {/* ... (You can add more content sections here) */}
      <Footer />
    </div>
    
  )
}
