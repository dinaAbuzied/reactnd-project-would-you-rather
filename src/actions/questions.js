export const RECIEVE_QUESTIONS = "RECIEVE_QUESTIONS";

export const recieveQuestions = (questions) => {
    return {
        type: RECIEVE_QUESTIONS,
        questions
    }
}