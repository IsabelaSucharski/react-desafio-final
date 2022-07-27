import axiosModule from "axios";
import { normalizeTextToImageName } from "./helper";
const axios = axiosModule.create({ baseURL: "http://localhost:3001" });

export async function getCampeonatos(ano: string) {
  const { data: campeonato } = await axios.get(`${ano}`);

  const ultimoRound = campeonato.length - 1;

  let { partidas: matches } = campeonato[ultimoRound];

  matches = matches
    .flatMap(
      (item: {
        mandante: any;
        visitante: any;
        pontuacao_geral_mandante: any;
        pontuacao_geral_visitante: any;
      }) => {
        let {
          mandante: host,
          visitante: visitor,
          pontuacao_geral_mandante: hostData,
          pontuacao_geral_visitante: visitorData,
        } = item;

        const hostNameImage = normalizeTextToImageName(host);
        const visitorNameImage = normalizeTextToImageName(visitor);

        return [
          { teamName: host, image: hostNameImage, ...hostData },
          { teamName: visitor, image: visitorNameImage, ...visitorData },
        ];
      }
    )
    .sort(
      (a: { total_pontos: number }, b: { total_pontos: number }) =>
        b.total_pontos - a.total_pontos
    );

  return matches;
}

export interface ICampeonato {
  derrotas_casa: number;
  derrotas_fora_casa: number;
  empates_casa: number;
  empates_fora_casa: number;
  gols_casa: number;
  gols_fora_casa: number;
  jogos_casa: number;
  jogos_fora_casa: number;
  pontos_casa: number;
  pontos_fora_casa: number;
  total_derrotas: number;
  total_empates: number;
  total_gols_marcados: number;
  total_gols_sofridos: number;
  total_jogos: number;
  total_pontos: number;
  total_vitorias: number;
  vitorias_casa: number;
  vitorias_fora_casa: number;
  teamName: string;
  image: string;
}
