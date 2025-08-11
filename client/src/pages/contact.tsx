import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";

export default function Contact() {
  const openMap = () => {
    window.open(
      "https://i.imgur.com/wwCjIcv.jpg",
      "_blank"
    );
  };

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-law-navy mb-4">
            찾아오시는 길
          </h1>
          <p className="text-xl text-gray-600">
            관악구에 위치한 저희 사무소로 언제든 방문해 주세요
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-law-navy mb-6">연락처 정보</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-law-gold mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-law-navy mb-1">주소</p>
                      <p className="text-gray-700">
                        서울특별시 관악구 신림로58길 13, S-빌딩 603호
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-law-gold mr-4 mt-1" />
                    <div>
                      <p className="font-semibold text-law-navy mb-1">전화번호</p>
                      <a href="tel:02-858-8638" className="text-gray-700 hover:text-law-navy">
                        02-858-8638
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-law-gold mr-4 mt-1" />
                    <div>
                      <p className="font-semibold text-law-navy mb-1">이메일</p>
                      <a href="mailto:bitsollaw@gmail.com" className="text-gray-700 hover:text-law-navy">
                        bitsollaw@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-law-gold mr-4 mt-1" />
                    <div>
                      <p className="font-semibold text-law-navy mb-1">운영시간</p>
                      <div className="text-gray-700 space-y-1">
                        <p>평일 09:00 - 18:00</p>
                        <p className="text-sm">(일요일 및 공휴일 휴무)</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-law-navy mb-3">대중교통 이용</h4>
                  <div className="space-y-3 text-gray-700">
                    <div className="flex items-start">
                      <Navigation className="h-4 w-4 mr-2 mt-1 text-law-gold" />
                      <div>
                        <p className="font-medium">지하철</p>
                        <p className="text-sm">2호선 신림역 2번 출구 도보 5분</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Navigation className="h-4 w-4 mr-2 mt-1 text-law-gold" />
                      <div>
                        <p className="font-medium">버스</p>
                        <p className="text-sm">신림역 정류장 하차</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Office building exterior"
              className="rounded-xl shadow-lg w-full h-auto mb-6"
            />

            <Card className="border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <p className="text-gray-600 mb-4">정확한 위치는 지도를 참고해 주세요</p>
                <Button
                  onClick={openMap}
                  className="bg-law-navy hover:bg-blue-800 text-white"
                >
                  <MapPin className="mr-2 h-4 w-4" />
                  지도에서 보기
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg mt-6">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-law-navy mb-4">주차 안내</h4>
                <div className="space-y-2 text-gray-700">
                  <p>• 빌딩 지하 주차장 이용 가능</p>
                  <p>• 방문 시 주차 할인 제공</p>
                  <p>• 근처 공영주차장 이용 가능</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16 bg-law-light rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-law-navy mb-4">방문 예약 안내</h3>
          <p className="text-gray-600 mb-6">
            효율적인 상담을 위해 방문 전 미리 연락주시면 감사하겠습니다.
            대표변호사와의 상담 일정을 조율해 드리겠습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:02-858-8638">
              <Button className="bg-law-navy hover:bg-blue-800">
                <Phone className="mr-2 h-4 w-4" />
                전화 예약
              </Button>
            </a>
            <a href="mailto:bitsollaw@gmail.com">
              <Button variant="outline" className="border-law-navy text-law-navy hover:bg-law-navy hover:text-white">
                <Mail className="mr-2 h-4 w-4" />
                이메일 예약
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
