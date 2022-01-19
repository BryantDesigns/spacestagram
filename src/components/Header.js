export const Header = () => {
  return (
    <>
      <section className='w-full'>
        <div
          className='
          relative
          items-center
          w-full
          px-5
          py-12
          mx-auto
          md:px-12
          lg:px-16
          max-w-7xl
          lg:py-24
        '>
          <div className='flex w-full mx-auto text-left'>
            <div className='relative inline-flex items-center mx-auto align-middle'>
              <div className='text-center'>
                <h1
                  className='
                  max-w-5xl
                  text-2xl
                  font-bold
                  text-white
                  leading-none
                  tracking-tighter
                  text-neutral-600
                  md:text-5xl
                  lg:text-6xl lg:max-w-7xl
                '>
                  {' '}
                  Spacestagram: Image-sharing{' '}
                  <br className='hidden lg:block ' />
                  from the final frontier{' '}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
