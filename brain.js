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

let emotion = detectEmotion(message);
let intent = detectIntent(message);


    return {
    originalMessage: message,
    emotion: emotion,
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
        message.includes("very happy") ||
        message.includes("so happy") ||
        message.includes("extremely happy") ||
        message.includes("khush") ||
        message.includes("😊") ||
        message.includes("😁")
    ){
        return {
    emotion: "Happy",
    strength: message.includes("extremely happy") ? "High" :
          message.includes("very happy") ? "Medium" :
          "Low"
};
    }

    if(
        message.includes("sad") ||
        message.includes("udaas") ||
        message.includes("dukhi") ||
        message.includes("😢")
    ){
        return {
    emotion: "Sad",
    strength: "Low"
};
    }

    if(
        message.includes("angry") ||
        message.includes("gussa") ||
        message.includes("😡")
    ){
        return {
    emotion: "Angry",
    strength: "Low"
};
    }

    return {
    emotion: "Normal",
    strength: "Low"
};
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
        message.includes("thanks") ||
        message.includes("thank you") ||
        message.includes("dhanyawad") ||
        message.includes("shukriya")
){
    return "Thanks";
    }

    if(
        message.includes("help") ||
        message.includes("madad")
    ){
        return "Need Help";
    }
     if(
    message.includes("?") ||
    message.includes("what") ||
    message.includes("why") ||
    message.includes("how") ||
    message.includes("kaise") ||
    message.includes("kya") ||
    message.includes("kyu")
){
    return "Question";
     }
    if(
    message.includes("suggest") ||
    message.includes("recommend") ||
    message.includes("advice") ||
    message.includes("suggestion") ||
    message.includes("batao") ||
    message.includes("recommend karo")
){
    return "Advice";
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
