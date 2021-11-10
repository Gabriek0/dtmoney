import { Container } from './styles'

export function TransactionsTable() {
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
                    <tr>
                        <td>Desenvolvimento de Websites</td>
                        <td className="deposit">R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>29/10/2021</td>
                    </tr>
                    <tr>
                        <td>Conta de Luz</td>
                        <td className="withdraw">- R$400</td>
                        <td>Conta</td>
                        <td>01/12/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}