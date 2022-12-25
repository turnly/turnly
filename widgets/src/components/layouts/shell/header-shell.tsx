import { Fragment, h } from 'preact'
import { useState } from 'preact/compat'
import { AiOutlineLine } from 'react-icons/ai'

import { useLeaveTicket } from '../../../graphql/hooks/use-leave-ticket-mutation'
import { useInternalState } from '../../../hooks/use-internal-state'
import { useSearchParams } from '../../../hooks/use-search-params'
import { useShowWidget } from '../../../hooks/use-show-widget'
import { useTitle } from '../../../hooks/use-title'
import { useTranslation } from '../../../localization/hooks'
import { SCREEN_NAMES, useNavigator } from '../../../navigation'
import { Modal } from '../../modal'
import { CloseIcon } from '../../svg'
import { Title } from '../../typography'

export const Header = () => {
  const { translate } = useTranslation()
  const { setHide } = useShowWidget()
  const { title } = useTitle()
  const { navigate } = useNavigator()
  const { leaveCurrentTicket, isLoading: isLeaving } = useLeaveTicket()
  const { ticket, service, setAnswers, setTicket, setService } =
    useInternalState()
  const { deleteSearchParams } = useSearchParams()
  const [isShowingConfirm, setConfirm] = useState<boolean>(false)

  const closeWidget = async () => {
    if (ticket) {
      await Promise.all([
        leaveCurrentTicket(ticket.id),
        deleteSearchParams('tly-ticket-id'),
      ])
    }

    await Promise.all([
      setAnswers([]),
      setTicket(null),
      setService(null),
      navigate(SCREEN_NAMES.HOME),
      setConfirm(false),
      setHide(),
    ])
  }

  const handleToClose = () => {
    if (service || ticket) {
      setConfirm(true)
      return
    }

    closeWidget()
  }

  return (
    <Fragment>
      <Modal
        title={translate('close_widget.title')}
        description={translate('close_widget.description')}
        buttons={[
          {
            children: translate('close_widget.affirmative_button_text'),
            isPrimary: true,
            onClick: () => closeWidget(),
            isLoading: isLeaving,
          },
          {
            children: translate('close_widget.negative_button_text'),
            isDefault: true,
            onClick: () => setConfirm(false),
            disabled: isLeaving,
          },
        ]}
        isShowing={isShowingConfirm}
      />

      <div className="tly-header">
        <div className="tly-header-back" />
        <Title level={5} hasGaps={false}>
          {title}
        </Title>
        <div className="tly-header-actions">
          <button className="tly-header-btn-close" onClick={setHide}>
            <AiOutlineLine color="var(--tly-gray)" />
          </button>
          <button className="tly-header-btn-close" onClick={handleToClose}>
            <CloseIcon />
          </button>
        </div>
      </div>
    </Fragment>
  )
}
