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
        case UPDATE_NEW_MESSAGE_BODY: {
            let stateCopy = {...state};
            stateCopy.newMessageBody = action.body;
            return stateCopy;
        }
        case SEND_MESSAGE: {
            let stateCopy = {...state};
            let body = stateCopy.newMessageBody;
            stateCopy.newMessageBody = '';
            stateCopy.messages = [...state.messages];
            stateCopy.messages.push({id: 6, messages: body});
            return stateCopy;
        }
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