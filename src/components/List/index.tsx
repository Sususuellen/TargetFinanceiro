import { FlatList, FlatListProps, ViewStyle, Text, View }from'react-native'
import { styles }from'./styles'
import { Separator } from '../Separator'
import { colors } from '@/theme'

// A tarefa usa **generic** no componente.
// Isso acontece porque a `FlatList` precisa saber qual é o tipo dos itens que ela recebe, mas esse componente de lista vai ser reutilizado em vários lugares, então o tipo não pode ficar fixo.
// Por isso, a tarefa usa `T`.

type Props<T>=FlatListProps<T>& {
  title:string
  emptyMessage?:string
  containerStyle?:ViewStyle
}

export function List<T>({
  title,
  emptyMessage,
  containerStyle,
  data,
  renderItem,
  ...rest
}:Props<T>) {

return (
    <View style={[styles.container, containerStyle]}>
        <Text style={styles.title}>{title}</Text>
        <FlatList
        data={data}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
        <Text style={styles.empty}>{emptyMessage}</Text>
        }
        ItemSeparatorComponent={() => (
            <Separator color={colors.gray[200]}/>
         )}
            {...rest}
        />
    </View>
  )
}