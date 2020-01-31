// create reducer function for dialogs page

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY',
    SEND_MESSAGE = 'SEND-MESSAGE';
//инициализируем state для dialogs и передаем в параметры по умолчанию state = initialState
let initialState = {
    //забираем dialogsPage из старого объекта store
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Ivan'},
        {id: 3, name: 'Ioan'},
        {id: 4, name: 'Ilia'},
        {id: 5, name: 'Olia'}
    ],
    messages: [
        {id: 1, messages: 'Hi'},
        {id: 2, messages: 'Hey'},
        {id: 3, messages: 'Hello'},
        {id: 4, messages: 'Hullo'},
        {id: 5, messages: 'Ho'}
    ],
    newMessageBody: ''
};
//function which return action object
const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case UPDATE_NEW_MESSAGE_BODY:
            //do copy for each case
            //каждое изменение состояни перекидываем в копию объекта
            //убрали переменную stateCopy и сразу возвращаем копию объекта
            return {
                ...state,
                newMessageBody: action.body
            };

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            //do copy state for each case
            return {
                //создаем копию
                ...state,
                //перезатираем сообщение на пустую строку
                newMessageBody: '',
                //вместо push добавляем новый элемент в конец массива messages
                messages: [ ...state.messages, {id: 6, messages: body} ],
            };

        default:
            return state;
    }

};

//action creator - function which return action object. Action should has type
//переносим action creators from state to here
export const sendMessageCreator = () => ({type: SEND_MESSAGE,});

export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,
});

export default dialogsReducer;