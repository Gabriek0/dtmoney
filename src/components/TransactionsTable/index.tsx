import { useContext, useEffect, useState } from 'react'
import { api } from '../../services/api'
import { TransactionsContext } from '../../TransactionsContext';
import { Container } from './styles'

interface Transaction {
    id: number,
    title: string,
    type: string,
    category: string,
    amount: number,
    createdAt: string
}

export function TransactionsTable() {
    const [transactions, setTransaction] = useState<Transaction[]>([]);
    const data = useContext(TransactionsContext)
    console.log(data)

    useEffect(() => {
        api('transactions')
            .then(response => setTransaction(response.data.transactions))
    }, [])

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => (
                        <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            <td className={transaction.type}>{
                                Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(transaction.amount)
                            }</td>
                            <td>{transaction.category}</td>
                            <td>{Intl.DateTimeFormat('pt-BR').format(
                                new Date(transaction.createdAt))}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    )
}