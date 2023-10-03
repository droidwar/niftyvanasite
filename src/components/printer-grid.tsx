import { Printer } from "@/types/index";

  

export function PrinterGrid({printer}: { printer: Printer}){
    return (
        <div key={printer.id} className="p-4 border rounded shadow">
            <h2 className="text-lg font-semibold mb-2">{printer.name}</h2>
            <p><strong>Price:</strong> ${printer.price}</p>
            <p><strong>Build Size:</strong> {printer.buildSize}mm</p>
            <p><strong>Material:</strong> {printer.material}</p>
            <p><strong>Layer Resolution:</strong> {printer.layerResolution}mm</p>
            <p><strong>Connectivity:</strong> {printer.connectivity}</p>
            <p><strong>Heated Bed:</strong> {printer.heatedBed ? 'Yes' : 'No'}</p>
            <p><strong>Print Speed:</strong> {printer.speed}mm/s</p>
        </div>
    );

}