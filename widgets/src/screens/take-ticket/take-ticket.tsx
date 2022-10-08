import { Fragment, h } from 'preact'
import { useState } from 'preact/hooks'

import { Button } from '../../components/button'
import { FooterScreen, HeaderScreen } from '../../components/layouts/screen'
import { Title } from '../../components/typography'
import { DynamicForm, Field } from '../../dynamic-form'
import {
  ServiceFieldData,
  useServiceFieldsQuery,
} from '../../graphql/hooks/use-service-fields-query'
import { useInternalState } from '../../hooks/use-internal-state'
import { useTranslation } from '../../localization'
import { SCREEN_NAMES, useNavigator } from '../../navigation'

export const TakeTicketScreen = () => {
  const { translate } = useTranslation()
  const { navigate } = useNavigator()
  const { service } = useInternalState()
  const [fields, setFields] = useState<ServiceFieldData>([])

  const { isLoading } = useServiceFieldsQuery({
    variables: { serviceId: service?.id ?? '' },
    onCompleted: data => {
      setFields(data.getServiceFields)
      // eslint-disable-next-line no-debugger
      debugger
    },
  })

  if (isLoading) return null

  return (
    <Fragment>
      <div className="tly-take-ticket__main">
        <HeaderScreen />

        <div className="tly-take-ticket-body">
          <Title>{translate('fields.labels.hint')}</Title>
          <DynamicForm fields={fields as unknown as Field[]} />
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
