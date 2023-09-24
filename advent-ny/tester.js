//
// mod
// const APIKEY = '5862867429:AAEv6bMP1bDK278BBV91WApYw3g3KXibIjo';
// import { Markup } from 'telegraf';

const CORE_ID = '5872450389:AAGavuAEjKOiqGLhJBapTIc-oezukMwvFSA';
const {
  Telegraf,
  Scenes,
  Context,
  Extra,
  Markup,
  Stage,
  state,
  session,
} = require('telegraf');
const { CallbackData } = require('@bot-base/callback-data');

const bot = new Telegraf(CORE_ID);

bot.use(session());

////testsection////
let recivedDate = new Date();
let ejectedDateString = `${recivedDate.getDate()}.${
  recivedDate.getMonth() + 1
}`;
let ejectedTimeString = `${recivedDate.getHours()}.${recivedDate.getMinutes()}`;

// console.log(ejectedTime, '<<ejectedTime');

setInterval(() => {
  recivedDate = new Date();
  // console.log(recivedDate, '!rd');

  const ejectedMonth = recivedDate.getMonth() + 1;
  const ejectedDay = recivedDate.getDate();
  ejectedDateString = `${recivedDate.getDate()}.${recivedDate.getMonth() + 1}`;

  // console.log(ejectedDateString, 'ejectedDateString');

  ejectedTimeString = `${recivedDate.getHours()}.${recivedDate.getMinutes()}`;

  // console.log(ejectedTimeString, 'ejectedTimeString');
  // console.log(ejectedDateString, 'ejectedDateString');
  // console.log('>>>>>>');
}, 5000);

///
function isAdventPresentAviable(
  requestedDate,
  recivedCurrentDate = ejectedDateString,
  isForced = false,
) {
  // console.log(recivedCurrentDate, 'recivedCurrentDate');
  const parsedDate = requestedDate.split(' ')[1];
  // console.log(parsedDate, '!parsedDate!');

  //guard

  const currentDate = recivedCurrentDate;
  // console.log(currentDate, '!cur date');

  const requestedDateDay = parsedDate.split('.')[0];
  const requestedDateMonth = parsedDate.split('.')[1];

  // const currentDateMonth = currentDate.getMonth() + 1;
  // const currentDateDay = currentDate.getDate() + 1;

  const currentDateMonth = currentDate.split('.')[1];
  // console.log(currentDateMonth, 'currentDateMonth');
  const currentDateDay = currentDate.split('.')[0];
  // console.log(currentDateDay, 'currentDateDate');
  // const controlDate = new Date('2023-01-01');
  // console.log(controlDate, 'controlDate');

  const constructCurrentDateObject = () => {
    const curYear = currentDateMonth === '12' ? '2022' : '2023';
    // console.log(`current year ${curYear}`);
    const resolvedString = `${curYear}-${currentDateMonth.padStart(
      2,
      '0',
    )}-${currentDateDay.padStart(2, '0')}`;
    console.log(resolvedString, '>>CURRENT');
    const tmpDateObj = new Date(resolvedString);
    // console.log(tmpDateObj, '>>>tmpDateObj');

    return new Date(resolvedString);
  };

  const constructTargetDateObject = () => {
    const targetYear = requestedDateMonth === '12' ? '2022' : '2023';
    // console.log(`target year ${targetYear}`);
    const resolvedString = `${targetYear}-${requestedDateMonth.padStart(
      2,
      '0',
    )}-${requestedDateDay.padStart(2, '0')}`;
    // console.log(resolvedString, '>>TARGET');
    const tmptargetdate = new Date(resolvedString);
    // console.log(tmptargetdate, 'tmptargetdate');
    return new Date(resolvedString);
  };

  const constructedCurrentDate = constructCurrentDateObject();
  const constructedRequestedDate = constructTargetDateObject();

  console.log(constructedCurrentDate, 'cd');
  console.log(constructedRequestedDate, 'rd');

  if (isForced === true) {
    return true;
  } else if (constructedRequestedDate <= constructedCurrentDate) {
    console.log('construted<=current');
    return true;
  } else {
    return false;
  }
}

////Inner Functions////
// let forcedTimeSet = new Date('2022-12-30');
// let currentDynamicTime = new Date();

// setInterval(() => {
//   currentDynamicTime = new Date();
//   console.log(currentDynamicTime);
// }, 60000);

// function isAdventPresentAviable(
//   requestedDate,
//   recivedCurrentDate = currentDynamicTime,
//   isForced = false,
// ) {
//   const parsedDate = requestedDate.split(' ')[1];
//   console.log(parsedDate, '!!');

//   //guard
//   if (aviableDatesArray.includes(parsedDate)) {
//     console.log(requestedDate, '!wrong date');
//     // throw new Error(`!Insuficent date ${requestedDate}`);
//   }
//   const currentDate = recivedCurrentDate;
//   console.log(currentDate, 'cur date');

//   const requestedDateDay = parsedDate.split('.')[0];
//   const requestedDateMonth = parsedDate.split('.')[1];

//   const currentDateMonth = currentDate.getMonth() + 1;
//   const currentDateDay = currentDate.getDate() + 1;

//   const constructTargetDateObject = () => {
//     const targetYear = requestedDateMonth === '12' ? '2022' : '2023';
//     console.log(`target year ${targetYear}`);
//     const resolvedString = `${targetYear}-${requestedDateMonth}-${requestedDateDay}`;
//     console.log(resolvedString, '>>>>>');
//     return new Date(resolvedString);
//   };

//   const constructedRequestedDate = constructTargetDateObject();

//   if (isForced === true) {
//     return true;
//   } else if (constructedRequestedDate <= currentDate) {
//     return true;
//   } else {
//     return false;
//   }
// }

////video assets///

