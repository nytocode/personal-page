import { Badge } from "@/components/ui/badge";
import { GitHubLogoIcon, InstagramLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center mb-10">
        <Image alt="banner" src="/img/banner.jpeg" width={300} height={300} />
      </div>
      <div className="flex items-center gap-4">
        <Image
          className="rounded-full grayscale"
          alt="profile picture"
          src="/img/profile.jpg"
          width={70}
          height={70}
        />
        <div className="flex flex-col">
          <h1 className="text-xl md:text-2xl font-medium tracking-wider mb-[0.5rem]">
            Antonio Forte
          </h1>
          <h3 className="text-muted-foreground text-sm">
            Full-Stack Software Engineer
          </h3>
        </div>
      </div>
      <div className="mt-[2rem]">
        <p className="text-muted-foreground">
          Full-Stack Software Engineer, based in Italy, passionate about
          building amazing and useful digital products. Currently working for an
          italian software company developing new stuff every day. My actual
          goal is to improve my skills in building software to the point to be
          able to manage my own software company. In the meantime I challenge
          myself with some freelance work.
        </p>
      </div>
      <hr className="mx-auto md:mx-0 my-10 min-h-1 w-[50%] bg-muted-foreground" />
      <div>
        <div className="mb-[0.8rem]">
          <h2 className="text-xl font-medium">BIO</h2>
        </div>
        <ul className="flex flex-col gap-1">
          <li className="flex items-start gap-2">
            <h4 className="font-medium tracking-wider mr-[1rem]">2020</h4>
            <span className="text-muted-foreground">
              Master Degree in Electronic Engineering at University of Naples
              Federico II
            </span>
          </li>
          <li className="flex items-start gap-2">
            <h4 className="font-medium tracking-wider mr-[1rem]">2021</h4>
            <span className="text-muted-foreground">
              Software Developer at <strong>PotPot</strong> (Travel related
              startup based in Milan)
            </span>
          </li>
          <li className="flex items-start gap-2">
            <h4 className="font-medium tracking-wider mr-[1rem]">2022</h4>
            <span className="text-muted-foreground">
              Software Developer at <strong>Accenture</strong> Italy
            </span>
          </li>
          <li className="flex items-start gap-2">
            <h4 className="font-medium tracking-wider mr-[1rem]">2023</h4>
            <span className="text-muted-foreground">
              Software Developer at <strong>Gellify</strong> (Software Company)
            </span>
          </li>
        </ul>
      </div>

      <hr className="my-10 mx-auto md:mr-0 md:ml-auto min-h-1 w-[50%] bg-muted-foreground" />
      <div>
        <div className="mb-[0.8rem]">
          <h2 className="text-xl font-medium w-fit md:ml-auto">INTERESTS</h2>
        </div>
        <div className="flex md:justify-end gap-2">
          <Badge>Gym</Badge>
          <Badge>Cooking</Badge>
          <Badge>Music</Badge>
        </div>
      </div>
      <hr className="mx-auto md:mx-0 my-10 min-h-1 w-[50%] bg-muted-foreground" />
      <div>
        <div className="mb-[0.8rem]">
          <h2 className="text-xl font-medium w-fit">TECHNOLOGIES</h2>
        </div>
        <div className="flex flex-wrap gap-2 ">
          <Badge className="">Typescript</Badge>
          <Badge className="">React</Badge>
          <Badge className="">Next</Badge>
          <Badge className="">Node</Badge>
          <Badge className="">Express</Badge>
          <Badge className="">Mongo</Badge>
        </div>
      </div>
      <hr className="my-10 w-[50%] mx-auto min-h-1 bg-muted-foreground" />
      <div>
        <div className="mb-[0.8rem]">
          <h2 className="text-xl font-medium">CONTACTS</h2>
        </div>
        <ul className="flex flex-col gap-2">
          <li>
            <a
              href="https://github.com/nytocode"
              target="_blank"
              referrerPolicy="no-referrer"
              className="flex items-center gap-2 cursor-pointer"
            >
              <GitHubLogoIcon />
              <span>nytocode</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/anto.4te"
              target="_blank"
              referrerPolicy="no-referrer"
              className="flex items-center gap-2 cursor-pointer"
            >
              <InstagramLogoIcon />
              <span>anto4te</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
