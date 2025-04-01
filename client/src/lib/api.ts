import { apiRequest } from "./queryClient";

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export const submitContactForm = async (data: ContactFormData) => {
  try {
    const response = await apiRequest("POST", "/api/contact", data);
    return response.json();
  } catch (error) {
    console.error("Error submitting contact form:", error);
    throw error;
  }
};
