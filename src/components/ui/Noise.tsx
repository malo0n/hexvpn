export const Noise = () => {
  return (
    <>
      <div className='bg-black-main fixed inset-0 -z-10 h-[100vh] flex-none'>
        <div
          style={{ backgroundImage: `url(/noise.png)`, backgroundSize: "128px" }}
          className='h-full min-h-full bg-repeat opacity-[0.06]'
        ></div>
      </div>
    </>
  );
};
