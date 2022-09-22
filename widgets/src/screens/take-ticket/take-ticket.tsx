import { Fragment, h } from 'preact'
import React from 'preact/compat'
import { FiSend } from 'react-icons/fi'

import { Button } from '../../components/button'
import { Form, FormField, Input, PhoneInput } from '../../components/form'
import { Location } from '../../components/location'
import { Text, Title } from '../../components/typography'
import { useTranslation } from '../../localization'

export const TakeTicketScreen = () => {
  const { translate } = useTranslation()

  return (
    <Fragment>
      <div className="tly-home">
        <div className="tly-take-ticket-header">
          <Location
            title="Office space rentals"
            description="963 W. Belmont Ave. Chicago, IL 608…"
            iconRight={<FiSend color="#2485BA" />}
          />
        </div>

        <div className="tly-take-ticket-body">
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

        <Button isFloat={true}>Ready, take now</Button>
      </div>
    </Fragment>
  )
}
