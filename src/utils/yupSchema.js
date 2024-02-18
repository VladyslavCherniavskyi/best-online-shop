import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .required('Поле обовʼязкове до заповнення')
    .min(6, 'Будь ласка, введіть дійсну адресу електронної пошти.')
    .max(63, 'Будь ласка, введіть дійсну адресу електронної пошти.')
    .matches(
      /^[a-zA-Z0-9_][a-zA-Z0-9_.-]*@[a-zA-Z0-9.-]+[a-zA-Z0-9-]*\.[a-zA-Z]{2,4}$/,
      'Будь ласка, введіть дійсну адресу електронної пошти.'
    ),
  password: Yup.string()
    .trim()
    .required("Пароль є обов'язковим полем")
    .min(8, 'Пароль має містити як мінімум 8 символів')
    .max(1000, 'Перевищена максимальна кількість')
    .matches(
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!]).{8,}$/,
      'Пароль повинен відповідати вимогам безпеки'
    ),
});
export const registerSchema = Yup.object().shape({
  firstName: Yup.string()
    .trim()
    .required('Поле обовʼязкове до заповнення')
    .min(3, 'Поле має містити як мінімум 3 символи')
    .max(70, 'Перевищена максимальна кількість'),
  lastName: Yup.string()
    .trim()
    .required('Поле обовʼязкове до заповнення')
    .min(3, 'Поле має містити як мінімум 3 символи')
    .max(70, 'Перевищена максимальна кількість'),
  address: Yup.string()
    .trim()
    .required('Поле обовʼязкове до заповнення')
    .min(3, 'Поле має містити як мінімум 3 символи')
    .max(70, 'Перевищена максимальна кількість'),
  phone: Yup.string()
    .trim()
    .required('Поле телефону обовʼязкове до заповнення')
    .min(10, 'Поле має містити як мінімум 10 символів')
    .max(17, 'Перевищена максимальна кількість'),
  email: Yup.string()
    .trim()
    .required('Поле обовʼязкове до заповнення')
    .min(6, 'Будь ласка, введіть дійсну адресу електронної пошти.')
    .max(63, 'Використані некоректні символи')
    .matches(
      /^[a-zA-Z0-9_][a-zA-Z0-9_.-]*@[a-zA-Z0-9.-]+[a-zA-Z0-9-]*\.[a-zA-Z]{2,4}$/,
      'Будь ласка, введіть дійсну адресу електронної пошти.'
    ),
  password: Yup.string()
    .trim()
    .required("Пароль є обов'язковим полем")
    .min(8, 'Пароль має містити як мінімум 8 символів')
    .max(1000, 'Перевищена максимальна кількість')
    .matches(
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!]).{8,}$/,
      'Використані некоректні символи'
    ),
  repeatPassword: Yup.string()
    .trim()
    .required("Пароль є обов'язковим полем")
    .min(8, 'Пароль має містити як мінімум 8 символів')
    .max(1000, 'Перевищена максимальна кількість'),
});