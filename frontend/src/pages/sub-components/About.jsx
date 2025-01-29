import React from 'react'

const About = () => {
  return (
    <div className="w-full flex flex-col overflow-x-hidden">
      <div className="relative">
        <h1
          className="flex gap-4 items-center text-[2rem] sm:text-[2.75rem] 
          md:text-[3rem] lg:text-[3.8rem] leading-[56px] md:leading-[67px] 
          lg:leading-[90px] tracking-[15px] mx-auto w-fit font-extrabold about-h1"
          style={{
            background: "hsl(222.2 84% 4.9%)",
          }}
        >
           <span className="text-tubeLight-effect font-extrabold">ABOUT ME</span>
        </h1>
        <span className="absolute w-full h-1 top-7 sm:top-7 md:top-8 lg:top-11 z-[-1] bg-slate-200"></span>
      </div>
      <div className="text-center">
        <p className="uppercase text-xl text-slate-400">
          Allow me to introduce myself.
        </p>
      </div>
      <div>
        <div className="grid md:grid-cols-2 my-8 sm:my-20 gap-14">
          <div className="flex justify-center items-center">
            <img
              src="/about_image.jpg"
              alt="avatar"
              className="bg-white p-2 sm:p-4 "
            />
          </div>
          <div className="flex justify-center flex-col tracking-[1px] text-xl gap-5">
            <p>
              My name is Sandeep Chandra. I will
              graduate in Computer Science and Engineering from Institute of Engineering and Technology, Lucknow around 2025. I work as
              a web developer, freelancer and also participate in various coding contests. My hobbies include playing chess, video games, watching
              movies, series and occasionally cooking.
            </p>
            <p>
            I'm a quick learner, able to adapt seamlessly to new situations. With a strong track record of meeting deadlines, I consistently deliver high-quality work on time, ensuring timely project completion.
            </p>
          </div>
        </div>
        <p className="tracking-[1px] text-xl">
        I possess excellent verbal and written communication skills, enabling me to effectively collaborate with teams and stakeholders. I'm a resourceful and analytical thinker, able to break down complex problems into manageable solutions.
        </p>
      </div>
    </div>
  )
}

export default About