import { Card, CardContent } from "@/components/ui/card";
import { 
  Gavel, 
  Shield, 
  Car, 
  Heart, 
  HardHat, 
  Users, 
  TrendingUp, 
  Plus 
} from "lucide-react";

const practiceAreas = [
  {
    title: "민사소송",
    icon: Gavel,
    description: "계약분쟁, 손해배상, 부동산 분쟁 등 민사 전반",
    details: [
      "계약 위반 및 손해배상",
      "부동산 매매 분쟁",
      "임대차 분쟁",
      "금전 대여 및 채권 회수",
      "명예훼손 및 정신적 피해",
    ],
  },
  {
    title: "형사변론",
    icon: Shield,
    description: "폭행, 절도, 사기 등 형사사건 전문 변론",
    details: [
      "폭행, 상해 사건",
      "절도, 사기 사건",
      "교통사고 형사 처리",
      "성범죄 변론",
      "경제범죄 대응",
    ],
  },
  {
    title: "보험분쟁",
    icon: Car,
    description: "자동차보험, 실손보험 등 보험금 분쟁",
    details: [
      "자동차보험 분쟁",
      "실손의료보험 분쟁",
      "생명보험 분쟁",
      "화재보험 분쟁",
      "보험금 지급 거절 대응",
    ],
  },
  {
    title: "가사사건",
    icon: Heart,
    description: "이혼, 양육권, 재산분할 등 가족 관련 법률",
    details: [
      "협의이혼 및 조정이혼",
      "재산분할 및 위자료",
      "양육권 및 면접교섭권",
      "혼인무효 및 취소",
      "상속 및 유언",
    ],
  },
  {
    title: "산업재해",
    icon: HardHat,
    description: "산재보상, 업무상 재해 인정 및 배상",
    details: [
      "산재 신청 및 이의제기",
      "업무상 질병 인정",
      "산재 장해등급 이의신청",
      "산재 민사소송",
      "직업성 질환 대응",
    ],
  },
  {
    title: "노동분쟁",
    icon: Users,
    description: "부당해고, 임금체불, 직장 내 괴롭힘",
    details: [
      "부당해고 구제신청",
      "임금 및 퇴직금 체불",
      "직장 내 괴롭힘 대응",
      "근로조건 분쟁",
      "집단분쟁 해결",
    ],
  },
  {
    title: "회생/파산",
    icon: TrendingUp,
    description: "개인회생, 기업회생, 파산 절차",
    details: [
      "개인회생 신청",
      "기업회생 절차",
      "파산신청 및 면책",
      "채무조정",
      "워크아웃 및 구조조정",
    ],
  },
  {
    title: "기타분야",
    icon: Plus,
    description: "상속, 기업법무 등 다양한 법률 서비스",
    details: [
      "상속 및 유류분",
      "기업법무 자문",
      "부동산 거래",
      "지적재산권",
      "행정소송",
    ],
  },
];

export default function PracticeAreas() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-law-navy mb-4">
            업무분야
          </h1>
          <p className="text-xl text-gray-600">
            다양한 법률 분야에서 전문적인 서비스를 제공합니다
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {practiceAreas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <Card
                key={index}
                className="border border-gray-200 hover:border-law-navy hover:shadow-lg transition-all duration-300 bg-law-light hover:bg-white"
              >
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-law-navy text-white rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-law-navy mb-3">
                      {area.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{area.description}</p>
                  </div>
                  <div className="text-left">
                    <h4 className="font-medium text-law-navy mb-2">주요 업무:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      {area.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <span className="w-1 h-1 bg-law-gold rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 bg-law-light rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-law-navy mb-4">
            전문 분야 외에도 다양한 법률 상담이 가능합니다
          </h2>
          <p className="text-gray-600 mb-6">
            위에 명시되지 않은 법률 문제도 언제든 상담해 주세요. 
            전문적인 법률 자문을 통해 최적의 해결방안을 제시해 드립니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:02-858-8638" className="text-law-navy font-semibold">
              📞 02-858-8638
            </a>
            <a href="mailto:bitsollaw@gmail.com" className="text-law-navy font-semibold">
              ✉️ bitsollaw@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