const video31 = './advent-assets/videos/video31.mp4';
const video1 = './advent-assets/videos/video1.mp4';
const video2 = './advent-assets/videos/video2.mp4';
const video3 = './advent-assets/videos/video3.mp4';
const video4 = './advent-assets/videos/video4.mp4';
const video5 = './advent-assets/videos/video5.mp4';
const video6 = './advent-assets/videos/video6.mp4';
const video7 = './advent-assets/videos/video7.mp4';
const video8 = './advent-assets/videos/video8.mp4';
const video9 = './advent-assets/videos/video9.mp4';
const video10 = './advent-assets/videos/video10.mp4';
const video11 = './advent-assets/videos/video11.mp4';
const video12 = './advent-assets/videos/video12.mp4';
const video13 = './advent-assets/videos/video13.mp4';
const video14 = './advent-assets/videos/video14.mp4';
const video15 = './advent-assets/videos/video15.mp4';

//// posters assets////
const arinaLitvinenko = './advent-assets/posters/arina-litvinenko.jpg';
const elenaGoff = './advent-assets/posters/elena-goff.jpg';
const elinaZyablova = './advent-assets/posters/elina-zyablova.jpg';
const irinaKaminina = './advent-assets/posters/irina-kaminina.jpg';
const ivanBassura = './advent-assets/posters/ivan-bassura.jpg';
const ivanZrachev = './advent-assets/posters/ivan-zrachev.jpg';
const kristinaYamshokova = './advent-assets/posters/kristina-yamshikova.jpg';
const marinaKondrateva = './advent-assets/posters/marina-kondrateva.jpg';
const nikitaZaicev = './advent-assets/posters/nikita-zaicev.jpg';
const ninaKrasova = './advent-assets/posters/nina-kvasova.jpg';
const tamaraSidelnikova = './advent-assets/posters/tamara-sidelnikova.jpg';
const vladislavOgnev = './advent-assets/posters/vladislav-ognev.jpg';

////Icons sections////
// const smileEm = '\uD83D\uDE04';
const smileEm = '😃';

const ballonEm = '🎈';
const presentEm = '🎁';
const orangeEm = '🍊';
const snowmanEm = '⛄';
const crystallBallEm = '🔮';
const bunnyEm = '🐇';
const diamondEm = '💎';
const heartEm = '💓';
const performingArtsEm = '🎭';
const confetiBallEm = '🎊';
const partyPopperEm = '🎉';
const santaEm = '🎅';
const cakeEm = '🎂';
const knotBowEm = '🎀';
const vortexEm = '🌀';
const inLoveEm = '😍';
const cristmasTreeEm = '🎄';

////Aviable Dates////
const date1 = `${knotBowEm} 24.12`;
const date2 = `${vortexEm} 25.12`;
const date3 = `${inLoveEm} 26.12`;
const date4 = `${cakeEm} 27.12`;
const date5 = `${partyPopperEm} 28.12`;
const date6 = `${confetiBallEm} 29.12`;
const date7 = `${performingArtsEm} 30.12`;
const date8 = `${crystallBallEm} 31.12`;
const date9 = `${cristmasTreeEm} 01.01`;
const date10 = `${diamondEm} 02.01`;
const date11 = `${bunnyEm} 03.01`;
const date12 = `${orangeEm} 04.01`;
const date13 = `${snowmanEm} 05.01`;
const date14 = `${presentEm} 06.01`;
const date15 = `${ballonEm} 07.01`;
const date16 = `${smileEm} 08.01`;

const aviableDatesArray = [
  date1,
  date2,
  date3,
  date4,
  date5,
  date6,
  date7,
  date8,
  date9,
  date10,
  date11,
  date12,
  date13,
  date14,
  date15,
  date16,
];

//////keyboards/////

const datesKbd = {
  reply_markup: JSON.stringify({
    keyboard: [
      [
        { text: `${date1}`, callback_data: 'datesKbdCB' },
        { text: `${date2}`, callback_data: 'datesKbdCB' },
        { text: `${date3}`, callback_data: 'datesKbdCB' },
        { text: `${date4}`, callback_data: 'datesKbdCB' },
      ],
      [
        { text: `${date5}`, callback_data: 'datesKbdCB' },
        { text: `${date6}`, callback_data: 'datesKbdCB' },
        { text: `${date7}`, callback_data: 'datesKbdCB' },
        { text: `${date8}`, callback_data: 'datesKbdCB' },
      ],
      [
        { text: `${date9}`, callback_data: 'datesKbdCB' },
        { text: `${date10}`, callback_data: 'datesKbdCB' },
        { text: `${date11}`, callback_data: 'datesKbdCB' },
        { text: `${date12}`, callback_data: 'datesKbdCB' },
      ],
      [
        { text: `${date13}`, callback_data: 'datesKbdCB' },
        { text: `${date14}`, callback_data: 'datesKbdCB' },
        { text: `${date15}`, callback_data: 'datesKbdCB' },
        { text: `${date16}`, callback_data: 'datesKbdCB' },
      ],
    ],
    resize_keyboard: true,

    // one_time_keyboard: true,
  }),
};

const date1Kbd = {
  reply_markup: JSON.stringify({
    keyboard: [
      [{ text: `Новогодняя открытка`, callback_data: '' }],
      [{ text: `Поздравление от артиста`, callback_data: '' }],
      // [{ text: `Подарок от театра`, callback_data: '' }],
      [{ text: `На главную`, callback_data: '' }],
    ],
    resize_keyboard: true,
    // one_time_keyboard: true,
  }),
};

const date2Kbd = {
  reply_markup: JSON.stringify({
    keyboard: [
      [{ text: `Новогодняя открытка`, callback_data: '' }],
      [{ text: `Поздравление от артиста`, callback_data: '' }],
      // [{ text: `Подарок от театра`, callback_data: '' }],
      [{ text: `На главную`, callback_data: '' }],
    ],
    resize_keyboard: true,
    // one_time_keyboard: true,
  }),
};

