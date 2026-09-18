"use client";

import { useState } from "react";
import Image from "next/image";
import { CASE_STUDIES, CaseStudy } from "@/data/agencyData";
import CaseStudyModal from "./CaseStudyModal";
import { ArrowUpRight, TrendingUp, FolderGit2 } from "lucide-react";

interface PortfolioSectionProps {
  onRequestQuoteWithContext?: (context: string) => void;
}

export default function PortfolioSection({ onRequestQuoteWithContext }: PortfolioSectionProps) {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 xl:px-14 max-w-[1550px] mx-auto space-y-10 scroll-mt-20" id="works">



    </section>
  );
}
