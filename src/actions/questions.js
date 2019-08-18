export const RECIEVE_QUESTIONS = "RECIEVE_QUESTIONS";
export const NEW_QUESTION = "NEW_QUESTION";

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

/**
 * @description used to save the new question 
 *              created by the current user
 * @param {Object} question Object that includes the following properties: 
 *                          author, optionOneText, and optionTwoText
 */
export const saveNewQuestion = (question) => {
    return {
        type: NEW_QUESTION,
        question
    }
}