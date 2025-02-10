import Link from "next/link"
export default function contact(){
    return(
        <>
<div className="mx-auto">
<main className="mx-auto overflow-hidden bg-hero-pattern w-full h-96  bg-cover bg-center opacity-60 flex justify-center items-center absolute"></main>
<div className="w-full h-96 container mx-auto flex inline justify-center items-center ">
<Link href="/shop"><h1 className="text-2xl font-bold text-black absolute">Shop</h1></Link>
<br />
<Link href="/shop"><h1 className="text-l font-bold text-black absolute pt-10">Contact --</h1></Link>

</div>

</div>

<div>
    <h2 className="font-bold   mt-10 text-center text-4xl ">GET IN TOUCH WITH US</h2>

</div>
<section className="bg-white dark:bg-gray-900">
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
    
    <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
      Got a technical issue? Want to send feedback about a beta feature? Need
      details about our Business plan? Let us know.
    </p>
    <form action="#" className="space-y-8">
    <div>
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Your name
        </label>
        <input
          type="name"
          id="name"
          className="shadow-sm bg-gray-50 border border-orange-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          placeholder="enter your name"
          required
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Your email
        </label>
        <input
          type="email"
          id="email"
          className="shadow-sm bg-gray-50 border border-orange-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          placeholder="name@flowbite.com"
          required
        />
      </div>
      <div>
        <label
          htmlFor="subject"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-orange-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          placeholder="Let us know how we can help you"
          required
        />
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Your message
        </label>
        <textarea
          id="message"
          rows={6}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-orange-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="Leave a comment..."
          defaultValue={""}
        />
      </div>
      <button className=" bg-orange-300 px-4 py-2 rounded btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">submit</button>
    </form>
  </div>
</section>

        </>
    )
}