import { h, JSX } from 'preact'
import { useState } from 'preact/compat'
import { useFormContext } from 'react-hook-form'

import { Checkbox } from './checkbox'

export type CheckboxItem = {
  value: string
  label: string
}

export interface CheckboxListProps
  extends JSX.HTMLAttributes<HTMLInputElement> {
  items: CheckboxItem[]
  clearLabel: string
}

export const CheckboxList = ({
  items,
  clearLabel = 'N/A',
}: Partial<CheckboxListProps>) => {
  const clearItem = { value: 'clear_all', label: clearLabel }
  const [itemsSelected, setSelected] = useState<CheckboxItem['value'][]>([])

  const { setValue } = useFormContext()

  const handleItems = (item: CheckboxItem) => {
    return () => {
      const isSelected = verifySelected(item.value)
      let selectedCopy = itemsSelected

      if (item.value === clearItem.value) {
        selectedCopy = [clearItem.value]

        setValue('notifications', [])
      } else {
        if (isSelected) {
          selectedCopy = itemsSelected.filter(i => i !== item.value)
        }

        if (!isSelected) {
          selectedCopy = [
            ...itemsSelected.filter(i => i !== clearItem.value),
            item.value,
          ]
        }

        setValue('notifications', selectedCopy)
      }

      setSelected(selectedCopy)
    }
  }

  const verifySelected = (itemValue: CheckboxItem['value']) =>
    itemsSelected.includes(itemValue)

  return (
    <div className="tly-checkbox-list">
      {items &&
        items.map((item, index) => (
          <Checkbox
            key={`${item.label}-${index}`}
            isSelected={verifySelected(item.value)}
            onClick={handleItems(item)}
            {...item}
          />
        ))}

      {items && items.length > 0 && (
        <Checkbox
          isSelected={verifySelected(clearItem.value)}
          onClick={handleItems(clearItem)}
          label={clearLabel}
        />
      )}
    </div>
  )
}