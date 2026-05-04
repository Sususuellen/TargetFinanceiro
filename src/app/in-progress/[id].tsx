import { View }from'react-native'
import { PageHeader } from '@/components/PageHeader';
import { Progress } from '@/components/Progress'
import { TransactionTypes }from'@/utils/transaction-types'
import { Transaction } from '@/components/Transaction';
import { List } from '@/components/List';
import { TransactionProps } from '@/components/Transaction';
import { Button } from '@/components/Button';
import { router,useLocalSearchParams }from'expo-router'


export default function InProgress() {
    const params = useLocalSearchParams<{ id: string }>();
    const details = {
        current: 'R$ 580,00',
        target: 'R$ 1.700,00',
        percentage: 25,
    }

    const transactions:TransactionProps[]= [
  {
    id:'1',
    value:'R$ 300,00',
    date:'12 jan',
    description:'Aplicação no CDB',
    type:TransactionTypes.INPUT,
  },

  {
    id:'2',
    value:'R$ 20,00',
    date:'12 jan',
    type:TransactionTypes.OUTPUT,
  },
]

return (
    <View style={{ flex:1, padding:24, gap:32 }}>
        <PageHeader
        title="Apple Watch"
        rightButton={{
            icon:'edit',
            onPress: () => {},
        }}
        />

        <Progress data={details} />

        <List
            title="Transações"
            emptyMessage="Nenhuma transação. Toque em nova transação para guardar seu primeiro dinheiro aqui."
            data={transactions}
            renderItem={({ item }) => (
                <Transaction
                data={item}
                onRemove={() => {}}
                />
            )}
        />

        <Button
        title="Nova transação"
        onPress={() =>router.navigate(`/transaction/${params.id}`)}
        />
    </View>
  )
}