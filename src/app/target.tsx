import { View } from 'react-native'
import { PageHeader } from '@/components/PageHeader'
import { Input } from '@/components/Input'
import { CurrencyInput } from '@/components/CurrencyInput'
import { Button } from '@/components/Button'


export default function Target() {
return (
    <View style={{ flex: 1, padding: 24 }}>
      <PageHeader
      title="Meta"
      subtitle="Crie e gerencie suas metas financeiras"
      />
      <View style={{ marginTop: 32, gap: 24 }}>
        <Input
        label="Nome da meta"
        placeholder="Exemplo: Viagem para a praia"
        />
        <CurrencyInput
        label="Valor alvo (R$)"
        value={0}
        />
        <Button
        title="Salvar"
        />
      </View>
    </View>
  )
}