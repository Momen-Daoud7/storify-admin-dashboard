'use client'
import {useEffect} from "react"

import Modal from "@/components/ui/Modal";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { useModalStore } from "@/hooks/useModalStore";

export default function SteupPage() {
  const isOpen = useModalStore((state) => state.isOpen)
  const onOpen = useModalStore((state) => state.onOpen);

  useEffect(() => {
    if(!isOpen) {
      onOpen()
    }
  }, [isOpen,onOpen])
  
  return (
    <div>
      Create store
    </div>
  );
}