const date3Kbd = {
  reply_markup: JSON.stringify({
    keyboard: [
      // [{ text: `Новогодняя открытка`, callback_data: '' }],
      [{ text: `Поздравление от артиста`, callback_data: '' }],
      [{ text: `Подарок от театра`, callback_data: '' }],
      [{ text: `На главную`, callback_data: '' }],
    ],
    resize_keyboard: true,
    // one_time_keyboard: true,
  }),
};
const date4Kbd = {
  reply_markup: JSON.stringify({
    keyboard: [
      [{ text: `Новогодняя открытка`, callback_data: '' }],
      [{ text: `Поздравление от артиста`, callback_data: '' }],
      // [{ text: `Подарок от театра`, callback_data: '' }],
      [{ text: `На главную`, callback_data: '' }],
    ],
    resize_keyboard: true,
    // one_time_keyboard: true,
  }),
};
const date5Kbd = {
  reply_markup: JSON.stringify({
    keyboard: [
      [{ text: `Новогодняя открытка`, callback_data: '' }],
      [{ text: `Поздравление от артиста`, callback_data: '' }],
      // [{ text: `Подарок от театра`, callback_data: '' }],
      [{ text: `На главную`, callback_data: '' }],
    ],
    resize_keyboard: true,
    // one_time_keyboard: true,
  }),
};
const date6Kbd = {
  reply_markup: JSON.stringify({
    keyboard: [
      // [{ text: `Новогодняя открытка`, callback_data: '' }],
      [{ text: `Поздравление от артиста`, callback_data: '' }],
      [{ text: `Подарок от театра`, callback_data: '' }],
      [{ text: `На главную`, callback_data: '' }],
    ],
    resize_keyboard: true,
    // one_time_keyboard: true,
  }),
};
const date7Kbd = {
  reply_markup: JSON.stringify({
    keyboard: [
      [{ text: `Новогодняя открытка`, callback_data: '' }],
      [{ text: `Поздравление от артиста`, callback_data: '' }],
      // [{ text: `Подарок от театра`, callback_data: '' }],
      [{ text: `На главную`, callback_data: '' }],
    ],
    resize_keyboard: true,
    // one_time_keyboard: true,
  }),
};
const date8Kbd = {
  reply_markup: JSON.stringify({
    keyboard: [
      [{ text: `Новогодняя открытка`, callback_data: '' }],
      [{ text: `Поздравление от директора`, callback_data: '' }],
      [{ text: `Подарок от театра`, callback_data: '' }],
      [{ text: `На главную`, callback_data: '' }],
    ],
    resize_keyboard: true,
    // one_time_keyboard: true,
  }),
};
const date9Kbd = {
  reply_markup: JSON.stringify({
    keyboard: [
      [{ text: `Новогодняя открытка`, callback_data: '' }],
      [{ text: `Поздравление от артиста`, callback_data: '' }],
      [{ text: `Подарок от театра`, callback_data: '' }],
      [{ text: `На главную`, callback_data: '' }],
    ],
    resize_keyboard: true,
    // one_time_keyboard: true,
  }),
};
const date10Kbd = {
  reply_markup: JSON.stringify({
    keyboard: [
      [{ text: `Новогодняя открытка`, callback_data: '' }],
      [{ text: `Поздравление от артиста`, callback_data: '' }],
      // [{ text: `Подарок от театра`, callback_data: '' }],
      [{ text: `На главную`, callback_data: '' }],
    ],
    resize_keyboard: true,
    // one_time_keyboard: true,
  }),
};
const date11Kbd = {
  reply_markup: JSON.stringify({
    keyboard: [
      [{ text: `Новогодняя открытка`, callback_data: '' }],
      [{ text: `Поздравление от артиста`, callback_data: '' }],
      // [{ text: `Подарок от театра`, callback_data: '' }],
      [{ text: `На главную`, callback_data: '' }],
    ],
    resize_keyboard: true,
    // one_time_keyboard: true,
  }),
};
const date12Kbd = {
  reply_markup: JSON.stringify({
    keyboard: [
      // [{ text: `Новогодняя открытка`, callback_data: '' }],
      [{ text: `Поздравление от артиста`, callback_data: '' }],
      [{ text: `Подарок от театра`, callback_data: '' }],
      [{ text: `На главную`, callback_data: '' }],
    ],
    resize_keyboard: true,
    // one_time_keyboard: true,
  }),
};
const date13Kbd = {
  reply_markup: JSON.stringify({
    keyboard: [
      [{ text: `Новогодняя открытка`, callback_data: '' }],
      [{ text: `Поздравление от артиста`, callback_data: '' }],
      // [{ text: `Подарок от театра`, callback_data: '' }],
      [{ text: `На главную`, callback_data: '' }],
    ],
    resize_keyboard: true,
    // one_time_keyboard: true,
  }),
};
const date14Kbd = {
  reply_markup: JSON.stringify({
    keyboard: [
      [{ text: `Новогодняя открытка`, callback_data: '' }],
      [{ text: `Поздравление от артиста`, callback_data: '' }],
      // [{ text: `Подарок от театра`, callback_data: '' }],
      [{ text: `На главную`, callback_data: '' }],
    ],
    resize_keyboard: true,
    // one_time_keyboard: true,
  }),
};
const date15Kbd = {
  reply_markup: JSON.stringify({
    keyboard: [
      // [{ text: `Новогодняя открытка`, callback_data: '' }],
      [{ text: `Поздравление от артиста`, callback_data: '' }],
      [{ text: `Подарок от театра`, callback_data: '' }],
      [{ text: `На главную`, callback_data: '' }],
    ],
    resize_keyboard: true,
    // one_time_keyboard: true,
  }),
};
const date16Kbd = {
  reply_markup: JSON.stringify({
    keyboard: [
      [{ text: `Новогодняя открытка`, callback_data: '' }],
      [{ text: `Поздравление от артиста`, callback_data: '' }],
      // [{ text: `Подарок от театра`, callback_data: '' }],
      [{ text: `На главную`, callback_data: '' }],
    ],
    resize_keyboard: true,
    // one_time_keyboard: true,
  }),
};

//'«»'

