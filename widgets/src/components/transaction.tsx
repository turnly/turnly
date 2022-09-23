import { h, JSX } from 'preact'
import React from 'preact/compat'

import { Text, Title } from '../components/typography'

export interface TransactionProps extends JSX.HTMLAttributes<HTMLDivElement> {
  idTransaction: string
  typeTransaction: string
}

export const Transaction = ({
  idTransaction,
  typeTransaction,
}: TransactionProps) => {
  return (
    <div className="tly-transaction">
      <Title hasGaps={false} isUpper={true}>
        {idTransaction}
      </Title>
      <Text hasGaps={false} isUpper={true}>
        {typeTransaction}
      </Text>
    </div>
  )
}
