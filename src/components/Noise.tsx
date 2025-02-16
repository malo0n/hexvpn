

export const Noise = () => {
  return (
    <>
      <div className='fixed inset-0 -z-10 h-[100vh]  flex-none bg-blackMain'>
        <div
          style={{ backgroundImage: `url(/noise.gif)`, backgroundSize: "180px" }}
          className='h-full min-h-full bg-repeat opacity-[0.11]'
        ></div>
      </div>
    </>
  );
};
