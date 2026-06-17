import { useState } from "react";
import { opcoes } from "./data";
import TypeThing from "./TypeThing";
import type { Specifications } from "./interfaces"
import type { Escolha } from "./interfaces"
import Accordion from "./Accordion"
import type { Floor } from "./interfaces/Floor";

function Builder() {
  const [floors, setFloors] = useState<number>(0);
  const [confirmed, setConfirmed] = useState(false);
  const [checkBoxEscolhasCompartilhadas, setCheckBoxEscolhasCompartilhadas] = useState(false);
  const [andares, setAndares] = useState<Floor[]>([])

  const [quantidadeComputadores, setQuantidadeComputadores] = useState(1);
  const [quantidadeCamera, setQuantidadeCamera] = useState(0);
  const [quantidadeTelefone, setQuantidadeTelefone] = useState(0);
  const [quantidadeAccessPoint, setQuantidadeAccessPoint] = useState(0);
  const [quantidadeControladorDeAcesso, setQuantidadeControladorDeAcesso] = useState(0);
  const [possuiCamera, setPossuiCamera] = useState(false);
  const [possuiTelefone, setPossuiTelefone] = useState(false);
  const [possuiAccessPoint, setPossuiAccessPoint] = useState(false);
  const [possuiControladorDeAcesso, setPossuiControladorDeAcesso] = useState(false);
  const [velocidadeEsperadaPorUsuario, setVelocidadeEsperadaPorUsuario] = useState(10);
  const [medidaMalhaHorizontal, setmedidaMalhaHorizonta] = useState(25);
  const [medidaPatchCord, setmedidaPatchCord] = useState(3);
  const [medidaPatchCable, setmedidaPatchCable] = useState(1);
  const [medidaPigTail, setMedidaPigTail] = useState(1.5);

  function handleAndar(index: number, campo: Partial<Floor>) {
    setAndares((prev) =>
      prev.map((andar, i) =>
        i === index ? { ...andar, ...campo } : andar
      )
    );
  }

  if (confirmed) {
    return (
      <>
        <label>
          Qual a quantidade total de computadores?
          <input type="number"
            placeholder={String(quantidadeComputadores)}
            min="1"
            onChange={(e) => setQuantidadeComputadores(Number(e.target.value))} /><br /> <br />
          Tem câmeras?
          <input type="checkbox"
            checked={possuiCamera}
            onChange={(e) => setPossuiCamera(e.target.checked)} /><br />
          {possuiCamera && (
            <label>
              Qual a quantidade total de câmera(s)?
              <input type="number"
                min="1"
                onChange={(e) => setQuantidadeCamera(Number(e.target.value))}
              /> <br /> <br />
            </label>
          )
          }
          Tem telefones?
          <input type="checkbox"
            checked={possuiTelefone}
            onChange={(e) => setPossuiTelefone(e.target.checked)} /><br />
          {possuiTelefone && (
            <label>
              Qual a quantidade total de telefone(s)?
              <input type="number"
                min="1"
                onChange={(e) => setQuantidadeTelefone(Number(e.target.value))}
              /> <br /> <br />
            </label>
          )
          }
          Tem access points?
          <input type="checkbox"
            checked={possuiAccessPoint}
            onChange={(e) => setPossuiAccessPoint(e.target.checked)} /><br />
          {possuiAccessPoint && (
            <label>
              Qual a quantidade total de access point(s)?
              <input type="number"
                min="1"
                onChange={(e) => setQuantidadeAccessPoint(Number(e.target.value))}
              /> <br /><br />
            </label>
          )
          }
          Tem controladores de acesso?
          <input type="checkbox"
            checked={possuiControladorDeAcesso}
            onChange={(e) => setPossuiControladorDeAcesso(e.target.checked)} />
          {possuiControladorDeAcesso && (
            <label>
              Qual a quantidade total de controlador(es) de acesso?
              <input type="number"
                min="1"
                onChange={(e) => setQuantidadeControladorDeAcesso(Number(e.target.value))}
              /> 
            </label>
          )
          }
          <br/><br/>
          Qual a velocidade esperada? (Em GB)
          <input type="number"
            placeholder={String(velocidadeEsperadaPorUsuario)}
            onChange={(e) => setVelocidadeEsperadaPorUsuario(Number(e.target.value))}
          /> <br /> <br />
          Qual a medida padrão da Malha Horizontal? (Metros)
          <input type="number"
            placeholder={String(medidaMalhaHorizontal)}
            onChange={(e) => setmedidaMalhaHorizonta(Number(e.target.value))} /><br /> <br />
          Qual a medida padrão do Patch Cord? (Metros)
          <input type="number"
            placeholder={String(medidaPatchCord)}
            onChange={(e) => setmedidaPatchCord(Number(e.target.value))} /><br /> <br />
          Qual a medida padrão do Patch Cable? (Metros)
          <input type="number"
            placeholder={String(medidaPatchCable)}
            onChange={(e) => setmedidaPatchCable(Number(e.target.value))} /><br /> <br />
          Qual a reserva padrão do pig tail? (Metros)
          <input type="number"
            placeholder={String(medidaPigTail)}
            onChange={(e) => setMedidaPigTail(Number(e.target.value))}
          /> <br /> <br />
        </label>

        {andares.map((andar, i) => (
          <div key={i}>
            <h2>{i === 0 ? "S.E.Q" : `S.E.T ${i + 1}º Andar`}</h2>
            <label>
              Número de computadores neste andar:
              <input type="number"
                onChange={(e) => handleAndar(i, { computers: Number(e.target.value) })}
              /> <br /> <br />
              {possuiCamera && (
                <label>
                  Número de câmeras neste andar:
                  <input type="number"
                    onChange={(e) => handleAndar(i, { cameras: Number(e.target.value) })}
                  /> <br />
                  Selecione a tecnologia da(s) câmera(s):
                  <select onChange={(e) => handleAndar(i, { technologyCameras: String(e.target.value) })}>
                    <option value="">Selecione</option>
                    <option value="ip_sem_poe">IP sem PoE</option>
                    <option value="ip_com_poe">IP com PoE</option>
                    <option value="analogica_hd">Analógica HD </option>
                    <option value="analogica_tradicional">Analógica Tradicional</option>
                  </select> <br />
                  {andar.technologyCameras === "ip_com_poe" && (
                    <label>
                      Qual o consumo total das câmeras? (Watts)
                      <input type="number"
                        onChange={(e) => handleAndar(i, { energyCameras: Number(e.target.value) })}
                      />
                    </label>
                  )
                  }
                  <br /> <br />
                </label>
              )}
              {possuiTelefone && (
                <label>
                  Quantidade de telefones neste andar:
                  <input type="number"
                    onChange={(e) => handleAndar(i, { phones: Number(e.target.value) })}
                  /> <br />
                  Selecione a tecnologia do(s) telefone(s):
                  <select onChange={(e) => handleAndar(i, { technologyPhones: String(e.target.value) })}>
                    <option value="">Selecione</option>
                    <option value="analogico">Analógico</option>
                    <option value="voip">VoIP</option>
                  </select> <br />
                  {andar.technologyPhones === "voip" && (
                    <>
                      <label>
                        Qual o consumo total dos telefones?
                        <input type="number"
                          onChange={(e) => handleAndar(i, { energyPhones: Number(e.target.value) })}
                        />
                      </label>
                    </>
                  )
                  }
                  <br/><br/>
                </label>
              )}
              {possuiAccessPoint && (
                <label>
                  Quantidade de acess points neste andar:
                  <input type="number"
                    min="1"
                    onChange={(e) => handleAndar(i, { acessPoints: Number(e.target.value) })}
                  /><br />
                  Tipo do acess point:
                  <select onChange={(e) => handleAndar(i, { technologyAcessPoints: String(e.target.value)})}>
                    <option value="">Selecione</option>

                    <optgroup label="Indoor">
                      <option value="ap_wifi5_indoor">AP Wi-Fi 5 Indoor</option>
                      <option value="ap_wifi6_indoor">AP Wi-Fi 6 Indoor</option>
                      <option value="ap_wifi6e_indoor">AP Wi-Fi 6E Indoor</option>
                      <option value="ap_wifi7_indoor">AP Wi-Fi 7 Indoor</option>
                    </optgroup>

                    <optgroup label="Outdoor">
                      <option value="ap_wifi5_outdoor">AP Wi-Fi 5 Outdoor</option>
                      <option value="ap_wifi6_outdoor">AP Wi-Fi 6 Outdoor</option>
                      <option value="ap_wifi6e_outdoor">AP Wi-Fi 6E Outdoor</option>
                      <option value="ap_wifi7_outdoor">AP Wi-Fi 7 Outdoor</option>
                    </optgroup>

                    <optgroup label="Especiais">
                      <option value="ap_mesh">AP Mesh</option>
                      <option value="ap_mesh_outdoor">AP Mesh Outdoor</option>
                      <option value="ap_wallplate">AP Wall Plate</option>
                      <option value="ap_alta_densidade">AP Alta Densidade</option>
                      <option value="ap_industrial">AP Industrial</option>
                    </optgroup>
                  </select>
                  <br /><br />
                </label>
              )
              }
              {possuiControladorDeAcesso && (
                <label>
                  Quantidade de controladores de acesso neste andar:
                  <input type="number"
                    onChange={(e) => handleAndar(i, { accessControllers: Number(e.target.value) })}
                  /> <br />
                  Tipo do identificador de acesso:
                  <select onChange={(e) => handleAndar(i, { technologyAcessControllers: String(e.target.value) })}>
                    <option value="">Selecione</option>

                    <optgroup label="Leitores">
                      <option value="rfid">Leitor RFID</option>
                      <option value="cartao_proximidade">Cartão de Proximidade</option>
                      <option value="biometrico">Leitor Biométrico</option>
                      <option value="facial">Reconhecimento Facial</option>
                      <option value="qr_code">Leitor QR Code</option>
                    </optgroup>

                    <optgroup label="Bloqueios">
                      <option value="fechadura_eletrica">Fechadura Elétrica</option>
                      <option value="fechadura_eletromagnetica">
                        Fechadura Eletromagnética
                      </option>
                      <option value="fechadura_inteligente">
                        Fechadura Inteligente
                      </option>
                    </optgroup>

                    <optgroup label="Controle de Fluxo">
                      <option value="catraca">Catraca</option>
                      <option value="torniquete">Torniquete</option>
                      <option value="porta_giratória">
                        Porta Giratória
                      </option>
                      <option value="cancela">Cancela Veicular</option>
                    </optgroup>

                    <optgroup label="Controladoras">
                      <option value="controladora_1_porta">
                        Controladora 1 Porta
                      </option>
                      <option value="controladora_2_portas">
                        Controladora 2 Portas
                      </option>
                      <option value="controladora_4_portas">
                        Controladora 4 Portas
                      </option>
                      <option value="controladora_8_portas">
                        Controladora 8 Portas
                      </option>
                    </optgroup>
                  </select> <br/>
                  Selecione o tipo de alimentação: 
                  <select onChange={(e) => handleAndar(i, { isAcessControllersPoE: Boolean(e.target.value) })}>
                    <option value="">Selecione</option>
                    <option value="true">PoE</option>
                    <option value="false">Fonte Local</option>
                  </select> <br/>
                  Quantas portas de rede ocupam no total?
                  <input type="number"
                  onChange={(e) => handleAndar(i, { accessPointNetworkPorts: Number(e.target.value) })}
                  />
                  <br/>
                  {andar.isAcessControllersPoE &&(
                    <label>
                      Qual a energia total consumida?
                      <input type="number"
                      onChange={(e) => handleAndar(i, { energyAccessControllers: Number(e.target.value) })}
                      />
                    </label>
                  )
                  }
                  <br/>
                </label> 
              )
              }
            </label>
            <TypeThing escolhas={andar.escolhas} />
          </div>
        ))}
        <button
          type="button"
          onDoubleClick={() => {
            setFloors(0);
            setConfirmed(false);
          }}
        >
          Resetar
        </button>
      </>
    );
  }

  return (
    <>
      <Accordion>
        <h2>Quantos andares o prédio possui?</h2>
        <h3>Certifique-se de que o número esteja correto!</h3>
        <br />
        <input
          type="number"
          min={1}
          value={floors || ""}
          onChange={(e) => setFloors(Number(e.target.value))}
        />
        <label>
          <input
            type="checkbox"
            checked={checkBoxEscolhasCompartilhadas}
            onChange={(e) => setCheckBoxEscolhasCompartilhadas(e.target.checked)}
          />
          Todos os S.E.Ts terão os mesmos equipamentos?
        </label>
        <button
          type="button"
          disabled={floors < 1}
          onClick={() => {
            setConfirmed(true);
            setAndares(Array.from({ length: floors }, () => ({
              escolhas: [],
            })));
          }}
        >
          Confirmar
        </button>
      </Accordion >
    </>
  );
}

export default Builder;
