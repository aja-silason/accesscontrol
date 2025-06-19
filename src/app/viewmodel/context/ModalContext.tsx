import { createContext } from 'react';

type ModalContextType = {
    isVisible: boolean;
    showModal: () => void;
}

export const ModalContext = createContext<ModalContextType>({
    isVisible: false,
    showModal: () => {},
});
