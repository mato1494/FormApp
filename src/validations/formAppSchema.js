/* eslint-disable no-template-curly-in-string */

import * as yup from 'yup';

const safeTransform = transformFunction => value => (typeof value === 'string' ? transformFunction(value) : value);

const schema = yup.object({
  name: yup
    .string()
    .label('名前')
    .transform(safeTransform(value => value
      .normalize('NFKC')
      .replace(/\s+/g, ' ')
      .trim()
    ))
    .required('${label}は入力必須です')
    .max(20, '${label}は${max}文字以内で入力してください'),
  email: yup
    .string()
    .label('メールアドレス')
    .transform(safeTransform(value =>value
      .normalize('NFKC')
      .trim()
      .toLowerCase()
    ))
    .required('${label}は入力必須です')
    .email('${label}の形式が不正です'),
  title: yup
    .string()
    .label('件名')
    .transform(safeTransform(value => value
      .normalize('NFKC')
      .trim()
    ))
    .required('${label}は入力必須です')
    .max(50, '${label}は${max}文字以内で入力してください'),
  message: yup
    .string()
    .label('本文')
    .transform(safeTransform(value =>{
      const normalized = value.normalize('NFKC')
      .replace(/\r\n?/g, '\n')
      .replace(/[ \t]+$/gm, '');      return normalized;
    }))
    .test('not-blank', '${label}は入力必須です', value => !!value && value.trim().length > 0)
    .required('${label}は入力必須です')
    .min(10, '${label}は${min}文字以上で入力してください'),
  agreement: yup
    .boolean()
    .oneOf([true], 'プライバシーポリシーに同意してください'),
});

export default schema;