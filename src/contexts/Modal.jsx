import { createContext, useState } from "react";

const ModalContext = createContext();


const Provider = ({children}) => {
    const [show, setShow] = useState(false);

    const handleClick = () => {
        if(show){
            setShow(false);
        } else {
            setShow(true);
        }
    }

    return <ModalContext.Provider value={{show, handleClick}}>
        {children}
    </ModalContext.Provider>
}

export {Provider};
export default ModalContext