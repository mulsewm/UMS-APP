import Link from "next/link";
import Image from "next/image";

const footer = () => {
  return (
    <div className="mx-auto max-w-2xl sm:pt-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      {/* All Rights Reserved */}

      <div className="py-10 md:flex items-center justify-between border-t border-t-gray-blue">
        <h4 className="text-dark-red opacity-75 text-sm text-center md:text-start font-normal">
          {" "}
          {`© ${new Date().getFullYear()}, Made with `}
          ❤️ Mulsew M
        </h4>
        <div className="flex gap-5 mt-5 md:mt-0 justify-center md:justify-start">
          <h4 className="text-dark-red opacity-75 text-sm font-normal">
            <Link href="/" target="_blank">
              Privacy policy
            </Link>
          </h4>
          <div className="h-5 bg-dark-red opacity-25 w-0.5"></div>
          <h4 className="text-dark-red opacity-75 text-sm font-normal">
            <Link href="/" target="_blank">
              Terms & conditions
            </Link>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default footer;
