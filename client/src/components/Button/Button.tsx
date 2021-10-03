type buttonProps = {
  children: string;
  onClick: any;
  className: string;
};

export function Button({ children, onClick, className }: buttonProps) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
