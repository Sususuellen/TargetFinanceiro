import { View, StatusBar }from'react-native'
import { HomeHeader }from'@/components/HomeHeader'
import { Target } from '@/components/Target'
import { List } from '@/components/List'
import { Button } from '@/components/Button'
import { router }from'expo-router'


export default function Index() {
  const summary= {
      total:'R$ 8.467,89',
      input: {
        label:'Entradas',
        value:'R$ 15.542,67',
      },
      output: {
        label:'Saídas',
        value:'R$ 7.074,78',
        isLeft:true,
      },
    }

const targets= [
  {
    id:'1',
    name:'Apple Watch',
    percentage:'50%',
    current:'R$ 580,00',
    target:'R$ 1.700,00',
  },
  {
    id:'2',
    name:'Comprar uma cadeira ergonômica',
    percentage:'75%',
    current:'R$ 900,00',
    target:'R$ 1.200,00',
  },
  {
    id:'3',
    name:'Viagem',
    percentage:'75%',
    current:'R$ 1.200,00',
    target:'R$ 3.000,00',
  },
]

return (
  <View style={{ flex:1 }}>
    <HomeHeader data={summary} />
    <StatusBar barStyle="light-content"/>
    <List
    title="Metas"
    data={targets}
    emptyMessage="Nenhuma meta. Toque em nova meta para criar."
    containerStyle={{ paddingHorizontal:24 }}
    keyExtractor={(item) =>item.id!}
    renderItem={({ item }) =>
    <Target data={item}
    onPress={() =>router.navigate(`/in-progress/${item.id}`)}
    />}
    />

    <View style={{ padding:24, paddingBottom:32 }}>
    <Button title="Nova meta"
    onPress={() =>router.navigate('/target')}
    />
    </View>
  </View>
  )
}