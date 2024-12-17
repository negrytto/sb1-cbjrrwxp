import { SERVICOS_OPTIONS } from '../types/form';

interface ServicesCheckboxProps {
  selectedServices: string[];
  onChange: (services: string[]) => void;
}

export function ServicesCheckbox({ selectedServices, onChange }: ServicesCheckboxProps) {
  const handleCheckboxChange = (service: string) => {
    const updatedServices = selectedServices.includes(service)
      ? selectedServices.filter(s => s !== service)
      : [...selectedServices, service];
    onChange(updatedServices);
  };

  return (
    <fieldset className="mb-6">
      <legend className="text-sm font-medium text-gray-700 mb-2">
        Marque quais serviços a serem prestados para essa solicitação:
      </legend>
      <div className="space-y-2">
        {SERVICOS_OPTIONS.map((service) => (
          <label key={service} className="flex items-center">
            <input
              type="checkbox"
              checked={selectedServices.includes(service)}
              onChange={() => handleCheckboxChange(service)}
              className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
            />
            <span className="ml-2 text-sm text-gray-700">{service}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}