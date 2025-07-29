import PostCard from "@/components/PostCard";
import Official from "@/components/Official";

export default function Home() {
  const posts = [
    {
      key: "post1",
      profileImage: "https://picsum.photos/id/1011/100/100",
      user: "user01",
      title: "신입 개발자 포트폴리오 공유합니다",
      content: "포트폴리오 정리하면서 고민 많았는데, 혹시 피드백 주실 분 계실까요?",
      date: "2025. 6. 4",
      hash: ["포트폴리오", "피드백"],
      attachmentImage: "https://picsum.photos/id/1015/600/400"
    },
    {
      key: "post2",
      profileImage: "https://picsum.photos/id/1012/100/100",
      user: "user02",
      title: "🔥 이번에 출시한 서비스 소개합니다!",
      content: "스타트업에서 개발한 웹 서비스입니다. 많은 관심 부탁드립니다.",
      date: "2025. 6. 5",
      hash: ["서비스", "출시"],
      attachmentImage: "https://picsum.photos/id/1025/600/400"
    },
    {
      key: "post3",
      profileImage: "https://picsum.photos/id/1013/100/100",
      user: "user03",
      title: "이직 준비하시는 분들 계신가요?",
      content: "면접 질문이나 준비 팁 공유해요. 저도 이번 달부터 시작했어요.",
      date: "2025. 6. 6",
      hash: ["이직", "면접"],
      attachmentImage: ""
    },
    {
      key: "post4",
      profileImage: "https://picsum.photos/id/1014/100/100",
      user: "user04",
      title: "프론트엔드 개발자라면 이건 꼭 봐야죠",
      content: "요즘 공부한 접근성 관련 내용 공유해요. 시멘틱 태그부터 시작했어요.",
      date: "2025. 6. 7",
      hash: ["접근성", "프론트엔드"],
      attachmentImage: "https://picsum.photos/id/1042/600/400"
    },
    {
      key: "post5",
      profileImage: "https://picsum.photos/id/1015/100/100",
      user: "user05",
      title: "디자인 시스템 처음 만들어봤어요",
      content: "컴포넌트 단위로 설계하는 게 이렇게 중요한지 몰랐어요.",
      date: "2025. 6. 8",
      hash: ["디자인시스템", "컴포넌트"],
      attachmentImage: ""
    },
    {
      key: "post6",
      profileImage: "https://picsum.photos/id/1016/100/100",
      user: "user06",
      title: "Tailwind CSS 처음 써본 후기",
      content: "유틸리티 기반이라 처음엔 어렵지만, 익숙해지면 너무 편해요.",
      date: "2025. 6. 9",
      hash: ["Tailwind", "CSS"],
      attachmentImage: "https://picsum.photos/id/1060/600/400"
    },
    {
      key: "post7",
      profileImage: "https://picsum.photos/id/1050/100/100",
      user: "user07",
      title: "React 상태 관리 뭐 쓰세요?",
      content: "Recoil, Zustand, Redux 고민 중인데 여러분의 선택은?",
      date: "2025. 6. 10",
      hash: ["React", "상태관리"],
      attachmentImage: ""
    },
    {
      key: "post8",
      profileImage: "https://picsum.photos/id/1018/100/100",
      user: "user08",
      title: "🔥 GitHub에 개인 프로젝트 올렸어요",
      content: "Next.js + Express 조합으로 간단한 게시판 만들었습니다.",
      date: "2025. 6. 11",
      hash: ["Next.js", "Express"],
      attachmentImage: "https://picsum.photos/id/1084/600/400"
    },
    {
      key: "post9",
      profileImage: "https://picsum.photos/id/1019/100/100",
      user: "user09",
      title: "개발 슬럼프 어떻게 극복하세요?",
      content: "요즘 의욕이 안 나서 고민입니다. 다들 어떻게 이겨내시나요?",
      date: "2025. 6. 12",
      hash: ["슬럼프", "고민"],
      attachmentImage: ""
    },
    {
      key: "post10",
      profileImage: "https://picsum.photos/id/1020/100/100",
      user: "user10",
      title: "스터디 같이 하실 분 있나요?",
      content: "매주 토요일에 온라인으로 코드리뷰 같이 할 분을 찾습니다!",
      date: "2025. 6. 13",
      hash: ["스터디", "모집"],
      attachmentImage: "https://picsum.photos/id/110/600/400"
    }
  ];

  const official = [
    {
      key: "official1",
      title: "🚀 새로운 프론트엔드 프레임워크 등장!",
      date: "2025. 7. 1",
      thumbnail: "https://picsum.photos/id/200/120/80"
    },
    {
      key: "official2",
      title: "React 20 버전 미리보기",
      date: "2025. 7. 2",
      thumbnail: "https://picsum.photos/id/201/120/80"
    },
    {
      key: "official3",
      title: "개발자 채용 동향 리포트 (2025 상반기)",
      date: "2025. 7. 3",
      thumbnail: "https://picsum.photos/id/202/120/80"
    },
    {
      key: "official4",
      title: "UI/UX 트렌드 분석: 마이크로 인터랙션",
      date: "2025. 7. 4",
      thumbnail: "https://picsum.photos/id/203/120/80"
    },
  ];

  return (
    <div className="max-w-screen-lg mx-auto px-8 flex min-h-screen">      
      <section className="basis-2/3 border-r border-gray-300 py-4">
        <h2 className="sr-only">메인 페이지 추천 피드 영역</h2>
        <div>
          {posts.map(item => <PostCard key={item.key} {...item}/>)}        
        </div>
      </section>
      <aside className="pl-8">
        <h2 className="sr-only">메인 페이지 추천 채널 영역</h2>
        <div className="sticky top-[133px] py-4">
          {official.map(item => <Official key={item.key} {...item} />)}
        </div>
      </aside>
    </div>
  );
}