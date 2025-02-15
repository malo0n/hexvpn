interface Props{
  color: 'accent' | 'light' | 'dark';
  children: React.ReactNode;
  className?: string
}

export const Card = (props: Props) => {
  const { color, children } = props;
  return (
    <div className={` p-[60px] ${props.className}  ${color=='accent' ? 'bg-accent' : color=='light' ? 'bg-[#CECFD0]' : 'bg-[#BABCBF]'} rounded-[20px] w-full`}>
      {children}
    </div>
  );
};