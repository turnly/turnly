import { Fragment, h } from 'preact'
import { useState } from 'preact/hooks'
import { FormProvider, useForm } from 'react-hook-form'

import { Button } from '../../components/button'
import { FooterScreen, HeaderScreen } from '../../components/layouts/screen'
import { Title } from '../../components/typography'
import { DynamicForm, Field } from '../../dynamic-form'
import {
  ServiceFieldData,
  useServiceFieldsQuery,
} from '../../graphql/hooks/use-service-fields-query'
import { useTakeTicketMutation } from '../../graphql/hooks/use-take-ticket-mutation'
import { useCurrentLocation } from '../../hooks/use-current-location'
import { useInternalState } from '../../hooks/use-internal-state'
import { useTranslation } from '../../localization'
import { SCREEN_NAMES, useNavigator } from '../../navigation'

export const TakeTicketScreen = () => {
  const { translate } = useTranslation()
  const { navigate } = useNavigator()
  const { takeNewTicket, isLoading: isCreating } = useTakeTicketMutation()
  const { service, setAnswers, setTicket } = useInternalState()
  const { id: locationId } = useCurrentLocation()
  const methods = useForm()

  const [fields, setFields] = useState<ServiceFieldData | null>(null)

  const { isLoading } = useServiceFieldsQuery({
    variables: { serviceId: service?.id ?? '' },
    onCompleted: async data => await setFields(data.getServiceFields),
  })

  const submit = async (data?: any) => {
    const answers = Object.entries(data).map(([fieldId, value]) => ({
      fieldId,
      value: value as string,
    }))

    const ticket = await takeNewTicket({
      serviceId: service?.id || '',
      locationId,
      answers: answers,
      extra: [],
    })

    if (ticket) {
      await Promise.all([setAnswers(answers), setTicket(ticket as any)])

      navigate(SCREEN_NAMES.TICKET_DETAILS)
    }
  }

  if (isLoading || !fields) return null

  if (fields.length === 0) {
    submit()
    return null
  }

  return (
    <Fragment>
      <div className="tly-take-ticket__main">
        <HeaderScreen />

        <div className="tly-take-ticket-body">
          <Title>{translate('fields.labels.hint')}</Title>

          <FormProvider {...methods}>
            <DynamicForm fields={fields as unknown as Field[]} />
          </FormProvider>
        </div>
      </div>

      <FooterScreen>
        <Button isLoading={isCreating} onClick={methods.handleSubmit(submit)}>
          Ready, take now
        </Button>
      </FooterScreen>
    </Fragment>
  )
}
