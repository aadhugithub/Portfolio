"use client";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabaseClient";
import { Button } from "@/components/ui/button";

const supabase = createClient();

export default function DashboardPage() {
  return (
    <section className="p-8">
      <h2 className="text-2xl font-semibold mb-2">Dashboard Overview</h2>
      <p className="text-sm text-gray-500">
        Quick stats and recent updates will appear here.
      </p>
    </section>
  );
}
