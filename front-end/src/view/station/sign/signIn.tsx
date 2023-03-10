import { NextPage } from "next";
import { NextRouter, useRouter } from "next/router";

const SignInCom: NextPage = () => {
  const router: NextRouter = useRouter();
  return (
    <div className="flex flex-col space-y-80 justify-between items-center h-screen">
      <div className="">hello</div>
      <div>world</div>
    </div>
  );
};

export default SignInCom;
