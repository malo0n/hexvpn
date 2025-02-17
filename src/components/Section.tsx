interface Props {
  title: string;
  subTitle: string;
  id?: string;
  children: React.ReactNode;
}

export const Section = (props: Props) => {
  const { title, subTitle, children, id } = props;
  return (
    <div id={id} className=" relative mx-[114px] flex scroll-m-[100px] flex-col gap-[44px] items-center">
      <div className="flex flex-col gap-4 text-center">
        <p className="text-titleH2">{title}</p>
        <p className="text-mainText" dangerouslySetInnerHTML={{ __html: subTitle }}></p>
      </div>
      <div className="flex w-full justify-between gap-[57px] items-end">{children}</div>
    </div>
  );
};
