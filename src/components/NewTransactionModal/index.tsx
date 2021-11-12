import Modal from "react-modal"
import { Content } from "./styles"
import closeImg from '../../assets/close.svg'

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >

            <button
                className="react-modal-close"
                onClick={onRequestClose}
            >
                <img src={closeImg} alt="close button" />
            </button>

            <Content>
                <h2>Cadastrar transação</h2>

                <input placeholder="Título" />

                <input placeholder="Valor" />

                <input placeholder="Categoria" />

                <button type="submit">Cadastrar</button>
            </Content>
        </Modal>
    )
}