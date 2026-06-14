const fs = require('fs');
if (fs.existsSync('bot.env')) require('dotenv').config({ path: './bot.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
BOT_URL: process.env.BOT_URL || "https://raw.githubusercontent.com/ArslanMDofficial/ARSLAN-MD-DATA/refs/heads/main/datafile.json",
AUTO_SITE: process.env.AUTO_SITE || "https://arslan-apis.vercel.app",
BAND_URL: process.env.BAND_URL || "https://raw.githubusercontent.com/ArslanMDofficial/ARSLAN-MD-DATA/refs/heads/main/bandusers.json",
REPO_LINK: process.env.REPO_LINK || "https://github.com/tkry419/GHOST-MD3",
REPO_NAME: process.env.REPO_NAME || "GHOST-MD3",
BOT_NAME: process.env.BOT_NAME || "GHOST-MD",
DESCRIPTION: process.env.DESCRIPTION || "GHOST-MD POWERFULL WHATSAPP BOT",
OWNER_NUMBER: process.env.OWNER_NUMBER || "2349129557631",
OWNER_NAME: process.env.OWNER_NAME || "SwiftBot Official",
ST_SAVE: process.env.ST_SAVE || "GHOST-MD-STATUS-SERVER",
BIO_TEXT: process.env.BIO_TEXT || "GHOST-MD-BY-SWIFTBOT-OFFICIAL",
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*`STATUS SEEN BY GHOST-MD`* _*POWERD BY*_ *SWIFTBOT Official Whtsapp Bot*",
FOOTER: process.env.FOOTER || "GHOST-MD",
COPYRIGHT: process.env.COPYRIGHT || "*㋛ GHOST-MD BY SWIFTBOT OFFICIAL*",
VERSION: process.env.VERSION || "9.0.0",
NEWSLETTER: process.env.NEWSLETTER || "120363426850850275@newsletter",
WA_CHANNEL: process.env.WA_CHANNEL || "https://whatsapp.com/channel/0029Vb86btmI1rci3S1NUA0G",
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/c8zedg.jpg",
OWNER_IMG: process.env.OWNER_IMG || "https://files.catbox.moe/c8zedg.jpg",
CONVERT_IMG: process.env.CONVERT_IMG || "https://files.catbox.moe/c8zedg.jpg",
AI_IMG: process.env.AI_IMG || "https://files.catbox.moe/c8zedg.jpg",
SEARCH_IMG: process.env.SEARCH_IMG || "https://files.catbox.moe/c8zedg.jpg",
DOWNLOAD_IMG: process.env.DOWNLOAD_IMG || "https://files.catbox.moe/c8zedg.jpg",
MAIN_IMG: process.env.MAIN_IMG || "https://files.catbox.moe/c8zedg.jpg",
GROUP_IMG: process.env.GROUP_IMG || "https://files.catbox.moe/c8zedg.jpg",
FUN_IMG: process.env.FUN_IMG || "https://files.catbox.moe/c8zedg.jpg",
TOOLS_IMG: process.env.TOOLS_IMG || "https://files.catbox.moe/c8zedg.jpg",
OTHER_IMG: process.env.OTHER_IMG || "https://files.catbox.moe/c8zedg.jpg",
MOVIE_IMG: process.env.MOVIE_IMG || "https://files.catbox.moe/c8zedg.jpg",
NEWS_IMG: process.env.NEWS_IMG || "https://files.catbox.moe/c8zedg.jpg",
PP_IMG: process.env.PP_IMG || "https://files.catbox.moe/c8zedg.jpg"
};
  
