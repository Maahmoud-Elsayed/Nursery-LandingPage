import { Circles } from "@/components/ui/icons";

const Loading = () => {
  return (
    <div className="relative h-[calc(100vh-64px)] w-full">
      <div className="absolute left-1/2 top-1/2 z-40 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center  justify-center gap-2 bg-transparent ">
        <div className=" animate-spin justify-center items-center">
          <div className="flex  items-center justify-center gap-2">
            <Circles Variant="secondary" />
            <Circles />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
