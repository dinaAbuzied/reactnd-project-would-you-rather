export const RECIEVE_QUESTIONS = "RECIEVE_QUESTIONS";

/**
 * @description used to retrieve from the API set of question
 * @param {Object} questions containes the loaded question from the API
 */
export const recieveQuestions = (questions) => {
    return {
        type: RECIEVE_QUESTIONS,
        questions
    }
}