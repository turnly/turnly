import { Fragment, h } from 'preact'

import { Button } from '../../components/button'
import { Form, FormField, Input, PhoneInput } from '../../components/form'
import { FooterScreen, HeaderScreen } from '../../components/layouts/screen'
import { Text, Title } from '../../components/typography'
import { useTranslation } from '../../localization'
import { SCREEN_NAMES, useNavigator } from '../../navigation'

export const TakeTicketScreen = () => {
  const { translate } = useTranslation()
  const { navigate } = useNavigator()

  return (
    <Fragment>
      <div className="tly-take-ticket__main">
        <HeaderScreen />

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
      </div>

      <FooterScreen>
        <Button onClick={() => navigate(SCREEN_NAMES.TICKET_DETAILS)}>
          Ready, take now
        </Button>
      </FooterScreen>
    </Fragment>
  )
}
