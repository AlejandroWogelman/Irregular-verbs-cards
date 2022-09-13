import { Data } from "./interfaces";

function transform(text: string): string[] {
  return text.split(" ");
}

//present
const infinitive: string[] = transform(
  "arise[a’rais] be[bi] beat[bit] become[bi´kam] begin[bi´gIn] bet[bet] bite[bait] bleed[blid] blow[blou] break[breik] bring[bring] build[bild] buy[bai] catch[katch] choose[chus] come[kam] cost[kost] creep[krip] cut[kat] deal[dil] do[du] draw[dro] dream[driim] drink[drInk] drive[draiv] eat[iit] fall[fol] feed[fiid] feel[fiil] fight[fait] find[faind] flee[flii] fly[flai] forget[forget] forgive[forgiv] forsake[forseik] freeze[friisz] get[get] give[gIv] go[gou] grind[graind] grow[grou] hang[hang] have[hav] hear[hir] hide[haid] hit[hIt] hold[hold] hurt[hert] keep[kip] kneel[nil] know[nou] lead[liid] learn[lern] leave[liv] lend[lend] let[let] lie[lai] lose[lus] make[meik] mean[min] meet[mit] pay[pei] put[put] quit[kuit] read[rid] ride[raid] ring[rIng] rise[rais] run[raan] say[sei] see[si] sell[sel] send[send] set[set] sew[sou] shake[sheik] shine[shain] shoot[shut] show[shou] shrink[shrInk] shut[shaat] sing[sIng] sink[sInk] sit[sIt] sleep[sliip] slide[sslaid] sow[sou] speak[sspIk] spel[sspel]l spend[sspend] spill[sspIl] split[ssplI] spoil[sspoil] spread[sspred] stand[sstand] steal[sstil] sting[sstIng] stink[sstink] strike[straik] swear[suer] sweep[suip] swim[suim] take[teik] teach[tiich] tear[tiir] tell[tel] think[zInk] throw[zrou] tread[tred] wake[güeik] wear[güer] weave[güiv] weep[wuip] win[wuin] wring[rIng] write[rait]"
);

const pastSimple: string[] = transform(
  "arose[a’rous] was[wuas]/were[wer] beat[bit] became[bi´keim] began[bi’gan] bet[bet] bit[bIt] bled[bled] blew[blu] broke[brouk] brought[brot] built[bilt] bought[bot] caught[kot] chose[chous] came[keim] cost[kost] crept[krept] cut[kat] dealt[delt] did[dId] drew[dru] dreamt[dremt] drank[drank] drove[drouv] ate[eit] fell[fel] fed[fed] felt[felt] fought[fot] found[faund] fled[fled] flew[flu] forgot[forgat] forgave[forgeiv] forsook[forsuk] froze[frousz] got[gat] gave[geiv] went[wuent] ground[graund] grew[gru] hung[haang] had[had] heard[herd] hid[hId] hit[hIt] held[held] hurt[hert] kept[kept] knelt[nelt] knew[niu] led[led] learnt[lernt] left[left] lent[lent] let[let] lay[lei] lost[lost] made[meid] meant[ment] met[met] paid[peid] put[put] quit[kuit] read[red] rode[roud] rang[rang] rose[rous] ran[ran] said[sed] saw[so] sold[sold] sent[sent] set[set] sewed[soud] shook[shuk] shone[shoun] shot[shot] showed[shoud] shrank[shrank] shut[shaat] sang[sang] sank[sank] sat[sat] slept[slept] slid[sslId] sowed[soud] spoke[sspouk] spelt[sspelt] spent[sspent] spilt[sspIlt] split[ssplI] spoilt[sspoilt] spread[sspred] stood[sstud] stole[sstóul] stung[sstaang] stank[sstank] struck[straak] swore[suor] swept[suept] swam[suam] took[tuk] taught[tot] tore[tor] told[told] thought[zot] threw[zriu] trode[troud] woke[wuok] wore[wuor] wove[wuov] wept[wuept] won[wuon] wrung[raang] wrote[róut]"
);

const spanish =
  "surgir, levantarse.  ser/estar  golpear  convertirse,llegar a ser  comenzar  apostar  morder  sangrar  soplar  romper  traer  construir  comprar  atrapar  elegir  venir  costar  arrastrarse  cortar  dar, repartir  hacer  dibujar  soñar  beber  conducir  comer  caer  alimentar  sentir  pelear  encontrar  huir  volar  olvidar  perdonar  abandonar  congelar  tener, obtener  dar  ir  moler  crecer  colgar  tener  oír  esconderse  golpear  tener, mantener  herir, doler  guardar  arrodillarse  saber  encabezar  aprender  dejar  prestar  dejar  yacer  perder  hacer  significar  conocer, encontrar  pagar  poner  abandonar  leer  montar, ir  llamar por teléfono  elevar  correr  decir  ver  vender  enviar  fijar  coser  sacudir  brillar  disparar  mostrar  encoger  cerrar  cantar  hundir  sentarse  dormir  deslizar  sembrar  hablar  deletrear  gastar  derramar  dividir  estropear  extenderse  estar de pie  robar  picar  apestar  golpear  jurar  barrer  nadar  tomar  enseñar  romper  decir  pensar  lanzar  pisar  despertarse  llevar puesto  tejer  llorar  ganar (premios)  retorcer  escribir".split(
    "  "
  );
//spanish

export const data: Data[] = [];

for (let index = 0; index < infinitive.length; index++) {
  data.push({
    present: infinitive[index],
    past: pastSimple[index],
    spanish: spanish[index],
    id: index,
  });
}
