import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Sheet, SheetTrigger } from "./ui/sheet";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <HamburgerMenuIcon />
      </SheetTrigger>
    </Sheet>
  );
};

export default MobileMenu;
