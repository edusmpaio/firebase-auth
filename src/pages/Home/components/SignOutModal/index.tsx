import { useContext } from 'react'
import { AuthContext } from '../../../../contexts/AuthContext'
import { FirebaseError } from 'firebase/app'
import { toast } from 'react-toastify'

import * as AlertDialog from '@radix-ui/react-alert-dialog'
import { Content, DialogButton, Overlay } from './styles'

export function SignOutModal() {
  const { handleSignOut, onFirebaseError } = useContext(AuthContext)

  async function handleDialogConfirm() {
    try {
      await handleSignOut()
    } catch (error) {
      if (error instanceof FirebaseError) {
        const errorMessage = onFirebaseError(error.code)
        toast.error(errorMessage, { autoClose: 3000, theme: 'colored' })
      }
    }
  }

  return (
    <AlertDialog.Portal>
      <Overlay />
      <Content>
        <AlertDialog.Title>Tem certeza que deseja sair?</AlertDialog.Title>

        <div>
          <AlertDialog.Cancel asChild>
            <DialogButton variant="cancel">Cancelar</DialogButton>
          </AlertDialog.Cancel>

          <AlertDialog.Action asChild onClick={handleDialogConfirm}>
            <DialogButton variant="confirm">Sim, quero sair</DialogButton>
          </AlertDialog.Action>
        </div>
      </Content>
    </AlertDialog.Portal>
  )
}
