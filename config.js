const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkk0Tmt2UExKN3hIT01GcGxsVU8xeDhNOFVwdllnVjBjMmlxd2xpR1puOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiazhZRkZXclpIaGh5aHVrcnBrdWlGVk5CMlcydlF4SDFjdE8zeTJYc2dSVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHQnJ5eUJOSzI2NHRaZ3ZxdTZaZUJPcWRmVFlKbmRYaVQwakpZOHFhbm5JPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVYU8ybnQ3aWR3ZHNDeDZGZ3JZZWVXL0o5aS9WbXg1SUZhZ1dYMnNpbm0wPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtITUxNRDNEUHloM3JJV2piSWg4c2dHb3JxVnhFZ1h5NmRCeW5YUVc2WGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktCQzZyVml6UzQxUlBZVmN4aWY0Vys5bm9FSmF3K1hVTEpLc3BmejA2QVU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUlHSzU3cXNYQVByK05HTjgyU2VSM3RaZXhvQnhpMGllK2ZGNCtHbFZXND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidjd0aDZrWk5lRUhQVDBWRTZWd01kb1ZXTUlSSEVPdVFHL0VzQjNsbVNIaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVRRmt0YWQ4U3BqdC9iek5RSjR3b0o5d2FmYTRpZ2ZzRjNSaUJqSVZNMU1lSm15OWJPRzVzZzBYVzR4QlBlVm1rd013SjdnaWVxQ04wVVhyVnlSSURRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTgsImFkdlNlY3JldEtleSI6Ijl4SW9BMHpkbk9ZUTJiYVFLTFlKOU55YTE4eDdobDlWS3BSUmRvQjZKbFk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IlRHUFFXRTU5IiwibWUiOnsiaWQiOiI5MjMxNDYzNzU2MTA6NkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwk4ap2KfZiNuM2YDZgNizINis2bnZgNmA2YDZgNmA26fbm9mA26zwnYaK2YDZgNmA2YDZgOKBtsK54oGw8JOGqiBcbuKKuVxu4oq5XG7iirlcbuKKuVxu4oq5XG7iirlcbuKKuVxu4oq5XG7iirlcbuKKuVxu4oq5XG7iirlcbuKKuVxu8JOGqfCSiJLwk4aqIiwibGlkIjoiMjM1NzMzOTI3MzU4NTQxOjZAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMdmU4cWNFRUxxajNzUUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI1WEdHc3R4QVRrVURaaUxmRDg4QXREQkkvZU1PaEJIT3E5NyswdjJjOWxFPSIsImFjY291bnRTaWduYXR1cmUiOiJPYkNqQmVpcVM2aU5BRmJkcW5GRlZSeTkzeU5wVThnbytKdW55cm0ycFpEaGh4SGdua0s1Z1A5cmdWL3RybkpRNFd3cWtzQ3BPd3pRU2ZyRklsYUhCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNnhNMmZlM3lPUHBIYzY4S3dqQnFQQ2FrUmFVR25TbkVyNGhqbjFCVnpGVHl5eWVkaVh0djk1bkd4MU5ZYnlXdWNqVElMZHhJQmJFa2FkYWhuWm5IQmc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMxNDYzNzU2MTA6NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlVnhockxjUUU1RkEyWWkzdy9QQUxRd1NQM2pEb1FSenF2ZS90TDluUFpSIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWdRQXhBQSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTQ3NjM3MDksImxhc3RQcm9wSGFzaCI6IjJWNzdxVSJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY AWAIS-JUTT-MD 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/qpnazl.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "AWAIS-JUTT-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "Your-Own-Bot",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923146375610",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*AWAIS-JUTT-MD*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ AWAIS JUTT OFFICIAL ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/qpnazl.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923146375610",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
