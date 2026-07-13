const SuccessToast = () => {
  return (
    <div
      className="
      fixed
      bottom-8
      right-8
      bg-green-600
      text-white
      px-8
      py-4
      rounded-xl
      shadow-2xl
      animate-bounce
      z-50
    "
    >
      ✅ Message Successfully Sent
    </div>
  );
};

export default SuccessToast;