import react from 'react';

const GetInTouch = () => {
  return (
    <div className='animate-fadeIn'>
      <div className='flex flex-col gap-4 md:gap-8 px-2 pb-20'>
          <h2 className='sm:text-xl lg:text-2xl xl:text-8xl text-[#fac1e9] font-Fraunces font-extralight'>
            get in touch.
          </h2>
          <form>
            <input type='text' name='name'/>
            <input type='submit' value='Submit'/>
          </form>
        </div>
    </div>
  )
}

export default GetInTouch;