import { Fragment, h } from 'preact'
import { useEffect, useState } from 'preact/hooks'
import { Controller, FormProvider, useForm } from 'react-hook-form'

import { Button } from '../../components/button'
import {
  CheckboxList,
  Form,
  FormField,
  PhoneInput,
} from '../../components/form'
import { FooterScreen, HeaderScreen } from '../../components/layouts/screen'
import { Title } from '../../components/typography'
import { DynamicForm, Field } from '../../dynamic-form'
import {
  ServiceFieldData,
  useServiceFieldsQuery,
} from '../../graphql/hooks/use-service-fields-query'
import { useTakeTicketMutation } from '../../graphql/hooks/use-take-ticket-mutation'
import { useCurrentLocation } from '../../hooks/use-current-location'
import { Ticket, useInternalState } from '../../hooks/use-internal-state'
import { useLoading } from '../../hooks/use-loading'
import { useSearchParams } from '../../hooks/use-search-params'
import { useTranslation } from '../../localization'
import { SCREEN_NAMES, useNavigator } from '../../navigation'

export const TakeTicketScreen = () => {
  const { translate } = useTranslation()
  const { navigate } = useNavigator()
  const { setSearchParams } = useSearchParams()
  const { takeNewTicket, isLoading: isCreating } = useTakeTicketMutation()
  const { service, setAnswers, setTicket } = useInternalState()
  const { id: locationId } = useCurrentLocation()
  const methods = useForm()

  const [fields, setFields] = useState<ServiceFieldData | null>(null)

  const { isLoading } = useServiceFieldsQuery({
    variables: { serviceId: service?.id ?? '' },
    onCompleted: async data => await setFields(data.getServiceFields),
    onError: () => {
      setLoading(false)

      setFields(null)
    },
  })

  const { setLoading } = useLoading()

  useEffect(() => {
    setLoading(isLoading)
  }, [isLoading])

  const submit = async (data?: any) => {
    const answers = Object.entries(data)
      .filter(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ([fieldId, _value]) =>
          !['notifications', 'notification_phone'].includes(fieldId)
      )
      .map(([fieldId, value]) => ({
        fieldId,
        value: value as string,
      }))

    const ticket = await takeNewTicket({
      serviceId: service?.id || '',
      locationId,
      answers: answers,
      extra:
        data?.notifications?.map(value => ({
          key: value,
          value: data['notification_phone'],
        })) || [],
    })

    if (ticket) {
      await Promise.all([
        setAnswers(answers),
        setTicket(ticket as Ticket),
        setSearchParams({ 'tly-ticket-id': ticket.id }),
      ])

      navigate(SCREEN_NAMES.TICKET_DETAILS)
    }
  }

  if (isLoading || !fields) return null

  return (
    <Fragment>
      <div className="tly-take-ticket__main">
        <HeaderScreen />

        <div className="tly-take-ticket-body">
          <Title level={5} isGray isFontMedium>
            {translate('fields.labels.hint')}
          </Title>

          <FormProvider {...methods}>
            <Form>
              <DynamicForm fields={fields as unknown as Field[]} />

              <FormField>
                <Title level={5} hasGaps={false}>
                  {translate('fields.notifications.preference')}
                </Title>

                <CheckboxList
                  items={[
                    {
                      value: 'notification.sms',
                      label: 'SMS',
                    },
                    {
                      value: 'notification.whatsapp',
                      label: 'Whatsapp',
                    },
                  ]}
                  hintForClear={translate('fields.notifications.no_preference')}
                />
              </FormField>

              {Array.isArray(methods.watch('notifications')) &&
                methods.watch('notifications').length > 0 && (
                <FormField>
                  <Title level={5} hasGaps={false}>
                    {translate('fields.notifications.preference_phone')}
                  </Title>

                  <Controller
                    name="notification_phone"
                    control={methods.control}
                    render={({ field, fieldState: { error } }) => (
                      <PhoneInput
                        isDanger={!!error}
                        {...field}
                        textError={error?.message}
                      />
                    )}
                    rules={{
                      required: 'This field is required',
                    }}
                  />
                </FormField>
              )}
            </Form>
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