const itemsTransitionKbd = {
  reply_markup: JSON.stringify({
    keyboard: [
      [{ text: 'К выбору', callback_data: '' }],
      [{ text: 'Закончить просмотр', callback_data: '' }],
    ],
    resize_keyboard: true,
  }),
};

////Callback queries sections////
// bot.on('test1', (ctx) => ctx.reply('test callback executed'));
// bot.on('test2', (ctx) => ctx.reply('test callback2 executed'));

//Scenes

////////////main screen scene////////////////
const mainScreen = new Scenes.BaseScene('MAIN_SCREEN_SCENE');
mainScreen.enter(async (ctx) => {
  await ctx.reply('Выберите подарок!', datesKbd);

  // console.log(asdf);

  await mainScreen.on('message', async (ctx) => {
    if (!aviableDatesArray.includes(ctx.message.text)) {
      // await ctx.reply('!Wrong date');
      await ctx.scene.reenter();
    } else if (ctx.message.text === date1) {
      await ctx.scene.enter('SCENE_24_12');
      // if (!isAdventPresentAviable(ctx.message.text)) {
      //   // await ctx.scene.leave();
      // } else {
      //   await ctx.reply(`${ctx.message.text} ещё не настало!`);
      //   await ctx.scene.enter('MAIN_SCREEN_SCENE');
      // }
      // const res = isAdventPresentAviable(ctx.message.text, forcedTimeSet);
      // await ctx.reply(`isPresentAviable ${res}`);
      //   await ctx.scene.enter('MAIN_SCREENSCENE');
    } else if (ctx.message.text === date2) {
      await ctx.scene.enter('SCENE_25_12');
      // if (isAdventPresentAviable(ctx.message.text)) {
      //   // await ctx.scene.leave();

      //   //  await ctx.scene.enter('SCENE_24_12');
      // } else {
      //   await ctx.reply(`${ctx.message.text} ещё не настало!`);
      //   await ctx.scene.enter('MAIN_SCREEN_SCENE');
      // }
      // const res = isAdventPresentAviable(ctx.message.text, forcedTimeSet);
      // await ctx.reply(`isPresentAviable ${res}`);
      //   await ctx.scene.enter('MAIN_SCREENSCENE');
    } else if (ctx.message.text === date3) {
      await ctx.scene.enter('SCENE_26_12');
      // if (isAdventPresentAviable(ctx.message.text)) {
      //   // await ctx.scene.leave();
      //   //  await ctx.scene.enter('SCENE_24_12');
      // } else {
      //   await ctx.reply(`${ctx.message.text} ещё не настало!`);
      //   await ctx.scene.enter('MAIN_SCREEN_SCENE');
      // }
      // const res = isAdventPresentAviable(ctx.message.text, forcedTimeSet);
      // await ctx.reply(`isPresentAviable ${res}`);
      //   await ctx.scene.enter('MAIN_SCREENSCENE');
    } else if (ctx.message.text === date4) {
      if (isAdventPresentAviable(ctx.message.text)) {
        // await ctx.scene.leave();
        await ctx.scene.enter('SCENE_27_12');
        //  await ctx.scene.enter('SCENE_24_12');
      } else {
        await ctx.reply(`${ctx.message.text} ещё не настало!`);
        await ctx.scene.enter('MAIN_SCREEN_SCENE');
      }
      // const res = isAdventPresentAviable(ctx.message.text, forcedTimeSet);
      // await ctx.reply(`isPresentAviable ${res}`);
      //   await ctx.scene.enter('MAIN_SCREENSCENE');
    } else if (ctx.message.text === date5) {
      if (isAdventPresentAviable(ctx.message.text)) {
        // await ctx.scene.leave();
        await ctx.scene.enter('SCENE_28_12');
        //  await ctx.scene.enter('SCENE_24_12');
      } else {
        await ctx.reply(`${ctx.message.text} ещё не настало!`);
        await ctx.scene.enter('MAIN_SCREEN_SCENE');
      }
      // const res = isAdventPresentAviable(ctx.message.text, forcedTimeSet);
      // await ctx.reply(`isPresentAviable ${res}`);
      //   await ctx.scene.enter('MAIN_SCREENSCENE');
    } else if (ctx.message.text === date6) {
      if (isAdventPresentAviable(ctx.message.text)) {
        // await ctx.scene.leave();
        await ctx.scene.enter('SCENE_29_12');
        //  await ctx.scene.enter('SCENE_24_12');
      } else {
        await ctx.reply(`${ctx.message.text} ещё не настало!`);
        await ctx.scene.enter('MAIN_SCREEN_SCENE');
      }
      // const res = isAdventPresentAviable(ctx.message.text, forcedTimeSet);
      // await ctx.reply(`isPresentAviable ${res}`);
      //   await ctx.scene.enter('MAIN_SCREENSCENE');
    } else if (ctx.message.text === date7) {
      if (isAdventPresentAviable(ctx.message.text)) {
        // await ctx.scene.leave();
        await ctx.scene.enter('SCENE_30_12');
        // await ctx.scene.enter('SCENE_24_12');
      } else {
        await ctx.reply(`${ctx.message.text} ещё не настало!`);
        await ctx.scene.enter('MAIN_SCREEN_SCENE');
      }
      // const res = isAdventPresentAviable(ctx.message.text, forcedTimeSet);
      // await ctx.reply(`isPresentAviable ${res}`);
      //   await ctx.scene.enter('MAIN_SCREENSCENE');
    } else if (ctx.message.text === date8) {
      if (isAdventPresentAviable(ctx.message.text)) {
        // await ctx.scene.leave();
        await ctx.scene.enter('SCENE_31_12');
        // await ctx.scene.enter('SCENE_24_12');
      } else {
        await ctx.reply(`${ctx.message.text} ещё не настало!`);
        await ctx.scene.enter('MAIN_SCREEN_SCENE');
      }
      // const res = isAdventPresentAviable(ctx.message.text, forcedTimeSet);
      // await ctx.reply(`isPresentAviable ${res}`);
      //   await ctx.scene.enter('MAIN_SCREENSCENE');
    } else if (ctx.message.text === date9) {
      if (isAdventPresentAviable(ctx.message.text)) {
        // await ctx.scene.leave();
        await ctx.scene.enter('SCENE_01_01');
        //  await ctx.scene.enter('SCENE_24_12');
      } else {
        await ctx.reply(`${ctx.message.text} ещё не настало!`);
        await ctx.scene.enter('MAIN_SCREEN_SCENE');
      }
      // const res = isAdventPresentAviable(ctx.message.text, forcedTimeSet);
      // await ctx.reply(`isPresentAviable ${res}`);
      //   await ctx.scene.enter('MAIN_SCREENSCENE');
    } else if (ctx.message.text === date10) {
      if (isAdventPresentAviable(ctx.message.text)) {
        // await ctx.scene.leave();
        await ctx.scene.enter('SCENE_02_01');
        //  await ctx.scene.enter('SCENE_24_12');
      } else {
        await ctx.reply(`${ctx.message.text} ещё не настало!`);
        await ctx.scene.enter('MAIN_SCREEN_SCENE');
      }
      // const res = isAdventPresentAviable(ctx.message.text, forcedTimeSet);
      // await ctx.reply(`isPresentAviable ${res}`);
      //   await ctx.scene.enter('MAIN_SCREENSCENE');
    } else if (ctx.message.text === date11) {
      if (isAdventPresentAviable(ctx.message.text)) {
        // await ctx.scene.leave();
        await ctx.scene.enter('SCENE_03_01');
        //  await ctx.scene.enter('SCENE_24_12');
      } else {
        await ctx.reply(`${ctx.message.text} ещё не настало!`);
        await ctx.scene.enter('MAIN_SCREEN_SCENE');
      }
      // const res = isAdventPresentAviable(ctx.message.text, forcedTimeSet);
      // await ctx.reply(`isPresentAviable ${res}`);
      //   await ctx.scene.enter('MAIN_SCREENSCENE');
    } else if (ctx.message.text === date12) {
      if (isAdventPresentAviable(ctx.message.text)) {
        // await ctx.scene.leave();
        await ctx.scene.enter('SCENE_04_01');
        //  await ctx.scene.enter('SCENE_24_12');
      } else {
        await ctx.reply(`${ctx.message.text} ещё не настало!`);
        await ctx.scene.enter('MAIN_SCREEN_SCENE');
      }
      // const res = isAdventPresentAviable(ctx.message.text, forcedTimeSet);
      // await ctx.reply(`isPresentAviable ${res}`);
      //   await ctx.scene.enter('MAIN_SCREENSCENE');
    } else if (ctx.message.text === date13) {
      if (isAdventPresentAviable(ctx.message.text)) {
        // await ctx.scene.leave();
        await ctx.scene.enter('SCENE_05_01');
        //  await ctx.scene.enter('SCENE_24_12');
      } else {
        await ctx.reply(`${ctx.message.text} ещё не настало!`);
        await ctx.scene.enter('MAIN_SCREEN_SCENE');
      }
      // const res = isAdventPresentAviable(ctx.message.text, forcedTimeSet);
      // await ctx.reply(`isPresentAviable ${res}`);
      //   await ctx.scene.enter('MAIN_SCREENSCENE');
    } else if (ctx.message.text === date14) {
      if (isAdventPresentAviable(ctx.message.text)) {
        // await ctx.scene.leave();
        await ctx.scene.enter('SCENE_06_01');
        //  await ctx.scene.enter('SCENE_24_12');
      } else {
        await ctx.reply(`${ctx.message.text} ещё не настало!`);
        await ctx.scene.enter('MAIN_SCREEN_SCENE');
      }
      // const res = isAdventPresentAviable(ctx.message.text, forcedTimeSet);
      // await ctx.reply(`isPresentAviable ${res}`);
      //   await ctx.scene.enter('MAIN_SCREENSCENE');
    } else if (ctx.message.text === date15) {
      if (isAdventPresentAviable(ctx.message.text)) {
        // await ctx.scene.leave();
        await ctx.scene.enter('SCENE_07_01');
        //  await ctx.scene.enter('SCENE_24_12');
      } else {
        await ctx.reply(`${ctx.message.text} ещё не настало!`);
        await ctx.scene.enter('MAIN_SCREEN_SCENE');
      }
      // const res = isAdventPresentAviable(ctx.message.text, forcedTimeSet);
      // await ctx.reply(`isPresentAviable ${res}`);
      //   await ctx.scene.enter('MAIN_SCREENSCENE');
    } else if (ctx.message.text === date16) {
      if (isAdventPresentAviable(ctx.message.text)) {
        // await ctx.scene.leave();
        await ctx.scene.enter('SCENE_08_01');
        //  await ctx.scene.enter('SCENE_24_12');
      } else {
        await ctx.reply(`${ctx.message.text} ещё не настало!`);
        await ctx.scene.enter('MAIN_SCREEN_SCENE');
      }
      // const res = isAdventPresentAviable(ctx.message.text, forcedTimeSet);
      // await ctx.reply(`isPresentAviable ${res}`);
      //   await ctx.scene.enter('MAIN_SCREENSCENE');
    }
  });
});

