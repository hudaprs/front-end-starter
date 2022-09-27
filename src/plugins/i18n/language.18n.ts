// Constant
import { APP_LANGUAGE } from '@/features/app/constant/app.constant'

// App
import appEn from '@/features/app/locale/app.en.locale.json'
import appId from '@/features/app/locale/app.id.locale.json'

// Auth
import authEn from '@/features/auth/locale/auth.en.locale.json'
import authId from '@/features/auth/locale/auth.id.locale.json'

// Todo
import todoEn from '@/features/todo/locale/todo.en.locale.json'
import todoId from '@/features/todo/locale/todo.id.locale.json'

const language = {
  [APP_LANGUAGE.EN]: {
    translation: {
      ...appEn,
      ...authEn,
      ...todoEn
    }
  },
  [APP_LANGUAGE.ID]: {
    translation: {
      ...appId,
      ...authId,
      ...todoId
    }
  }
}

export { language }
