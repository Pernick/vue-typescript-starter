export interface User {
  uid: string
  name: string
  email: string
  role: UserRole
}

export type UserRole = 'admin' | 'developer' | 'guest'
