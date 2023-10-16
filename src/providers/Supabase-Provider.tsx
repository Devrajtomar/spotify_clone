"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useState } from "react";

import React from "react";
import { Database } from "../../types_db";
interface props {
  children: React.ReactNode;
}

export const SupabaseProvider: React.FC<props> = ({ children }) => {
  const [supabase] = useState(() => createClientComponentClient<Database>());
  return (
    <SessionContextProvider supabaseClient={supabase}>
      {children}
    </SessionContextProvider>
  );
};
