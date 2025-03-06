interface Props {
  title: string;
  subTitle: string;
  id?: string;
  children: React.ReactNode;
}

export const Section = (props: Props) => {
  const { title, subTitle, children, id } = props;
  return (
    <div
      id={id}
      className='relative mx-3 flex scroll-m-[40px] flex-col items-center gap-[24px] md:mx-14 md:gap-[32px] lg:mx-[64px] lg:scroll-m-[100px] lg:gap-[44px]'
    >
      <div className='flex flex-col gap-4 text-center'>
        <p className='text-subtitle2 font-bold md:text-subtitle1 lg:text-title-h2'>{title}</p>
        <p className='text-main-text' dangerouslySetInnerHTML={{ __html: subTitle }}></p>
      </div>
      <div className='flex w-full flex-col justify-around gap-3 md:flex-row md:gap-5 lg:gap-[64px]'>{children}</div>
    </div>
  );
};
