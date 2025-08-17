//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOE81MHNxeThMbEhTTXJPVUtUSU4vWDJ0aStaYTdSWEk5MXFmNGdhK00yST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUZsRnZINFZLWDNTUGdycTloMkFHMEwxNlhUZ0FhaW1aNkFhTGIxZUp3bz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZQkFrOXppWks2S1QyZXZjVm9aOGtQYkJZTFNBQTdCZS9qWUR4aUJQbFVZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxekNubTNBcW9qTGRtcEFnVUFnRXVtMHE4MElJWTE0UVNVVVRJZnRNK0JRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRLUEs2S216eG5Ra1dwSjNtRGRIMGsraEJRWVVLVDA3REMyMEs3WlpVM2c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJOMVRsSUdIRitTdy9yUGNRMXpqczVWT2s2MWZxZnNCR2ZJck5VMTd5MUE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkhuK25WUmlOQTdtRmFGV3NYbitEeENvSEdJMTlmL1hPNWNXMnpZSG9sRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaXVZOFNXQWFtZEg5bXVUVzRaRmhCRlppTmtyNERCUHNIeklPQU9YY2dYdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxXOFljT1FNNWJ1QXllYUVDL3REU0QwSmtOM3FUMTZCd0t2K0pxSjQ5b1ZjUmhSUFNtampsRUVBb0dTVEVqY0xPRHBTVDhnN2F6blhQZllVR2NFWWhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ2LCJhZHZTZWNyZXRLZXkiOiIzNDVFajNsZXdLVEJHNjlwNWMvTVIzS2x0TTFYdjh1R0RSVEZRR3ZwdlZvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzc0NzA3NDYyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFGODU1NzAxRjE2NzU5MTM0QTExOTg4QUQyQzFEM0ZBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTU0MDY2MDB9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImQ0M254NVIyVHZpQ1NyTGtTYm5pdXciLCJwaG9uZUlkIjoiZDAxMThiYTMtNjc4My00ZTUxLWIxYWYtNGFjYWM0YjgzNjM3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjkxcDBGTEJzOC9xVmJYTjJ4djB5T05sWDYxWT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrRkltY1FaTGR2YUFyZjlTWW9Wb0wxeWs1Ym89In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNUhQNjYyWTIiLCJtZSI6eyJpZCI6Ijk0Nzc0NzA3NDYyOjI5QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuG0ueG0v1/Kj+G0gOqcscmqyo/htIAt4bSb4bSH4bSEypwgWyDhtIQu4bSFLuG0myBd4bWA4bS5IiwibGlkIjoiNDM5MjUzNTIwMDE2NDY6MjlAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQYXEvNFFGRVBmQmhjVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJHaldwblBYVngra1N6aUFzclgvQXNTdmpjLzY4Z2FQb0tvNXdYeGtSaEVrPSIsImFjY291bnRTaWduYXR1cmUiOiJ4QkZxa2s2UGJMRVBrdWl1VGFMMStrTTVQS09menE3MW5pN2hTcEJjbW83aklWZ2IvUmxBdXlRa2RFRW1pdGpydnh5dEdDVGc0TVpwWG11NE9Qa3pDQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiekZoWktuVkRWYm0ycXFqVkw4TTBiTXg3SitDcW45ay9La3p4T2RjeHJuTjdDemJDSHVPWnJ3VFZhSGJwa0NlcmJLdTl1NzQ4NWk5WksybFlxb1dXZ0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc3NDcwNzQ2MjoyOUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSbzFxWnoxMWNmcEVzNGdMSzEvd0xFcjQzUCt2SUdqNkNxT2NGOFpFWVJKIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWdJRWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTU0MDY1OTUsImxhc3RQcm9wSGFzaCI6IjFLNGhINCIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSmhuIn0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "0774707462",
  PASSWORD: 
    process.env.PASSWORD || "Yasidu@123",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
