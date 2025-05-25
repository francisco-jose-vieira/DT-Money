import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logoImg from '../../assets/Logo.svg'
import * as Dialog from "@radix-ui/react-dialog";
import { Flex, Text, Button, TextField } from "@radix-ui/themes";
import { NewTransactionModal } from "../NewTransactionModal";

export function Header() {
  return (
    <HeaderContainer>
        <HeaderContent>
            <img src={logoImg} alt="" />



        <Dialog.Root>
          <Dialog.Trigger asChild>
          
            <NewTransactionButton>Nova Transação</NewTransactionButton>

          </Dialog.Trigger>

          <NewTransactionModal />

        </Dialog.Root>



        </HeaderContent>
    </HeaderContainer>
  )
}