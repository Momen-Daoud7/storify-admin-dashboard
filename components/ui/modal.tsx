'use client'

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./dialog"

interface ModalProps {
    children?: React.ReactNode,
    title: string,
    description: string,
    onClose: () => void,
    isOpen: boolean
}

const Modal: React.FC<ModalProps> = ({children,title,onClose,isOpen,description}) => {
    const onChange = (open: boolean) => {
        if(!open) onClose()
    }
  return (
    <Dialog open={isOpen} onOpenChange={onChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
          <div>{children}</div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
export default Modal