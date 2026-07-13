const ConfirmationModal = ({
  form,
  onCancel,
  onConfirm,
}) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="bg-white w-full max-w-2xl rounded-3xl p-8">

        <h2 className="text-3xl font-bold mb-8">
          Confirm Your Message
        </h2>

        <div className="space-y-4">

          <p><strong>Name:</strong> {form.name}</p>

          <p><strong>Email:</strong> {form.email}</p>

          <p><strong>Type:</strong> {form.type}</p>

          <p><strong>Message:</strong></p>

          <p className="text-slate-600">
            {form.message}
          </p>

        </div>

        <div className="flex justify-end gap-4 mt-10">

          <button
            onClick={onCancel}
            className="px-6 py-3 rounded-xl border"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="px-6 py-3 rounded-xl bg-blue-600 text-white"
          >
            Confirm
          </button>

        </div>

      </div>

    </div>
  );
};

export default ConfirmationModal;