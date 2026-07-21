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

let mood = detectEmotion(message);
let intent = detectIntent(message);


    return {
    originalMessage: message,
    mood: mood,
    intent: intent,
    needsClarification: false
};
}
// ===============================
// Emotion Engine
// ===============================

function detectEmotion(message){
    if(
        message.includes("happy") ||
        message.includes("khush") ||
        message.includes("😊") ||
        message.includes("😁")
    ){
        return "Happy";
    }

    if(
        message.includes("sad") ||
        message.includes("udaas") ||
        message.includes("dukhi") ||
        message.includes("😢")
    ){
        return "Sad";
    }

    if(
        message.includes("angry") ||
        message.includes("gussa") ||
        message.includes("😡")
    ){
        return "Angry";
    }

    return "Normal";
}

// ===============================
// Intent Engine
// ===============================

function detectIntent(message){

    if(
        message.includes("hello") ||
        message.includes("hi") ||
        message.includes("hey") ||
        message.includes("ram ram")
    ){
        return "Greeting";
    }

    if(
        message.includes("help") ||
        message.includes("madad")
    ){
        return "Need Help";
    }

    return "General";
}

// ===============================
// Safety Engine
// ===============================

function checkSafety(message){
    return "Safe";
}

// ===============================
// Memory Engine
// ===============================

function checkMemory(message){
    return null;
}

// ===============================
// Decision Engine
// ===============================

function makeDecision(){
    return "Continue";
}
