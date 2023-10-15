"use client";
import { useModalStore } from "@/hooks/useModalStore";
import Modal from "@/components/ui/modal";

const StoreModal = () => {
  const store = useModalStore();
  return (
    <Modal
      title="Create new store"
      description="Add a new store to manage products and categories"
      isOpen={store.isOpen}
      onClose={store.onClose}
    >
      Future Form
    </Modal>
  );
};
export default StoreModal;
