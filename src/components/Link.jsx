import {navigate} from '../services/navigate'

function Link({to, target, ...props}) {
  const handleClick = (event) => {
    event.preventDefault()
    navigate(to)
  }
  return (
    <a onClick={handleClick} href={to} target={target} {...props} />
  )
}

export default Link