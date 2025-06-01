export const PREFERRED_STREAMS = [
  { value: "Science (PCM)", label: "Science (Physics, Chemistry, Math)" },
  { value: "Science (PCB)", label: "Science (Physics, Chemistry, Biology)" },
  { value: "Commerce", label: "Commerce" },
  { value: "Arts/Humanities", label: "Arts / Humanities" },
  { value: "Vocational", label: "Vocational" },
  { value: "Other", label: "Other" },
] as const;

export type PreferredStreamValue = typeof PREFERRED_STREAMS[number]['value'];
