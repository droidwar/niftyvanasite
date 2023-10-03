'use client'
import { PrinterGrid } from '@/components/printer-grid';
import { useState } from 'react';
import {printers} from './printersData';

export default function PrinterFilter() {
  const [filters, setFilters] = useState({
    buildSize: null,
    selectedMaterials: [],
    price: null,
    layerResolution: null,
    connectivity: null,
    heatedBed: null,
    speed: null
  });
  const materials = [...new Set(printers.flatMap(printer => printer.materialSupported))];
  const filteredPrinters = printers.filter(printer => {
    return (!filters.buildSize || printer.buildSize <= filters.buildSize) &&
           (filters.selectedMaterials.length === 0 || filters.selectedMaterials.some(material => printer.materialSupported.includes(material))) &&
           (!filters.price || printer.price <= filters.price) &&
           (!filters.layerResolution || printer.layerResolution <= filters.layerResolution) &&
           (!filters.connectivity || printer.connectivity === filters.connectivity) &&
           (!filters.heatedBed || printer.heatedBed === (filters.heatedBed === 'true')) &&
           (!filters.speed || printer.speed >= filters.speed);
    });
    const handleCheckboxChange = (material) => {
        setFilters(prevState => 
          ({
            ...prevState, 
            selectedMaterials : prevState.selectedMaterials.includes(material) 
            ? prevState.selectedMaterials.filter(m => m !== material) 
            : [...prevState.selectedMaterials, material]
          })
        );
      }

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
        {/* ... Previous Filters ... */}
        
        <div>
          <label className="block text-gray-700 mb-2">Layer Resolution (mm):</label>
          <input
            type="number"
            value={filters.layerResolution || ''}
            onChange={e => setFilters({ ...filters, layerResolution: e.target.value })}
            className="w-full p-2 border rounded"
            placeholder="Enter layer resolution"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Connectivity:</label>
          <select
            value={filters.connectivity || ''}
            onChange={e => setFilters({ ...filters, connectivity: e.target.value })}
            className="w-full p-2 border rounded"
          >
            <option value="">All</option>
            <option value="USB">USB</option>
            <option value="Wi-Fi">Wi-Fi</option>
            <option value="Ethernet">Ethernet</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Heated Bed:</label>
          <select
            value={filters.heatedBed || ''}
            onChange={e => setFilters({ ...filters, heatedBed: e.target.value })}
            className="w-full p-2 border rounded"
          >
            <option value="">All</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Print Speed (mm/s):</label>
          <input
            type="number"
            value={filters.speed || ''}
            onChange={e => setFilters({ ...filters, speed: e.target.value })}
            className="w-full p-2 border rounded"
            placeholder="Enter min print speed"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Price ($):</label>
          <input
            type="number"
            value={filters.price || ''}
            onChange={e => setFilters({ ...filters, price: e.target.value })}
            className="w-full p-2 border rounded"
            placeholder="Enter max price"
          />
        </div>
        <div>
          
        <div>
          <label className="block text-gray-700 mb-2">Supported Materials:</label>
          <div className='grid grid-cols-2 gap-4 mb-2'>
            {materials.map(material => (
                <div key={material} >
                  <label className="flex items-center space-x-2">
                  <input 
                    type="checkbox"
                    checked={filters.selectedMaterials.includes(material)}
                    onChange={() => handleCheckboxChange(material)}
                  />
                  <span>{material}</span>
                  </label>
                </div>
            ))}
            </div>
        </div>
        </div>
      </div>
      {/* ... (filters section) ... */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredPrinters.map(printer =>
                <PrinterGrid key={printer.id} printer={printer} />
            )}
        </div>
    </div>
  );
}
