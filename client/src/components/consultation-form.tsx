import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useConsultation } from "@/hooks/use-consultation";
import { Link } from "wouter";

const formSchema = z.object({
  name: z.string().min(2, "성명을 입력해 주세요."),
  phone: z.string().min(10, "올바른 연락처를 입력해 주세요."),
  email: z.string().email("올바른 이메일을 입력해 주세요.").optional().or(z.literal("")),
  practiceArea: z.string().min(1, "상담 분야를 선택해 주세요."),
  content: z.string().min(10, "상담 내용을 자세히 입력해 주세요."),
  privacyAgreed: z.boolean().refine((val) => val === true, {
    message: "개인정보 수집 및 이용에 동의해 주세요.",
  }),
});

type FormData = z.infer<typeof formSchema>;

interface ConsultationFormProps {
  onSuccess?: () => void;
}

export default function ConsultationForm({ onSuccess }: ConsultationFormProps) {
  const { submitConsultation, isLoading } = useConsultation();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      practiceArea: "",
      content: "",
      privacyAgreed: false,
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      await submitConsultation(data);
      form.reset();
      onSuccess?.();
    } catch (error) {
      // Error handling is done in the hook
    }
  };

  const practiceAreas = [
    "민사소송",
    "형사변론",
    "보험분쟁",
    "가사사건",
    "산업재해",
    "노동분쟁",
    "회생/파산",
    "기타",
  ];

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
      <h3 className="text-2xl font-bold text-law-navy mb-6 text-center">
        온라인 상담 신청
      </h3>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-semibold text-gray-700">
                    성명 *
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="홍길동" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-semibold text-gray-700">
                    연락처 *
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="010-1234-5678" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-semibold text-gray-700">
                  이메일
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="example@email.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="practiceArea"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-semibold text-gray-700">
                  상담 분야 *
                </FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="상담 분야를 선택해 주세요" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {practiceAreas.map((area) => (
                      <SelectItem key={area} value={area}>
                        {area}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-semibold text-gray-700">
                  상담 내용 *
                </FormLabel>
                <FormControl>
                  <Textarea
                    rows={5}
                    placeholder="상담하고 싶은 내용을 자세히 적어주세요."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="privacyAgreed"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-sm text-gray-600">
                    개인정보 수집 및 이용에 동의합니다.{" "}
                    <a
                      href="/privacy"
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()} // 🔴 이벤트 전파 차단
                      className="text-law-navy underline"
                    >
                      자세히 보기
                    </a>
                    {/* <Link href="/privacy" className="text-law-navy underline">
                      자세히 보기
                    </Link> */}
                  </FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 hover:bg-blue-800 text-white py-4 rounded-lg font-semibold text-lg"
          >
            {isLoading ? "접수 중..." : "상담 신청하기"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
