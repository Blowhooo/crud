import Input from "../ui/Input";
import Button from "../ui/Button";

export default function ModalForm({onClose}) {
   return (
    <div
      className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white p-6 rounded-md max-w-md w-full shadow-lg relative">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-lg font-semibold">팝업 제목</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black cursor-pointer"
            aria-label="닫기"
          >
            ✕
          </button>
        </div>
        <form>
          <fieldset className="mb-2">
            <Input placeholder="제목을 입력해주세요"/>
            <Input placeholder="내용을 입력해주세요"/>
          </fieldset>
          <Button type="submit" full>새글쓰기</Button>
        </form>
      </div>
    </div>
  );
}