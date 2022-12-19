import { h, JSX } from 'preact'

import { Text, Title } from '../components/typography'

export interface TransactionProps extends JSX.HTMLAttributes<HTMLDivElement> {
  idTransaction?: string
  typeTransaction?: string
}

export const Transaction = ({
  idTransaction,
  typeTransaction,
}: TransactionProps) => (
  <div className="tly-transaction">
    <Title hasGaps={false} isUpper isFontMedium level={3}>
      {idTransaction}
    </Title>
    <Text hasGaps={false} isUpper>
      {typeTransaction}
    </Text>
  </div>
)
