import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { MenuWizard } from './MenuWizard';

type Props = {
  title: string;
  imageSrc: string | StaticImageData;
};

export function Navbar({ imageSrc, title }: Props) {
  return (
    <nav className="min-w-full bg-blue-500">
      <div className="container pl-5 flex h-[5.5rem] items-center justify-between">
        <Link href="/" className="flex items-center gap-4 text-lg font-semibold" prefetch={false}>
          <Image src={imageSrc} alt="logo" width={60} height={60} />
          <h2 className="text-xl text-primary-foreground lg:text-2xl">{title}</h2>
        </Link>
        <div className="md:hidden">
          <MenuWizard />
        </div>
        <div className="hidden md:flex items-center space-x-4 gap-4">
          <Link
            href="/"
            className="font-medium text-sm text-primary-foreground transition-colors hover:text-gray-300 dark:hover:text-gray-50"
            prefetch={false}
          >
            Hem
          </Link>
          <Link
            href="/om-oss"
            className="font-medium text-sm text-primary-foreground transition-colors hover:text-gray-300 dark:hover:text-gray-50"
            prefetch={false}
          >
            Om oss
          </Link>
          <Link
            href="/schema"
            className="font-medium text-sm text-primary-foreground transition-colors hover:text-gray-300 dark:hover:text-gray-50"
            prefetch={false}
          >
            Schema
          </Link>
          <Link
            href="/kontakta-oss"
            className="font-medium text-sm text-primary-foreground transition-colors hover:text-gray-300 dark:hover:text-gray-50"
            prefetch={false}
          >
            Kontakt
          </Link>
          <Link
            href="/Q&A"
            className="font-medium text-sm text-primary-foreground transition-colors hover:text-gray-300 dark:hover:text-gray-50"
            prefetch={false}
          >
            FAQ
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
