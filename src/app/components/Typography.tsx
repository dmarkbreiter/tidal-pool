interface TypographyProps {
  children: React.ReactNode;
  classes?: string;
}

export function H1({ children }: { children: React.ReactNode }) {
  return <h1 className="text-3xl md:text-4xl font-black">{children}</h1>;
}

export function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl md:text-3xl font-extrabold">{children}</h2>;
}

export function H3({ children, classes }: TypographyProps) {
  return <h3 className={"text-xl md:text-2xl font-bold " + classes}>{children}</h3>;
}
