import { Button } from "@/components/mui/Button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-screen flex justify-center gap-2 items-center ">
      <div className="flex flex-col gap-2">
        <Button variant="contained">Custom shit</Button>
        <Button variant="outlined">Custom shit</Button>
        <Button variant="text">Custom shit</Button>
      </div>
      <div className="flex flex-col gap-2">
        <Button variant="contained" size="large">
          Custom shit
        </Button>
        <Button variant="contained" size="medium">
          Custom shit
        </Button>
        <Button variant="contained" size="small">
          Custom shit
        </Button>
      </div>
    </div>
  );
}
