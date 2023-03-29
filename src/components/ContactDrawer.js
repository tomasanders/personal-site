import { useState } from 'react';
import { BsChatLeftDots } from 'react-icons/bs';

const FORM_ENDPOINT = "https://public.herotofu.com/v1/6b0d8d80-783a-11ed-a126-b172cf164538";

export const ContactDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const [wasSubmitted, setWasSubmitted] = useState(false);

  const handleSubmit = () => {
    setTimeout(() => {
      setWasSubmitted(true);
    }, 100);
  };

  return (
    <>
      <button onClick={handleOpen}>
        <BsChatLeftDots className="text-3xl text-d-sideIcon" />
      </button>

      {isOpen &&
        <div className={`flex flex-col bg-d-sideBg top-0 left-0 w-4/5 h-full z-20 text-d-sideIcon p-4 gap-8 absolute shadow ${!isOpen && '-translate-x-full' }`}>

          <div className="flex justify-between pb-2 border-b border-d-sideIcon">
            <h2 className="text-lg">contact me</h2>
            <button onClick={() => setIsOpen(false)} className="text-xl">x</button>
          </div>

          <form action={FORM_ENDPOINT} onSubmit={handleSubmit} method="POST" target="_blank" aria-label="enter your contact information" className="flex flex-col gap-4">
            <label htmlFor="name">name:</label>
            <input type="text" placeholder="your name" id="name" name="name" className="p-2 border border-d-sideIcon" />

            <label htmlFor="email">email:</label>
            <input type="email" placeholder="your email" id="email" name="email" className="p-2 border border-d-sideIcon" />

            <label htmlFor="message">message:</label>
            <textarea name="message" id="message" cols="30" rows="10" placeholder="your message" className="p-2 border border-d-sideIcon" />

            <button type="submit" className="px-4 py-2 border border-d-sideIcon">submit</button>
          </form>
          <button className="px-4 py-2 border border-d-sideIcon" onClick={() => setIsOpen(false)}>close</button>
        </div>
      }
    </>
  );
};
