import Link from "next/link"
import Image from "next/image"
import CustomButton from "./CustomButton"

const Navbar = () => {
  return (
    <div>
      <header className="w-full absolute z-10">
        <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6">
            <Link href='/' className="flex items-center justify-center">
            <Image src="/logo.svg"
            alt="WipeOut logo"
            width={118}
            height={18}
            className="object-contain"
            />
            </Link>

            <CustomButton
            title="Sign In"
            btnType="button"
            containerStyles="text-green-800 bg-white rounded-full min-w-[130px] border-2 border-green-500 px-10px py-10px mt-4"
            />
        </nav>
      </header>
    </div>
  )
}

export default Navbar
