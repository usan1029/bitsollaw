import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

interface ConsultationData {
  name: string;
  phone: string;
  email?: string;
  practiceArea: string;
  content: string;
  privacyAgreed: boolean;
}

export function useConsultation() {
  const { toast } = useToast();

  const submitConsultation = useMutation({
    mutationFn: async (data: ConsultationData) => {
      const response = await apiRequest("POST", "/api/consultations", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "상담 신청 완료",
        description: data.message || "상담 신청이 성공적으로 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "상담 신청 실패",
        description: error.message || "상담 신청 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.",
        variant: "destructive",
      });
    },
  });

  return {
    submitConsultation: submitConsultation.mutate,
    isLoading: submitConsultation.isPending,
  };
}
