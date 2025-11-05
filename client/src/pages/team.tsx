import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase, Star } from "lucide-react";

type ProfileCardProps = {
  photo: string;
  alt: string;
  name: string;
  role: string;
  quoteTitle: string;
  quote: string;
  education?: string[];
  career?: string[];
  specialties?: string[];
  licenses?: string[];
  activities?: string[];
};

function ProfileCard({
  photo,
  alt,
  name,
  role,
  quoteTitle,
  quote,
  education = [],
  career = [],
  specialties = [],
  licenses = [],
  activities = [],
}: ProfileCardProps) {
  return (
    <Card className="border-none shadow-lg overflow-hidden">
      <div className="relative">
        {/* 상단 배너 바 */}
        <div className="h-24 w-full bg-gradient-to-r from-law-navy to-law-gold/80" />
        {/* 프로필 이미지 - 배너 위로 살짝 겹치게 */}
        <img
          src={photo}
          alt={alt}
          className="w-40 h-40 rounded-full object-cover shadow-xl ring-4 ring-white
                     absolute left-1/2 -translate-x-1/2 -bottom-12"
        />
      </div>

      <CardContent className="pt-16 p-8">
        {/* 이름/직함 */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-law-navy">{name}</h2>
          <p className="text-law-gold font-semibold text-xl mt-1">{role}</p>

          {/* 인용문 박스 */}
          <div className="mt-8 pt-8 border-t border-gray-200 bg-law-light rounded-lg p-6">
            <h3 className="text-lg font-semibold text-law-navy mb-3">{quoteTitle}</h3>
            <blockquote className="text-gray-700 italic text-center leading-relaxed">
              “{quote}”
            </blockquote>
          </div>
        </div>

        {/* 3단 그리드: 학력 / 경력 / 전문분야 */}
        <div className="grid md:grid-cols-3 gap-8">
          {education.length > 0 && (
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-4">
                <GraduationCap className="h-6 w-6 text-law-gold mr-3" />
                <h3 className="text-lg font-semibold text-law-navy">학력</h3>
              </div>
              <div className="space-y-2 text-gray-700">{education.map((t, i) => <p key={i}>{t}</p>)}</div>
            </div>
          )}
          {career.length > 0 && (
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-4">
                <Briefcase className="h-6 w-6 text-law-gold mr-3" />
                <h3 className="text-lg font-semibold text-law-navy">경력</h3>
              </div>
              <div className="space-y-2 text-gray-700">{career.map((t, i) => <p key={i}>{t}</p>)}</div>
            </div>
          )}
          {specialties.length > 0 && (
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-4">
                <Star className="h-6 w-6 text-law-gold mr-3" />
                <h3 className="text-lg font-semibold text-law-navy">전문분야</h3>
              </div>
              <div className="space-y-2 text-gray-700">{specialties.map((t, i) => <p key={i}>{t}</p>)}</div>
            </div>
          )}
        </div>

        {/* 자격/면허 */}
        {licenses.length > 0 && (
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-law-navy mb-4">자격 및 면허</h3>
            <div className="grid md:grid-cols-2 gap-4 text-gray-700">
              <div className="space-y-2">{licenses.map((t, i) => <p key={i}>• {t}</p>)}</div>
            </div>
          </div>
        )}

        {/* 주요 활동 */}
        {activities.length > 0 && (
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-law-navy mb-4">주요 활동</h3>
            <div className="space-y-2 text-gray-700">
              {activities.map((t, i) => <p key={i}>• {t}</p>)}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default function Team() {
  return (
    <div className="py-20 bg-law-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-law-navy mb-4">구성원 소개</h1>
          <p className="text-xl text-gray-600">전문성과 경험을 바탕으로 최고의 법률 서비스를 제공합니다</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* 정민환 변호사 */}
          <ProfileCard
            photo="https://i.imgur.com/4EWwFul.jpg"
            alt="정민환 대표변호사"
            name="정민환"
            role="대표변호사"
            quoteTitle="변호사의 말"
            quote="법률은 복잡하지만, 의뢰인의 입장에서 생각하고 최선의 결과를 위해 노력하는 것이 변호사의 본분이라고 생각합니다."
            education={["서강대학교 법학전문대학원 졸업", "제 3회 변호사시험 합격"]}
            career={[
              "(前) 법무법인 충정 금융송무팀 소속변호사",
              "(前) 현대해상화재보험 주식회사 법률 전문위원",
              "(前) 메트라이프생명보험 주식회사 법무팀 사내변호사",
              "(前) 메트라이프생명보험 주식회사 노블리치센터 변호사",
              "(現) (주)그레이스 고문변호사",
              "(現) 관악 익스트림에스 고문변호사",
              "(現) 빛솔법률사무소 대표 변호사",
            ]}
            specialties={[
              "보험분쟁 / 보험 강의 전문",
              "상속 자산승계 관련 컨설팅 전문",
              "개인회생 전문",
              "민사소송, 형사변론",
              "가사사건, 산업재해",
              "노동분쟁",
            ]}
            licenses={["변호사 자격 (2015년)", "대한변호사협회 회원", "서울지방변호사회 회원", "관악구청 법률상담 변호사"]}
            activities={["관악구 법률지원 사업 참여", "신림동 상권활성화 법률자문", "관악구 주민센터 정기 법률상담"]}
          />

          {/* 송재원 이사 */}
          <ProfileCard
            photo="https://i.imgur.com/wDmIOZz.jpg"
            alt="송재원 이사"
            name="송재원"
            role="이사"
            quoteTitle="송재원 이사의 말"
            quote="정확한 평가, 공정한 보상, 의뢰인 중심의 권리를 지키는 일입니다."
            education={[
              "국민대학교 법무대학 손해사정 전공 졸업",
              "논문: 2016년 손해사정 실무상 자살보험금의 연구 - 대법원 판례를 중심으로",
            ]}
            career={[
              "현대해상 보상심사 파트장",
              "법무법인(이루) 보험법률팀장",
              "한율로펌 이사",
              "(주)FM손해사정 대표",
              "(주)FM에셋 손해사정 총괄대표",
              "(주)GA코리아 Fn Asset 지점장",
              "(주)피플라이프 한강지점 지점장",
            ]}
            specialties={["보험사건 전문", "산재사건 전문", "국가손해배상(국가장애)보험 전문"]}
          />

          {/* 강진영 손해사정사/법무실장 */}
          <ProfileCard
            photo="https://imgur.com/FkWIkio.jpg"
            alt="강진영 손해사정사/법무실장"
            name="강진영"
            role="손해사정사/법무실장"
            quoteTitle="강진영 손해사정사의 말"
            quote="손해사정의 핵심은 공정함입니다. 모든 사건에서 객관적 근거를 바탕으로, 의뢰인이 정당한 보상을 받을 수 있도록 최선을 다하겠습니다."
            education={["서울과학기술대학교 건축공학과 졸업"]}
            career={["반석손해사정 팀장", "청담손해사정 이사", "청담손해사정 실무수습 강사", "지엘손해사정 대표"]}
            specialties={["상해, 질병 전문", "산재, 근재 전문", "자동차사고 대인배상 전문"]}
            licenses={["신체손해사정사", "건축기사", "한국손해사정사회 정회원"]}
          />
        </div>
      </div>
    </div>
  );
}
