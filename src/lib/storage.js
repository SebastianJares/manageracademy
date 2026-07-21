const STORAGE_KEY = 'manager-academy-profile-v1';

const emptyState = {
  identity: { name: '', role: '' },
  answers: {},
  attempts: [],
  currentSection: 0,
  currentQuestion: 0,
};

export const loadState = () => {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved ? { ...emptyState, ...JSON.parse(saved) } : structuredClone(emptyState);
  } catch {
    return structuredClone(emptyState);
  }
};

export const saveState = (state) => {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // The assessment still works when storage is unavailable.
  }
};

export const clearState = () => {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // No-op when storage is unavailable.
  }
};

export const exportState = (state) => {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `manazersky-profil-${new Date().toISOString().slice(0, 10)}.json`;
  link.click();
  URL.revokeObjectURL(url);
};

