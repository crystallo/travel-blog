import Link from "next/link";
import { PaddingContainer } from "../layout/PaddingContainer";

export const Navigation = () => {
  return (
    <header className="sticky top-0 left-0 right-0 border-b bg-white bg-opacity-50 backdrop-blur-md z-[999]">
      <PaddingContainer>
        <div className="flex items-center justify-between py-5">
          <Link className="text-lg font-bold" href="/">Explorer</Link>
          <nav>
            <ul className="flex items-center gap-4 text-neutral-600">
              <li>
                <Link href="/cities">Cities</Link>
              </li>
              <li>
                <Link href="/experiences">Experiences</Link>
              </li>
            </ul>
          </nav>
        </div>
      </PaddingContainer>
    </header>
  );
};
