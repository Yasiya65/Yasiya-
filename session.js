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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUl3THh2N1c0NWN0bmdzMENiMTdRR3VuZkM1cWVjZ0ljanZoZEF4eHdWQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQWhqcTdnYnFZbVMrclB2VkZHdE4waWJ5N25qbnYwZHQ4aExyVWM3bkJrWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVTnhqQ2x3NHJQblZQVWs5RW9PT1lYVVQwejJUWkQ0bVJyU0gyTzVXTlZBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHNlNlS0luUlR6RFkrMjFUTk54WkJrajlBcGl6ZGtrMmJ3b0J1eXFFU25RPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNMZUcyOEN2WGdtNDhiVGtRMHhUNW5tcFN5eEZ6VU1scjVvdkVQdDNpbXM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imh2WFhLeVo0K3MyL0VvV1RjaGJZUXNOb2txOWhjVjJRS0RQQm5DczBnRzQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0k0bWFSeEhSVGN4WkNIYTloWFNvUUlNTlBEbDNKUXZrZlY4aDh6SmEzWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM1ArV25weThwUmhHemxhakdXbUd6K1UyMy9XVitLeTArZ01NbUlpbU9YST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImwxOHpDOVRncXpMSmF3UDBhWm9wZDc4aFRQRXlIVlJobm5jZlkwRlFCeUFvaWIxNEZqdTdKclRZTFR3dHlYK3lyc1EwVnNGSTNqWkRuSzJTNlFzRkFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc4LCJhZHZTZWNyZXRLZXkiOiJQWC9BMDllWUMwMVMrVzc1VW5RcElMRnNTMXVCMkNnUkhqUUd0WGsvY2tBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJTWFVPVTFUZlRJZWdoQ3M0NjUyTmpBIiwicGhvbmVJZCI6IjljMjk2NTA1LTgwZjAtNGU2NS1hZDJiLTExY2RhYWJlMzMwOSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1d01WUTQrSXFPVm5IdHM4azYwMldSVUR6a009In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTDQwMmdWOHdrcFBGeW9CTDZmNDQxdG9tTGU4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkJFQ1FYTFlBIiwibWUiOnsiaWQiOiI5NDc3NDcwNzQ2MjozMEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLhtLnhtL9fyo/htIDqnLHJqsqP4bSAX+G0m+G0h+G0hMqcLVsg4bSELuG0hS7htJsgXeG1gOG0uSIsImxpZCI6IjQzOTI1MzUyMDAxNjQ2OjMwQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSTJPeXRVQ0VJNkprTVVHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoia0lqa1ZRbTk1V0xCRkMzSnE5bS9WdGRyaFV5UTduWWpCR05uK2cvVjh4cz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZmNrU3JSK2FSaG14aE96U3BlNjRTaG16SHVEL1FYaUNRZnBydkFGcG1MVEJWb1EyQU44WU1TMHg1cEg1MW1rcEN6amk5V25sL3dnNnIzU0tiaFJ2RHc9PSIsImRldmljZVNpZ25hdHVyZSI6IlE5Z0ZXdUdhb3VwR3BwOVVoSENmeklOczBINUYrMXRJN1dVSUNxWmQxK29OZzJnVEgzVFdjQVc0N0U0WVZ6K1IwYXBOTldDODN4TnNaTCsyYUEreERBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NzQ3MDc0NjI6MzBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWkNJNUZVSnZlVml3UlF0eWF2WnYxYlhhNFZNa081Mkl3UmpaL29QMWZNYiJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSUVnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU1NTc5NTQ4LCJsYXN0UHJvcEhhc2giOiIxSzRoSDQifQ=",
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
