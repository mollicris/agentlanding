const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

export const DASHBOARD_URL = import.meta.env.VITE_DASHBOARD_URL || "http://localhost:5173";

export interface RegisterTenantRequest {
  name: string;
  admin_email: string;
  admin_password: string;
  industry: string;
  desired_slug?: string;
}

export interface RegisterTenantResponse {
  success: boolean;
  message: string;
  code: string;
  data: {
    tenant_id: string;
    slug: string;
    verification_sent_to: string;
  };
}

export interface VerifyEmailResponse {
  success: boolean;
  message: string;
  code: string;
  data: {
    tenant_id: string;
    slug: string;
    admin_email: string;
  };
}

export interface ApiError {
  message: string;
  code?: string;
  field?: string;
}

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const error: ApiError = {
      message: data?.message || data?.detail || "Ocurrió un error inesperado",
      code: data?.code,
    };
    throw error;
  }

  return data as T;
}

export const onboardingApi = {
  register: (payload: RegisterTenantRequest) =>
    request<RegisterTenantResponse>("/api/v1/onboarding/register", {
      method: "POST",
      body: JSON.stringify(payload),
    }),

  verifyEmail: (token: string) =>
    request<VerifyEmailResponse>(`/api/v1/onboarding/verify/${encodeURIComponent(token)}`, {
      method: "POST",
    }),
};
