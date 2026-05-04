import {LinearGradient }from'expo-linear-gradient'
import { colors }from'@/theme'
import { styles }from'./styles'
import { View, Text }from'react-native'
import { Separator } from '../Separator'
import { Summary } from '../Summary'

export type HomeHeaderProps= {
  total:string
  input:{label: string; value: string}
  output:{label: string; value: string}
}

type Props= {
  data:HomeHeaderProps
}

export function HomeHeader({ data }:Props) {
    return (
        <LinearGradient
        colors={[colors.blue[500],colors.blue[800]]}
        style={styles.container}
        >

            <View>
                <Text style={styles.label}>Total que você possui</Text>
                <Text style={styles.total}>{data.total}</Text>
            </View>

            <Separator color={colors.blue[400]}/>

            <View style={styles.summary}>

                <Summary
                data={{
                ...data.input,
                icon: { name: 'arrow-upward', color: colors.green[500] }
                }}
                />
                
                <Summary
                data={{
                ...data.output,
                isRight: true,
                icon: { name: 'arrow-downward', color: colors.red[400] }
                }}
                />
            </View>
        </LinearGradient>
    )
}