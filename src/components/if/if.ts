const If = ({ condition, children }: any) => {
  if (condition) return children;
  return null;
};

export default If;
