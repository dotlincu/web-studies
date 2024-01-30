import EstadoInterface from './estado';

export default interface CidadeInterface {
  id: number;
  nome: string;
  estado: EstadoInterface;
}

