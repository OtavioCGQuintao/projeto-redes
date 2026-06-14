import type { Specifications } from "./interfaces";

export function Specs({ specs }: { specs: Specifications }) {
  switch (specs.type) {
    case "twisted-pair-cable":
      return (
        <>
          <p><strong>Velocidade:</strong> {specs.speed}</p>
          <p><strong>Distância máxima:</strong> {specs.maxDistance}</p>
          <p><strong>Largura de banda:</strong> {specs.bandwidth}</p>
        </>
      );

    case "fiber-optic":
      return (
        <>
          <p><strong>Cobertura:</strong> {specs.covered}</p>
          <p><strong>Velocidade:</strong> {specs.speed}</p>
          <p><strong>Tamanho do núcleo:</strong> {specs.coreSize}</p>
          <p><strong>Distância máxima:</strong> {specs.maxDistance}</p>
          <p><strong>Comprimento de onda:</strong> {specs.waveLength}</p>
          <p><strong>Largura de banda:</strong> {specs.bandwidth}</p>
          <p><strong>Perda por km:</strong> {specs.lossForKilometer}</p>
          <p><strong>Perda de acoplamento:</strong> {specs.couplingLoss}</p>
          <p><strong>Transceiver usado:</strong> {specs.transceiver}</p>
        </>
      );

    case "dio":
      return (
        <>
          <p><strong>Portas de entrada:</strong> {specs.entranceDoors}</p>
          <p><strong>Portas de saída:</strong> {specs.exitDoors}</p>
          <p><strong>Conectores:</strong> {specs.typeConector.join(", ")}</p>
          <p><strong>Limite de cabos:</strong> {specs.limitOfCables}</p>
          <p><strong>Perda:</strong> {specs.loss}</p>
        </>
      );

    case "to":
      return (
        <>
          <p><strong>Limite de cabos:</strong> {specs.limitOfCables}</p>
          <p><strong>Conector:</strong> {specs.typeConector}</p>
          <p><strong>Categoria:</strong> {specs.category}</p>
          <p><strong>Perda:</strong> {specs.loss}</p>
        </>
      );
  }
}