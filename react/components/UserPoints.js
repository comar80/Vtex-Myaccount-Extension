import { FormattedMessage } from 'react-intl'
import React, {useEffect, useState} from 'react'
const UserPoints = () => {
  const titleText = <FormattedMessage id="store/userPoints.title" />
  const messageTextOne = <FormattedMessage id="store/userPoints.messagePartOne" />
  const messageTextTwo = <FormattedMessage id="store/userPoints.messagePartTwo" />

  const [points, setPoints] = useState(false)
  const [clientId, setClientId] = useState(null)
  useEffect(() => {
    fetch('/api/sessions?items=*')
      .then((res) => res.json())
      .then((res) => {
        if (res.namespaces?.public?.isLoggedIn?.value) {
          setClientId(res.namespaces.profile.id.value)
          setPoints(res.namespaces.profile.points.value)
        }
      })
  })

  useEffect(() => {
    if (clientId) {
      fetch(`/_v/pvt/points/${clientId}`)
        .then((res) => res.json())
        .then((res) => {
          if (
            res.profile?.public?.isLoggedIn?.value &&
            res.profile.points.value !== points
          ) {
            setPoints(res.profile.points.value)
          }
        })
    }
  })

  return (
    <div>
      <h1>{titleText}</h1>
      <div>{messageTextOne} {points} {messageTextTwo}</div>
    </div>
  )
}


export default UserPoints
