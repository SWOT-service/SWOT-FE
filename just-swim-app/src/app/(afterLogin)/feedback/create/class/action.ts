'use server';

import { formSchema } from '@/_schema/index';

// 혜빈 - action 하나로 합치기
export async function submitForm(formData: FormData) {
  const data = {
    target: formData.get('target'),
    date: formData.get('date'),
    file: formData.get('file'),
    link: formData.get('link'),
    content: formData.get('content'),
  };

  const result = formSchema.safeParse(data);

  if (!result.success) {
    return { success: false, errors: result.error.flatten() };
  } else {
    return { success: true };
  }
}
