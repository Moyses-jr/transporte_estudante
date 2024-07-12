export default function Footer() {
  return (
    <footer className="bg-white shadow dark:bg-gray-900 relative h-auto">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-5">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
              <p> DanBrock &copy; 2024 All Rights Reserved.</p>
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
