'use client';

import { useState } from "react";
import Button from "@/components/ui/Button";
import Logo from "./Logo";
import Link from "next/link";
import ModalForm from "@/components/ModalForm";

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  const nav = [
    {
      key: "menu-0",
      menu: "메뉴-0",
      href: "#null"
    },
    {
      key: "menu-1",
      menu: "메뉴-1",
      href: "#null"
    }
  ];
  return (
    <header className="sticky z-100 top-0 bg-white">
      <div className="flex justify-between max-w-screen-lg mx-auto py-4 px-8">
        <Logo />
        <Button onClick={() => setShowModal(true)}>등록하기</Button>
      </div>
      <nav className="pt-4 border-b border-gray-300">
        <ul className="max-w-screen-lg mx-auto flex px-8 gap-4">
          {
            nav.map(item => (
              <li key={item.key}><Link href={item.href} className="block py-3 font-medium">{item.menu}</Link></li>
            )) 
          }
        </ul>
      </nav>
      
      {
        showModal && <ModalForm onClose={() => setShowModal(false)}/>
      }
    </header>
  );
}