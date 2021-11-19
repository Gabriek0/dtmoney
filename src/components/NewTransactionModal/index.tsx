import Modal from "react-modal"
import { Content, RadioBox, TransactionTypeContainer } from "./styles"
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import closeImg from '../../assets/close.svg'
import { useState } from "react"

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const [type, setType] = useState('deposit');

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

                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        onClick={() => { setType('deposit') }}
                        isActive={type === 'deposit'}
                        activeColor='green'

                    >
                        <img src={incomeImg} alt="income img" />
                        <span>Entradas</span>
                    </RadioBox>

                    <RadioBox
                        type="button"
                        onClick={() => { setType('withdraw') }}
                        isActive={type === 'withdraw'}
                        activeColor='red'
                    >
                        <img src={outcomeImg} alt="outcome img" />
                        <span>Saídas</span>
                    </RadioBox>
                </TransactionTypeContainer>


                <input placeholder="Categoria" />

                <button type="submit">Cadastrar</button>
            </Content>
        </Modal>
    )
}