import { navigate } from '../services/navigate'
import { BUTTONS } from '../constants/const'

function Link ({ to, target, ...props }) {
  const handleClick = (event) => {
    const isMainEvent = event.button === BUTTONS.PRIMARY
    const isManageableEvent = target === undefined || target === '_self'
    const isModifiedEvent = event.altKey || event.ctrlKey || event.metaKey || event.shiftKey
    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      event.preventDefault()
      navigate(to)
      window.scrollTo(0, 0)
    }
  }
  return (
    <a onClick={handleClick} href={to} target={target} {...props} />
  )
}

export default Link
