import { Link } from "wouter";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-law-navy text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">빛솔 법률사무소</h3>
            <p className="text-gray-300 mb-4">
              관악구 30년 경험의 신뢰할 수 있는 법률 파트너
            </p>
            <div className="flex space-x-4">
              <a
                href="tel:02-858-8638"
                className="text-law-gold hover:text-yellow-300 transition-colors"
              >
                <Phone className="h-5 w-5" />
              </a>
              <a
                href="mailto:bitsollaw@gmail.com"
                className="text-law-gold hover:text-yellow-300 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">빠른 링크</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  사무소 소개
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-white transition-colors">
                  구성원 소개
                </Link>
              </li>
              <li>
                <Link href="/practice-areas" className="hover:text-white transition-colors">
                  업무분야
                </Link>
              </li>
              <li>
                <Link href="/consultation" className="hover:text-white transition-colors">
                  상담신청
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  개인정보처리방침
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">연락처 정보</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                <span>서울시 관악구 신림로58길 13, S-빌딩 603호</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <a href="tel:02-858-8638" className="hover:text-white">
                  02-858-8638
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto:bitsollaw@gmail.com" className="hover:text-white">
                  bitsollaw@gmail.com
                </a>
              </div>
              <div className="flex items-start">
                <Clock className="h-4 w-4 mr-2 mt-0.5" />
                <div>
                  <div>평일 09:00-18:00</div>
                  <div>토요일 09:00-13:00</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {currentYear} 빛솔 법률사무소. All rights reserved.</p>
          <p className="text-sm mt-2">
            사업자등록번호: 123-45-67890 | 대표변호사: 정민환
          </p>
        </div>
      </div>
    </footer>
  );
}