////24.12////
const scene24_12 = new Scenes.BaseScene('SCENE_24_12');
scene24_12.enter(async (ctx) => {
  await ctx.reply('Подарки сегодня:', date1Kbd);

  await scene24_12.on('text', async (ctx) => {
    if (ctx.message.text === 'Поздравление от артиста') {
      // await ctx.replyWithVideoNote({ source: directorVideo });
      // await ctx.replyWithVideoNote({ source: video7 });
      await ctx.replyWithVideoNote({ source: video1 });
    } else if (ctx.message.text === 'Новогодняя открытка') {
      await ctx.replyWithPhoto({ source: arinaLitvinenko });
    } else if (ctx.message.text === 'Подарок от театра') {
      await ctx.reply('!no content');
    } else if (ctx.message.text === 'На главную') {
      await ctx.scene.enter('MAIN_SCREEN_SCENE');
    } else {
      ctx.scene.reenter('MAIN_SCREEN_SCENE');
    }
  });
});
////25.12////
const scene25_12 = new Scenes.BaseScene('SCENE_25_12');
scene25_12.enter(async (ctx) => {
  await ctx.reply('Подарки сегодня:', date2Kbd);

  await scene25_12.on('text', async (ctx) => {
    if (ctx.message.text === 'Поздравление от артиста') {
      // await ctx.replyWithVideoNote({ source: directorVideo });
      // await ctx.replyWithVideoNote({ source: video7 });
      await ctx.replyWithVideoNote({ source: video8 });
    } else if (ctx.message.text === 'Новогодняя открытка') {
      await ctx.replyWithPhoto({ source: elenaGoff });
    } else if (ctx.message.text === 'Подарок от театра') {
      await ctx.reply('!no content');
    } else if (ctx.message.text === 'На главную') {
      await ctx.scene.enter('MAIN_SCREEN_SCENE');
    } else {
      ctx.scene.reenter('MAIN_SCREEN_SCENE');
    }
  });
});
////26.12////
const scene26_12 = new Scenes.BaseScene('SCENE_26_12');
scene26_12.enter(async (ctx) => {
  await ctx.reply('Подарки сегодня:', date3Kbd);

  await scene26_12.on('text', async (ctx) => {
    if (ctx.message.text === 'Поздравление от артиста') {
      // await ctx.replyWithVideoNote({ source: directorVideo });
      // await ctx.replyWithVideoNote({ source: video7 });
      await ctx.replyWithVideoNote({ source: video3 });
    } else if (ctx.message.text === 'Новогодняя открытка') {
      // await ctx.replyWithPhoto({ source: elinaZyablova });
    } else if (ctx.message.text === 'Подарок от театра') {
      await ctx.replyWithHTML(`
      <b>Скидка на спектакль!</b>
      `);
      await ctx.reply(`02.02.2023 г. «Одна абсолютно счастливая деревня» `);
      await ctx.reply(
        'Промокод: NPREA Вводи промокод при покупке билета на сайте театра и получай скидку 15%',
      );
    } else if (ctx.message.text === 'На главную') {
      await ctx.scene.enter('MAIN_SCREEN_SCENE');
    } else {
      ctx.scene.reenter('MAIN_SCREEN_SCENE');
    }
  });
});
////27.12////
const scene27_12 = new Scenes.BaseScene('SCENE_27_12');
scene27_12.enter(async (ctx) => {
  await ctx.reply('Подарки сегодня:', date4Kbd);

  await scene27_12.on('text', async (ctx) => {
    if (ctx.message.text === 'Поздравление от артиста') {
      // await ctx.replyWithVideoNote({ source: directorVideo });
      // await ctx.replyWithVideoNote({ source: video7 });
      await ctx.replyWithVideoNote({ source: video4 });
    } else if (ctx.message.text === 'Новогодняя открытка') {
      await ctx.replyWithPhoto({ source: irinaKaminina });
    } else if (ctx.message.text === 'Подарок от театра') {
      await ctx.reply('!no content');
    } else if (ctx.message.text === 'На главную') {
      await ctx.scene.enter('MAIN_SCREEN_SCENE');
    } else {
      ctx.scene.reenter('MAIN_SCREEN_SCENE');
    }
  });
});
////28.12////
const scene28_12 = new Scenes.BaseScene('SCENE_28_12');
scene28_12.enter(async (ctx) => {
  await ctx.reply('Подарки сегодня:', date5Kbd);

  await scene28_12.on('text', async (ctx) => {
    if (ctx.message.text === 'Поздравление от артиста') {
      // await ctx.replyWithVideoNote({ source: directorVideo });
      // await ctx.replyWithVideoNote({ source: video7 });
      await ctx.replyWithVideoNote({ source: video5 });
    } else if (ctx.message.text === 'Новогодняя открытка') {
      await ctx.replyWithPhoto({ source: ivanBassura });
    } else if (ctx.message.text === 'Подарок от театра') {
      await ctx.reply('!no content');
    } else if (ctx.message.text === 'На главную') {
      await ctx.scene.enter('MAIN_SCREEN_SCENE');
    } else {
      ctx.scene.reenter('MAIN_SCREEN_SCENE');
    }
  });
});
////29.12////
const scene29_12 = new Scenes.BaseScene('SCENE_29_12');
scene29_12.enter(async (ctx) => {
  await ctx.reply('Подарки сегодня:', date6Kbd);

  await scene29_12.on('text', async (ctx) => {
    if (ctx.message.text === 'Поздравление от артиста') {
      // await ctx.replyWithVideoNote({ source: directorVideo });
      // await ctx.replyWithVideoNote({ source: video7 });
      await ctx.replyWithVideoNote({ source: video6 });
    } else if (ctx.message.text === 'Новогодняя открытка') {
      // await ctx.replyWithPhoto({ source: ivanZrachev });
    } else if (ctx.message.text === 'Подарок от театра') {
      await ctx.replyWithHTML(`
      <b>Скидка на спектакль!</b>
      `);
      await ctx.reply(`18.01.2023 г. «Розенкранц и Гильденстерн мертвы»`);
      await ctx.reply(
        'Промокод: NPREA Вводи промокод при покупке билета на сайте театра и получай скидку 15%',
      );
    } else if (ctx.message.text === 'На главную') {
      await ctx.scene.enter('MAIN_SCREEN_SCENE');
    } else {
      ctx.scene.reenter('MAIN_SCREEN_SCENE');
    }
  });
});
////20.12////
const scene30_12 = new Scenes.BaseScene('SCENE_30_12');
scene30_12.enter(async (ctx) => {
  await ctx.reply('Подарки сегодня:', date7Kbd);

  await scene30_12.on('text', async (ctx) => {
    if (ctx.message.text === 'Поздравление от артиста') {
      // await ctx.replyWithVideoNote({ source: directorVideo });
      // await ctx.replyWithVideoNote({ source: video7 });
      await ctx.replyWithVideoNote({ source: video7 });
    } else if (ctx.message.text === 'Новогодняя открытка') {
      await ctx.replyWithPhoto({ source: kristinaYamshokova });
    } else if (ctx.message.text === 'Подарок от театра') {
      await ctx.reply('!no content');
    } else if (ctx.message.text === 'На главную') {
      await ctx.scene.enter('MAIN_SCREEN_SCENE');
    } else {
      ctx.scene.reenter('MAIN_SCREEN_SCENE');
    }
  });
});
////31.12////
const scene31_12 = new Scenes.BaseScene('SCENE_31_12');
scene31_12.enter(async (ctx) => {
  await ctx.reply('Подарки сегодня:', date8Kbd);

  await scene31_12.on('text', async (ctx) => {
    if (ctx.message.text === 'Поздравление от директора') {
      // await ctx.replyWithVideoNote({ source: directorVideo });
      // await ctx.replyWithVideoNote({ source: video7 });
      await ctx.replyWithVideoNote({ source: video31 });
    } else if (ctx.message.text === 'Новогодняя открытка') {
      await ctx.replyWithPhoto({ source: marinaKondrateva });
    } else if (ctx.message.text === 'Подарок от театра') {
      await ctx.replyWithHTML(`
      <b>Скидка на спектакль!</b>
      `);
      await ctx.reply(`29.01.2023 г. «Дни Турбиных»`);
      await ctx.reply(
        'Промокод: NPREA Вводи промокод при покупке билета на сайте театра и получай скидку 15%',
      );
    } else if (ctx.message.text === 'На главную') {
      await ctx.scene.enter('MAIN_SCREEN_SCENE');
    } else {
      ctx.scene.reenter('MAIN_SCREEN_SCENE');
    }
  });
});
////01.01////
const scene01_01 = new Scenes.BaseScene('SCENE_01_01');
scene01_01.enter(async (ctx) => {
  await ctx.reply('Подарки сегодня:', date9Kbd);

  await scene01_01.on('text', async (ctx) => {
    if (ctx.message.text === 'Поздравление от артиста') {
      // await ctx.replyWithVideoNote({ source: directorVideo });
      // await ctx.replyWithVideoNote({ source: video7 });
      await ctx.replyWithVideoNote({ source: video2 });
    } else if (ctx.message.text === 'Новогодняя открытка') {
      await ctx.replyWithPhoto({ source: nikitaZaicev });
    } else if (ctx.message.text === 'Подарок от театра') {
      await ctx.replyWithHTML(`
      <b>Скидка на спектакль!</b>
      `);
      await ctx.reply('12.01.2023 г. «Одна абсолютно счастливая деревня»');
      await ctx.reply(
        'Промокод: NPREA Вводи промокод при покупке билета на сайте театра и получай скидку 15%',
      );
    } else if (ctx.message.text === 'На главную') {
      await ctx.scene.enter('MAIN_SCREEN_SCENE');
    } else {
      ctx.scene.reenter('MAIN_SCREEN_SCENE');
    }
  });
});
////02.01////
const scene02_01 = new Scenes.BaseScene('SCENE_02_01');
scene02_01.enter(async (ctx) => {
  await ctx.reply('Подарки сегодня:', date10Kbd);

  await scene02_01.on('text', async (ctx) => {
    if (ctx.message.text === 'Поздравление от артиста') {
      // await ctx.replyWithVideoNote({ source: directorVideo });
      // await ctx.replyWithVideoNote({ source: video7 });
      await ctx.replyWithVideoNote({ source: video9 });
    } else if (ctx.message.text === 'Новогодняя открытка') {
      await ctx.replyWithPhoto({ source: ninaKrasova });
    } else if (ctx.message.text === 'Подарок от театра') {
      await ctx.reply('!no content');
    } else if (ctx.message.text === 'На главную') {
      await ctx.scene.enter('MAIN_SCREEN_SCENE');
    } else {
      ctx.scene.reenter('MAIN_SCREEN_SCENE');
    }
  });
});
////03.01////
const scene03_01 = new Scenes.BaseScene('SCENE_03_01');
scene03_01.enter(async (ctx) => {
  await ctx.reply('Подарки сегодня:', date11Kbd);

  await scene03_01.on('text', async (ctx) => {
    if (ctx.message.text === 'Поздравление от артиста') {
      // await ctx.replyWithVideoNote({ source: directorVideo });
      // await ctx.replyWithVideoNote({ source: video7 });
      await ctx.replyWithVideoNote({ source: video10 });
    } else if (ctx.message.text === 'Новогодняя открытка') {
      await ctx.replyWithPhoto({ source: tamaraSidelnikova });
    } else if (ctx.message.text === 'Подарок от театра') {
      await ctx.reply('!no content');
    } else if (ctx.message.text === 'На главную') {
      await ctx.scene.enter('MAIN_SCREEN_SCENE');
    } else {
      ctx.scene.reenter('MAIN_SCREEN_SCENE');
    }
  });
});
////04.01////
const scene04_01 = new Scenes.BaseScene('SCENE_04_01');
scene04_01.enter(async (ctx) => {
  await ctx.reply('Подарки сегодня:', date12Kbd);

  await scene04_01.on('text', async (ctx) => {
    if (ctx.message.text === 'Поздравление от артиста') {
      // await ctx.replyWithVideoNote({ source: directorVideo });
      // await ctx.replyWithVideoNote({ source: video7 });
      await ctx.replyWithVideoNote({ source: video11 });
    } else if (ctx.message.text === 'Новогодняя открытка') {
      // await ctx.replyWithPhoto({ source: vladislavOgnev });
    } else if (ctx.message.text === 'Подарок от театра') {
      await ctx.replyWithHTML(`
      <b>Скидка на спектакль!</b>
      `);
      await ctx.reply('05.02.2023 г. «104 страницы про любовь»');
      await ctx.reply(
        'Промокод: NPREA Вводи промокод при покупке билета на сайте театра и получай скидку 15%',
      );
    } else if (ctx.message.text === 'На главную') {
      await ctx.scene.enter('MAIN_SCREEN_SCENE');
    } else {
      ctx.scene.reenter('MAIN_SCREEN_SCENE');
    }
  });
});
////05.01////
const scene05_01 = new Scenes.BaseScene('SCENE_05_01');
scene05_01.enter(async (ctx) => {
  await ctx.reply('Подарки сегодня:', date13Kbd);

  await scene05_01.on('text', async (ctx) => {
    if (ctx.message.text === 'Поздравление от артиста') {
      // await ctx.replyWithVideoNote({ source: directorVideo });
      // await ctx.replyWithVideoNote({ source: video7 });
      await ctx.replyWithVideoNote({ source: video12 });
    } else if (ctx.message.text === 'Новогодняя открытка') {
      await ctx.replyWithPhoto({ source: elinaZyablova });
    } else if (ctx.message.text === 'Подарок от театра') {
      await ctx.reply('!no content');
    } else if (ctx.message.text === 'На главную') {
      await ctx.scene.enter('MAIN_SCREEN_SCENE');
    } else {
      ctx.scene.reenter('MAIN_SCREEN_SCENE');
    }
  });
});
////06.01////
const scene06_01 = new Scenes.BaseScene('SCENE_06_01');
scene06_01.enter(async (ctx) => {
  await ctx.reply('Подарки сегодня:', date14Kbd);

  await scene06_01.on('text', async (ctx) => {
    if (ctx.message.text === 'Поздравление от артиста') {
      // await ctx.replyWithVideoNote({ source: directorVideo });
      // await ctx.replyWithVideoNote({ source: video7 });
      await ctx.replyWithVideoNote({ source: video13 });
    } else if (ctx.message.text === 'Новогодняя открытка') {
      await ctx.replyWithPhoto({ source: ivanZrachev });
    } else if (ctx.message.text === 'Подарок от театра') {
      await ctx.reply('!no content');
    } else if (ctx.message.text === 'На главную') {
      await ctx.scene.enter('MAIN_SCREEN_SCENE');
    } else {
      // ctx.reply('!no matches');
      ctx.scene.reenter('MAIN_SCREEN_SCENE');
    }
  });
});
////07.01////
const scene07_01 = new Scenes.BaseScene('SCENE_07_01');
scene07_01.enter(async (ctx) => {
  await ctx.reply('Подарки сегодня:', date15Kbd);

  await scene07_01.on('text', async (ctx) => {
    if (ctx.message.text === 'Поздравление от артиста') {
      // await ctx.replyWithVideoNote({ source: directorVideo });
      // await ctx.replyWithVideoNote({ source: video7 });
      await ctx.replyWithVideoNote({ source: video14 });
    } else if (ctx.message.text === 'Новогодняя открытка') {
      await ctx.replyWithPhoto({ source: arinaLitvinenko });
    } else if (ctx.message.text === 'Подарок от театра') {
      await ctx.replyWithHTML(`
      <b>Скидка на спектакль!</b>
      `);
      await ctx.reply('07.02.2023 г. «Айболит Forever» Промокод: NPREA');
      await ctx.reply(
        'Промокод: NPREA Вводи промокод при покупке билета на сайте театра и получай скидку 15%',
      );
    } else if (ctx.message.text === 'На главную') {
      await ctx.scene.enter('MAIN_SCREEN_SCENE');
    } else {
      ctx.scene.reenter('MAIN_SCREEN_SCENE');
    }
  });
});
////08.01////
const scene08_01 = new Scenes.BaseScene('SCENE_08_01');
scene08_01.enter(async (ctx) => {
  await ctx.reply('Подарки сегодня:', date16Kbd);

  await scene08_01.on('text', async (ctx) => {
    if (ctx.message.text === 'Поздравление от артиста') {
      // await ctx.replyWithVideoNote({ source: directorVideo });
      // await ctx.replyWithVideoNote({ source: video7 });
      await ctx.replyWithVideoNote({ source: video15 });
    } else if (ctx.message.text === 'Новогодняя открытка') {
      await ctx.replyWithPhoto({ source: vladislavOgnev });
    } else if (ctx.message.text === 'Подарок от театра') {
      await ctx.reply('!no content');
    } else if (ctx.message.text === 'На главную') {
      await ctx.scene.enter('MAIN_SCREEN_SCENE');
    } else {
      ctx.scene.reenter('MAIN_SCREEN_SCENE');
    }
  });
});

