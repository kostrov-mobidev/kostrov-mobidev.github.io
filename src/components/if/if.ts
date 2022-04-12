type Props = { condition: boolean; children: any };

const If = ({ condition, children }: Props) => {
  if (condition) return children;
  return null;
};

export default If;
