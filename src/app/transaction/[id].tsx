// Esse nome entre colchetes indica que a rota espera um parâmetro chamado id
// Isso significa que caminhos como estes passam a funcionar:
// /transaction/132
// O valor final da URL entra como parâmetro id.

import {Text,View }from'react-native'
import {useLocalSearchParams }from'expo-router'
import { PageHeader } from '@/components/PageHeader';
import { CurrencyInput } from '@/components/CurrencyInput';
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';
import {useState }from'react'
import {TransactionTypes }from'@/utils/transaction-types'
import { TransactionType } from '@/components/TransactionType';



export default function Transaction() {
const params = useLocalSearchParams<{ id: string }>();
const [type,setType]=useState(TransactionTypes.INPUT)

return (
    <View style={{ flex:1, padding:24 }}>
        <PageHeader
        title="Nova transação"
        subtitle="Registre um valor para guardar ou retirar dessa meta"
        />

        <View style={{ marginTop:32, gap:24 }}>

          <TransactionType
          selected={type}
          onChange={setType}
          />
          
          <CurrencyInput
          label="Valor"
          value={0}
          />

          <Input
          label="Motivo (opcional)"
          placeholder="Exemplo: Aplicação no CDB"
          />

          <Button title="Salvar"/>
        </View>
    </View>
  )
}