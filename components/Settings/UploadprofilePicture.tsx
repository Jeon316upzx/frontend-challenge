"use client";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const UploadProfileImage = () => {
  return (
    <div className="flex flex-col lg:flex-row  justify-between items-center mt-10">
      <div className="flex flex-row items-center order-last lg:order-first">
        <div className="h-20 lg:h-32 w-20 lg:w-32 bg-black rounded-full flex justify-center items-center">
          <Avatar>
            <AvatarImage
              height={300}
              width={300}
              src="https://github.com/shadcn.png"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-row">
              <span className="px-4">
                <Button className="bg-red-700" size={"sm"}>Remove </Button>
              </span>
              <span className="px-4">
                <Button variant={"outline"} size={"sm"}>Change Photo</Button>
              </span>
            </div>
            <span className="text-gray-500 text-sm pt-5">or drag and drop (SVG, PNG, JPG )</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row order-first lg:order-last my-8 lg:my-0">
        <span className="px-4">
          <Button variant="outline" size={"sm"}>Cancel</Button>
        </span>
        <span className="">
          <Button size={"sm"}>Save Changes</Button>
        </span>
      </div>
    </div>
  );
};

export default UploadProfileImage;
