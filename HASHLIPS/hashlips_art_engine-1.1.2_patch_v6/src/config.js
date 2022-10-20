const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "KYOTO";
const description = "Remember Remember the 5th of November";
const baseUri = "ipfs://NewUriToReplace";

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};
/*
   { name: "umbrella" },
      { name: "mainbody" },
      { name: "outfit" },   
      { name: "earring" },
      { name: "eyebrow" },
      { name: "eyes" },
   //   { name: "sunglasses" },
      { name: "hair" },
      { name: "accessories" }, 
      { name: "mouth" },
      */
// npm run preview
// npm run preview_gif
//npm run generate
// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 15,
    layersOrder: [
      { name: "background" },
      //{ name: "umbrella"},
      { name: "mainbody" },

      { name: "outfit" },
      //  { name: "backkimono" },
      { name: "earring" },
      { name: "eyebrow" },
      { name: "eyes" },
      { name: "mouth" },
      //{ name: "sunglasses" },
      { name: "swords" },

      { name: "hair" },
      // { name: "swords" },

      //{ name: "helmet" },
      //  { name: "guns" },
      //  { name: "swords" },

      //{ name: "cat" },

      //{ name: "accessories" },
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  //512
  //1024
  width: 512,
  height: 512,
  smoothing: true,
};

const gif = {
  //false orginal
  export: false,
  repeat: -1,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXEDclear
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
