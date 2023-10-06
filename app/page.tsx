import { Badge } from "@/components/ui/badge";
import { GitHubLogoIcon, InstagramLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex-1 overflow-y-scroll flex flex-col w-[90%] max-w-[700px] mx-auto px-5 py-[50px]">
      <div className="mb-10">
        <Image
          className="rounded-full grayscale"
          alt="profile picture"
          src="/img/profile.jpg"
          width={100}
          height={100}
        />
      </div>
      <div className="flex flex-col">
        <h1 className="text-2xl font-medium tracking-wider mb-[0.5rem]">
          Antonio Forte
        </h1>
        <h3 className="text-muted-foreground text-sm">
          Full-Stack Software Engineer
        </h3>
      </div>
      <div className="mt-[2rem]">
        <p className="text-muted-foreground">
          Full-Stack Software Engineer, based in Italy, passionate about
          building amazing and useful digital products. Currently working at an
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
        <ul>
          <li className="flex items-center gap-2">
            <GitHubLogoIcon />
            <span>nytocode</span>
          </li>
          <li className="flex items-center gap-2">
            <InstagramLogoIcon />
            <span>anto4te</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
