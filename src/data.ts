import { Data } from "./interfaces";

//present
const present: string =
  "beat become begin bend bind bite bleed blow break bring build buy catch choose come cost cut dig do draw drink drive eat fall feed feel fight find fly forget forgive freeze get give go grow hang have hear hide hit hold hurt keep know lay lead leave lend let lie lose make mean meet pay put read ride ring rise run say see sell send set shake shine shoot show shrink shut sing sink sit sleep speak spend spit split stand steal strike swim take teach tear tell think throw understand wake wear win write";

const presentPronun: string =
  "/bi:t/ /bɪ 'kʌm/ /bɪ 'gɪn/ /bend/ /baɪnd/ /baɪt/ /bli:d/ /blou/ /breɪk/ /brɪŋ/ /bɪld/ /baɪ/ /kætʃ/ /tʃu:z/ /kʌm/ /kɒst/ /kʌt/ /dɪg/ /du:/ /drɔ:/ /drɪŋk/ /draɪv/ /i:t/ /fɔ:l/ /fi:d/ /fi:l/ /faɪt/ /faɪnd/ /flaɪ/ /fər 'get/ /fәr 'gɪv/ /fri:z/ /get/ /gɪv/ /gou/ /grou/ /hæŋ/ /hæv/ /hɪәr/ /haɪd/ /hɪt/ /hould/ /hɜ:rt/ /ki:p/ /nou/ /leɪ/ /li:d/ /li:v/ /lend/ /let/ /laɪ/ /lu:z/ /meɪk/ /mi:n/ /mi:t/ /peɪ/ /pʊt/ /ri:d/ /raɪd/ /rɪŋ/ /raɪz/ /rʌn/ /seɪ/ /si:/ /sel/ /send/ /set/ /ʃeɪk/ /ʃaɪn/ /ʃu:t/ /ʃou/ /ʃrɪŋk/ /ʃʌt/ /sɪŋ/ /sɪŋk/ /sɪt/ /sli:p/ /spi:k/ /spend/ /spɪt/ /splɪt/ /stænd/ /sti:l/ /straɪk/ /swɪm/ /teɪk/ /ti:tʃ/ /teәr/ /tel/ /θɪŋk/ /θrou/ /ʌndәr 'stænd/ /weɪk/ /weәr/ /wɪn/ /raɪt/";

//PAST
const pastSimple: string =
  "beat became began bent bound bit bled blew broke brought built bought caught chose came cost cut dug did drew drank drove ate fell fed felt fought found flew forgot forgave froze got gave went grew hung had heard hid hit held hurt kept knew laid led left lent let lay lost made meant met paid put read rode rang rose ran said saw sold sent set shook shone shot showed shrank shut sang sank sat slept spoke spent spat split stood stole struck swam took taught tore told thought threw understood woke wore won wrote";

const pastSimplePronun: string =
  "/bi:t/ /bɪ 'keɪm/ /bɪ 'gæn/ /bent/ /baʊnd/ /bɪt/ /bled/ /blu:/ /brouk/ /brɔ:t/ /bɪlt/ /bɔ:t/ /kɔ:t/ /tʃouz/ /keɪm/ /kɒst/ /kʌt/ /dʌg/ /dɪd/ /dru:/ /dræŋk/ /drouv/ /eɪt, et/ /fel/ /fed/ /felt/ /fɔ:t/ /faʊnd/ /flu:/ /fәr 'gɒt/ /fər 'geɪv/ /frouz/ /gɒt/ /geɪv/ /went/ /gru:/ /hʌŋ/ /hæd/ /hɜ:rd/ /hɪd/ /hɪt/ /held/ /hɜ:rt/ /kept/ /nu:/ /leɪd/ /led/ /left/ /lent/ /let/ /leɪ/ /lɒst/ /meɪd/ /ment/ /met/ /peɪd/ /pʊt/ /red/ /roud/ /ræŋ/ /rouz/ /ræn/ /sed/ /sɔ:/ /sould/ /sent/ /set/ /ʃʊk/ /ʃoun, ʃɒn/ /ʃɒt/ /ʃoud/ /ʃræŋk/ /ʃʌt/ /sæŋ/ /sæŋk/ /sæt/ /slept/ /spouk/ /spent/ /spæt/ /splɪt/ /stʊd/ /stoul/ /strʌk/ /swæm/ /tʊk/ /tɔ:t/ /tɔr/ /tould/ /θɔ:t/ /θru:/ /ʌndәr 'stʊd/ /wouk/ /wɔr/ /wʌn/ /rout/";

//spanish
const spanish: string =
  "golpear, convertirse, comenzar, doblar, atar, morder, sangrar, soplar, romper, traer, construir, comprar, atrapar, elegir, venir, costar, cortar, cavar, hacer, dibujar, beber, conducir, comer, caer, alimentar, sentir, luchar, encontrar, volar, olvidar, perdonar, congelar, obtener, dar, ir, crecer, colgar, tener, oír, esconder, golpear, sostener, herir, conservar, saber, poner, conducir, dejar, prestar, dejar, mentir, perder, hacer, significar, conocer, pagar, poner, leer, andar, sonar, subir, correr, decir, ver, vender, enviar, establecer, sacudir, brillar, disparar, mostrar, encoger, cerrar, cantar, hundirse, sentarse, dormir, hablar, gastar, escupir, dividir, pararse, robar, golpear, nadar, tomar, enseñar, rasgar, decir, pensar, lanzar, entender, despertar, usar, ganar, escribir";

const presentRef: string[] = present.split(" ");
const presentPronRef: string[] = presentPronun.split(" /");
const pastSimpleRef: string[] = pastSimple.split(" ");
const pastSimplePronunRef: string[] = pastSimplePronun.split(" /");
const spanishRef: string[] = spanish.split(", ");

export const data: Data[] = presentRef.map((el, i) => {
  return {
    present: el,
    pronuntiation: presentPronRef[i],
    past: pastSimpleRef[i],
    pastPronuntiation: pastSimplePronunRef[i],
    spanish: spanishRef[i],
    id: i,
  };
});
