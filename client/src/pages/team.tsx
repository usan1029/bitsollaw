import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase, Star } from "lucide-react";

export default function Team() {
  return (
    <div className="py-20 bg-law-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-law-navy mb-4">
            구성원 소개
          </h1>
          <p className="text-xl text-gray-600">
            전문성과 경험을 바탕으로 최고의 법률 서비스를 제공합니다
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
                  alt="정민환 대표변호사"
                  className="w-40 h-40 rounded-full mx-auto mb-6 object-cover shadow-lg"
                />
                <h2 className="text-3xl font-bold text-law-navy mb-2">정민환</h2>
                <p className="text-law-gold font-semibold text-xl mb-6">대표변호사</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start mb-4">
                    <GraduationCap className="h-6 w-6 text-law-gold mr-3" />
                    <h3 className="text-lg font-semibold text-law-navy">학력</h3>
                  </div>
                  <div className="space-y-2 text-gray-700">
                    <p>서울대학교 법학과 졸업</p>
                    <p>사법고시 35기 합격</p>
                    <p>사법연수원 25기 수료</p>
                  </div>
                </div>

                <div className="text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start mb-4">
                    <Briefcase className="h-6 w-6 text-law-gold mr-3" />
                    <h3 className="text-lg font-semibold text-law-navy">경력</h3>
                  </div>
                  <div className="space-y-2 text-gray-700">
                    <p>법무법인 근무 10년</p>
                    <p>관악구 지역 법률 서비스 15년</p>
                    <p>관악구청 법률상담 위촉변호사</p>
                  </div>
                </div>

                <div className="text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start mb-4">
                    <Star className="h-6 w-6 text-law-gold mr-3" />
                    <h3 className="text-lg font-semibold text-law-navy">전문분야</h3>
                  </div>
                  <div className="space-y-2 text-gray-700">
                    <p>민사소송, 형사변론</p>
                    <p>가사사건, 산업재해</p>
                    <p>보험분쟁, 노동분쟁</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-law-navy mb-4">자격 및 면허</h3>
                <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                  <div>
                    <p>• 변호사 자격 (1995년)</p>
                    <p>• 대한변호사협회 회원</p>
                  </div>
                  <div>
                    <p>• 서울지방변호사회 회원</p>
                    <p>• 관악구청 법률상담 위촉변호사</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-law-navy mb-4">주요 활동</h3>
                <div className="space-y-3 text-gray-700">
                  <p>• 관악구 소상공인 법률지원 사업 참여</p>
                  <p>• 서울대학교 법학과 동창회 법률상담 위원</p>
                  <p>• 신림동 상권활성화 법률자문</p>
                  <p>• 관악구 주민센터 정기 법률상담</p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200 bg-law-light rounded-lg p-6">
                <h3 className="text-lg font-semibold text-law-navy mb-4">변호사 철학</h3>
                <blockquote className="text-gray-700 italic text-center">
                  "법률은 복잡하지만, 해결책은 명확해야 합니다. 
                  의뢰인의 입장에서 생각하고, 최선의 결과를 위해 노력하는 것이 
                  변호사의 본분이라고 생각합니다."
                </blockquote>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
