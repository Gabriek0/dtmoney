import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from './components/Dashboard/index';
import { Header } from './components/Header/index'
import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }



  return (
    <div className="App">
      <Header openNewTransactionModal={handleOpenNewTransactionModal} />

      <Dashboard />

      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      >
        Cadastrar
      </Modal>

      <GlobalStyle />
    </div>
  );
}
