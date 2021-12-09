import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from './services/api';

export const TransactionsContext = createContext<Transaction[]>([]);

interface Transaction {
    id: number,
    title: string,
    type: string,
    category: string,
    amount: number,
    createdAt: string
}

interface TransactionsProviderProps {
    children: ReactNode,
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransaction] = useState<Transaction[]>([]);

    useEffect(() => {
        api('transactions')
            .then(response => setTransaction(response.data.transactions))
    }, [])

    return (
        <TransactionsContext.Provider value={transactions}>
            {children}
        </TransactionsContext.Provider>
    )
}