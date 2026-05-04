//  A Option não é um componente independente do app inteiro. Ela é uma peça interna do TransactionType. Será cada botão de escolha

// `TouchableOpacity` é bom quando você quer aquele efeito de transparência ao tocar.
// Mas nesta tela a aula quer outro tipo de feedback:
// 1. quando a opção estiver ativa, ela muda de cor
// 2. quando não estiver ativa, ela fica neutra
// Por isso, `Pressable` faz mais sentido.

import {ColorValue,Pressable,PressableProps,Text }from'react-native'
import {MaterialIcons }from'@expo/vector-icons'
import {colors }from'@/theme'
import {styles }from'./styles'

type Props=PressableProps& {
  selected:boolean
  title:string
  icon:keyof typeof MaterialIcons.glyphMap
  selectedColor:ColorValue
}

export function Option({
  selected,
  title,
  icon,
  selectedColor,
  ...rest
}:Props) {
return (
<Pressable
style={[
styles.option,
selected&& { backgroundColor:selectedColor },
      ]}
      {...rest}
>
<MaterialIcons
name={icon}
size={24}
color={selected?colors.white:colors.gray[500]}
/>

<Text
style={[
styles.title,
selected&& { color:colors.white },
  ]}
>
  {title}
</Text>
</Pressable>
  )
}