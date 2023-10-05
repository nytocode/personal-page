import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <HamburgerMenuIcon className="h-[1.4rem] w-[1.4rem]" />
      </SheetTrigger>
      <SheetContent side="top">
        <div>Menu</div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
