import { Fragment, h } from 'preact'
import React from 'preact/compat'

import { Form, FormField, Input, PhoneInput } from '../../components/form'
import { Text, Title } from '../../components/typography'
import { useTranslation } from '../../localization'

export const TakeTicketScreen = () => {
  const { translate } = useTranslation()

  return (
    <Fragment>
      <div className="tly-home">
        <Title>{translate('fields.labels.hint')}</Title>

        <Form>
          <FormField>
            <Title level={4} hasGaps={false}>
              National Identity or Passport
            </Title>
            <Input defaultValue="40289183912839" />
          </FormField>

          <FormField>
            <Title level={4} hasGaps={false}>
              Your phone
            </Title>
            <PhoneInput />

            <Text>We&apos;ll text with your ticket</Text>
          </FormField>
        </Form>
      </div>
    </Fragment>
  )
}
