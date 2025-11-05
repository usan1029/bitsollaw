import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Calendar, MapPin, MessageCircle, UserCheck } from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-law-navy to-blue-800 text-white min-h-screen">
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
        <div
          style={{
            backgroundImage: "url('https://i.imgur.com/SudL3OT.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="absolute inset-0"
        ></div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="block">빛솔 법률사무소</span>
              <span className="block text-2xl md:text-3xl font-medium text-law-gold mt-2">
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-full mx-auto leading-relaxed">
              정민환 대표변호사가 직접 상담하는<br />
              <br className="sm:hidden" />
              전문적이고 신뢰할 수 있는 법률 서비스
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/consultation">
                <Button size="lg" className="bg-law-gold hover:bg-yellow-600 text-white px-8 py-4 text-lg">
                  <Calendar className="mr-2 h-5 w-5" />
                  상담 신청
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white hover:bg-white/10 hover:bg-white hover:text-law-navy text-black px-8 py-4 text-lg"
                onClick={() => (window.location.href = "tel:02-858-8638")}
              >
                <Phone className="mr-2 h-5 w-5" />
                02-858-8638
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-law-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-none shadow-lg">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-law-navy text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserCheck className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">대표변호사 직접 상담</h3>
                <p className="text-gray-600">
                  정민환 대표변호사가 <br/> 직접 상담부터 사건 처리까지 책임집니다
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-law-navy text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">관악구·금천구·구로구관악구 30년 이상 거주</h3>
                <p className="text-gray-600">
                  지역 특성을 깊이 이해하는 <br/> 관악구·금천구·구로구 전문 법무 서비스
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg">
              <CardContent className="pt-8 pb-6">
                <div className="w-20 h-16 bg-law-navy text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">다양한 상담 채널</h3>
                <p className="text-gray-600">
                  전화, 카카오톡, 이메일로 상담 진행<br/> 모바일 어플리케이션으로도 가능합니다.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-law-navy mb-6">
                대표변호사 인사말
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>안녕하십니까. 빛솔 법률사무소 대표변호사 정민환입니다.</p>
                <p>
                  저는 관악구·금천구·구로구에서 30년 이상 거주하며 이 지역의 특성과 주민분들의 고민을 깊이
                  이해하고 있습니다. 법률 문제로 어려움을 겪고 계신 분들에게 실질적이고
                  효과적인 해결책을 제시하는 것이 저의 사명입니다.
                </p>
                <p>
                  모든 상담은 대표변호사인 제가 직접 진행하며, 각 사건의 특성에 맞는 맞춤형
                  법률 서비스를 제공하겠습니다. 여러분의 소중한 권익 보호를 위해 최선을
                  다하겠습니다.
                </p>
                <div className="pt-4">
                  <p className="font-semibold text-law-navy">
                    빛솔 법률사무소 대표변호사 정민환
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <Link href="/about">
                  <Button className="bg-law-navy hover:bg-blue-800">
                    자세히 보기
                  </Button>
                </Link>
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
        </div>
      </section>

      {/* Quick Practice Areas */}
      <section className="py-16 bg-law-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-law-navy mb-8">주요 업무분야</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {["민사소송", "형사변론", "보험분쟁", "가사사건", "산업재해", "노동분쟁", "회생/파산", "기타분야"].map((area) => (
              <div
                key={area}
                className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow"
              >
                <p className="font-medium text-law-navy">{area}</p>
              </div>
            ))}
          </div>
          <Link href="/practice-areas">
            <Button variant="outline" className="border-law-navy text-law-navy hover:bg-law-navy hover:text-white">
              모든 업무분야 보기
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
