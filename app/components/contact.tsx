export default function Contact() {
  return (
    <section id="contact" className="relative h-screen w-screen py-10 px-12 md:px-32 xl:px-36 dark:bg-black dark:text-white bg-white  text-black">
      <div className="flex flex-col justify-evenly h-5/6">
        <span className="text-3xl md:text-6xl xl:text-8xl">
          Let&apos;s make something <br></br> great together
        </span>
        <span className="text-3xl md:text-6xl xl:text-8xl text-end">
          marco@<span className="underline">droidpills.com</span>
        </span>
      </div>
    </section>
  );
}
