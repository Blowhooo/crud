'use client';

import { FaChevronLeft } from "react-icons/fa";
import { useRouter } from 'next/navigation'

export default function BackButton() {
  const router = useRouter();

  return (
    <button type="button" onClick={() => router.back()}>
      <FaChevronLeft />
    </button>
  )
}