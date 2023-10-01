export default function Home() {
  return (
    <div className="flex-1 overflow-y-scroll flex flex-col w-[700px] mx-auto pt-[100px]">
      <div className="flex flex-col">
        <h1 className="text-2xl font-medium tracking-wider mb-[0.5rem]">
          Antonio Forte
        </h1>
        <h3 className="text-muted-foreground text-sm">
          Full-Stack Software Engineer
        </h3>
      </div>
      <div className="mt-[2rem]">
        <h2 className="mb-[0.8rem] text-xl font-medium">ABOUT</h2>
        <p className="text-muted-foreground">
          Full-Stack Software Engineer, based in Italy, passionate about
          building amazing and useful digital products. Currently working at an
          italian software company developing new stuff every day. My actual
          goal is to improve my skills in building software to the point to be
          able to manage my own software company. In the meantime I challenge
          myself with some freelance work.
        </p>
      </div>
      <span className="w-[30%] h-1 my-[1.5rem] rounded-full bg-muted-foreground"></span>
      <div>
        <h2 className="text-xl font-medium mb-[0.8rem]">BIO</h2>
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
      <div>
        <h2 className="text-xl font-medium mb-[0.8rem]">INTERESTS</h2>
      </div>
    </div>
  );
}
