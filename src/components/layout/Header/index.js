import Button from "@/components/ui/Button";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="flex justify-between">
      <Logo />
      <Button 
        as="a" 
        href="https://www.naver.com/" 
        target="_blank"
      >
        등록하기
      </Button>
    </header>
  );
}