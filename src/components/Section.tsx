interface Props {
  title: string;
  subTitle: string;
  id?: string;
  children: React.ReactNode;
}

export const Section = (props: Props) => {
  const { title, subTitle, children, id } = props;
  return (
    <div id={id} className='relative mx-[114px] flex scroll-m-[100px] flex-col items-center gap-[44px]'>
      <div className='flex flex-col gap-4 text-center'>
        <p className='text-title-h2'>{title}</p>
        <p className='text-main-text' dangerouslySetInnerHTML={{ __html: subTitle }}></p>
      </div>
      <div className='flex w-full items-end justify-between gap-[57px]'>{children}</div>
    </div>
  );
};
