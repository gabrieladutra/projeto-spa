import {Popover} from '@headlessui/react'
import { X } from "phosphor-react";

export function CloseButton(){
  return(
    <Popover.Button className="top-5 right absolute text-zinc-400 hover:tet-zinc-100 hover:text-zinc-100"  title="Fechar formulário">
    <X weight="bold" className="w-4 h-4" />
    </Popover.Button>
  )
}