import { Text, View }from'react-native'
import { colors }from'@/theme'
import { styles }from'./styles'
import CurrencyInputLib, { type CurrencyInputProps } from 'react-native-currency-input'


type Props=CurrencyInputProps& {
  label:string
}

export function CurrencyInput({ label, ...rest }:Props) {
return (
<View  style={styles.container}>
<Text style={styles.label}>{label}</Text>

<CurrencyInputLib
style={styles.input}
placeholderTextColor={colors.gray[400]}
delimiter="."
separator=","
precision={2}
minValue={0}
        {...rest}
/>
</View>
  )
}