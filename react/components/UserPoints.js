import { FormattedMessage } from 'react-intl'

const UserPoints = () => {
  const titleText = <FormattedMessage id="store/userPoints.title" />
  const messageText = <FormattedMessage id="store/userPoints.message" />

  return (
    <div>
      <h1>{titleText}</h1>
      <div>{messageText}</div>
    </div>
  )
}


export default UserPoints
