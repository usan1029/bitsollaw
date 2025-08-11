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
                  src="https://i.imgur.com/4EWwFul.jpg"
                  alt="정민환 대표변호사"
                  className="w-40 h-40 rounded-full mx-auto mb-6 object-cover shadow-lg"
                />
                <h2 className="text-3xl font-bold text-law-navy mb-2">정민환</h2>
                <p className="text-law-gold font-semibold text-xl mb-6">대표변호사</p>
                <div className="mt-8 pt-8 border-t border-gray-200 bg-law-light rounded-lg p-6">
                <h3 className="text-lg font-semibold text-law-navy mb-4">변호사의 말</h3>
                <blockquote className="text-gray-700 italic text-center">
                  "법률은 복잡하지만, 
                  의뢰인의 입장에서 생각하고, 최선의 결과를 위해 노력하는 것이 
                  변호사의 본분이라고 생각합니다."
                </blockquote>
              </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start mb-4">
                    <GraduationCap className="h-6 w-6 text-law-gold mr-3" />
                    <h3 className="text-lg font-semibold text-law-navy">학력</h3>
                  </div>
                  <div className="space-y-2 text-gray-700">
                    <p>서강대학교 법학전문대학원 졸업</p>
                    <p>제 3회 변호사시험 합격</p>
                  </div>
                </div>

                <div className="text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start mb-4">
                    <Briefcase className="h-6 w-6 text-law-gold mr-3" />
                    <h3 className="text-lg font-semibold text-law-navy">경력</h3>
                  </div>
                  <div className="space-y-2 text-gray-700">
                    <p>(前) 법무법인 충정 금융송무팀 소속변호사</p>
                    <p>(前) 현대해상화재보험 주식회사 법률 전문위원</p>
                    <p>(前) 메트라이프생명보험 주식회사 법무팀 사내변호사</p>
                    <p>(前) 메트라이프생명보험 주식회사 노블리치센터 변호사</p>
                    <p>(現) (주)그레이스 고문변호사</p>
                    <p>(現) 관악 익스트림에스 고문변호사</p>
                    <p>(現) 빛솔법률사무소 대표 변호사</p>
                  </div>
                </div>

                <div className="text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start mb-4">
                    <Star className="h-6 w-6 text-law-gold mr-3" />
                    <h3 className="text-lg font-semibold text-law-navy">전문분야</h3>
                  </div>
                  <div className="space-y-2 text-gray-700">
                    <p>보험분쟁 / 보험 강의 전문</p>
                    <p>상속 자산승계 관련 컨설팅 전문</p>
                    <p>개인회생 전문</p>
                    <p>민사소송, 형사변론</p>
                    <p>가사사건, 산업재해</p>
                    <p>노동분쟁</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-law-navy mb-4">자격 및 면허</h3>
                <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                  <div>
                    <p>• 변호사 자격 (2015년)</p>
                    <p>• 대한변호사협회 회원</p>
                  </div>
                  <div>
                    <p>• 서울지방변호사회 회원</p>
                    <p>• 관악구청 법률상담 변호사</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-law-navy mb-4">주요 활동</h3>
                <div className="space-y-3 text-gray-700">
                  <p>• 관악구 법률지원 사업 참여</p>
                  <p>• 신림동 상권활성화 법률자문</p>
                  <p>• 관악구 주민센터 정기 법률상담</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <img
                  src="https://i.imgur.com/wDmIOZz.jpg"
                  alt="송재원 이사"
                  className="w-40 h-40 rounded-full mx-auto mb-6 object-cover shadow-lg"
                />
                <h2 className="text-3xl font-bold text-law-navy mb-2">송재원</h2>
                <p className="text-law-gold font-semibold text-xl mb-6">이사</p>
                <div className="mt-8 pt-8 border-t border-gray-200 bg-law-light rounded-lg p-6">
                <h3 className="text-lg font-semibold text-law-navy mb-4">송재원 이사의 말</h3>
                <blockquote className="text-gray-700 italic text-center">
                  "정확한 평가, 공정한 보상, 의뢰인 중심의
                  권리를 지키는 일입니다."
                </blockquote>
              </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start mb-4">
                    <GraduationCap className="h-6 w-6 text-law-gold mr-3" />
                    <h3 className="text-lg font-semibold text-law-navy">학력</h3>
                  </div>
                  <div className="space-y-2 text-gray-700">
                    <p>국민대학교 법무대학 손해사정 전공 졸업</p>
                    <p>논문저서)</p>
                    <p>: 2016년 손해사정 실무상 자살보험금의 연구-대법원 판례를 중심으로</p>
                  </div>
                </div>

                <div className="text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start mb-4">
                    <Briefcase className="h-6 w-6 text-law-gold mr-3" />
                    <h3 className="text-lg font-semibold text-law-navy">경력</h3>
                  </div>
                  <div className="space-y-2 text-gray-700">
                    <p>현대해상 보상심사 파트장</p>
                    <p>법무법인(이루) 보험법률팀장</p>
                    <p>한율로펌 이사</p>
                    <p>(주)FM손해사정 대표</p>
                    <p>(주)FM에셋 손해사정 총괄대표</p>
                    <p>(주)GA코리아 Fn Asset 지점장</p>
                    <p>(주)피플라이프 한강지점 지점장</p>
                  </div>
                </div>

                <div className="text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start mb-4">
                    <Star className="h-6 w-6 text-law-gold mr-3" />
                    <h3 className="text-lg font-semibold text-law-navy">전문분야</h3>
                  </div>
                  <div className="space-y-2 text-gray-700">
                    <p>*보험사건 전문</p>
                    <p>*산재사건 전문</p>
                    <p>*국가손해배상(국가장애)보험 전문</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
