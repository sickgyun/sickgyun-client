type LocalStorageKey = 'siac' | 'sirf';
export class LocalStorage {
  static getItem(key: LocalStorageKey) {
    return typeof window !== 'undefined' ? localStorage.getItem(key) : null;
  }

  static setItem(key: LocalStorageKey, value: string) {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, value);
    }
  }
}

type SessionStorageKey = 'siuat';
export class SessionStorage {
  static getItem(key: SessionStorageKey) {
    return typeof window !== 'undefined' ? sessionStorage.getItem(key) : null;
  }

  static setItem(key: SessionStorageKey, value: string) {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem(key, value);
    }
  }
}
