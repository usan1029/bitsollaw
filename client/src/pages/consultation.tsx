import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageCircle } from "lucide-react";
import ConsultationForm from "@/components/consultation-form";

export default function Consultation() {
  // global variable
  const isReady = false;

  const handleKakaoTalk = () => {
    

    if(isReady) { // window.open is only called if isReady is true
      // Open KakaoTalk Link in to a new tab
      alert("카카오톡 상담 기능이 곧 추가됩니다. 현재는 전화 상담을 이용해 주세요.");
    }
    else{
      window.open("http://pf.kakao.com/_IDxfrn", "_blank");
    }
  };

  return (
    <div className="py-20 bg-law-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-law-navy mb-4">
            상담신청
          </h1>
          <p className="text-xl text-gray-600">
            편리한 방법으로 전문 법률 상담을 받아보세요
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="border-none shadow-lg text-center">
            <CardContent className="p-8">
              <div className="w-20 h-20 bg-law-navy text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold text-law-navy mb-4">전화 상담</h3>
              <p className="text-gray-600 mb-6">즉시 상담이 가능한 전화 연결</p>
              <a href="tel:02-858-8638">
                <Button className="bg-blue-600 hover:bg-blue-800 text-white px-6 py-3">
                  02-858-8638
                </Button>
              </a>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg text-center">
            <CardContent className="p-8">
              <div className="w-20 h-20 bg-law-gold text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold text-law-navy mb-4">카카오톡 상담</h3>
              <p className="text-gray-600 mb-6">편리한 메신저 상담</p>
              <Button
                onClick={handleKakaoTalk}
                className="bg-yellow-600 hover:bg-yellow-600 text-white px-6 py-3"
              >
                카톡 상담하기
              </Button>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg text-center">
            <CardContent className="p-8">
              <div className="w-20 h-20 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold text-law-navy mb-4">이메일 상담</h3>
              <p className="text-gray-600 mb-6">자세한 내용 문의</p>
              <a href="mailto:bitsollaw@gmail.com">
                <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3">
                  이메일 보내기
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>

        <ConsultationForm />

        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-law-navy mb-6 text-center">
            상담 안내사항
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-law-navy mb-4">상담 시간</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• 평일: 09:00 - 18:00</li>
                <li>• 일요일 및 공휴일: 휴무</li>
                <li>• 긴급시 야간 상담 가능 (사전 예약)</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-law-navy mb-4">상담 방식</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• 초회 상담 무료 (30분)</li>
                <li>• 전화, 방문, 온라인 상담 가능</li>
                <li>• 대표변호사 직접 상담</li>
                <li>• 상담 후 수임 여부 결정</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
