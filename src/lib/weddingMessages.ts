export interface WeddingMessage {
  id: string;
  name: string;
  message: string;
  createdAt: string;
}

interface SupabaseMessageRow {
  id: string;
  name: string;
  message: string;
  created_at: string;
}

const STORAGE_KEY = "wedding-messages";
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;
const SUPABASE_TABLE = "wedding_messages";

export const hasSharedMessageStore = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);

const mapRowToMessage = (row: SupabaseMessageRow): WeddingMessage => ({
  id: row.id,
  name: row.name,
  message: row.message,
  createdAt: row.created_at,
});

const localMessages = {
  list: (): WeddingMessage[] => {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]") as WeddingMessage[];
    return stored.map((message, index) => ({
      ...message,
      id: message.id || `${message.createdAt}-${index}`,
    }));
  },
  create: (message: Omit<WeddingMessage, "id" | "createdAt">): WeddingMessage => {
    const newMessage: WeddingMessage = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      ...message,
    };
    const updated = [newMessage, ...localMessages.list()];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return newMessage;
  },
};

const supabaseHeaders = () => ({
  apikey: SUPABASE_ANON_KEY || "",
  Authorization: `Bearer ${SUPABASE_ANON_KEY || ""}`,
  "Content-Type": "application/json",
});

export const listWeddingMessages = async (): Promise<WeddingMessage[]> => {
  if (!hasSharedMessageStore) return localMessages.list();

  const response = await fetch(
    `${SUPABASE_URL}/rest/v1/${SUPABASE_TABLE}?select=id,name,message,created_at&order=created_at.desc`,
    { headers: supabaseHeaders() },
  );

  if (!response.ok) throw new Error("Nao foi possivel carregar as mensagens.");

  const rows = (await response.json()) as SupabaseMessageRow[];
  return rows.map(mapRowToMessage);
};

export const createWeddingMessage = async (
  message: Omit<WeddingMessage, "id" | "createdAt">,
): Promise<WeddingMessage> => {
  if (!hasSharedMessageStore) return localMessages.create(message);

  const response = await fetch(`${SUPABASE_URL}/rest/v1/${SUPABASE_TABLE}?select=id,name,message,created_at`, {
    method: "POST",
    headers: {
      ...supabaseHeaders(),
      Prefer: "return=representation",
    },
    body: JSON.stringify({
      name: message.name,
      message: message.message,
    }),
  });

  if (!response.ok) throw new Error("Nao foi possivel enviar a mensagem.");

  const rows = (await response.json()) as SupabaseMessageRow[];
  return mapRowToMessage(rows[0]);
};
