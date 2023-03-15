import { CircleNotch } from '@phosphor-icons/react'
import { LoaderContainer } from './styles'

export function Loader() {
  return (
    <LoaderContainer>
      <CircleNotch size={64} />
    </LoaderContainer>
  )
}
