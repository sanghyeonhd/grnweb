
import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 로그인 로직 구현
    console.log("Login attempt:", { email, password });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="container mx-auto px-6 pt-32">
        <div className="max-w-md mx-auto">
          <h1 className="text-2xl font-medium text-center mb-8">로그인</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm">이메일</label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full"
                placeholder="이메일을 입력해주세요"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm">비밀번호</label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full"
                placeholder="비밀번호를 입력해주세요"
              />
            </div>
            <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800">
              로그인
            </Button>
          </form>
          <div className="mt-6 text-center space-y-4">
            <Link to="/forgot-password" className="text-sm text-gray-600 hover:text-gray-800">
              비밀번호를 잊으셨나요?
            </Link>
            <div className="text-sm">
              아직 회원이 아니신가요?{" "}
              <Link to="/signup" className="text-black hover:underline">
                회원가입
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
