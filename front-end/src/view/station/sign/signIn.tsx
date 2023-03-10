import { NextPage } from "next";
import { NextRouter, useRouter } from "next/router";
import "@/src/view/layout/layout.module.css";

const SignInCom: NextPage = () => {
  const router: NextRouter = useRouter();
  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <h1>로그인</h1>
        <p>환영합니다.</p>
      </div>
    </div>
  );
};

export default SignInCom;
