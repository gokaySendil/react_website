import {
  GiPistolGun,
  GiClawHammer,
  GiFocusedLightning,
  GiCrescentStaff,
  GiDragonBreath,
} from "react-icons/gi";
import Hajime from "../../../images/hajime.jpg";
import Yue from "../../../images/yue.jpg";
import Shia from "../../../images/shia.jpg";
import Tio from "../../../images/tio.jpg";
import Kaori from "../../../images/kaori.jpg";

export function renoveItem(array, item) {
  const index = array.indexOf(item);
  index > -1 && array.slice(index, 1);
  return array;
}
export function closestItem(arr, item) {
  const index = arr.indexOf(item);
  if (index === -1) {
    return arr[0];
  } else if (index === arr.length - 1) {
    return arr[arr.length - 2];
  } else {
    return arr[index + 1];
  }
}
export const characters = [
  {
    icon: <GiPistolGun />,
    label: "Hajime",
    img: Hajime,
    info: "Hajime Nagumo is the titular main protagonist and anti-hero of the Arifureta Shokugyou de Sekai Saikyouseries. He was originally a member of the Hero Party, where he was ostracized receiving the commonplace Synergist job and his weak stats, until his presumed death in the Orcus Labyrinth, after which he discovered the truth about the world and made it his goal to return to Japan at all costs. He mutated into a monster hybrid when he devoured the meats of the Monster but no longer considered to be a pureblooded human anymore.",
  },
  {
    icon: <GiFocusedLightning />,
    label: "Yue",
    img: Yue,
    info: "Yue, formerly known as Aletia Galdea Vesperitio Avatarl, is one of the main female protagonists from the Arifureta Shokugyō de Sekai Saikyō series. She is a Atavist vampire with the unique skill to regenerate her body. She was once a princess (later queen) until she was imprisoned in the abyss after her uncle and vassals betrayed her and sealed her away but later revealed the truth as they were protecting her from Ehit because of her monstrous level of magic and regeneration. She is Hajime's main lover and first wife after freeing her.",
  },
  {
    icon: <GiClawHammer />,
    label: "Shia",
    img: Shia,
    info: "Shea Haulia is one of the main female protagonists from the Arifureta Shokugyō de Sekai Saikyō series She is an Atavist rabbitman with a unique Skill which allows her to view the future, especially when her own life is in danger. She is the daughter of the Haulia Tribe's chief, Cam Haulia",
  },
  {
    icon: <GiDragonBreath />,
    label: "Tio",
    img: Tio,
    info: "Tio Klarus is one of the main female protagonists from the Arifureta Shokugyō de Sekai Saikyō series. Tio is the princess of the exiled Dragonmen and later becomes one of Hajime's companions. She becomes a pervert and masochist after her first encounter with Hajime while being brainwashed into attacking him.",
  },
  {
    icon: <GiCrescentStaff />,
    label: "Kaori",
    img: Kaori,
    info: "Kaori Shirasaki is one of the main protagonists from the Arifureta: From Commonplace to World's Strongest series. She is one of summoned heroes with the job of a Priest. She is also the childhood friend of Shizuku Yaegashi, Ryutarou Sakagami & Kouki Amanogawa. During the demon races' invasion in the Heiligh Kingdom, she was eventually killed by one of her classmate but was later revived by Hajime after transferring her soul into a much stronger body.",
  },
];
