import { Card, CardContent } from "@/components/ui/card";

export default function Privacy() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-law-navy mb-4">
            개인정보처리방침
          </h1>
          <p className="text-xl text-gray-600">
            빛솔 법률사무소는 개인정보보호를 위해 최선을 다하고 있습니다
          </p>
        </div>

        <Card className="border-none shadow-lg">
          <CardContent className="p-8 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-law-navy mb-4">
                1. 개인정보의 처리 목적
              </h2>
              <p className="text-gray-700 leading-relaxed">
                빛솔 법률사무소는 다음의 목적을 위하여 개인정보를 처리하고 있으며, 
                다음의 목적 이외의 용도로는 이용하지 않습니다.
              </p>
              <ul className="mt-3 space-y-2 text-gray-700 ml-4">
                <li>• 법률상담 서비스 제공</li>
                <li>• 상담 예약 및 일정 관리</li>
                <li>• 법률 서비스 관련 연락 및 안내</li>
                <li>• 사건 진행 상황 안내</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-law-navy mb-4">
                2. 개인정보의 처리 및 보유 기간
              </h2>
              <p className="text-gray-700 leading-relaxed">
                빛솔 법률사무소는 정보주체로부터 개인정보를 수집할 때 동의 받은 
                개인정보 보유·이용기간 또는 법령에 따른 개인정보 보유·이용기간 내에서 
                개인정보를 처리·보유합니다.
              </p>
              <ul className="mt-3 space-y-2 text-gray-700 ml-4">
                <li>• 상담 신청 정보: 상담 완료 후 3년</li>
                <li>• 사건 수임 정보: 사건 종료 후 5년</li>
                <li>• 이메일 문의: 문의 처리 후 1년</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-law-navy mb-4">
                3. 처리하는 개인정보의 항목
              </h2>
              <p className="text-gray-700 leading-relaxed">
                빛솔 법률사무소는 다음의 개인정보 항목을 처리하고 있습니다.
              </p>
              <div className="mt-3">
                <h4 className="font-semibold text-law-navy">상담 신청시</h4>
                <ul className="space-y-1 text-gray-700 ml-4">
                  <li>• 필수항목: 성명, 연락처, 상담내용</li>
                  <li>• 선택항목: 이메일</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-law-navy mb-4">
                4. 개인정보의 제3자 제공
              </h2>
              <p className="text-gray-700 leading-relaxed">
                빛솔 법률사무소는 정보주체의 동의, 법률의 특별한 규정 등 
                개인정보 보호법 제17조 및 제18조에 해당하는 경우에만 개인정보를 
                제3자에게 제공합니다.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-law-navy mb-4">
                5. 개인정보처리의 위탁
              </h2>
              <p className="text-gray-700 leading-relaxed">
                빛솔 법률사무소는 개인정보 처리업무를 외부에 위탁하지 않습니다. 
                향후 위탁이 필요한 경우, 위탁업체 및 위탁업무 내용에 대해 
                홈페이지를 통해 공개하겠습니다.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-law-navy mb-4">
                6. 정보주체의 권리·의무 및 행사방법
              </h2>
              <p className="text-gray-700 leading-relaxed">
                정보주체는 빛솔 법률사무소에 대해 언제든지 다음 각 호의 
                개인정보 보호 관련 권리를 행사할 수 있습니다.
              </p>
              <ul className="mt-3 space-y-2 text-gray-700 ml-4">
                <li>• 개인정보 처리현황 통지요구</li>
                <li>• 개인정보 처리정지 요구</li>
                <li>• 개인정보의 정정·삭제 요구</li>
                <li>• 손해배상 청구</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-law-navy mb-4">
                7. 개인정보의 안전성 확보조치
              </h2>
              <p className="text-gray-700 leading-relaxed">
                빛솔 법률사무소는 개인정보보호법 제29조에 따라 다음과 같이 
                안전성 확보에 필요한 기술적/관리적 및 물리적 조치를 하고 있습니다.
              </p>
              <ul className="mt-3 space-y-2 text-gray-700 ml-4">
                <li>• 개인정보 취급 직원의 최소화 및 교육</li>
                <li>• 개인정보에 대한 접근 제한</li>
                <li>• 개인정보의 암호화</li>
                <li>• 접속기록의 보관 및 위변조 방지</li>
              </ul>
            </div>

            <div className="bg-law-light p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-law-navy mb-4">
                8. 개인정보 보호책임자
              </h2>
              <div className="text-gray-700">
                <p className="font-semibold">정민환 대표변호사</p>
                <p>전화: 02-858-8638</p>
                <p>이메일: bitsollaw@gmail.com</p>
                <p className="mt-2 text-sm">
                  개인정보 처리에 관한 업무를 총괄해서 책임지고, 
                  개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 
                  위하여 개인정보 보호책임자를 지정하고 있습니다.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-law-navy mb-4">
                9. 개인정보처리방침 변경
              </h2>
              <p className="text-gray-700 leading-relaxed">
                이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 
                변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 
                7일 전부터 공지사항을 통하여 고지할 것입니다.
              </p>
              <p className="mt-3 text-sm text-gray-600">
                본 방침은 2024년 1월 1일부터 시행됩니다.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
