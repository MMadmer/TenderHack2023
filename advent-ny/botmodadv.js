const axios = require('axios');
const CORE_ID = '6545342529:AAE4csj4FnuKFPG2Bk4ypW_l8Ebz_09d9Rg';
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

////files assets ///

// const file1 = './assets/videos/video1.mp4';
// const file2 = './assets/videos/video2.mp4';
// const file3 = './assets/videos/video3.mp4';
// const file4 = './assets/videos/video4.mp4';
// const file5 = './assets/videos/video5.mp4';
// const file6 = './assets/videos/video6.mp4';
// const file7 = './assets/videos/video7.mp4';
// const file8 = './assets/videos/video8.mp4';
// const file9 = './assets/videos/video9.mp4';
// const file10 = './assets/videos/video10.mp4';
// const file11 = './assets/videos/video11.mp4';
// const file12 = './assets/videos/video12.mp4';
// const file13 = './assets/videos/video13.mp4';
// const file14 = './assets/videos/video14.mp4';
// const file15 = './assets/videos/video15.mp4';
// const file16 = './assets/videos/video31.mp4';

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

////Aviable Dates buttonts////
const button1 = `${vortexEm} Задать вопрос`;
const button2 = `${smileEm}  Документация`;
const button3 = `${partyPopperEm}  Вернуться назад`;

const aviableDatesArray = [button1, button2];

//////keyboards/////

const actionKbd = {
  reply_markup: JSON.stringify({
    keyboard: [[]],
    resize_keyboard: true,

    // one_time_keyboard: true,
  }),
};

const goBackKbd = {
  reply_markup: JSON.stringify({
    keyboard: [[{ text: `На главную`, callback_data: '' }]],
    resize_keyboard: true,
    // one_time_keyboard: true,
  }),
};

//////////
// { text: `${button1}`, callback_data: 'datesKbdCB' },
// { text: `${button2}`, callback_data: 'datesKbdCB' },
/////////////

const itemsTransitionKbd = {
  reply_markup: JSON.stringify({
    keyboard: [
      [{ text: 'К выбору', callback_data: '' }],
      [{ text: 'Закончить просмотр', callback_data: '' }],
    ],
    resize_keyboard: true,
  }),
};

//Scenes

////////////main screen scene////////////////

///////////////////////////////////
const mainScreen = new Scenes.BaseScene('MAIN_SCREEN_SCENE');
mainScreen.enter(async (ctx) => {
  await ctx.reply('Задайте вопрос', actionKbd);

  await mainScreen.on('message', async (ctx) => {
    const data = await axios
      .post(
        'http://127.0.0.1:8000/get_answer',
        {
          text: ctx.message.text,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      .then((data) => {
        console.log(data.data.answer);
        ctx.reply(data.data.answer);
      })
      .catch((error) => console.log(error));
  });
});

//custom scenes

//////Stages Sections//////
const stage = new Scenes.Stage([mainScreen]);

bot.use(stage.middleware());

////utility section////
bot.start(async (ctx) => {
  await ctx.scene.enter('MAIN_SCREEN_SCENE');
});

bot.on('message', async (ctx) => {
  await ctx.scene.enter('MAIN_SCREEN_SCENE');
});

bot
  .launch()
  .then(() => console.log('-=Active=-'))
  .catch((err) => console.log(err));

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
