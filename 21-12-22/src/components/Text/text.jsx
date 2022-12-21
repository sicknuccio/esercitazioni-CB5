export function Text(props) {
  const { className = "", as = "p", children = "" } = props;
  const Element = as;
  return <Element className={className}>{children}</Element>;
}
