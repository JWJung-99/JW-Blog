const Button = ({ children }: { children: string }) => {
  return (
    <button
      type="button"
      className="px-4 py-2 border rounded-md cursor-pointer hover:bg-amber-200"
    >
      {children}
    </button>
  );
};

export default Button;
