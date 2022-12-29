import 'react-toastify/dist/ReactToastify.css'

import { h } from 'preact'
import { toast, ToastContainer, ToastContainerProps } from 'react-toastify'

export const Notification = (props: ToastContainerProps) => (
  <ToastContainer
    position="bottom-center"
    autoClose={5000}
    hideProgressBar
    newestOnTop={false}
    closeOnClick={true}
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    {...props}
  />
)

export { toast as Notifier }
