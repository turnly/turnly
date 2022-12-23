import { h, JSX } from 'preact'

import { Text, Title } from '../components/typography'
import { useTranslation } from '../localization'

export interface TransactionProps extends JSX.HTMLAttributes<HTMLDivElement> {
  idTransaction?: string
  typeTransaction?: string
}

export const Transaction = ({
  idTransaction,
  typeTransaction,
}: TransactionProps) => {
  const { translate } = useTranslation()

  return (
    <div className="tly-transaction">
      <Title hasGaps={false} isUpper isFontMedium level={3}>
        {idTransaction || '?-000'}
      </Title>
      <Text hasGaps={false} isUpper>
        {typeTransaction || translate('tickets.loading')}
      </Text>
    </div>
  )
}
