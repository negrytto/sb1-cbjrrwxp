export interface FormData {
  nome: string;
  contato: string;
  email: string;
  secretaria: string;
  data: string;
  horarioInicio: string;
  horarioTermino: string;
  acao: string;
  servicos: string[];
  descricao: string;
  anexo?: File;
}

export const SERVICOS_OPTIONS = [
  'Spots (vinheta)',
  'Carro de som',
  'Programa de Radio semanal',
  'Empréstimo de material',
  'Suporte em eventos ou ação',
  'Cerimonial',
  'Consultoria',
  'Fotografia',
  'Cards'
] as const;