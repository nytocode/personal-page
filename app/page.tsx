import { Avatar, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  return (
    <div className="flex-1 overflow-y-scroll flex flex-col w-[700px] mx-auto">
      <div className="flex items-center justify-between mt-[200px]">
        <h1 className="text-4xl font-medium tracking-wider">Antonio Forte</h1>
        <Avatar className="w-32 h-32">
          <AvatarImage src="/img/profile.jpg" />
        </Avatar>
      </div>
    </div>
  );
}
