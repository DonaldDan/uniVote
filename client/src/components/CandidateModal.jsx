// src/components/CandidateModal.jsx
import { Dialog } from "@headlessui/react";
import { Button } from "@/components/ui/button";

export default function CandidateModal({ isOpen, onClose, rep }) {
  if (!rep) return null;

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md rounded-xl bg-white dark:bg-background p-6 shadow-lg overflow-y-auto max-h-[80vh]">
          <Dialog.Title className="text-lg font-bold mb-2">{rep.name}</Dialog.Title>
          <p className="text-sm mb-2 text-muted-foreground"><strong>Party:</strong> {rep.party}</p>
          <p className="text-sm mb-4 text-muted-foreground"><strong>Ward:</strong> {rep.ward}</p>

          {rep.image && (
            <img
              src={`${import.meta.env.VITE_API_URL.replace(/\/api$/, "")}/uploads/${rep.image}`}
              alt={rep.name}
              className="w-32 h-32 object-cover rounded-full mb-4 mx-auto"
            />
          )}

          <p className="text-sm whitespace-pre-line text-muted-foreground">
            {rep.manifesto}
          </p>

          <div className="mt-6 flex justify-end">
            <Button onClick={onClose}>Close</Button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
