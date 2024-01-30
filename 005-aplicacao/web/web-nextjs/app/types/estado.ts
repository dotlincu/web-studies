import CidadeInterface from "./cidade";

export default interface EstadoInterface {
  id: number;
  nome: string;
  sigla: string;
  cidades: CidadeInterface[];
}
