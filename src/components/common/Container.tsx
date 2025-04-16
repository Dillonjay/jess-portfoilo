interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function Container({
  children,
  className = "px-20",
  style,
}: ContainerProps) {
  return (
    <div className={`max-w-7xl mx-auto w-full ${className}`} style={style}>
      {children}
    </div>
  );
}
