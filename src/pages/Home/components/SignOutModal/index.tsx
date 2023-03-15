import * as AlertDialog from '@radix-ui/react-alert-dialog'
import { Content, DialogButton, Overlay } from './styles'

export function SignOutModal() {
  return (
    <AlertDialog.Portal>
      <Overlay />
      <Content>
        <AlertDialog.Title>Tem certeza que deseja sair?</AlertDialog.Title>

        <div>
          <AlertDialog.Cancel asChild>
            <DialogButton variant="cancel">Cancelar</DialogButton>
          </AlertDialog.Cancel>

          <AlertDialog.Action asChild>
            <DialogButton variant="confirm">Sim, quero sair</DialogButton>
          </AlertDialog.Action>
        </div>
      </Content>
    </AlertDialog.Portal>
  )
}
