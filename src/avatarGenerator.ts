const top = () => {
    var arr = [
        'NoHair',
        'Eyepatch',
        'Hat',
        'Turban',
        'WinterHat1',
        'WinterHat2',
        'WinterHat3',
        'WinterHat4',
        'LongHairCurly',
        'LongHairDreads',
        'LongHairShavedSides',
        'ShortHairDreads01',
        'ShortHairDreads02',
        'ShortHairFrizzle',
        'ShortHairSortCurly',
        'ShortHairShortFlat',
        'ShortHairShortWaved',
        'ShortHairTheCaesarSidePart'
      ];
      var item = arr[Math.floor(Math.random() * arr.length)];

      return item;
};
const accessories = () => {
    var arr = [
        'Blank',
        'Kurt',
        'Prescription01',
        'Prescription02',
        'Round',
        'Sunglasses',
        'Wayfarers',
      ];
      var item = arr[Math.floor(Math.random() * arr.length)];

      return item;
};
const hairColor = () => {
    var arr = [
        'Platinum',
        'Auburn',
        'Black',
        'Blonde',
        'BlondeGolden',
        'Brown',
        'BrownDark',
        'PastelPink',
        'Platinum',
        'Red',
        'SilverGray',
      ];
      var item = arr[Math.floor(Math.random() * arr.length)];

      return item;
};
const facialHair = () => {
    var arr = [
        'Blank',
        'BeardLight',
        'MoustacheFancy',
      ];
      var item = arr[Math.floor(Math.random() * arr.length)];

      return item;
};

const facialHairColor = () => {
    let facialHair = 'black';
    return facialHair;
};
const clothes = () => {
    var arr = [
        'BlazerShirt',
        'CollarSweater',
        'GraphicShirt',
        'Hoodie',
        'ShirtCrewNeck',
      ];
      var item = arr[Math.floor(Math.random() * arr.length)];

      return item;
};
const clothesColor = () => {
    var arr = [
        'Black',
        'Blue01',
        'Heather',
        'PastelGreen',
        'PastelOrange',
        'PastelRed',
        'PastelYellow',
        'Pink',
        'Red',
        'White',
      ];
      var item = arr[Math.floor(Math.random() * arr.length)];

      return item;
};
const eyeType = () => {
    var arr = [
        'Close',
        'Cry',
        'Default',
        'Dizzy',
        'EyeRoll',
        'Happy',
        'Hearts',
        'Side',
        'Squint',
        'Suprised',
        'Wink',
        'WinkWacky',
      ];
      var item = arr[Math.floor(Math.random() * arr.length)];

      return item;
};
const eyebrowType = () => {
    var arr = [
        'Angry',
        'AngryNatural',
        'Default',
        'DefaultNormal',
        'FlatNatural',
        'RaisedExcited',
        'SadConcerned',
        'UnibrowNatural',
        'UpDown',
        'UpDownNatural',
      ];
      var item = arr[Math.floor(Math.random() * arr.length)];

      return item;
};
const mouth = () => {
  var arr = [
    "Concerned",
    "Default",
    "Disbelief",
    "Eating",
    "Grimace",
    "Sad",
    "ScreamOpen",
    "Serious",
    "Smile",
    "Tongue",
    "Twinkle",
    "Vomit",
  ];
  var item = arr[Math.floor(Math.random() * arr.length)];

  return item;
};
const femaleTop = () => {
  var arr = [
    "LongHairBigHair",
    "LongHairBob",
    "LongHairBun",
    "LongHairCurly",
    "LongHairCurvy",
    "LongHairDreads",
    "LongHairFrida",
    "LongHairNotTooLong",
    "LongHairStraight",
    "LongHairStraight2",
  ];
  var item = arr[Math.floor(Math.random() * arr.length)];

  return item;
};

export const generateMaleAvatar = () => {
  return `https://avataaars.io/?accessoriesType=${accessories()}&avatarStyle=Transparent&clotheColor=${clothesColor()}&clotheType=${clothes()}&eyeType=${eyeType()}&eyebrowType=${eyebrowType()}&facialHairColor=${facialHairColor()}&facialHairType=${facialHair()}&hairColor=${hairColor()}&mouthType=${mouth()}&skinColor=Light&topType=${top()}`;
};
export const generateFemaleAvatar = () => {
  return `https://avataaars.io/?accessoriesType=${accessories()}&avatarStyle=Transparent&clotheColor=${clothesColor()}&clotheType=${clothes()}&eyeType=${eyeType()}&eyebrowType=${eyebrowType()}&hairColor=${hairColor()}&mouthType=${mouth()}&skinColor=Light&topType=${femaleTop()}`;
};