//////Stages Sections//////
const stage = new Scenes.Stage([
  mainScreen,
  scene24_12,
  scene25_12,
  scene26_12,
  scene27_12,
  scene28_12,
  scene29_12,
  scene30_12,
  scene31_12,
  scene01_01,
  scene02_01,
  scene03_01,
  scene04_01,
  scene05_01,
  scene06_01,
  scene07_01,
  scene08_01,
]);

bot.use(stage.middleware());

////custom commands menu////
// bot.telegram.setMyCommands([
//   { command: '/start', description: 'from the beggining' },
// ]);

// bot.start((ctx) => ctx.answerCbQuery('callback query'));

////utility section////
bot.start(async (ctx) => {
  // await ctx.answerCbQuery('hasjdhasjhjsadaj');
  // ctx.editMessageReplyMarkup(menuKbd);
  await ctx.scene.enter('MAIN_SCREEN_SCENE');
});

bot.on('message', async (ctx) => {
  await ctx.scene.enter('MAIN_SCREEN_SCENE');
});

// bot.on('callback_query', async (ctx) => {
//   // await ctx.reply('/start');
//   // await ctx.scene.enter('MAIN_SCREEN_SCENE');
//   await ctx.answerCbQuery('-=callback query trigered=-');
//   // await ctx.scene.enter('ITEMS_MENU_SCENE');
// });

bot
  .launch()
  .then(() => console.log('-=Active=-'))
  .catch((err) => console.log(err));

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
