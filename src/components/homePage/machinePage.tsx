import Link from "next/link";

const machinePage = () => {
  return ( 
    <main className="text-xs md:text-sm xl:text-base text-center text-white relative -top-40 leading-relaxed">
      <div className="w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%] mx-auto bg-secAccentColor px-8 md:px-12 xl:px-16 py-14 rounded-xl shadow">
            <p className="text-base md:text-lg xl:text-xl font-bold">WINNING THROUGH INTEGRITY</p>
            <p className="mt-6">Are you in need of a reliable water well drilling service?</p>
            <p className="mt-6">Contact us today to receive a free, no-obligation <Link href="/quote" target="_blank" className="text-[#00b2ff] font-semibold uppercase hover:underline hover:text-inherit duration-300">quote</Link>. Our experienced team is ready to assist you with all your water drilling needs.</p>
      </div>
    </main>
   );
}
 
export default machinePage;