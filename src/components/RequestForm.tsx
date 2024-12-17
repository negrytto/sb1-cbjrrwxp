import { useState, FormEvent } from 'react';
import { FormInput } from './FormInput';
import { ServicesCheckbox } from './ServicesCheckbox';
import { FormData } from '../types/form';
import { Send } from 'lucide-react';

export function RequestForm() {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    contato: '',
    email: '',
    secretaria: '',
    data: '',
    horarioInicio: '',
    horarioTermino: '',
    acao: '',
    servicos: [],
    descricao: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission here
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Formulário de Solicitação</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormInput
          label="Nome do solicitante"
          name="nome"
          required
          value={formData.nome}
          onChange={e => setFormData(prev => ({ ...prev, nome: e.target.value }))}
        />
        
        <FormInput
          label="Contato para retorno"
          name="contato"
          required
          value={formData.contato}
          onChange={e => setFormData(prev => ({ ...prev, contato: e.target.value }))}
        />
      </div>

      <FormInput
        label="E-mail"
        type="email"
        name="email"
        required
        value={formData.email}
        onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
      />

      <FormInput
        label="Secretaria ou departamento solicitante"
        name="secretaria"
        required
        value={formData.secretaria}
        onChange={e => setFormData(prev => ({ ...prev, secretaria: e.target.value }))}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <FormInput
          label="Data"
          type="date"
          name="data"
          required
          value={formData.data}
          onChange={e => setFormData(prev => ({ ...prev, data: e.target.value }))}
        />

        <FormInput
          label="Horário de início"
          type="time"
          name="horarioInicio"
          required
          value={formData.horarioInicio}
          onChange={e => setFormData(prev => ({ ...prev, horarioInicio: e.target.value }))}
        />

        <FormInput
          label="Horário de término"
          type="time"
          name="horarioTermino"
          required
          value={formData.horarioTermino}
          onChange={e => setFormData(prev => ({ ...prev, horarioTermino: e.target.value }))}
        />
      </div>

      <FormInput
        label="Qual é a ação?"
        name="acao"
        required
        value={formData.acao}
        onChange={e => setFormData(prev => ({ ...prev, acao: e.target.value }))}
      />

      <ServicesCheckbox
        selectedServices={formData.servicos}
        onChange={services => setFormData(prev => ({ ...prev, servicos: services }))}
      />

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Descreva com detalhes o que você está solicitando:
        </label>
        <textarea
          name="descricao"
          required
          value={formData.descricao}
          onChange={e => setFormData(prev => ({ ...prev, descricao: e.target.value }))}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 h-32"
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Anexos (documentos, fotos, vídeos, músicas, textos...)
        </label>
        <input
          type="file"
          name="anexo"
          onChange={e => setFormData(prev => ({ ...prev, anexo: e.target.files?.[0] }))}
          className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
      >
        <Send size={20} />
        Enviar Solicitação
      </button>
    </form>
  );
}