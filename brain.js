// ===============================
// Qevira AI Brain v1.0
// Created by: Deepanshu Yadav
// AI Architect: ChatGPT
// ===============================

const QeviraBrain = {
    version: "1.0",
    name: "Qevira AI",
    status: "Learning",
};
// ======================================
// Qevira AI - Understand User
// ======================================

function understandUser(message) {
   message = message.toLowerCase();

let mood = "Normal";
let intent = "General";

if (
    message.includes("hello") ||
    message.includes("hi") ||
    message.includes("hey") ||
    message.includes("ram ram")
){
    intent = "Greeting";
}

if (
    message.includes("help") ||
    message.includes("madad")
){
    intent = "Need Help";
}
    return {
    originalMessage: message,
    mood: mood,
    intent: intent,
    needsClarification: false
};
}
