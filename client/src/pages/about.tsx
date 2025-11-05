import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-law-navy mb-4">
            빛솔 법률사무소 소개
          </h1>
          <p className="text-xl text-black">
            신뢰할 수 있는 법률 파트너
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center mb-16">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-law-navy mb-6">
              대표변호사 인사말
            </h2>
            <div className="space-y-6 text-lg text-black leading-relaxed">
              <p>안녕하십니까. 빛솔 법률사무소 대표변호사 정민환입니다.</p>
              <p>
                저는 관악구·금천구·구로구에서 30년 이상 거주하며 이 지역의 특성과 주민분들의 고민을 깊이
                이해하고 있습니다. 법률 문제로 어려움을 겪고 계신 분들에게 실질적이고
                효과적인 해결책을 제시하는 것이 저의 사명입니다.
              </p>
              <p>
                모든 상담은 대표변호사인 제가 직접 진행하며, 각 사건의 특성에 맞는
                맞춤형 법률 서비스를 제공하겠습니다. 여러분의 소중한 권익 보호를 위해
                최선을 다하겠습니다.
              </p>
              <div className="pt-4">
                <p className="font-semibold text-law-navy">
                  빛솔 법률사무소 대표변호사 정민환
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 lg:mt-0">
            <img
              src="https://i.imgur.com/4EWwFul.jpg"
              alt="Professional lawyer in office"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-law-navy mb-4">
                사무소 운영 원칙
              </h3>
              <ul className="space-y-3 text-black">
                <li>• 대표변호사 직접 상담</li>
                <li>• 투명한 수임료 안내</li>
                <li>• 신속한 사건 처리</li>
                <li>• 고객 중심 서비스</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-law-navy mb-4">
                지역 전문성
              </h3>
              <ul className="space-y-3 text-black">
                <li>• 관악구·금천구·구로구 30년 이상 거주 경험</li>
                <li>• 지역 특성 깊이 이해</li>
                <li>• 다양한 법원 출입 경험</li>
                <li>• 지역 주민과의 신뢰</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg md:col-span-2 lg:col-span-1">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-law-navy mb-4">
                상담 특징
              </h3>
              <ul className="space-y-3 text-black">
                <li>• 다양한 상담 채널</li>
                <li>• 평일 야간 상담 가능</li>
                <li>• 주말 상담 가능</li>
                <li>• 사건 수임 시 상담 무료</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
