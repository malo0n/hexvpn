interface Props {
  variant: "primary" | "secondary";
  text: string;
}

export const Mark = (props: Props) => {
  const { variant, text } = props;
  return (
    <div className='flex items-center gap-6'>
      <svg width='29' height='22' viewBox='0 0 29 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <g clipPath='url(#clip0_7_102)'>
          <path
            d='M3 9.72308L11.1385 17.8615L26 3'
            stroke={variant === "primary" ? "#FF7061" : "#0E161E"}
            strokeWidth='5.66154'
          />
        </g>
        <defs>
          <clipPath id='clip0_7_102'>
            <rect width='29' height='22' fill='white' />
          </clipPath>
        </defs>
      </svg>
      <p className='max-w-[193px] text-start text-main-text'>{text}</p>
    </div>
  );
};
