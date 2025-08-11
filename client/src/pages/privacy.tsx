import { Card, CardContent } from "@/components/ui/card";

export default function Privacy() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-law-navy mb-4">
            개인정보 수집·이용 동의서
          </h1>
        </div>

        <Card className="border-none shadow-lg">
          <CardContent className="p-8 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-law-navy mb-4">
                1. 수집·이용 목적
              </h2>
              <p className="text-gray-700 leading-relaxed">
                본 동의서는 귀하가 본 법률사무소에 사건을 위임함에 있어,
                관련 법률서비스 제공을 위해 필요한 개인정보 수집·이용에 대한
                동의를 받기 위한 것입니다.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-law-navy mb-4">
                2. 수집하는 개인정보 항목
              </h2>
              <ul className="mt-3 space-y-2 text-gray-700 ml-4">
                <li>• 일반정보: 성명, 주민등록번호, 주소, 연락처(전화번호, 이메일 등)</li>
                <li>• 사건 관련 정보: 사건 경위, 상대방 정보, 관련 증빙자료 등</li>
                <li>• 민감정보(해당 시): 건강정보, 범죄경력 등</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-law-navy mb-4">
                3. 수집·이용 목적
              </h2>
              <ul className="mt-3 space-y-2 text-gray-700 ml-4">
                <li>• 사건 위임 및 수임 계약 체결·이행</li>
                <li>• 법률자문 및 법률대리 업무 수행</li>
                <li>• 사무연락 및 문서 발송</li>
                <li>• 법령상 의무 이행 및 분쟁 대응</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-law-navy mb-4">
                4. 보유 및 이용기간
              </h2>
              <ul className="mt-3 space-y-2 text-gray-700 ml-4">
                <li>• 기본 보유기간: 사건 종료 후 5년</li>
                <li>• 관련 법령상 의무가 있는 경우 해당 기간</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-law-navy mb-4">
                5. 동의 거부 권리 및 불이익
              </h2>
              <p className="text-gray-700 leading-relaxed">
                귀하는 개인정보 수집·이용에 동의하지 않을 권리가 있으며,
                다만 동의하지 않을 경우 법률서비스 제공에 제한이 있을 수 있습니다.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
