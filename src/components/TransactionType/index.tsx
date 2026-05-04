import {TransactionTypes }from'@/utils/transaction-types'
import {View }from'react-native'
import {colors }from'@/theme'
import {Option }from'./option'
import {styles }from'./styles'


type Props= {
  selected:TransactionTypes
  onChange: (type:TransactionTypes) =>void
}

export function TransactionType({ selected, onChange }:Props) {
return (
<View style={styles.container}>
<Option
icon="arrow-upward"
title="Guardar"
selected={selected===TransactionTypes.INPUT}
selectedColor={colors.blue[500]}
onPress={() =>onChange(TransactionTypes.INPUT)}
/>

<Option
icon="arrow-downward"
title="Resgatar"
selected={selected===TransactionTypes.OUTPUT}
selectedColor={colors.red[400]}
onPress={() =>onChange(TransactionTypes.OUTPUT)}
/>
</View>
  )
}