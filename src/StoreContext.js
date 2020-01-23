//импортируем React
import React from 'react';

//создаем контекст
const StoreContext = React.createContext(null);

export const Provider = (props) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )

};

//export
export default StoreContext;