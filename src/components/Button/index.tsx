import { ActivityIndicator, Text, TouchableOpacity, TouchableOpacityProps }from'react-native'
import {colors }from'@/theme'
import {styles }from'./styles'


type Props=TouchableOpacityProps& {
  title:string
  processing?:boolean
}

export function Button({
  title,
  processing=false,
  ...rest
}:Props) {
return (
<TouchableOpacity
style={styles.container}
activeOpacity={0.8}
disabled={processing}
      {...rest}
>
<Text style={styles.title}>
        {processing? (
<ActivityIndicator
size="small"
color={colors.white}
/>
        ): (
title
        )}
</Text>
</TouchableOpacity>
  )
}